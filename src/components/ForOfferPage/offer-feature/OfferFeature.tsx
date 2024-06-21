import { OfferType } from '../../../types/offer.type';

export default function OfferFeature({ type, bedrooms, maxAdults }: OfferType) {
  return (
    <>
      <li className="offer__feature offer__feature--entire">{type}</li>
      {bedrooms > 1 ? (
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
      ) : (
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} Bedroom
        </li>
      )}
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </>
  );
}
