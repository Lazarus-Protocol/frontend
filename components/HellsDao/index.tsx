import { useMergePasses } from "@/hooks/dapps/hellsdao/useMerge";
import { useHellStats } from "@/hooks/dapps/hellsdao/useStats"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { IAppModalProps } from "../Portal";
import { VText } from "../VText";
import { DragableZone } from "./DragableZone";
import { HouseTitleSection } from "./HouseTitleSection";
import { PassView } from "./PassView";
import { ResourceView } from "./ResourceView";
import { INFT } from "./types";



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

const MAX_MERGING_LIST_LENGTH = 8;

export const HellsDao: React.FC<IAppModalProps> = ({onClose}) => {
  const mergeZone = useRef<HTMLDivElement>();
  const availableZone = useRef();

  const {topPower, totalLevels, circulatingSupply, pooledEther} = useHellStats();
  const [nfts, setNfts] = useState<INFT[]>(dummyNfts);
  const [selectedNft, setSelectedNft] = useState<INFT>(dummyData);
  const [mergingList, setMergingList] = useState<INFT[]>([]);
  const [availableList, setAvailableList] = useState<INFT[]>([]);

  const { mergePasses, state } = useMergePasses(selectedNft?.tokenId, mergingList.map(nft => nft.tokenId));

  useEffect(() => {
    setAvailableList(nfts);
    setMergingList([]);
  }, [])

  useEffect(() => {
    if(nfts && nfts.length > 0) {
      setSelectedNft(nfts[0]);
    }
  }, [nfts])

  const handleMerge = async () => {
    if(mergingList.length > 0) {
      await mergePasses();
    }
  }

  useEffect(() => {
    console.log(state.status)
    if(state.status === 'Success') {
      setMergingList([]);
      setSelectedNft(nfts[0]);
    }
  }, [state.status])

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
                  {state.status === 'Fail' || state.status === 'Exception' && <VText size="md" className="!text-red-500">{state.errorMessage}</VText>}
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
              <button onClick={handleMerge} disabled={mergingList.length <= 0} className="bg-hells-brown-400 hover:bg-hells-brown-800 sm:h-full w-full h-auto sm:p-0 p-vsm disabled:bg-gray-500">
                <p className="sm:rotate-90 rotate-0 font-sans font-bold">MERGE</p>
              </button>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}