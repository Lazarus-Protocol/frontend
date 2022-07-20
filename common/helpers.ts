import { isMobile, isTablet } from "react-device-detect";

export const classNames = (...classes:any) => classes.filter(Boolean).join(' ');
export const isMobileSmall = () => (isMobile && !isTablet);
