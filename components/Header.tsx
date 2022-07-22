import { ToReadableNumber } from '@/common/helpers';
import { useLazarusTokenStats } from '@/hooks/dapps/lazarus/useStats';
import { useAccount } from '@/hooks/useAccount';
import React from 'react';
import { AuthenticatedView, UnAuthenticatedView } from './AuthenticatedView';
import { Button } from './Button';
import { IconLabel } from './IconLabel';
import OmegaIcon from './Icons/Omega';
import WheatIcon from './Icons/Wheat';

export interface IHeaderProps {
  onClickDonate ?: () => void;
}

export const Header: React.FC<IHeaderProps> = ({onClickDonate}) => {
  const { user, isAuthenticating, Connect, Disconnect } = useAccount();
  const { totalSupply, burnedCount } = useLazarusTokenStats();

  return (
    <div className='flex w-full justify-end items-center py-vmd px-vsm gap-x-vsm'>
      <AuthenticatedView>
        <div className='flex flex-col gap-vxs'>
          <IconLabel label={ToReadableNumber(totalSupply)} icon={<WheatIcon fill='rgb(250 204 21)' width={21} height={21}/>} tooltipText="total supply"/>
          <IconLabel label={burnedCount} icon={<OmegaIcon fill='rgb(250 204 21)' width={21} height={21}/>} tooltipText="burned count"/>
        </div>
        <Button onClick={onClickDonate} className='bg-yellow-400 hover:bg-yellow-300 text-zinc-700'>DONATE</Button>
        <Button onClick={Disconnect}>{user?.slice(0, 12)}</Button>
      </AuthenticatedView>
      <UnAuthenticatedView>
       <Button onClick={Connect} loading={isAuthenticating}>Connect Wallet</Button>
      </UnAuthenticatedView>
    </div>
  );
}