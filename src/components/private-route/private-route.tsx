import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../types';
import { useAppSelector } from '../../hooks/redux-hooks/redux-hooks';
import { getAuthStatus } from '../../store/slices/user/selectors';

type PrivateRouteProps = {
  redirectTo: AppRoutes;
  children: JSX.Element;
};

export default function PrivateRoute({
  redirectTo,
  children,
}: PrivateRouteProps) {
  const auth = useAppSelector(getAuthStatus);
  return auth ? children : <Navigate to={redirectTo} />;
}
