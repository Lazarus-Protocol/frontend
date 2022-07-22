import Image from 'next/image';
import { VText } from "../VText"
import { VTitle } from "../VTitle"

export const HouseTitleSection = () => {
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