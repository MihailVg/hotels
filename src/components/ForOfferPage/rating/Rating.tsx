import { OfferType } from '../../../types/offer.type';

export default function Rating({rating}: OfferType) {

  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{ width: String(rating * 20).concat('%') }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
}
