export interface INFTAttribute {
  traitType: string;
  value: string;
}
export interface ITokenRank {
  rank: number;
  level: number;
}
export interface INFT {
  tokenId: number;
  tokenRank: ITokenRank;
  name: string;
  description: string;
  attributes: INFTAttribute[];
  mediaSrc: string;
  imgSrc: string;
}