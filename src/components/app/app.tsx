import { OfferType, AppRoutes, ReviewType } from '../../types';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { reviewsData } from '../../mocks/reviews.data';
import { useState } from 'react';
import { useAuthStatus } from '../../context/auth';
import { useAppSelector } from '../../hooks/redux-hooks/redux-hooks';
import Spinner from '../spinner/spinner';

type AppProps = {
  offers: OfferType[];
};

function App({ offers }: AppProps): JSX.Element {
  const { isLogged } = useAuthStatus();
  const [, setComments] = useState<ReviewType[]>(reviewsData);
  const isOfferLoading = useAppSelector((state) => state.isOfferLoading);

  if (isOfferLoading) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<MainPage />} />
      <Route path={AppRoutes.Login} element={<LoginPage />} />
      <Route
        path={AppRoutes.Offer}
        element={
          <OfferPage
            reviews={reviewsData}
            setComments={setComments}
          />
        }
      />
      <Route
        path={AppRoutes.Favorites}
        element={
          <PrivateRoute auth={isLogged} redirectTo={AppRoutes.Login}>
            <FavoritesPage offers={offers} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
