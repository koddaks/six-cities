import { createAction } from '@reduxjs/toolkit';

type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

export const changeCity = createAction<{ city: City }>('location/changeCity');
