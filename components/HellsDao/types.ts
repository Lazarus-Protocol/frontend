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

export interface IDragableProps {
  list: INFT[];
  minLength?: number;
  selectedNFT: INFT;
  onSelect: (nft: INFT) => void;
  onDrop: (nft: INFT, indexPosition?: number) => boolean;
  dropArea: React.RefObject<any>;
  itemBorderColor?: string;
}
export interface IDragableItem {
  data: INFT | null;
  index: number
  isOccuppied: boolean
  isSelected: boolean
}
