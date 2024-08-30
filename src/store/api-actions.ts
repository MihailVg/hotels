import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { OfferType, PreviewOfferType, ReviewType } from '../types';
import { NameSpace } from '../const';
import { APIRoute } from '../types/api-route';
import { loadNearOffers, loadOffer, loadOffers, loadReviews, postLogin, setOffersLoadingStatus } from './action';
import { ResponseUser, SendUser } from '../types/response-user.type';

type AsyncActionType = {
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  AsyncActionType
>(`${NameSpace.Offers}/fetchOffers`, async (_arg, { dispatch, extra: api }) => {
  try {
    dispatch(setOffersLoadingStatus(true));
    const { data } = await api.get<PreviewOfferType[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
  } finally {
    dispatch(setOffersLoadingStatus(false));
  }
});

export const fetchOfferAction = createAsyncThunk<
  void,
  string | undefined,
  AsyncActionType
>(`${NameSpace.Offer}/fetchOffer`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${_arg}`);
  dispatch(loadOffer(data));
});

export const fetchNearOffersAction = createAsyncThunk<
  void,
  string | undefined,
  AsyncActionType
>(`${NameSpace.Offer}/fetchNearOffer`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}/${_arg}/nearby`);
  dispatch(loadNearOffers(data));
});

export const fetchReviews = createAsyncThunk<
  void,
  string | undefined,
  AsyncActionType
>(`${NameSpace.Reviews}/fetchReviews`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${_arg}`);
  dispatch(loadReviews(data));
});

export const fetchLogin = createAsyncThunk<
  void,
  SendUser | undefined,
  AsyncActionType
>(`${NameSpace.Reviews}/fetchLogin`, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.post<ResponseUser>(`${APIRoute.Login}`, {_arg});
  dispatch(postLogin(data));
});
