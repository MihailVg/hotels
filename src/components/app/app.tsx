import { AppRoutes } from '../../types';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { useAppSelector } from '../../hooks/redux-hooks/redux-hooks';
import Spinner from '../spinner/spinner';
import { useEffect } from 'react';
import { store } from '../../store';
import { checkAuthAction } from '../../store/api-actions';

function App(): JSX.Element {
  const isLogged = useAppSelector((state) => state.authStatus);
  const isOfferLoading = useAppSelector((state) => state.isOfferLoading);

  useEffect(() => {
    store.dispatch(checkAuthAction());
  }, []);

  if (isOfferLoading) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<MainPage />} />
      <Route path={AppRoutes.Login} element={<LoginPage />} />
      <Route path={AppRoutes.Offer} element={<OfferPage />} />
      <Route
        path={AppRoutes.Favorites}
        element={
          <PrivateRoute auth={isLogged} redirectTo={AppRoutes.Login}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
