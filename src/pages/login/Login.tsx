import LoginForm from '../../components/ForLoginPage/login-form/LoginForm';
import LoginHeader from '../../components/ForLoginPage/login-header/LoginHeader';

export default function Login() {
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
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
