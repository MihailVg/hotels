import { useAuthStatus } from '../../context/auth';
import { ReviewType } from '../../types';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

type ReviewsSectionProps = {
  reviews: ReviewType[] | null;
};

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const { isLogged } = useAuthStatus();
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews ? reviews.length : 0}</span>
      </h2>
      <ReviewsList reviews={reviews} />
      {isLogged && <ReviewForm />}
    </section>
  );
}
