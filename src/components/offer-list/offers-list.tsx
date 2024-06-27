import {
  CARD_CLASS_NAME_CITIES,
  CARD_CLASS_NAME_CITIES_IMG,
} from '../../const';
import { OfferType } from '../../types';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: OfferType[];
};

export default function OffersList({ offers }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item, id) => (
        <OfferCard
          key={item.id}
          offer={offers[id]}
          cardClassName={CARD_CLASS_NAME_CITIES}
          imgClassName={CARD_CLASS_NAME_CITIES_IMG}
        />
      ))}
    </div>
  );
}
