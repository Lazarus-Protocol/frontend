import { IAppModalProps } from "../Portal"
import { VTitle } from "../VTitle"

export const PolyVidya = ({onClose}: IAppModalProps) => {
  return (
    <div>
      <VTitle type="h1" className="!text-red-500 text-center">WELCOME TO POLYVIDYA</VTitle>
    </div>
  )
}