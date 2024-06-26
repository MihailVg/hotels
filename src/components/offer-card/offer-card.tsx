import { Link } from 'react-router-dom';
import { AppRoutes } from '../../types';
import { OfferType } from '../../types';
import { getRatingPercent } from '../../utils/utils';
import React from 'react';

type OfferCardProps = {
  offer: OfferType;
  cardClassName?: string;
  imgClassName?: string;
  imgWidth?: string;
  imgHeight?: string;
  setOfferInfo?: React.FC;
};

export default function OfferCard({ offer, cardClassName, imgClassName, imgWidth, imgHeight, setOfferInfo }: OfferCardProps) {
  const { isPremium, previewImage, price, title, rating, type } = offer;
  const articleClassName = `${cardClassName} place-card`;
  const imageClassName = `${imgClassName} place-card__image-wrapper`;

  return (
    <article className={articleClassName} onMouseOver={() => setOfferInfo(offer)} onMouseLeave={() => setOfferInfo('')}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={imageClassName}>
        <Link to={AppRoutes.Offer}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgWidth || '260'}
            height={imgHeight || '200'}
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
          <Link to={AppRoutes.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
