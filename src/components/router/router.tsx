import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { RoutesData } from '../../types';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import { OfferType } from '../../types';
import PrivateRoute from '../private-route/private-route';
import { AuthStatus } from '../../types';

type RouterProps = {
  offers: OfferType[];
};

export default function Router({ offers }: RouterProps) {
  return (
    <Routes>
      <Route path={RoutesData.Main} element={<MainPage offers={offers} />} />
      <Route path={RoutesData.Login} element={<LoginPage />} />
      <Route path={RoutesData.Offer} element={<OfferPage offers={offers} />} />
      <Route
        path={RoutesData.Favorites}
        element={
          <PrivateRoute auth={AuthStatus.Auth} redirectTo={RoutesData.Login}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
