import Header from '../../components/header/header';
import { getRatingPercent, getWordEnding } from '../../utils/utils';
import OfferCard from '../../components/offer-card/offer-card';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import {
  MAX_IMG_LENGTH,
  MAX_NEAR_PLACES,
  MIN_IMG_LENGTH,
} from './offer-page.consts';
import NotFoundPage from '../not-found-page/not-found-page';
import { useParams } from 'react-router-dom';
import ReviewsSection from '../../components/reviews-section/reviews-section';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/redux-hooks/redux-hooks';
import {
  fetchNearOffersAction,
  fetchOfferAction,
  fetchReviews,
} from '../../store/api-actions';
import { useEffect } from 'react';

export default function OfferPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const offers = useAppSelector((state) => state.offers);
  const offer = useAppSelector((state) => state.currentOffer);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const reviews = useAppSelector((state) => state.reviews);
  useEffect(() => {
    dispatch(fetchReviews(id));
    dispatch(fetchNearOffersAction(id));
    dispatch(fetchOfferAction(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (!offer) {
    return <NotFoundPage />;
  }

  const {
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    description,
    host,
    images,
  } = offer;

  return (
    <div className="page">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images
                .slice(MIN_IMG_LENGTH, MAX_IMG_LENGTH)
                .map((image, index) => (
                  <div
                    key={`${image + index}`}
                    className="offer__image-wrapper"
                  >
                    <img className="offer__image" src={image} alt={title} />
                  </div>
                ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRatingPercent(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedroom{getWordEnding(bedrooms)}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adult{getWordEnding(maxAdults)}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <ReviewsSection reviews={reviews} />
            </div>
          </div>
          <Map activeOffer={offer} className="offer__map" points={offers} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearOffers && nearOffers.map((item, index) =>
                index > MAX_NEAR_PLACES ? null : (
                  <OfferCard key={item.id} offer={item} />
                )
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
