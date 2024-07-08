import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../types';

type PrivateRouteProps = {
  auth: string | null;
  redirectTo: AppRoutes;
  children: JSX.Element;
};

export default function PrivateRoute({
  auth,
  redirectTo,
  children,
}: PrivateRouteProps) {
  const isAuth = auth;

  return isAuth ? children : <Navigate to={redirectTo} />;
}
