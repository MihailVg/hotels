import { useContext } from 'react';
import { AuthStatus } from '../../types';
import { AuthContext, LOCAL_AUTH_STATUS_KEY } from './auth.context';

interface UseAuthStatus {
  authStatus: AuthStatus;
  isLogged: boolean;
  loginAction: () => void;
  logoutAction: () => void;
  toggleAuthAction: () => void;
}

export function useAuthStatus(): UseAuthStatus {
  const { authStatus, setAuthStatus } = useContext(AuthContext);

  const isLogged = authStatus === AuthStatus.Auth;

  const logoutAction = () => {
    setAuthStatus(AuthStatus.NotAuth);

    localStorage.setItem(LOCAL_AUTH_STATUS_KEY, AuthStatus.NotAuth);
  };

  const loginAction = () => {
    setAuthStatus(AuthStatus.Auth);

    localStorage.setItem(LOCAL_AUTH_STATUS_KEY, AuthStatus.Auth);
  };

  const toggleAuthAction = () => {
    const newAuthStatus =
      authStatus === AuthStatus.Auth ? AuthStatus.NotAuth : AuthStatus.Auth;

    setAuthStatus(newAuthStatus);

    localStorage.setItem(LOCAL_AUTH_STATUS_KEY, newAuthStatus);
  };

  return { authStatus, isLogged, loginAction, logoutAction, toggleAuthAction };
}
