import { useRef } from 'react';
import { ReviewType } from '../../types';
import { getRatingPercent } from '../../utils/utils';
import { SUBSTRING_END, SUBSTRING_START } from './review.consts';

type ReviewProps = {
  review: ReviewType;
};

export default function Review({ review }: ReviewProps) {
  const { rating, date, comment } = review;
  const { name, avatarUrl } = review.user;
  const dateRef = useRef(new Date(date)).current;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRatingPercent(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time
          className="reviews__time"
          dateTime={dateRef
            .toISOString()
            .substring(SUBSTRING_START, SUBSTRING_END)}
        >
          {dateRef.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </div>
    </li>
  );
}
