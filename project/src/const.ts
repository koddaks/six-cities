export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Property = '/property',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Favorites = '/favorite',
  Login = '/login',
}

export const SORT_TYPE = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
} as const;

type SortTypesValues<T> = T[keyof T];

export type SortTypes = SortTypesValues<typeof SORT_TYPE>;
