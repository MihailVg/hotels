import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { OfferType, PreviewOfferType } from '../types';
import { NameSpace } from '../const';
import { APIRoute } from '../types/api-route';
import { AppDispatch, State } from '../types/state';
import { loadOffer, loadOffers, setOffersLoadingStatus } from './action';

type AsyncActionType = {
  extra: AxiosInstance;
  dispatch?: AppDispatch;
  state?: State;
  id?: string;
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
