import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { ReviewType } from '../../../types';
import { fetchReviewsAction } from '../../api-actions';

type ReviewsStateType = {
  reviews: ReviewType[] | null;
};

const initialState: ReviewsStateType = {
  reviews: null,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    setReviews: (
      state,
      action: PayloadAction<ReviewType[]>
    ) => {
      state.reviews = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});

export const { setReviews } = reviewsSlice.actions;
