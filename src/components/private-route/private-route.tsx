import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../types';

type PrivateRouteProps = {
  auth: boolean;
  redirectTo: AppRoutes;
  children: JSX.Element;
};

export default function PrivateRoute({
  auth,
  redirectTo,
  children,
}: PrivateRouteProps) {
  return auth ? children : <Navigate to={redirectTo} />;
}
