import { useEthers } from "@usedapp/core";
import { ChainExists } from "contracts/helpers"

export const useChainExists = () => {
  const { chainId } = useEthers(); 
  const isValid = ChainExists(chainId || 1);
  return { isValid }
}