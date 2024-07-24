import { Link, useLocation } from 'react-router-dom';
import { AppRoutes, OfferType } from '../../types';
import { changeOfferPageId, getRatingPercent } from '../../utils/utils';
import classNames from 'classnames';

type OfferCardProps = {
  offer: OfferType;
  onActiveOffer?: (offer: OfferType | null) => void;
};

export default function OfferCard({
  offer,
  onActiveOffer,
}: OfferCardProps) {
  const { isPremium, previewImage, price, title, rating, type, id } = offer;
  const path = changeOfferPageId(id);

  const { pathname } = useLocation();
  const favoritesPath: string = AppRoutes.Favorites;
  const mainPath: string = AppRoutes.Main;
  const imageSizeOffer = {
    favorites: { width: '150', height: '110' },
    cities: { width: '260', height: '200' },
  };
  const imageSizeOfferType =
    pathname === favoritesPath
      ? imageSizeOffer.favorites
      : imageSizeOffer.cities;

  return (
    <article
      className={classNames(
        'place-card',
        {
          'favorites__card': pathname === favoritesPath,
          'cities__card': pathname === mainPath,
          'near-places__card': pathname !== mainPath && pathname !== favoritesPath
        }
      )}
      onMouseOver={() => onActiveOffer?.(offer)}
      onMouseLeave={() => onActiveOffer?.(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={classNames(
        'place-card__image-wrapper',
        {
          'favorites__image-wrapper': pathname === favoritesPath,
          'cities__image-wrapper': pathname === mainPath,
          'near-places__image-wrapper': pathname !== mainPath && pathname !== favoritesPath
        }
      )}
      >
        <Link to={path}>
          <img
            className="place-card__image"
            src={previewImage}
            {...imageSizeOfferType}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingPercent(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={path}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
