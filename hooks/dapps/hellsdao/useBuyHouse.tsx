import { getContractDetailsByChain, ValidForChain } from "@/contracts/helpers";
import { useAccount } from "@/hooks/useAccount";
import { Contract } from "ethers";
import { useContractFunction } from "@usedapp/core";

export enum HouseType {
  Plague = 1,
  Death = 2,
  War = 3,
  Famine = 4
}

export const useBuyHouse = (tokenId: number, houseId: HouseType) => {
  const { chainId, user } = useAccount();
  
  const contractDetails = getContractDetailsByChain(chainId, 'HellsMinterAddress');
  const contract = ValidForChain(chainId, 'HellsMinterAddress') && new Contract(contractDetails.address, contractDetails.abi);

  const { state, send } = useContractFunction(contract && user && contract, 'buyHouse', { transactionName: 'buy house for Hells Dao' });

  const buyHouse = async () => {
    await send(tokenId, houseId);
  }

  return {
    state,
    buyHouse
  }
}