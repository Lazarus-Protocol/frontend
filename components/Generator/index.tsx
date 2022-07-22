import { IAppModalProps } from "../Portal"
import { VTitle } from "../VTitle"

export const Generator = ({ onClose }: IAppModalProps) => {
  return (
    <div style={{
      backgroundImage: 'url(/images/pit.webp)',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }} className="bg-[rgb(28,33,27)] w-full h-full flex flex-col justify-between items-center p-vsm relative">
      <div className="w-full flex justify-between items-center p-vsm">
        <VTitle type="h4" className="!text-red-500 text-center">LAZARUS PIT</VTitle>
        <button onClick={onClose} className="px-vsm py-vxs border-2">Exit</button>
      </div>
      <div>
      </div>
      <div></div>
    </div>
  )
}