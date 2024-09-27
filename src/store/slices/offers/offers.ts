import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY_NAME, NameSpace, SORT_ARRAY } from '../../../const';
import { PreviewOfferType } from '../../../types';
import { CityNamesType } from '../../../types/city-names.type';
import { fetchOffersAction } from '../../api-actions';

type OffersStateType = {
  currentCity: CityNamesType;
  offers: PreviewOfferType[];
  isOfferLoading: boolean;
  sorting: string;
};

const initialState: OffersStateType = {
  currentCity: DEFAULT_CITY_NAME,
  offers: [],
  isOfferLoading: false,
  sorting: SORT_ARRAY[0],
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCurrentCity: (
      state,
      action: PayloadAction<CityNamesType>
    ) => {
      state.currentCity = action.payload;
    },
    setSorting: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.sorting = action.payload;
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload.filter(
          (offer) => offer.city.name === state.currentCity
        );
        state.isOfferLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOfferLoading = false;
      });
  },
});

export const { setCurrentCity, setSorting } = offersSlice.actions;
