import { City, Offer, Review } from './../types/index';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  getOfferById,
  getOffers,
  getOffersNearby,
  requireAuthorization,
  setIsLoadingStatus,
  setSortType,
} from './action';
import { AuthorizationStatus, SortType } from '../const';

type InitialState = {
  city: City;
  offers: Offer[];
  offerById: Offer | null;
  offersNearby: Offer[];
  reviews: Review[];
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  isLoading: boolean;
};

const initialState: InitialState = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  offers: [],
  offerById: null,
  offersNearby: [],
  reviews: [],
  sortType: 'POPULAR',
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { name, location } = action.payload.city;

      state.city = { name, location };
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload.sortType;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(getOfferById, (state, action) => {
      state.offerById = action.payload.offer;
    })
    .addCase(getOffersNearby, (state, action) => {
      state.offersNearby = action.payload.offersNearby;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setIsLoadingStatus, (state, action) => {
      state.isLoading = action.payload.isLoading;
    });
});

export { reducer };
