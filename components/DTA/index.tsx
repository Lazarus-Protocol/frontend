import { IAppModalProps } from "../Portal"
import { VTitle } from "../VTitle"

export const DTA = ({onClose}: IAppModalProps) => {
  return (
    <div>
      <VTitle type="h1" className="!text-red-500 text-center">WELCOME TO DTA</VTitle>
    </div>
  )
}