import { createReducer } from '@reduxjs/toolkit';
import { SORT_ARRAY } from '../const';
import {
  changeCityAction,
  changeSortAction,
  deleteFavorite,
  getFavorites,
  loadNearOffersAction,
  loadOfferAction,
  loadOffersAction,
  loadReviewsAction,
  loginAction,
  logoutAction,
  setAuthStatus,
  setFavorite,
  setOffersLoadingStatusAction,
  setUser,
} from './action';
import { OfferType, PreviewOfferType, ReviewType, UserType } from '../types';
import { CityNamesType } from '../types/city-names.type';
import { getToken } from '../services/token';

type InitialStateType = {
  currentCity: CityNamesType;
  currentCityIndex: number;
  offers: PreviewOfferType[];
  sorting: string;
  isOfferLoading: boolean;
  currentOffer: OfferType | null;
  nearOffers: OfferType[] | null;
  reviews: ReviewType[] | null;
  user: UserType | null;
  authStatus: boolean;
  favorites: PreviewOfferType[] | undefined;
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
  authStatus: !!getToken(),
  favorites: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFavorites, (state, { payload }) => {
      state.favorites = payload;
    })
    .addCase(setFavorite, (state, { payload }) => {
      state.favorites?.push({
        id: payload.id,
        title: payload.title,
        type: payload.type,
        price: payload.price,
        city: payload.city,
        location: payload.location,
        isFavorite: true,
        isPremium: payload.isPremium,
        rating: payload.rating,
        previewImage: payload.previewImage,
      });
    })
    .addCase(deleteFavorite, (state, {payload}) => {
      state.favorites = state.favorites?.filter((element) => element.id !== payload.id);
    })
    .addCase(loginAction, (state, { payload }) => {
      state.user = payload;
      state.authStatus = true;
    })
    .addCase(setAuthStatus, (state) => {
      state.authStatus = true;
    })
    .addCase(logoutAction, (state) => {
      state.user = null;
      state.authStatus = false;
    })
    .addCase(setUser, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(loadOffersAction, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(setOffersLoadingStatusAction, (state, { payload }) => {
      state.isOfferLoading = payload;
    })
    .addCase(loadOfferAction, (state, { payload }) => {
      state.currentOffer = payload;
    })
    .addCase(loadNearOffersAction, (state, { payload }) => {
      state.nearOffers = payload;
    })
    .addCase(loadReviewsAction, (state, { payload }) => {
      state.reviews = payload;
    })
    .addCase(changeCityAction, (state, { payload }) => {
      state.currentCity = payload.city;
    })
    .addCase(changeSortAction, (state, action) => {
      state.sorting = action.payload.sortingType;
      switch (state.sorting) {
        case SORT_ARRAY[0]:
          state.offers = state.offers.filter(
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
