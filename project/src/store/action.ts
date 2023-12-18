import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types';
import { AppRoute, AuthorizationStatus, SortType } from '../const';

export const changeCity = createAction<{ city: City }>('location/changeCity');
export const setSortType = createAction<{ sortType: SortType }>(
  'place-card-list/setSortType'
);
export const getOffers = createAction<{ offers: Offer[] }>('data/getOffers');
export const getOfferById = createAction<{ offer: Offer }>('data/getOfferById');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setIsOffersLoadingStatus = createAction<{
  isOffersLoading: boolean;
}>('data/setDataLoadingStatus');
export const setError = createAction<{ error: string | null }>('app/error');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
