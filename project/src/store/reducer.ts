import { City, Offer } from './../types/index';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  getOffers,
  requireAuthorization,
  setDataLoadingStatus,
  setSortType,
} from './action';
import { AuthorizationStatus, SortType } from '../const';

type InitialState = {
  city: City;
  offers: Offer[];
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
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
  sortType: 'POPULAR',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: true,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoaded = action.payload.isDataLoaded;
    });
});

export { reducer };
