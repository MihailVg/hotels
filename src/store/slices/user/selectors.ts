import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const getUserInfo = (state: State) => state[NameSpace.User].user;
export const getAuthStatus = (state: State) => state[NameSpace.User].authStatus;
