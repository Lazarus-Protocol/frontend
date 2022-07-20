import { formatEther } from "@ethersproject/units";
import { CallResult } from "@usedapp/core";
import { Contract } from "ethers";
import { AvailableContracts, EMPTY_ADDRESS, LAZARUS_CHAIN_SETTINGS } from "./lazarusConfig";
import CERBERUS_ABI from './abis/cereberus.json';
import HELLS_DAO_ABI from './abis/hellsDao.json';
import HELLS_MINTER_ABI from './abis/hellsMinter.json';
import DTA_ABI from './abis/dta.json';
import QUICK_ROUTER_ABI from './abis/quickRouter.json';
import LAZARUS_PIT_ABI from './abis/lazarusPit.json';
import REDEMPTION_POOL_ABI from './abis/redemptionPools.json';
import TOKEN_RESERVE_ABI from './abis/tokenReserve.json';
import LAZARUS_TOKEN_ABI from './abis/lazarusToken.json';

export const ChainExists = (chainId: number) => {
  return Object.keys(LAZARUS_CHAIN_SETTINGS).includes(chainId.toString());
}

export const ValidForChain = (chainId: number, objName: AvailableContracts) => {
  return Object.keys(LAZARUS_CHAIN_SETTINGS).includes(chainId.toString()) && (LAZARUS_CHAIN_SETTINGS[chainId] as any)[objName]  !== EMPTY_ADDRESS;
}

export const getAbi = (objName: AvailableContracts) => {
  switch (objName) {
    case 'CerberusAddress':
      return CERBERUS_ABI;
    case 'HellsDaoAddress':
      return HELLS_DAO_ABI;
    case 'HellsMinterAddress':
      return HELLS_MINTER_ABI;
    case 'DTAAddress':
      return DTA_ABI;
    case 'QuickRouter':
      return QUICK_ROUTER_ABI;
    case 'LazarusPitAddress':
      return LAZARUS_PIT_ABI;
    case 'RedemptionPoolAddress':
      return REDEMPTION_POOL_ABI;
    case 'TokenReserveAddress':
      return TOKEN_RESERVE_ABI;
    case 'LazarusTokenAddress':
      return LAZARUS_TOKEN_ABI;
    default:
      return null;
  }
}

export const getContractDetailsByChain = (chainId: number, objName: AvailableContracts) => {
  const address = (LAZARUS_CHAIN_SETTINGS[chainId] as any)[objName];
  const abi: any = getAbi(objName);
  return { address, abi };
}

export const getResults = (responses: CallResult<Contract, string>[], defaultValue: any=0) => {
  const results: any[] = [];
  
  responses.forEach((response) => {
    if(response && response.error) {
      results.push(defaultValue);
      console.log(response.error);
    }
    else {
      results.push(response?.value)
    }
  });

  return results;
}