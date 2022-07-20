import { useEthers } from '@usedapp/core';
import { useCallback, useContext } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider';

export const useAccount = () => {
  const {chainId, active, isLoading: isAuthenticating, error: authError, activate, activateBrowserWallet: authenticate, deactivate: logout, account: user, library} = useEthers();

  const Connect = useCallback(async () => {
    try { 
      authenticate();
    } catch (error) {
      console.log(error);
    }
  }, [authenticate]);

  const Disconnect = useCallback(() => {
    logout();
  }, [logout]);

  return { isAuthenticated: active && user, isAuthenticating, authError, user, chainId: chainId || 1, Connect, Disconnect, isInitialized:true, initialize: () => {}, library};
}