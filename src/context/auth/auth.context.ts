import { createContext } from 'react';
import { AuthStatus } from '../../types';

export type AuthContextType = {
  authStatus: AuthStatus;
  setAuthStatus: (data: AuthStatus) => void;
};

export const AuthContext = createContext<AuthContextType>({
  authStatus: AuthStatus.NotAuth,
  setAuthStatus: () => {},
});

export const LOCAL_AUTH_STATUS_KEY = 'AUTH_STATUS';
