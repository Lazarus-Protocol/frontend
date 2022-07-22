import { motion, PanInfo, Point } from "framer-motion";
import { useHellStats } from "@/hooks/dapps/hellsdao/useStats"
import { useDetectIsMobileView } from "@/hooks/useDetectIsMobileView";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePopperTooltip } from "react-popper-tooltip";
import { IAppModalProps } from "../Portal";
import { VText } from "../VText";
import { VTitle } from "../VTitle"
import { INFT } from "./types";


const HouseTitleSection = () => {
  return (<div className="w-full h-[130px] bg-black/50 flex justify-start items-center p-vsm gap-x-vsm">
  <div className="relative w-[80px] h-[80px] border-[1px] border-hells-gold-200">
    <Image src="/placeholders/house.webp" alt="placeholder-house" objectFit="cover" layout="fill"/>
  </div>
  <div className="w-full h-full border-[1px] flex-col border-hells-gold-200 flex p-[3px]">
    <div className="bg-hells-brown-800 w-full h-auto p-vsm flex justify-start items-center">
      <VText size="sm" className="leading-none">house of plague</VText>
    </div>
    <div className="bg-hells-brown-400/5 w-full h-full flex flex-row-reverse gap-vsm p-vxs justify-between items-center">
      <div className="flex justify-start items-center gap-vxs">
        <div className="relative w-[22px] h-[22px]">
        <Image src="/assets/gold.webp" alt="asset-gold" objectFit="cover" layout="fill"/>
        </div>
        <VText size="sm" className="!text-hells-gold-300 leading-none">18</VText>
      </div>
      <VTitle type="h6" className="!text-hells-gold-300">level: 1</VTitle>
    </div>
  </div>
</div>)
}

const PassView = ({nft}: {nft: INFT}) => {
  return (
    <div className="w-full h-full flex justify-start items-center p-vmd gap-vmd bg-hells-brown-800/30">
      <div className="w-1/3 h-full flex flex-col gap-vsm justify-between items-center">
        <div className="w-full h-1/2 border-2 border-hells-gold-200">
          <div className="relative w-full h-full">
            <Image src={nft.imgSrc} alt="monster-placeholder" layout="fill" objectFit="cover"/>
            <div className="bg-black/50 w-full h-[50px] absolute bottom-0 flex justify-center items-center">
              <VText size="sm" className="!text-hells-gold-300 leading-none">{nft.name} - lv.{nft.tokenRank.level}</VText>
            </div>
          </div>
        </div>
        <button className="border-2 border-hells-gold-200 bg-hells-brown-400 hover:border-hells-gold-300 px-vmd py-vsm w-full h-1/2">Mint</button>
      </div>
      <div className="flex flex-col w-2/3 h-full items-start justify-between gap-vmd">
        <VText size="sm" className="!text-hells-gold-300 leading-none">{nft.description}</VText>
        <div className="w-full h-auto">
          <VTitle className="pb-vsm" type="h5">Attributes</VTitle>
          <div className="flex flex-col flex-wrap gap-vxs">
            {nft.attributes.map((attr, index) => {
              return (<div key={index} className="flex gap-vxs flex-wrap">
                <VText size="md" className="!text-amber-100 leading-none">{attr.traitType}:</VText>
                <VText size="md" className="!text-hells-gold-300 leading-none">{attr.value}</VText>
              </div>)
            })}
          </div>
        </div>
        <div className="w-full h-full px-vsm flex items-end ">
          <button className="border-2 border-hells-gold-200 hover:border-hells-gold-300 px-vmd py-vsm w-full">Recycle</button>
        </div>
      </div>
    </div>
  )
}

const ResourceView = ({resourceVal, resourceIconSrc, tooltip}: {resourceVal: any, resourceIconSrc: string, tooltip: string}) => {
  const { isMobileView } = useDetectIsMobileView();

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: 'right',
    trigger: isMobileView ? 'click' : 'hover',
  });

  return (
    <>
      {visible && 
        <div ref={setTooltipRef} {...getTooltipProps({ className: 'bg-black p-vsm z-[10]' })}>
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          <div className='font-dalek'>
            {tooltip}
          </div>
        </div>
      }
      <div className="flex justify-start items-center gap-vsm" ref={setTriggerRef}>
        <div className="relative h-[22px] w-[22px] ">
          <Image src={resourceIconSrc} alt="rub icon" layout="fill" objectFit="cover"/>
        </div>
        <p>
          {resourceVal}
        </p>
      </div>
    </>
  )
}

const dummyData: INFT = {
  tokenId: 0,
  tokenRank: {
    level: 1,
    rank: 0,
  },
  name: "Hydra",
  description: "beneath it all the world is a hydra",
  attributes: [
   {
    traitType: "strength",
    value: '10',
   },
   {
    traitType: "endurance",
    value: '24',
   },
   {
    traitType: 'house',
    value: 'house of plague',
   }
  ],
  imgSrc: "/placeholders/hydra.webp",
  mediaSrc: "/placeholders/hydra.webp",
}

const dummyNfts: INFT[] = [
  dummyData,
  {
    ...dummyData,
    tokenId: 1,
  },
  {
    ...dummyData,
    tokenId: 2,
  },
  {
    ...dummyData,
    tokenId: 3,
  }
  ,
  {
    ...dummyData,
    tokenId: 4,
  },
  {
    ...dummyData,
    tokenId: 5,
  },
  {
    ...dummyData,
    tokenId: 6,
  },
  {
    ...dummyData,
    tokenId: 7,
  },
  {
    ...dummyData,
    tokenId: 8,
  },
  {
    ...dummyData,
    tokenId: 9,
  },
  {
    ...dummyData,
    tokenId: 10,
  },
  {
    ...dummyData,
    tokenId: 11,
  },
  {
    ...dummyData,
    tokenId: 12,
  },
  {
    ...dummyData,
    tokenId: 13,
  },
  {
    ...dummyData,
    tokenId: 14,
  },
  {
    ...dummyData,
    tokenId: 15,
  }
]

interface IDragableProps {
  list: INFT[];
  minLength?: number;
  selectedNFT: INFT;
  onSelect: (nft: INFT) => void;
  onDrop: (nft: INFT, indexPosition?: number) => boolean;
  dropArea: React.RefObject<any>;
  itemBorderColor?: string;
}
interface IDragableItem {
  data: INFT | null;
  index: number
  isOccuppied: boolean
  isSelected: boolean
}

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

export const HellsDao: React.FC<IAppModalProps> = ({onClose}) => {
  const mergeZone = useRef<HTMLDivElement>();
  const availableZone = useRef();

  const {topPower, totalLevels, circulatingSupply, pooledEther} = useHellStats();
  const [nfts, setNfts] = useState<INFT[]>(dummyNfts);
  const [selectedNft, setSelectedNft] = useState<INFT>(dummyData);
  const [mergingList, setMergingList] = useState<INFT[]>([]);
  const [availableList, setAvailableList] = useState<INFT[]>([]);
  const MAX_MERGING_LIST_LENGTH = 8;
  useEffect(() => {
    setAvailableList(nfts);
    setMergingList([]);
  }, [])

  useEffect(() => {
    if(nfts && nfts.length > 0) {
      setSelectedNft(nfts[0]);
    }
  }, [nfts])

  return (
    <div style={{
      backgroundImage: 'url(/images/hell2.webp)',
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover'
    }} className="bg-[rgb(28,33,27)] w-full h-full flex flex-col justify-between items-center p-vsm relative">
      <div className="flex justify-end items-center sm:p-vsm p-vxs w-full max-w-[1440px] gap-x-vlrg gap-y-vsm sm:flex-nowrap flex-wrap">
        <div className="h-[5vh] w-full bg-hells-brown-900/90 border-hells-brown-700 border-[2px] p-[3px]">
          <div className="w-full h-full grid sm:grid-cols-7 grid-cols-4 gap-x-vsm border-[1px] border-hells-brown-200 place-items-center justify-items-start px-vsm">
            <ResourceView resourceVal={topPower} resourceIconSrc="/assets/rub.webp" tooltip="top power"/>
            <ResourceView resourceVal={totalLevels} resourceIconSrc="/assets/pot.webp" tooltip="total levels"/>
            <ResourceView resourceVal={circulatingSupply} resourceIconSrc="/assets/wood.webp" tooltip="circulating supply"/>
            <ResourceView resourceVal={pooledEther} resourceIconSrc="/assets/gold.webp" tooltip="pooled ether"/>
          </div>
        </div>
        <button onClick={onClose} className="p-vsm  px-vlrg border-2 bg-hells-brown-800 border-hells-brown-700 hover:bg-hells-brown-600 hover:cursor-pointer">
          <FontAwesomeIcon className="w-[32px] h-[32px] text-hells-brown-100" icon={faCheck}></FontAwesomeIcon>
        </button>
      </div>
      <div className="flex w-full max-w-[1440px] sm:h-[55vh] h-full justify-start bg-hells-brown-900/95 border-4 border-hells-brown-700 p-[3px] z-[10]">
        <div className="flex sm:flex-nowrap flex-wrap overflow-y-auto overflow-x-hidden w-full h-full justify-start border-2 border-hells-brown-200">
          <div className="flex overflow-y-auto flex-col sm:border-r-2 sm:border-b-0 border-b-2 sm:w-[420px] w-full h-auto border-hells-brown-100 p-vxs gap-vsm">
            <HouseTitleSection/>
            <PassView nft={selectedNft}/>
          </div>
          <div className="sm:w-[75%] w-full h-full flex sm:flex-row flex-col-reverse overflow--auto">
            {/* <div className="relative w-full h-full flex bg-blue-400"> */}
              <div className="flex flex-col justify-center w-full h-full relative overflow-x-auto">
                <div ref={mergeZone as any} className="w-full h-1/2 flex gap-vsm justify-start px-vsm items-start flex-col">
                  <VText size="md" className="text-hells-brown-100 w-full">Merge Zone (drag and drop from inventory to begin merging)</VText>
                  <DragableZone itemBorderColor="#ff0000" minLength={MAX_MERGING_LIST_LENGTH} dropArea={availableZone} selectedNFT={selectedNft} list={mergingList} onSelect={() => {}} onDrop={(nft) => {
                      if(availableList.findIndex(item => item.tokenId === nft.tokenId) === -1) {
                        setMergingList(mergingList.filter(item => item.tokenId !== nft.tokenId));
                        setAvailableList([...availableList, nft]);
                        return true;
                      }
                      return false;
                  }}></DragableZone>
                </div>
                <div ref={availableZone as any} className="w-full h-full flex gap-vsm p-vsm justify-start px-vsm items-start flex-col">
                  <VText size="md">Inventory</VText>
                  <DragableZone dropArea={mergeZone} onSelect={(nft) => {
                    setSelectedNft(nft);
                  }} selectedNFT={selectedNft} list={availableList} onDrop={(nft) => {
                    if(mergingList.findIndex(item => item?.tokenId === nft.tokenId) === -1 && mergingList.length < MAX_MERGING_LIST_LENGTH) {
                      setAvailableList(availableList.filter(item => item.tokenId !== nft.tokenId));
                      setMergingList([nft, ...mergingList]);
                      return true;
                    }
                    return false;
                  }}/>
                </div>
              {/* </div> */}
            </div>
            <div className="sm:w-[4%] w-full sm:h-full h-auto flex justify-center items-center">
              <button disabled={mergingList.length <= 0} className="bg-hells-brown-400 hover:bg-hells-brown-800 sm:h-full w-full h-auto sm:p-0 p-vsm disabled:bg-gray-500">
                <p className="sm:rotate-90 rotate-0 font-sans font-bold">MERGE</p>
              </button>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}