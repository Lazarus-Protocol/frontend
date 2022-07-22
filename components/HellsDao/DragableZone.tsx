import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { VText } from "../VText";
import { IDragableItem, IDragableProps } from "./types";

export const DragableZone = ({selectedNFT, list, onSelect, onDrop, minLength=8, dropArea, itemBorderColor}: IDragableProps) => {
  const [items, setItems] = useState<IDragableItem[]>(Array.from(Array(minLength || 1).keys()).map((_, index) => {
    return {
      data: null,
      index,
      isOccuppied: false,
      isSelected: false,
    }
  }));

  const dragRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    const newArray = items;
    if(list.length > items.length) {
      newArray.push(...Array.from(Array(list.length - items.length).keys()).map((_, index) => {
        return {
          data: null,
          index: items.length + index,
          isOccuppied: false,
          isSelected: false,
        }
      }))
    }

    const newItems = newArray.map((item, index) => {
      const newItem = {...item};
      if (index < list.length) {
        newItem.data = list[index];
        newItem.index = index;
        newItem.isOccuppied = !!list[index];
        newItem.isSelected = selectedNFT && selectedNFT.tokenId === list[index]?.tokenId;
      }
      else{
        newItem.data = null;
        newItem.index = index;
        newItem.isOccuppied = false;
        newItem.isSelected = false;
      }
      return newItem;
    })

    setItems(() => newItems);

  }, [selectedNFT, JSON.stringify(list)])

  const handleDragStart = (e: any, item: IDragableItem, info: PanInfo) => {
    setIsDragging(true);
  }

  const handleDragEnd = (e: any, item: IDragableItem, info: PanInfo) => {
    setIsDragging(false);

    const { x, y } = info.point;
    const { current } = dropArea;
    
    if(!current) return;

    const { left, top, right, bottom } = current.getBoundingClientRect();
    if(x > left && x < right && y > top && y < bottom) {
      if(onDrop && item.data) {
        // find item in items list and empty it
        const newItems = items.map((nft, index) => {
          if(nft.data?.tokenId === item.data?.tokenId) {
            return {
              isOccuppied: false,
              isSelected: false,
              data: null,
              index
            }
          }
          return nft;
        })

        if(onDrop(item.data)){
          setItems(newItems);
        }
      }
    }
  }

  return (
    <div ref={dragRef} className="w-full h-full flex justify-start items-start gap-x-vxs flex-wrap">
      {items.map((item, index) => {
        return (
          <div onClick={() => {
            if(item.isOccuppied && item.data){
              onSelect(item.data);
            }
          }} key={`dropzone-${index}`} className="sm:w-[115px] w-[90px] h-[150px] hover:cursor-pointer" 
            style={{
              // left: `${(item.index * 120) + 10}px`,
              borderColor: item.isSelected ? 'rgb(64,224,208)' : item.isOccuppied ? 'rgb(159,226,191)' : itemBorderColor || 'rgb(71,135,120)',
              borderWidth: item.isSelected ? '4px' : '1px',
            }}>
            <motion.div
              drag={!item.isSelected}
              dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
              dragElastic={1}
              dragMomentum={false}
              onDragStart={(e, info) => handleDragStart(e, item, info)}
              onDragEnd={(e, info) => handleDragEnd(e, item, info)}
              transition={(_ :any) => {
                return !isDragging;
              }}
              className="relative w-full h-full">
              <div className="w-full h-full absolute z-[10]"></div>
              {item.isOccuppied && item.data &&
                <>
                  <div className="relative sm:w-full h-full">
                    <Image src={item.data.imgSrc} alt="house-icon" objectFit="cover" layout="fill"/>
                  </div>
                  <div className="absolute bottom-0 right-0 px-vsm">
                    <VText size="lg">Lv.{item.data.tokenRank.level}</VText>
                  </div>
                  <div className="absolute top-0 left-0 px-vsm">
                    <VText size="lg">#{item.data.tokenId}</VText>
                  </div>
                </>
              }
            </motion.div>
          </div>
        )
      })}
    </div>
  )

}
