import Header from '../../components/header/header';
import OfferHost from '../../components/offer-host/offer-host';
import Rating from '../../components/rating/rating';
import ReviewForm from '../../components/review-form/review-form';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferFeatureList from '../../components/offer-feature-list/offer-feature-list';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NearPlacesList from '../../components/near-places-list/near-places-list';

export default function OfferPage() {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Nice, cozy, warm big bed apartment
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Rating />
              <OfferFeatureList />
              <div className="offer__price">
                <b className="offer__price-value">&euro;210</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList />
              </div>
              <OfferHost />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
                </h2>
                <ReviewsList />
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
            <NearPlacesList />
          </section>
        </div>
      </main>
    </div>
  );
}
