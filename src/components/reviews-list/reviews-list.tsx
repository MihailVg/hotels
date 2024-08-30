import { ReviewType } from '../../types';
import Review from '../review/review';

type ReviewsListProps = {
  reviews: ReviewType[] | null;
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews && reviews.map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}
