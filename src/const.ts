export const MAX_RATING = 5;
export const MAX_RATING_PERCENT = 100;
export const CITIES_ARRAY = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
export const SORT_ARRAY = ['Popular', 'Top rated first', 'Price: low to high', 'Price: high to low'] as const;
export const DEFAULT_CITY_NAME = CITIES_ARRAY[0];
export const CURRENT_CITY = 'Amsterdam';

export enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  User = 'USER',
  NearPlaces = 'NEAR_PLACES'
}
