import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types';

type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

export const changeCity = createAction<{ city: City; offers: Offer[] }>(
  'location/changeCity'
);
