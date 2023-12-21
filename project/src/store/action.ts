import { createAction } from '@reduxjs/toolkit';
import { City, Offer, Review } from '../types';
import { AppRoute, AuthorizationStatus, SortType } from '../const';

export const changeCity = createAction<{ city: City }>('location/changeCity');
export const setSortType = createAction<{ sortType: SortType }>(
  'place-card-list/setSortType'
);
export const getOffers = createAction<{ offers: Offer[] }>('data/getOffers');
export const getOfferById = createAction<{ offer: Offer }>('data/getOfferById');
export const getOffersNearby = createAction<{ offersNearby: Offer[] }>(
  'data/getOffersNearby'
);
export const getReviewsbyId = createAction<{ reviews: Review[] }>(
  'data/getReviewsbyId'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setIsLoadingStatus = createAction<{
  isLoading: boolean;
}>('data/setDataLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
