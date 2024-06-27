import { Link } from 'react-router-dom';
import { RoutesData } from '../../types';
import { getAuthStatus } from '../../utils/utils';
import { AuthStatus } from '../../types';

export default function Header() {
  const path: string = window.location.pathname;
  const loginPath: string = RoutesData.Login;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={RoutesData.Main}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {path !== loginPath && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {getAuthStatus(AuthStatus.Auth) && (
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={RoutesData.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  )}
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={RoutesData.Login}>
                    <span className="header__signout">
                      {getAuthStatus(AuthStatus.Auth) ? 'Sign out' : 'Sign in'}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
