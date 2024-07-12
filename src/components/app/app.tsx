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

type AppProps = {
  offers: OfferType[];
};

function App({ offers }: AppProps): JSX.Element {
  const { isLogged } = useAuthStatus();
  const [reviews, setComments] = useState<ReviewType[]>(reviewsData);
  // eslint-disable-next-line no-console
  console.log(reviews);

  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<MainPage offers={offers} />} />
      <Route path={AppRoutes.Login} element={<LoginPage />} />
      <Route
        path={AppRoutes.Offer}
        element={
          <OfferPage
            reviews={reviewsData}
            setComments={setComments}
            offers={offers}
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
