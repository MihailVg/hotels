import { createReducer } from '@reduxjs/toolkit';
import { SORT_ARRAY } from '../const';
import { changeCity, changeSort, loadNearOffers, loadOffer, loadOffers, loadReviews, postLogin, setOffersLoadingStatus } from './action';
import { OfferType, PreviewOfferType, ReviewType } from '../types';
import { offersData } from '../mocks/offers.data';
import { CityNamesType } from '../types/city-names.type';
import { ResponseUser } from '../types/response-user.type';

type InitialStateType = {
  currentCity: CityNamesType;
  currentCityIndex: number;
  offers: PreviewOfferType[];
  sorting: string;
  isOfferLoading: boolean;
  currentOffer: OfferType | null;
  nearOffers: OfferType[] | null;
  reviews: ReviewType[] | null;
  user: ResponseUser | null;
};

const initialState: InitialStateType = {
  currentCity: 'Amsterdam',
  currentCityIndex: 3,
  offers: [],
  sorting: SORT_ARRAY[0],
  isOfferLoading: false,
  currentOffer: null,
  nearOffers: null,
  reviews: [],
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(postLogin, (state, {payload}) => {
      state.user = payload;
    })
    .addCase(loadOffers, (state, {payload}) => {
      state.offers = payload;
    })
    .addCase(setOffersLoadingStatus, (state, {payload}) => {
      state.isOfferLoading = payload;
    })
    .addCase(loadOffer, (state, {payload}) => {
      state.currentOffer = payload;
    })
    .addCase(loadNearOffers, (state, {payload}) => {
      state.nearOffers = payload;
    })
    .addCase(loadReviews, (state, {payload}) => {
      state.reviews = payload;
    })
    .addCase(changeCity, (state, { payload }) => {
      state.currentCity = payload.city;
    })
    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload.sortingType;
      switch (state.sorting) {
        case SORT_ARRAY[0]:
          state.offers = offersData.filter(
            (offer) => offer.city.name === state.currentCity
          );
          break;
        case SORT_ARRAY[1]:
          state.offers.sort((a, b) => b.rating - a.rating);
          break;
        case SORT_ARRAY[2]:
          state.offers.sort((a, b) => a.price - b.price);
          break;
        case SORT_ARRAY[3]:
          state.offers.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
    });
});

export { reducer };
