import { isMobile, isTablet } from "react-device-detect";

export const classNames = (...classes:any) => classes.filter(Boolean).join(' ');
export const isMobileSmall = () => (isMobile && !isTablet);
export const ToReadableNumber = (number: number) => {
  if(number >= 1000000000) return `${(number / 1000000000).toFixed(2)}B`;
  if(number >= 1000000) return `${(number / 1000000).toFixed(2)}M`;
  if(number >= 1000) return `${(number / 1000).toFixed(2)}K`;
  return number.toString();
}