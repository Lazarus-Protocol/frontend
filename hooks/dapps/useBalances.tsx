import { EMPTY_ADDRESS, ETH_ADDRESS } from "@/contracts/lazarusConfig";
import { useAccount } from "@/hooks/useAccount";
import { formatEther } from "@ethersproject/units";
import { ERC20Interface, MultiCallABI, useCalls, useMulticallAddress } from "@usedapp/core";
import { BigNumber, Contract } from "ethers";

export const useBalances = (tokenAddresses: string[]) => {
  const { user } = useAccount();
  const multicallAddress = useMulticallAddress();

  const calls = tokenAddresses?.map(address => {
    return user && multicallAddress && address && address !== EMPTY_ADDRESS && (address === ETH_ADDRESS ?
    {
      contract: new Contract(multicallAddress, MultiCallABI),
      method: "getEthBalance",
      args: [user]
    }:
    {
      contract: new Contract(address, ERC20Interface),
      method: "balanceOf",
      args: [user]
    }) || undefined;
  }) ?? []

  const results = useCalls(calls, {refresh: 'everyBlock', isStatic: false}) ?? tokenAddresses.map(() => BigNumber.from(0));

  results.forEach((result, index) => {
    if (result && result.error) {
      console.error(result.error);
    }
  });
  
  const balances = results.map((result) => parseFloat(result?.value?.[0]?._hex?.length <=4 ? result?.value?.[0].toNumber() : formatEther(result?.value?.[0] || BigNumber.from(0)) || '0'));
  return balances;
}