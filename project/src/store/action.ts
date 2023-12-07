import { createAction } from '@reduxjs/toolkit';
import { City } from '../types';
import { SortTypes } from '../const';

export const changeCity = createAction<{ city: City }>('location/changeCity');
export const setSortType = createAction<{ sortType: SortTypes }>(
  'place-card-list/setSortType'
);
