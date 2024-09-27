import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const getReviews = (state: State) => state[NameSpace.Reviews].reviews;
