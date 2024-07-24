import { useState } from 'react';
import OffersList from '../../../components/offer-list/offers-list';
import Sorting from '../../../components/sorting/sorting';
import { OfferType } from '../../../types';
import Map from '../../../components/map/map';
import { useAppSelector } from '../../../hooks/redux-hooks/redux-hooks';

type MainPageContentProps = {
  offers: OfferType[];
};

export default function MainPageContent({ offers }: MainPageContentProps) {
  const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);
  const currentOffers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  // eslint-disable-next-line no-console
  console.log(activeOffer);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        {offers.length ? (
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {currentOffers.length} places to stay in {currentCity}
            </b>
            <Sorting />
            <OffersList offers={currentOffers} onActiveOffer={setActiveOffer} />
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
          <Map activeOffer={activeOffer} city={currentOffers[0].city} points={currentOffers} className="cities__map" />
        </div>
      </div>
    </div>
  );
}
