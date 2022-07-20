import type { NextPage } from 'next'
import { Mumbai, Polygon, DAppProvider, Config, Goerli, Mainnet } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { Network } from "@ethersproject/networks";

import { Button } from '../components/Button'
import { Wallpaper } from '../components/Wallpaper'
import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header';
import { useState } from 'react';
import { Portal, PortalType } from '@/components/Portal';
import { AnimatePresenceModal } from '@/components/Modal';
import { AuthenticatedView } from '@/components/AuthenticatedView';

const dic_net: Network = {
  name: 'matic',
  chainId: 137,
  _defaultProvider: (providers) => new providers.JsonRpcProvider('rpc-url')
};

const config: Config = {
  readOnlyChainId: Polygon.chainId,
  readOnlyUrls: {
    [Polygon.chainId]: process.env.ALCHEMY_API_KEY_POLYGON ? `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_POLYGON}` : getDefaultProvider(Polygon.chainId),
    [Goerli.chainId]: process.env.ALCHEMY_API_KEY_GOERLI ? `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_GOERLI}` : getDefaultProvider(Goerli.chainId),
  },
  refresh: 10
}

const Home: NextPage = () => {
  const [type, setType] = useState<PortalType | null>(null);

  return (
    <DAppProvider config={config}>
      <div className='prose'>
        <div id='modal-root' className='prose !z-[10000]'></div>
        <AnimatePresenceModal> {type!== null && <Portal type={type} onClose={() => setType(null)}/>} </AnimatePresenceModal>
        <div className={styles.container}>
          <Header onClickDonate={() => setType('donate')}/>
          {/* <div className='w-full h-full absolute z-0'>
            <Wallpaper />
          </div> */}
          <div className='flex justify-center items-center w-full h-full px-vsm'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-4'>
              <h1 className='text-river-100 sm:text-8xl text-5xl text-center font-dalek p-4 bg-zinc-200/10 border-[1px] backdrop-blur-[.5px] border-white/60'>LAZARUS PROTOCOL</h1>
              <div className='flex flex-row gap-x-1'>
                <AuthenticatedView>
                  {/* <Button onClick={() => setType('hellsDao')}>MINT LAZR TOKEN</Button> */}
                  <Button onClick={() => setType('hellsDao')}>HELL&apos;S DAO</Button>
                  <Button onClick={() => setType('generator')}>LAZARUS PIT</Button>
                  <Button onClick={() => setType('polyVidya')}>PolyVIDYA</Button>
                </AuthenticatedView>
                <Button onClick={() => setType('about')}>ABOUT</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DAppProvider>
  )
}

export default Home
