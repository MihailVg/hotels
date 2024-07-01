import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoutes, OfferType } from '../../types';
import OfferCard from '../../components/offer-card/offer-card';
import { Link } from 'react-router-dom';

type FavoritesPageProps = {
  offers: OfferType[];
};

export default function FavoritesPage({ offers }: FavoritesPageProps) {
  if (!offers) {
    return null;
  }

  const favoritePlaces = offers.filter((offer) => offer.isFavorite);
  const favoriteCitiesArray = favoritePlaces.map((offer) => offer.city.name);
  const uniqFavoriteCitiesArray = favoriteCitiesArray.filter(
    (city, index) => index === favoriteCitiesArray.lastIndexOf(city)
  );

  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
        <meta name="description" content="Favorites" />
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritePlaces ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {uniqFavoriteCitiesArray.map((item) => (
                  <li key={item} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link
                          className="locations__item-link"
                          to={AppRoutes.Main}
                        >
                          <span>{item}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favoritePlaces.filter((offer) => offer.city.name === item).map((offer) => (
                        <OfferCard
                          key={offer.id}
                          offer={offer}
                          cardClassName="favorites__card"
                          imgClassName="favorites__image-wrapper"
                          imgWidth="150"
                          imgHeight="110"
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
