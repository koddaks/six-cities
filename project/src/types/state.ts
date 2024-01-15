import { City, Offer, Review } from '.';
import { AuthorizationStatus, SortType } from '../const';
import { store } from '../store';
import { UserDataProfile } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserDataProfile;
};

export type AppProcess = {
  city: City;
  sortType: SortType;
};

export type AppData = {
  offers: Offer[];
  offerById: Offer | null;
  offersNearby: Offer[];
  reviews: Review[];
  favoriteOffers: Offer[];
  isLoading: boolean;
};
