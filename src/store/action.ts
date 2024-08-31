import { createAction } from '@reduxjs/toolkit';
import { CHANGE_SORT } from './redux.consts';
import { CityNamesType } from '../types/city-names.type';
import { NameSpace } from '../const';
import { OfferType, PreviewOfferType, ReviewType, UserType } from '../types';

export const changeCityAction = createAction<{ city: CityNamesType }>(
  `${NameSpace.Offers}/setActiveCity`
);

export const loadOffersAction = createAction<PreviewOfferType[]>(`${NameSpace.Offers}/loadOffers`);
export const loadOfferAction = createAction<OfferType | null>(`${NameSpace.Offer}/loadOffer`);
export const setOffersLoadingStatusAction = createAction<boolean>(`${NameSpace.Offers}/setOffersLoadingStatus`);
export const loadNearOffersAction = createAction<OfferType[] | null>(`${NameSpace.NearPlaces}/loadNearPlaces`);
export const loadReviewsAction = createAction<ReviewType[] | null>(`${NameSpace.Reviews}/comments`);
export const setReviewAction = createAction(`${NameSpace.Reviews}/setComment`);

export const setUser = createAction<UserType |null>(`${NameSpace.User}/setUser`);
export const loginAction = createAction<UserType | null>(`${NameSpace.User}/login`);
export const logoutAction = createAction(`${NameSpace.User}/logout`);
export const setAuthStatus = createAction(`${NameSpace.User}/auth`);

export const getFavorites = createAction<PreviewOfferType[] | undefined>(`${NameSpace.Favorites}/loadFavorites`);
export const setFavorite = createAction<OfferType>(`${NameSpace.Favorites}/postFavorite`);
export const deleteFavorite = createAction<OfferType>(`${NameSpace.Favorites}/deleteFavorite`);

export const changeSortAction = createAction(CHANGE_SORT, (sorting: string) => ({
  payload: {
    sortingType: sorting,
  },
}));
