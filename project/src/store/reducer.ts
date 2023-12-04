import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { placeCardsMock } from '../mock/offers';

const initialState = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  offers: placeCardsMock,
  filteredOffers: placeCardsMock.filter((item) => item.city.name === 'Paris'),
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const { name } = action.payload.city;

    state.city.name = name;

    state.filteredOffers = state.offers.filter(
      (item) => item.city.name === name
    );
  });
});

export { reducer };
