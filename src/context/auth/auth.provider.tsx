import { useMemo, useState } from 'react';
import { AuthStatus } from '../../types';
import { AuthContext, LOCAL_AUTH_STATUS_KEY } from './auth.context';

type AuthProviderProps = {
  children: JSX.Element;
};

const defaultState =
  (localStorage.getItem(LOCAL_AUTH_STATUS_KEY) as AuthStatus) ||
  AuthStatus.NotAuth;

export function AuthProvider({ children }: AuthProviderProps) {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(defaultState);

  const defaultProps = useMemo(
    () => ({ authStatus, setAuthStatus }),
    [authStatus]
  );

  return <AuthContext.Provider value={defaultProps}>{children}</AuthContext.Provider>;
}
