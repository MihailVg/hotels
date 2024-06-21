import FavoritesItem from '../../components/ForFavoritesPage/favorites-items/FavoritesItem';
import Footer from '../../components/ForFavoritesPage/footer/Footer';
import Header from '../../components/header/Header';

export default function Favorites() {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesItem />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
