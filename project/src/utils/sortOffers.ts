import { SortType } from '../const';
import { Offer } from '../types';

export const sortOffers = (offers: Offer[], sortType: SortType): Offer[] => {
  let sortedOffers = [...offers];

  switch (sortType) {
    case 'PRICE_LOW_TO_HIGH':
      return (sortedOffers = sortedOffers.sort((a, b) => a.price - b.price));

    case 'PRICE_HIGH_TO_LOW':
      return (sortedOffers = sortedOffers.sort((a, b) => b.price - a.price));

    case 'TOP_RATED_FIRST':
      return (sortedOffers = sortedOffers.sort((a, b) => b.rating - a.rating));

    default:
      return sortedOffers;
  }
};
