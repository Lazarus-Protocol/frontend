import { useDetectIsMobileView } from '@/hooks/useDetectIsMobileView';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

export interface IconLabel {
  icon?: React.ReactNode;
  label?: any;
  tooltipText?: string;
}

export const IconLabel: React.FC<IconLabel> = ({ icon, label, tooltipText }) => {
  const { isMobileView } = useDetectIsMobileView();

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: 'left',
    trigger: isMobileView ? 'click' : 'hover',
  });

  return (
    <>
      {visible && 
        <div ref={setTooltipRef} {...getTooltipProps({ className: 'bg-black p-vsm' })}>
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          <div className='font-dalek'>
            {tooltipText}
          </div>
        </div>
      }
      <div className="flex items-center gap-x-vsm font-dalek hover:cursor-pointer" ref={setTriggerRef}>
        {icon}
        <span className='text-base'>{label}</span>
      </div>
    </>
  );
}