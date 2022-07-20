import { getContractDetailsByChain, ValidForChain } from "@/contracts/helpers";
import { useAccount } from "@/hooks/useAccount";
import { Contract } from "ethers";
import { useContractFunction } from "@usedapp/core";

export const useBuyUsedToken = () => {
  const { chainId, user } = useAccount();
  
  const contractDetails = getContractDetailsByChain(chainId, 'HellsMinterAddress');
  const contract = ValidForChain(chainId, 'HellsMinterAddress') && new Contract(contractDetails.address, contractDetails.abi);

  const { state, send } = useContractFunction(contract && user && contract, 'buyUsedHouse', { transactionName: 'buy used token for Hells Dao token' });

  const buyUsedToken = async () => {
    await send();
  }

  return {
    state,
    buyUsedToken
  }
}