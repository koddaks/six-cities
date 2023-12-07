import { SortTypes } from '../const';
import { Offer } from '../types';

export const sortOffers = (offers: Offer[], sortType: SortTypes): Offer[] => {
  let sortedOffers = [...offers];

  switch (sortType) {
    case 'Price: low to high':
      return (sortedOffers = sortedOffers.sort((a, b) => a.price - b.price));

    case 'Price: high to low':
      return (sortedOffers = sortedOffers.sort((a, b) => b.price - a.price));

    case 'Top rated first':
      return (sortedOffers = sortedOffers.sort((a, b) => b.rating - a.rating));

    default:
      return sortedOffers;
  }
};
