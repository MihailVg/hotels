import { MAX_RATING_PERCENT, MAX_RATING } from '../const';

export function getRatingPercent(rate: number): number {
  return rate * (MAX_RATING_PERCENT / MAX_RATING);
}
