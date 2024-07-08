import { MAX_RATING_PERCENT, MAX_RATING } from '../const';
import { AuthStatus } from '../types';

export function getRatingPercent(rate: number): string {
  return `${rate * (MAX_RATING_PERCENT / MAX_RATING)}%`;
}

export function getWordEnding(num: number): string {
  return num > 1 ? 's' : '';
}

export function getAuthStatus(status: AuthStatus): boolean {
  return status === AuthStatus.Auth;
}

export function checkAuthStatus() {
  return localStorage.getItem('Auth');
}

export function clearAuthStatus() {
  localStorage.clear();
}
