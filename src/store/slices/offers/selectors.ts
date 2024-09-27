import { State } from '../../../types/state';
import { NameSpace } from '../../../const.ts';

export const getOffers = (state: State) => state[NameSpace.Offers].offers;
export const getOffersLoadingStatus = (state: State) =>
  state[NameSpace.Offers].isOfferLoading;
export const getCurrentCity = (state: State) =>
  state[NameSpace.Offers].currentCity;
export const getSorting = (state: State) =>
  state[NameSpace.Offers].sorting;
