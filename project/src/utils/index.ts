import { Offer } from '../types';

export const ratingProperty = (rating: number): string =>
  ((rating / 5) * 100).toFixed(1);

export const updateFavoriteStatus = (
  offers: Offer[],
  targetId: number,
  newIsFavorite: boolean
): Offer[] =>
  offers.map((offer) =>
    offer.id === targetId ? { ...offer, isFavorite: newIsFavorite } : offer
  );
