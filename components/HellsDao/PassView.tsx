import Image from "next/image";
import { useState } from "react";
import { useMint } from "@/hooks/dapps/hellsdao/useMint";
import { NumberInput } from "../NumberInput";
import { VText } from "../VText";
import { VTitle } from "../VTitle";
import { INFT } from "./types";

export const PassView = ({nft}: {nft: INFT}) => {
  const [mintAmount, setMintAmount] = useState(1);
  const { mint, state } = useMint(mintAmount);

  const handleMint = async () => {
    await mint();
  }

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
        <div className="flex flex-col w-full h-1/2 gap-vsm">
          <NumberInput
            min={1}
            max={9}
            step='1'
            className="focus:outline-none bg-transparent px-vsm mr-2 w-full border-[2px] text-body dark:text-light-100 text-dark-100 appearance-none outline-none p-1" 
            value={mintAmount} 
            onChange={(e: any) => {
              setMintAmount(e.target.valueAsNumber);
            }}/>
          <button className="border-2 border-hells-gold-200 bg-hells-brown-400 hover:border-hells-gold-300 p-vxs w-full h-full" onClick={handleMint}>Mint</button>
        </div>
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
        {state.status === 'Fail' || state.status === 'Exception' && <VText size="sm" className="!text-red-500">{state.errorMessage}</VText>}
        {state.status === 'Success' && <VText size="sm" className="!text-green-500">Successfully Minted</VText>}
        <div className="w-full h-full px-vsm flex items-end ">
          <button disabled className="border-2 disabled:bg-slate-400 disabled:hover:border-hells-gold-200 border-hells-gold-200 hover:border-hells-gold-300 px-vmd py-vsm w-full">Recycle</button>
        </div>
      </div>
    </div>
  )
}
