import { Contract } from "ethers";
import { getContractDetailsByChain, ValidForChain } from "@/contracts/helpers";
import { useAccount } from "@/hooks/useAccount";
import { useContractFunction } from "@usedapp/core";

export const useMergePasses = (mergeIntoTokenId: number, tokenIds: number[]) => {
  const { chainId, user } = useAccount();

  const contractDetails = getContractDetailsByChain(chainId, 'HellsDaoAddress');
  const contract = ValidForChain(chainId, 'HellsDaoAddress') && new Contract(contractDetails.address, contractDetails.abi);

  const { state, send } = useContractFunction(mergeIntoTokenId && tokenIds && contract && user && contract, 'mergeDaos', {transactionName: 'Merge Passes'});

  const mergePasses = async () => {
    await send([mergeIntoTokenId,...tokenIds], {from: user});
  }

  return {
    state,
    mergePasses
  }
}
