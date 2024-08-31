import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {
  AuthDataType,
  OfferType,
  PreviewOfferType,
  ReviewType,
  UserType,
} from '../types';
import { NameSpace } from '../const';
import { APIRoute } from '../types/api-route';
import {
  deleteFavorite,
  getFavorites,
  loadNearOffersAction,
  loadOfferAction,
  loadOffersAction,
  loadReviewsAction,
  loginAction,
  logoutAction,
  setFavorite,
  setOffersLoadingStatusAction,
  setUser,
} from './action';
import { dropToken, saveToken } from '../services/token';
import {
  FavoriteSendingType,
  ReviewSendingType,
} from '../types/api-actions.type';

type AsyncActionType = {
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  AsyncActionType
>(`${NameSpace.Offers}/fetchOffers`, async (_arg, { dispatch, extra: api }) => {
  try {
    dispatch(setOffersLoadingStatusAction(true));
    const { data } = await api.get<PreviewOfferType[]>(APIRoute.Offers);
    dispatch(loadOffersAction(data));
  } finally {
    dispatch(setOffersLoadingStatusAction(false));
  }
});

export const fetchOfferAction = createAsyncThunk<
  void,
  string | undefined,
  AsyncActionType
>(`${NameSpace.Offer}/fetchOffer`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${_arg}`);
  dispatch(loadOfferAction(data));
});

export const fetchNearOffersAction = createAsyncThunk<
  void,
  string | undefined,
  AsyncActionType
>(
  `${NameSpace.Offer}/fetchNearOffer`,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(
      `${APIRoute.Offers}/${_arg}/nearby`
    );
    dispatch(loadNearOffersAction(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<
  void,
  string | undefined,
  AsyncActionType
>(
  `${NameSpace.Reviews}/fetchReviews`,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewType[]>(
      `${APIRoute.Comments}/${_arg}`
    );
    dispatch(loadReviewsAction(data));
  }
);

export const fetchLoginAction = createAsyncThunk<
  UserType | void,
  AuthDataType,
  AsyncActionType
>(
  `${NameSpace.User}/fetchLogin`,
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserType>(APIRoute.Login, {
      email,
      password,
    });
    dispatch(loginAction(data));
    saveToken(data.token);
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  AsyncActionType
>(`${NameSpace.Offer}/checkAuth`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<UserType>(APIRoute.Login);
  dispatch(setUser(data));
});

export const fetchLogoutAction = createAsyncThunk<
  void,
  undefined,
  AsyncActionType
>(`${NameSpace.User}/logout`, async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Login);
  dropToken();
  dispatch(logoutAction());
});

export const fetchGetFavorites = createAsyncThunk<
  void,
  undefined,
  AsyncActionType
>(`${NameSpace.User}/getFavorites`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<PreviewOfferType[]>(APIRoute.Favorite);
  dispatch(getFavorites(data));
});

export const fetchSetFavorite = createAsyncThunk<
  void,
  FavoriteSendingType,
  AsyncActionType
>(`${NameSpace.User}/fetchLogin`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.post<OfferType>(
    `${APIRoute.Favorite}/${_arg.offerId}/${_arg.status}`
  );
  if (_arg.status) {
    dispatch(setFavorite(data));
  } else {
    dispatch(deleteFavorite(data));
  }
});

export const fetchSetReviewAction = createAsyncThunk<
  ReviewSendingType | void,
  ReviewSendingType,
  AsyncActionType
>(`${NameSpace.User}/fetchLogin`, async (_arg, { dispatch, extra: api }) => {
  await api.post(`${APIRoute.Comments}/${_arg.id}`, {
    comment: _arg.comment,
    rating: _arg.rating,
  });
  dispatch(fetchReviewsAction(_arg.id));
});
