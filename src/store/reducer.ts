import { createReducer } from '@reduxjs/toolkit';
import { CITIES_ARRAY, SORT_ARRAY } from '../const';
import { changeCity, changeSort } from './action';
import { OfferType } from '../types';
import { offersData } from '../mocks/offers.data';
import { CURRENT_CITY } from './redux.consts';

type InitialStateType = {
  currentCity: string;
  currentCityIndex: number;
  offers: OfferType[];
  sorting: string;
}

const initialState: InitialStateType = {
  currentCity: CURRENT_CITY,
  currentCityIndex: 3,
  offers: offersData.filter((offer) => offer.city.name === CURRENT_CITY).sort((a, b) => b.rating - a.rating),
  sorting: SORT_ARRAY[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCityIndex = action.payload.index;
    state.currentCity = CITIES_ARRAY[action.payload.index];
    state.offers = offersData.filter((offer) => offer.city.name === state.currentCity);
  }).addCase(changeSort, (state, action) => {
    state.sorting = action.payload.sortingType;
    switch (state.sorting) {
      case SORT_ARRAY[0]:
        state.offers = offersData.filter((offer) => offer.city.name === state.currentCity);
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
