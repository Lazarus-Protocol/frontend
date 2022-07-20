import { getContractDetailsByChain, ValidForChain } from "@/contracts/helpers";
import { useAccount } from "@/hooks/useAccount";
import { Contract } from "ethers";
import { useContractFunction } from "@usedapp/core";

export const useIncreasePower = (tokenId:number, amount: number = 1) => {
  const { chainId, user } = useAccount();
  
  const contractDetails = getContractDetailsByChain(chainId, 'HellsDaoAddress');
  const contract = ValidForChain(chainId, 'HellsDaoAddress') && new Contract(contractDetails.address, contractDetails.abi);

  const { state, send } = useContractFunction(contract && user && contract, 'increasePower', { transactionName: 'Increase power for Hells Dao token' });

  const increasePower = async () => {
    await send(tokenId, amount);
  }

  return {
    state,
    increasePower
  }
}