import { PreviewOfferType } from '../../types';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: PreviewOfferType[];
  onActiveOffer?: (offer: PreviewOfferType | null) => void;
};

export default function OffersList({ offers, onActiveOffer }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          onActiveOffer={onActiveOffer}
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}
