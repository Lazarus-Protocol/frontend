import { Goerli, Polygon } from "@usedapp/core";

export const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ETH_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
export type AvailableContracts = 'LazarusTokenAddress' | 'PolyVidyaAddress' | 'CerberusAddress' | 'HellsDaoAddress' | 'HellsMinterAddress' | 'DTAAddress' | 'QuickRouter' | 'LazarusPitAddress' | 'RedemptionPoolAddress' | 'TokenReserveAddress'

export const LAZARUS_CHAIN_SETTINGS = {
  [Goerli.chainId]: {
    LazarusTokenAddress: '0x021Bd951d06Fd3A63AE9a08cD6d48CBD405ff314',
    PolyVidyaAddress: '0xff8c8b05d0f810d00f88ab31aa3f4a4414a9c049',
    CerberusAddress: '0xc5bEee19308779235cC8b2A1CA317b3dCe34f676',
    HellsDaoAddress: '0x899BF84CeA7A2c6a335f6ce8050eBe6ae292409A',
    HellsMinterAddress: '0x35bba9352a2bb196f90f966c2a8172233ad43e22',
    DTAAddress: '0x5e5c4cDe79dF4DAdeC0A83Ad4d9E742377E2Bb3B',
    QuickRouter: '0x14bB79024257e6C8d28f9dff00472813E20F981a',
    LazarusPitAddress: '0xBB4B7028B9A53aE7ff215d22f40DeEEeBfF4ba2D',
    RedemptionPoolAddress: '0xEb875cCA9266F61156051b55ececC5Ed40c8a991',
    TokenReserveAddress: '0x5119FE21eb863001dEc46Cd04d06F8F761721372'    
  },
  [Polygon.chainId]: {
    LazarusTokenAddress: EMPTY_ADDRESS,
    PolyVidyaAddress: EMPTY_ADDRESS,
    CerberusAddress: EMPTY_ADDRESS,
    HellsDaoAddress: EMPTY_ADDRESS,
    HellsMinterAddress: EMPTY_ADDRESS,
    DTAAddress: EMPTY_ADDRESS,
    QuickRouter: EMPTY_ADDRESS,
    LazarusPitAddress: EMPTY_ADDRESS,
    RedemptionPoolAddress: EMPTY_ADDRESS,
    TokenReserveAddress: EMPTY_ADDRESS
  }
}