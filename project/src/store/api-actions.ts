import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types';
import { APIRoute } from '../const';
import { getOffers, setIsOffersLoadingStatus } from './action';

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
  dispatch(getOffers({ offers: data }));
  dispatch(setIsOffersLoadingStatus({ isOffersLoading: false }));
});
