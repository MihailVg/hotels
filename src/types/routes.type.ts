import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import MainPage from '../pages/main-page/main-page';
import OfferPage from '../pages/offer-page/offer-page';

export const RoutesData = [
  {
    path: '/',
    element: MainPage,
    isAuth: false,
  },
  {
    path: '/login',
    element: LoginPage,
    isAuth: false,
  },
  {
    path: '/offer/:id',
    element: OfferPage,
    isAuth: false,
  },
  {
    path: '/favorites',
    element: FavoritesPage,
    isAuth: true,
  },
];
