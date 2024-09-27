import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const getOffer = (state: State) => state[NameSpace.Offer].currentOffer;
