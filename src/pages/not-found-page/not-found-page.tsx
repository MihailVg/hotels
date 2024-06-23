import Header from '../../components/header/header';

export default function NotFoundPage() {
  return (
    <div className="page">
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--offer">
          <div className="container">
            <div className="favorites__title">
              <img
                className="offer__image"
                src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png"
                alt="Not found picture"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
