import { getContractDetailsByChain, ValidForChain } from "@/contracts/helpers";
import { useAccount } from "@/hooks/useAccount"
import { formatEther } from "@ethersproject/units";
import { useCall, useCalls } from "@usedapp/core";
import { BigNumber, Contract } from "ethers";

export interface ITokenRank {
  rank: number;
  level: number;
}

const hellsDaoContract = (chainId: number) => {
  const contractDetails = getContractDetailsByChain(chainId, 'HellsDaoAddress');
  const contract = ValidForChain(chainId, 'HellsDaoAddress') && new Contract(contractDetails.address, contractDetails.abi);
  return contract;
}

export const useGetMultipleTokenIds = (userBalance: number) => {
  const { user, chainId } = useAccount();
  const contract = hellsDaoContract(chainId);
  const tokenIndexes = Array.from(Array(userBalance).keys());

  const calls = user && contract && userBalance && tokenIndexes.map(tokenIndex => {
    return {
      contract,
      method: 'tokenOfOwnerByIndex',
      args: [user, tokenIndex]
    };
  }) || [];


  const results = useCalls(calls, {refresh: 'everyBlock', isStatic: false}) ?? tokenIndexes.map(() => { return { value: null, error: null }; });

  results.forEach((result, index) => {
    if (result && result.error) {
      console.error('useGetMultipleTokenIds', result.error);
      const empty = tokenIndexes.map(() => 0);
      return { tokenIds: empty, error: result.error };
    }
  });

  const tokenIds = results.map((result) => result?.value?.[0]?.toNumber() || 0);
  return { tokenIds, error: null };
}


export const useGetMultipleTokenURIs = (tokenIds: number[]) => {
  const { user, chainId } = useAccount();
  const contract = hellsDaoContract(chainId);

  const calls = user && contract && tokenIds.map(tokenId => {
    return {
      contract,
      method: 'tokenURI',
      args: [tokenId]
    };
  }) || [];

  const results = useCalls(calls, {refresh: 'everyBlock'}) ?? tokenIds.map(() => { return { value: null, error: null }; });

  results.forEach((result, index) => {
    if (result && result.error) {
      console.error('useGetMultipleTokenURIs', result.error);
      const empty = tokenIds.map(() => null);
      return { tokenURIs: empty, error: result.error };
    }
  });

  const tokenURIs = results.map((result) => result?.value?.[0] || null);
  return { tokenURIs, error: null };
}

export const useGetMultipleTokenRanks = (tokenIds: number[]): {tokenRanks: ITokenRank[], error:any} => {
  const { user, chainId } = useAccount();
  const contract = hellsDaoContract(chainId);

  const calls = user && contract && tokenIds.map(tokenId => {
    return {
      contract,
      method: 'rank',
      args: [tokenId]
    };
  }) || [];

  const results = useCalls(calls, {refresh: 'everyBlock'}) ?? tokenIds.map(() => { return { value: null, error: null }; });

  results.forEach((result, index) => {
    if (result && result.error) {
      console.error('useGetMultipleTokenRanks', result.error);
      const empty = tokenIds.map(() => null);
      return { tokenRanks: empty, error: result.error };
    }
  });

  const tokenRanks = results.map((result) => {
    return {
      rank: typeof(result?.value?.[0]) === 'number' ? result?.value?.[0] : result?.value?.[0]?.toNumber() || 0,
      level: result?.value?.[1]?.toNumber() || 0
    }
  });
  return { tokenRanks, error: null };
}
