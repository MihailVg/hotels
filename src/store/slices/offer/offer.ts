import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { OfferType } from '../../../types';
import { fetchOfferAction } from '../../api-actions';

type OfferStateType = {
  currentOffer: OfferType | null;
};

const initialState: OfferStateType = {
  currentOffer: null,
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setCurrentOffer: (
      state,
      action: PayloadAction<OfferType>
    ) => {
      state.currentOffer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      });
  },
});

export const { setCurrentOffer } = offerSlice.actions;
