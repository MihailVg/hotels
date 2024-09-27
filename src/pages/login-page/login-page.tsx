import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../types';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { CITY_NAME } from './login-page.consts';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks/redux-hooks';
import { fetchLoginAction } from '../../store/api-actions';
import { store } from '../../store';
import { getAuthStatus } from '../../store/slices/user/selectors';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const isValid = true;
  const navigate = useNavigate();
  const isLogged = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (isLogged) {
      navigate(AppRoutes.Main);
    }
  }, [navigate, isLogged]);

  function handleLoginChange(evt: ChangeEvent<HTMLInputElement>) {
    setLogin(evt.target.value);
  }

  function handlePasswordChange(evt: ChangeEvent<HTMLInputElement>) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    if (isValid) {
      store.dispatch(fetchLoginAction({
        'email': login,
        'password': password,
      }));
      navigate(AppRoutes.Main);
    } else {
      // eslint-disable-next-line no-alert
      alert('something wrong!');
    }
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  value={login}
                  onChange={handleLoginChange}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  value={password}
                  onChange={handlePasswordChange}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoutes.Main}>
                <span>{CITY_NAME}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
