import { Link } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';
import LoginHeader from '../../components/login-header/login-header';
import { RoutesData } from '../../types/routes.type';

export default function LoginPage() {
  return (
    <div className="page page--gray page--login">
      <LoginHeader />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={RoutesData[0].path}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
