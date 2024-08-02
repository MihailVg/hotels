import { createAction } from '@reduxjs/toolkit';
import { CHANGE_SORT } from './redux.consts';
import { CityNamesType } from '../types/city-names.type';
import { NameSpace } from '../const';
import { OfferType, PreviewOfferType } from '../types';

export const changeCity = createAction<{ city: CityNamesType }>(
  `${NameSpace.Offers}/setActiveCity`
);

export const loadOffers = createAction<PreviewOfferType[]>(`${NameSpace.Offers}/loadOffers`);
export const loadOffer = createAction<OfferType | null>(`${NameSpace.Offer}/loadOffer`);
export const setOffersLoadingStatus = createAction<boolean>(`${NameSpace.Offers}/setOffersLoadingStatus`);

export const changeSort = createAction(CHANGE_SORT, (sorting: string) => ({
  payload: {
    sortingType: sorting,
  },
}));
