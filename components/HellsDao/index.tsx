import { useHellStats } from "@/hooks/dapps/hellsdao/useStats"
import { useDetectIsMobileView } from "@/hooks/useDetectIsMobileView";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePopperTooltip } from "react-popper-tooltip";
import { IAppModalProps } from "../Portal";
import { VText } from "../VText";
import { VTitle } from "../VTitle"




const HouseTitleSection = () => {
  return (<div className="w-full h-[130px] bg-black/50 flex justify-start items-center p-vsm gap-x-vsm">
  <div className="relative w-[80px] h-[80px] border-[1px] border-amber-400">
    <Image src="/placeholders/house.webp" alt="placeholder-house" objectFit="cover" layout="fill"/>
  </div>
  <div className="w-full h-full border-[1px] flex-col border-amber-400 flex p-[3px]">
    <div className="bg-amber-800 w-full h-auto p-vsm flex justify-start items-center">
      <VText size="sm" className="leading-none">house of plague</VText>
    </div>
    <div className="bg-green-400/5 w-full h-full flex flex-row-reverse gap-vsm p-vsm justify-between items-center">
      <div className="flex flex-col justify-start items-center gap-[5px]">
        <div className="relative w-[32px] h-[32px]">
        <Image src="/assets/gold.webp" alt="asset-gold" objectFit="cover" layout="fill"/>
        </div>
        <VText size="sm" className="!text-amber-500 leading-none">18</VText>
      </div>
      <VTitle type="h6" className="!text-amber-500">level: 1</VTitle>
    </div>
  </div>
</div>)
}

const PassView = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-vmd gap-x-vsm bg-black/50">
      <div className="sm:w-[80%] w-[50%] h-full border-2 border-amber-300">
        <div className="relative w-full h-full">
          <Image src="/placeholders/hydra.webp" alt="monster-placeholder" layout="fill" objectFit="cover"/>
          <div className="bg-black/50 w-full h-[50px] absolute bottom-0 flex justify-center items-center">
            <VText size="sm" className="!text-amber-300 leading-none">Hydra - #10</VText>
          </div>
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

export const HellsDao: React.FC<IAppModalProps> = ({onClose}) => {
  const {topPower, totalLevels, circulatingSupply, pooledEther} = useHellStats();

  return (
    <div style={{
      backgroundImage: 'url(/images/hell2.png)',
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover'
    }} className="bg-[rgb(28,33,27)] w-full h-full flex flex-col justify-between items-center p-vsm relative">
      <div className="flex justify-end items-center sm:p-vsm p-[5px] w-full max-w-[1440px] gap-x-vlrg gap-y-vsm sm:flex-nowrap flex-wrap">
        <div className="h-[5vh] w-full bg-gray-900/90 border-amber-700 border-[2px] p-[3px]">
          <div className="w-full h-full grid sm:grid-cols-7 grid-cols-4 gap-x-vsm border-[1px] border-amber-500 place-items-center justify-items-start px-vsm">
            <ResourceView resourceVal={topPower} resourceIconSrc="/assets/rub.webp" tooltip="top power"/>
            <ResourceView resourceVal={totalLevels} resourceIconSrc="/assets/pot.webp" tooltip="total levels"/>
            <ResourceView resourceVal={circulatingSupply} resourceIconSrc="/assets/wood.webp" tooltip="circulating supply"/>
            <ResourceView resourceVal={pooledEther} resourceIconSrc="/assets/gold.webp" tooltip="pooled ether"/>
          </div>
        </div>
        <button onClick={onClose} className="p-vsm  px-vlrg border-2 bg-amber-800 border-amber-500 hover:bg-amber-700 hover:border-amber-900 hover:cursor-pointer">
          <FontAwesomeIcon className="w-[32px] h-[32px] text-amber-200" icon={faCheck}></FontAwesomeIcon>
        </button>
      </div>
      <div className="flex w-full max-w-[1440px] h-[40vh] justify-start bg-gray-900/95 border-4 border-amber-700 p-[3px]">
        <div className="flex sm:flex-nowrap flex-wrap overflow-y-auto overflow-x-hidden w-full h-full justify-start border-2 border-amber-600">
          <div className="flex flex-col sm:border-r-2 sm:border-b-0 border-b-2 sm:w-[340px] w-full h-full border-amber-500 p-[5px] gap-vsm">
            <HouseTitleSection/>
            <PassView/>
          </div>
          <div className="sm:w-[80%] w-full h-full flex-col p-vsm">
            <div className="w-full h-1/2 flex gap-vsm justify-start">
              <div className="px-vsm py-vmd h-full ">
                <div className="relative sm:w-[110px] w-[50px] h-full border-[1px] border-orange-400">
                  <Image src="/placeholders/plague-icon.webp" alt="house-icon" objectFit="cover" layout="fill"/>
                </div>
              </div>
              <div className="w-full h-full flex overflow-x-auto">
                <div className="w-auto h-full flex justify-center">
                  {[1,2,3,4,5,6,7].map((i) => {
                    return (
                      <div key={i} className="border-[1px] border-orange-400 sm:w-[125px] w-[100px] h-full">
                      </div>
                    )
                  })} 
                </div>
              </div>
              <div className="w-auto h-full flex justify-center py-vsm">
                <button className="bg-orange-700 hover:bg-orange-800 border-[1px] border-amber-600 disabled:bg-gray-500">
                  <p className="rotate-90 font-sans font-bold">MERGE</p>
                </button>
              </div>
            </div>
            <div className="w-full h-1/2 flex gap-vsm overflow-x-auto p-vsm">
              <div className="w-auto h-full flex justify-start">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((i) => {
                  return (
                    <div key={i} className="border-[1px] border-orange-400 sm:w-[115px] w-[100px] h-full">
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}