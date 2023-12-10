import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types';
import { APIRoute } from '../const';
import { getOffers, setDataLoadingStatus } from './action';

export const getOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(setDataLoadingStatus({ isDataLoaded: true }));
  dispatch(getOffers({ offers: data }));
  dispatch(setDataLoadingStatus({ isDataLoaded: false }));
});
