import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types';
import { AuthorizationStatus, SortType } from '../const';

export const changeCity = createAction<{ city: City }>('location/changeCity');
export const setSortType = createAction<{ sortType: SortType }>(
  'place-card-list/setSortType'
);
export const getOffers = createAction<{ offers: Offer[] }>('data/getOffers');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setDataLoadingStatus = createAction<{ isDataLoaded: boolean }>(
  'data/setDataLoadingStatus'
);
