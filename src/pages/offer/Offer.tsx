import Header from '../../components/header/Header';
// import InsideListItem from '../../components/ForOfferPage/inside-list-item/InsideListItem';
import NearPlaceCard from '../../components/ForOfferPage/near-place-card/NearPlaceCard';
import OfferGalleryItem from '../../components/ForOfferPage/offer-gallery-item/OfferGalleryItem';
import OfferHost from '../../components/ForOfferPage/offer-host/OfferHost';
import Rating from '../../components/ForOfferPage/rating/Rating';
import ReviewForm from '../../components/ForOfferPage/review-form/ReviewForm';
import Review from '../../components/ForOfferPage/review/Review';
import OfferFeature from '../../components/ForOfferPage/offer-feature/OfferFeature';
import { reviewsData } from '../../mocks/reviews.data';
import { ReviewType } from '../../types/review.type';
import { useEffect, useState } from 'react';
import { OfferType } from '../../types/offer.type';
import { offersData } from '../../mocks/offers.data';

export default function Offer() {
  const [data, setData] = useState<ReviewType[]>([]);

  useEffect(() => {
    setData(reviewsData);
  }, []);

  const [dataOffer, setDataOffer] = useState<OfferType>();
  useEffect(() => {
    setDataOffer(offersData[0]);
  }, []);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <OfferGalleryItem />
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {dataOffer?.isPremium && (
                <div className="offer__mark">
                  {' '}
                  <span>Premium</span>{' '}
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{dataOffer?.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Rating {...dataOffer!} />
              <ul className="offer__features">
                <OfferFeature {...dataOffer!} />
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{dataOffer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {/* {dataOffer?.goods.map((insideItem) => <InsideListItem key={insideItem} insideItem={insideItem} />)} */}
                </ul>
              </div>
              <OfferHost />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{data.length}</span>
                </h2>
                <ul className="reviews__list">
                  {data.map((obj) => <Review key={obj.id} {...obj} />)}
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <NearPlaceCard />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
