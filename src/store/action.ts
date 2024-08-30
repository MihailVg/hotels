import { createAction } from '@reduxjs/toolkit';
import { CHANGE_SORT } from './redux.consts';
import { CityNamesType } from '../types/city-names.type';
import { NameSpace } from '../const';
import { OfferType, PreviewOfferType, ReviewType } from '../types';
import { ResponseUser } from '../types/response-user.type';

export const changeCity = createAction<{ city: CityNamesType }>(
  `${NameSpace.Offers}/setActiveCity`
);

export const loadOffers = createAction<PreviewOfferType[]>(`${NameSpace.Offers}/loadOffers`);
export const loadOffer = createAction<OfferType | null>(`${NameSpace.Offer}/loadOffer`);
export const setOffersLoadingStatus = createAction<boolean>(`${NameSpace.Offers}/setOffersLoadingStatus`);
export const loadNearOffers = createAction<OfferType[] | null>(`${NameSpace.NearPlaces}/loadNearPlaces`);
export const loadReviews = createAction<ReviewType[] | null>(`${NameSpace.Reviews}/comments`);

export const checkLogin = createAction<ResponseUser | null>(`${NameSpace.User}/checkLogin`);
export const postLogin = createAction<ResponseUser | null>(`${NameSpace.User}/login`);

export const changeSort = createAction(CHANGE_SORT, (sorting: string) => ({
  payload: {
    sortingType: sorting,
  },
}));
