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

export const firstLetterToUpperCase = (word: string) => {
  if (word.toLowerCase() === 'room') {
    return 'Private Room';
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const hasEnglishCharacters = (password: string) => /[a-zA-Z]/.test(password);
export const isAnySpaces = (password: string) => /\s/.test(password);
export const hasNumber = (password: string) => /\d/.test(password);
