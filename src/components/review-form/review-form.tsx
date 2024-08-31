import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { STARS_AMOUNT } from './review-form.consts';
import { useAppDispatch } from '../../hooks/redux-hooks/redux-hooks';
import { fetchSetReviewAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';

export default function ReviewForm() {
  const [isCommentSend, setIsCommentSend] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const isValid = rating && comment.length > 50;
  const sortedStars = STARS_AMOUNT.sort((a : number, b: number) => b - a);

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (isValid && id) {
      dispatch(fetchSetReviewAction({
        id: id,
        comment: comment,
        rating: rating,
      }));
      setIsCommentSend(true);
    }
    setComment('');
  };

  if(isCommentSend) {
    return null;
  }

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {sortedStars.map((item) => (
          <Fragment key={item}>
            <input
              onClick={() => setRating(item)}
              className="form__rating-input visually-hidden"
              name="rating"
              value={item}
              id={`${item}-stars`}
              type="radio"
            />
            <label
              htmlFor={`${item}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={handleChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
