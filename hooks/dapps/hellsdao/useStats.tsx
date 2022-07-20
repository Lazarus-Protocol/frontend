import {  MultiCallABI, useCalls, useMulticallAddress } from "@usedapp/core";
import { BigNumber, Contract } from "ethers";
import { useAccount } from "@/hooks/useAccount";
import { formatEther } from "@ethersproject/units";
import { getContractDetailsByChain, getResults, ValidForChain } from "@/contracts/helpers";

export interface IHellsDaoStats {
  circulatingSupply: number;
  recycledCount: number;
  topPower: number;
  totalLevels: number;
  pooledEther: number;
}

export const useHellStats = (): IHellsDaoStats => {
  const { chainId } = useAccount();
  const multicallAddress = useMulticallAddress();

  const contractDetails = getContractDetailsByChain(chainId, 'HellsDaoAddress');
  const contract = ValidForChain(chainId, 'HellsDaoAddress') && new Contract(contractDetails.address, contractDetails.abi);

  const calls = contract && [
    {
      contract,
      method: 'topPower',
      args: []
    },
    {
      contract,
      method: 'totalSupply',
      args: []
    },
    {
      contract,
      method: 'getRecycledCount',
      args: []
    },
    {
      contract: contract,
      method: "totalLevels",
      args: []
    },
    multicallAddress && {
      contract: new Contract(multicallAddress, MultiCallABI),
      method: "getEthBalance",
      args: [contractDetails.address]
    } || undefined
  ] || [];

  const responses = useCalls(calls, {refresh: 'never'});
  const results = getResults(responses);

  const topPower = results[0]?.[0] || BigNumber.from(0);
  const totalSupply = results[1]?.[0] || BigNumber.from(0);
  const recycledCount = results[2]?.[0] || BigNumber.from(0);
  const totalLevels = results[3]?.[0] || BigNumber.from(0);
  const pooledEther = results[4]?.[0] || BigNumber.from(0);

  return {
    circulatingSupply: totalSupply?.toNumber() || 0,
    topPower: topPower?.toNumber() || 0,
    recycledCount: recycledCount?.toNumber() || 0,
    pooledEther: parseFloat(formatEther(pooledEther) || '0'),
    totalLevels: totalLevels?.toNumber() || 0
  }
}