import { useHellStats } from "@/hooks/dapps/hellsdao/useStats"
import { GradientBorder } from "../GradientBorder"
import { VTitle } from "../VTitle"

export interface IHellsDaoProps {

}

export const HellsDao: React.FC<IHellsDaoProps> = () => {
  const {topPower, totalLevels, circulatingSupply, pooledEther} = useHellStats();

  return (
    <div style={{
      // background:'radial-gradient(circle, rgba(28,33,27,.8) 0%, rgba(70,90,70,.8) 50%, rgba(28,33,27,.9) 100%)',
      backgroundImage: 'url(/images/hell2.png)',
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover'
    }} className="bg-[#1c211b] w-full h-full">
      {/* <div className="w-full h-full flex justify-start items-start gap-vmd" style={{
        backgroundColor: '#1c211b',
        backgroundImage: 'url(/images/hell.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        opacity: 0.1,
      }}> */}
        <div className="flex w-full h-full mt-[100px] px-vmd justify-end">
          <h5>{topPower}</h5>
        </div>
      {/* </div> */}
    </div>
  )
}