import {  CallResult, useCalls } from "@usedapp/core";
import { BigNumber, Contract } from "ethers";
import { useAccount } from "@/hooks/useAccount";
import { EMPTY_ADDRESS, LAZARUS_CHAIN_SETTINGS } from "@/contracts/lazarusConfig";
import LAZARUS_TOKEN_ABI from "@/contracts/abis/lazarusToken.json";
import { ChainExists, getResults } from "@/contracts/helpers";
import { formatEther } from "@ethersproject/units";

export interface ILazarusTokenStats {
  totalSupply: number;
  // balance: number;
  // hasAllowance: boolean;
  burnedCount: number;
}

export const useLazarusTokenStats = (): ILazarusTokenStats => {
  const { chainId } = useAccount();

  const calls = ChainExists(chainId) && LAZARUS_CHAIN_SETTINGS[chainId].LazarusTokenAddress !== EMPTY_ADDRESS && [
    {
      contract: new Contract(LAZARUS_CHAIN_SETTINGS[chainId].LazarusTokenAddress, LAZARUS_TOKEN_ABI),
      method: "totalSupply",
      args: []
    },
    {
      contract: new Contract(LAZARUS_CHAIN_SETTINGS[chainId].LazarusTokenAddress, LAZARUS_TOKEN_ABI),
      method: "getBurnedCount",
      args: []
    }
  ] || [];

  const responses: CallResult<Contract, string>[] = useCalls(calls);
  const results = getResults(responses, null);

  const totalSupplyRes = results[0]?.[0] || BigNumber.from(0);
  const burnedCountRes = results[1]?.[0] || BigNumber.from(0);

  const totalSupply = parseFloat(formatEther(totalSupplyRes) || '0');
  const burnedCount = burnedCountRes.toNumber();
  return { totalSupply, burnedCount };
}