import {
  CARD_CLASS_NAME_CITIES,
  CARD_CLASS_NAME_CITIES_IMG,
} from '../../const';
import { OfferType } from '../../types';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: OfferType[];
  onActiveOffer?: (offer: OfferType | null) => void;
};

export default function OffersList({ offers, onActiveOffer }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          onActiveOffer={onActiveOffer}
          key={offer.id}
          offer={offer}
          cardClassName={CARD_CLASS_NAME_CITIES}
          imgClassName={CARD_CLASS_NAME_CITIES_IMG}
        />
      ))}
    </div>
  );
}
