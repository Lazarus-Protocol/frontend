import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Garden from './Garden';

export const Wallpaper = ({}): any => {
  const svgRef = useRef();

  useEffect(() => {
    if(!svgRef.current) return;

    const rightPond = (svgRef.current as any).getElementById('RightPondGroup');
    if(!rightPond) return;

    const innerPaths = rightPond.getElementsByTagName('path');
    for(let i = 1; i < innerPaths.length; ++i) {
      const currentPath = innerPaths[i];
      const prevPath = innerPaths[i - 1];
      prevPath.classList.add('animate-brighten')
      // console.log(currentPath.style.fill, prevPath.style.fill)
      // currentPath.style.fill = prevPath.style.fill;
      // prevPath.style.fill = tempPath.style.fill;
    }
  }, [svgRef]);

  return (
    <div className="w-full h-screen m-0 p-0 flex justify-center items-center">
      {/* <Garden width="100%" height="100%" ref={svgRef} /> */}
    </div>
  )
}