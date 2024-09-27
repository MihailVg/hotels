import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { PreviewOfferType } from '../../../types';
import { fetchGetFavorites } from '../../api-actions';

type FavoritesType = {
  favorites: PreviewOfferType[] | undefined;
};

const initialState: FavoritesType = {
  favorites: undefined,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    addFavorite: (
      state,
      action: PayloadAction<PreviewOfferType>
    ) => {
      state.favorites?.push({
        id: action.payload.id,
        title: action.payload.title,
        type: action.payload.type,
        price: action.payload.price,
        city: action.payload.city,
        location: action.payload.location,
        isFavorite: true,
        isPremium: action.payload.isPremium,
        rating: action.payload.rating,
        previewImage: action.payload.previewImage,
      });
    },
    deleteFavorite: (
      state,
      action: PayloadAction<PreviewOfferType>,
    ) => {
      state.favorites = state.favorites?.filter((element) => element.id !== action.payload.id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
