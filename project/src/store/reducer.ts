import { City, Offer } from './../types/index';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers, setSortType } from './action';
import { placeCardsMock } from '../mock/offers';
import { SORT_TYPES, SortTypes } from '../const';

type InitialState = {
  city: City;
  offers: Offer[];
  sortType: SortTypes;
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
  offers: placeCardsMock,
  sortType: SORT_TYPES.POPULAR,
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
    });
});

export { reducer };
