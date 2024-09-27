import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { OfferType } from '../../../types';
import { fetchNearOffersAction } from '../../api-actions';

type NearPlacesStateType = {
  nearPlaces: OfferType[] | null;
};

const initialState: NearPlacesStateType = {
  nearPlaces: null,
};

export const nearPlacesSlice = createSlice({
  name: NameSpace.NearPlaces,
  initialState,
  reducers: {
    setNearPlaces: (
      state,
      action: PayloadAction<OfferType[]>
    ) => {
      state.nearPlaces = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      });
  },
});

export const { setNearPlaces } = nearPlacesSlice.actions;
