import { useChainExists } from "@/hooks/useChainExists"
import { VTitle } from "./VTitle";

export const DappWrapper = ({ children }: {children: any}) => {
  const { isValid } = useChainExists();

  if(!isValid) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <VTitle>This chain is currently not supported</VTitle>
      </div>
    )
  }

  return (
    <>
    {children}
    </>
  )
}