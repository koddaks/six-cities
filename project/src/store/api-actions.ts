import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import {
  getOfferById,
  getOffers,
  getOffersNearby,
  redirectToRoute,
  requireAuthorization,
  setIsLoadingStatus,
} from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

export const getOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setIsLoadingStatus({ isLoading: true }));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(getOffers({ offers: data }));
  dispatch(setIsLoadingStatus({ isLoading: false }));
});

export const getOfferByIdAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOfferById', async (hotelId, { dispatch, extra: api }) => {
  dispatch(setIsLoadingStatus({ isLoading: true }));
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${hotelId}`);
  dispatch(getOfferById({ offer: data }));
  dispatch(setIsLoadingStatus({ isLoading: false }));
});

export const getOffersNearbyAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOfferById', async (hotelId, { dispatch, extra: api }) => {
  dispatch(setIsLoadingStatus({ isLoading: true }));
  const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${hotelId}/nearby`);
  dispatch(getOffersNearby({ offersNearby: data }));
  dispatch(setIsLoadingStatus({ isLoading: false }));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  dispatch(setIsLoadingStatus({ isLoading: true }));
  try {
    await api.get(APIRoute.Login);
    dispatch(setIsLoadingStatus({ isLoading: false }));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
