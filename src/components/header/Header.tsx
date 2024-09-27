import { NavLink, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../types';
import { useAppSelector } from '../../hooks/redux-hooks/redux-hooks';
import { fetchGetFavorites, fetchLogoutAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getAuthStatus, getUserInfo } from '../../store/slices/user/selectors';
import { store } from '../../store';
import { getFavorites } from '../../store/slices/favorites/selectors';

export default function Header() {
  const { pathname } = useLocation();
  const loginPath: string = AppRoutes.Login;
  const user = useAppSelector(getUserInfo);
  const isLogged = useAppSelector(getAuthStatus);
  const favorites = useAppSelector(getFavorites);
  useEffect(() => {
    store.dispatch(fetchGetFavorites());
  }, []);

  function signOut() {
    store.dispatch(fetchLogoutAction());
  }

  const getStyleForNavLink = ({
    isActive,
  }: {
    isActive: boolean;
  }): Record<string, string> => (isActive ? { pointerEvents: 'none' } : {});

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink
              className="header__logo-link header__logo-link--active"
              to={AppRoutes.Main}
              style={getStyleForNavLink}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </NavLink>
          </div>
          {pathname !== loginPath && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {isLogged && (
                    <NavLink
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoutes.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        {user?.name}
                      </span>
                      <span className="header__favorite-count">{favorites?.length || 0}</span>
                    </NavLink>
                  )}
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to={AppRoutes.Login}>
                    <span className="header__signout" onClick={signOut}>
                      {isLogged ? 'Sign out' : 'Sign in'}
                    </span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
