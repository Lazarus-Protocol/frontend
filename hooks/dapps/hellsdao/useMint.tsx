import { getContractDetailsByChain, ValidForChain } from "@/contracts/helpers";
import { useAccount } from "@/hooks/useAccount";
import { Contract } from "ethers";
import { useContractFunction } from "@usedapp/core";

export const useMint = (amount: number = 1) => {
  const { chainId, user } = useAccount();
  
  const contractDetails = getContractDetailsByChain(chainId, 'HellsMinterAddress');
  const contract = ValidForChain(chainId, 'HellsMinterAddress') && new Contract(contractDetails.address, contractDetails.abi);

  const { state, send } = useContractFunction(contract && user && contract, 'mint', { transactionName: 'Mint Hells Dao' });

  const mint = async () => {
    await send(amount);
  }

  return {
    state,
    mint
  }
}