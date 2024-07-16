import { useState } from 'react';
import OffersList from '../../../components/offer-list/offers-list';
import Sorting from '../../../components/sorting/sorting';
import { OfferType } from '../../../types';
import { CITIES_ARRAY } from '../../../const';
import Map from '../../../components/map/map';

type MainPageContentProps = {
  offers: OfferType[];
};

export default function MainPageContent({ offers }: MainPageContentProps) {
  const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);
  const amsterdamOffers = offers.filter(
    (offer) => offer.city.name === CITIES_ARRAY[3]
  );
  // eslint-disable-next-line no-console
  console.log(activeOffer);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        {offers.length ? (
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offers.length} places to stay in Amsterdam
            </b>
            <Sorting />
            <OffersList offers={amsterdamOffers} onActiveOffer={setActiveOffer} />
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
          <Map activeOffer={activeOffer} city={amsterdamOffers[0].city} points={amsterdamOffers} mapClass="cities__map" />
        </div>
      </div>
    </div>
  );
}
