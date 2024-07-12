import { useAuthStatus } from '../../context/auth';
import { ReviewType } from '../../types';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

type ReviewsSectionProps = {
  reviews: ReviewType[];
  setComments: (comment: (prev: ReviewType[]) => ReviewType[]) => void;
};

export default function ReviewsSection({
  reviews,
  setComments,
}: ReviewsSectionProps) {
  const { isLogged } = useAuthStatus();
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={reviews} />
      {isLogged && <ReviewForm setComments={setComments} />}
    </section>
  );
}
