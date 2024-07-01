import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../types';
import { AppRoutes } from '../../types';
import { getAuthStatus } from '../../utils/utils';

type PrivateRouteProps = {
  auth: AuthStatus;
  redirectTo: AppRoutes;
  children: JSX.Element;
};

export default function PrivateRoute({
  auth,
  redirectTo,
  children,
}: PrivateRouteProps) {
  const isAuth = getAuthStatus(auth);

  return isAuth ? children : <Navigate to={redirectTo} />;
}
