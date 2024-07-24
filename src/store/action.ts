import { createAction } from '@reduxjs/toolkit';
import { CHANGE_CITY, CHANGE_SORT } from './redux.consts';

// eslint-disable-next-line prefer-arrow-callback
export const changeCity = createAction(CHANGE_CITY, function prepare(index: number) {
  return {
    payload: {
      index: index,
    }
  };
});

// eslint-disable-next-line prefer-arrow-callback
export const changeSort = createAction(CHANGE_SORT, function prepare(sorting: string) {
  return {
    payload: {
      sortingType: sorting,
    }
  };
});
