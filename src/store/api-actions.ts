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
import { dropToken, saveToken } from '../services/token';
import {
  FavoriteSendingType,
  ReviewSendingType,
} from '../types/api-actions.type';


type AsyncActionType = {
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<
  PreviewOfferType[],
  undefined,
  AsyncActionType
>(`${NameSpace.Offers}/fetchOffers`, async (_arg, { extra: api }) => {
  const { data } = await api.get<PreviewOfferType[]>(APIRoute.Offers);

  return data;
});

export const fetchOfferAction = createAsyncThunk<
  OfferType,
  string | undefined,
  AsyncActionType
>(`${NameSpace.Offer}/fetchOffer`, async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${_arg}`);

  return data;
});

export const fetchNearOffersAction = createAsyncThunk<
  OfferType[],
  string | undefined,
  AsyncActionType
>(`${NameSpace.Offer}/fetchNearOffer`, async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(
    `${APIRoute.Offers}/${_arg}/nearby`
  );

  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  ReviewType[],
  string | undefined,
  AsyncActionType
>(`${NameSpace.Reviews}/fetchReviews`, async (_arg, { extra: api }) => {
  const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${_arg}`);

  return data;
});

export const fetchLoginAction = createAsyncThunk<
  UserType,
  AuthDataType,
  AsyncActionType
>(
  `${NameSpace.User}/fetchLogin`,
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserType>(APIRoute.Login, {
      email,
      password,
    });

    saveToken(data.token);

    return data;
  }
);

export const getUserAction = createAsyncThunk<
  UserType,
  undefined,
  AsyncActionType
>(`${NameSpace.Offer}/checkAuth`, async (_arg, { extra: api }) => {
  const { data } = await api.get<UserType>(APIRoute.Login);

  saveToken(data.token);

  return data;
});

export const fetchLogoutAction = createAsyncThunk<
  void,
  undefined,
  AsyncActionType
>(`${NameSpace.User}/logout`, async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Login);

  dropToken();
});

export const fetchGetFavorites = createAsyncThunk<
  PreviewOfferType[],
  undefined,
  AsyncActionType
>(`${NameSpace.User}/getFavorites`, async (_arg, { extra: api }) => {
  const { data } = await api.get<PreviewOfferType[]>(APIRoute.Favorite);

  return data;
});

export const fetchSetFavorite = createAsyncThunk<
  void,
  FavoriteSendingType,
  AsyncActionType
>(`${NameSpace.User}/fetchLogin`, async (_arg, { extra: api }) => {
  await api.post<OfferType>(
    `${APIRoute.Favorite}/${_arg.offerId}/${_arg.status}`
  );
});

export const fetchSetReviewAction = createAsyncThunk<
  ReviewSendingType | void,
  ReviewSendingType,
  AsyncActionType
>(`${NameSpace.User}/fetchLogin`, async (_arg, { extra: api }) => {
  await api.post(`${APIRoute.Comments}/${_arg.id}`, {
    comment: _arg.comment,
    rating: _arg.rating,
  });
});
