import OffersList from '../../components/offer-list/offers-list';
import Header from '../../components/header/header';
import Sorting from '../../components/sorting/sorting';
import Cities from '../../components/cities/cities';
import { OfferType } from '../../types';
import { AuthStatus } from '../../types';
import { Helmet } from 'react-helmet-async';

type MainPageProps = {
  offers: OfferType[];
};

export default function MainPage({ offers }: MainPageProps) {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
        <meta name="description" content="6 Cities" />
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities />
        <div className="cities">
          <div className="cities__places-container container">
            {AuthStatus.Auth ? (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <Sorting />
                <OffersList offers={offers} />
              </section>
            ) : (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in
                    Dusseldorf
                  </p>
                </div>
              </section>
            )}
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
