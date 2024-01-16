import { NameSpace } from '../../const';
import { Offer, Review } from '../../types';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Data].offerById;
export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Data].offersNearby;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getIsLoading = (state: State): boolean => state[NameSpace.Data].isLoading;
export const getIsFavoritesLoading = (state: State): boolean => state[NameSpace.Data].isLoading;
export const getFavorites = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;

