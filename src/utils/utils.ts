import { MAX_RATING_PERCENT, MAX_RATING } from '../const';
import { AppRoutes, AuthStatus } from '../types';

export function getRatingPercent(rate: number): string {
  return `${rate * (MAX_RATING_PERCENT / MAX_RATING)}%`;
}

export function getWordEnding(num: number): string {
  return num > 1 ? 's' : '';
}

export function getAuthStatus(status: AuthStatus): boolean {
  return status === AuthStatus.Auth;
}

export function changeOfferPageId(id: string) {
  return AppRoutes.Offer.replace(':id', id);
}
