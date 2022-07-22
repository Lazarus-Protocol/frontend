import Image from "next/image";
import { usePopperTooltip } from "react-popper-tooltip";
import { useDetectIsMobileView } from "@/hooks/useDetectIsMobileView";

export const ResourceView = ({resourceVal, resourceIconSrc, tooltip}: {resourceVal: any, resourceIconSrc: string, tooltip: string}) => {
  const { isMobileView } = useDetectIsMobileView();

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: 'right',
    trigger: isMobileView ? 'click' : 'hover',
  });

  return (
    <>
      {visible && 
        <div ref={setTooltipRef} {...getTooltipProps({ className: 'bg-black p-vsm z-[10]' })}>
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          <div className='font-dalek'>
            {tooltip}
          </div>
        </div>
      }
      <div className="flex justify-start items-center gap-vsm" ref={setTriggerRef}>
        <div className="relative h-[22px] w-[22px] ">
          <Image src={resourceIconSrc} alt="rub icon" layout="fill" objectFit="cover"/>
        </div>
        <p>
          {resourceVal}
        </p>
      </div>
    </>
  )
}
