import { createReducer } from '@reduxjs/toolkit';
import { SORT_ARRAY } from '../const';
import { changeCity, changeSort, loadOffer, loadOffers, setOffersLoadingStatus } from './action';
import { OfferType, PreviewOfferType } from '../types';
import { offersData } from '../mocks/offers.data';
import { CityNamesType } from '../types/city-names.type';

type InitialStateType = {
  currentCity: CityNamesType;
  currentCityIndex: number;
  offers: PreviewOfferType[];
  sorting: string;
  isOfferLoading: boolean;
  currentOffer: OfferType | null;
};

const initialState: InitialStateType = {
  currentCity: 'Amsterdam',
  currentCityIndex: 3,
  offers: [],
  sorting: SORT_ARRAY[0],
  isOfferLoading: false,
  currentOffer: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, {payload}) => {
      state.offers = payload;
    })
    .addCase(setOffersLoadingStatus, (state, {payload}) => {
      state.isOfferLoading = payload;
    })
    .addCase(loadOffer, (state, {payload}) => {
      state.currentOffer = payload;
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
