import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersSlice } from './slices/offers/offers';
import { offerSlice } from './slices/offer/offer';
import { nearPlacesSlice } from './slices/near-offers/near-offers';
import { reviewsSlice } from './slices/reviews/reviews';
import { userSlice } from './slices/user/user';
import { favoritesSlice } from './slices/favorites/favorites';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.NearPlaces]: nearPlacesSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Favorites]: favoritesSlice.reducer,
});
