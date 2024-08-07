import { useState } from 'react';
import OffersList from '../../../components/offer-list/offers-list';
import Sorting from '../../../components/sorting/sorting';
import { PreviewOfferType } from '../../../types';
import Map from '../../../components/map/map';

type MainPageContentProps = {
  offers: PreviewOfferType[];
};

export default function MainPageContent({ offers }: MainPageContentProps) {
  const [activeOffer, setActiveOffer] = useState<PreviewOfferType | null>(null);

  return offers.length ? (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {offers[0].city.name}
          </b>
          <Sorting />
          <OffersList offers={offers} onActiveOffer={setActiveOffer} />
        </section>
        <div className="cities__right-section">
          <Map
            activeOffer={activeOffer}
            points={offers}
            className="cities__map"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
              We could not find any property available at the moment in
              Dusseldorf
            </p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
}
