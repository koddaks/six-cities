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
  Offers = '/offers',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export type ErrorResponse = {
  error?: string | undefined;
};

export const SORT_TYPE = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
} as const;

export type SortType = keyof typeof SORT_TYPE;

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export const REVIEW_RATING = [
  {
    title: 'perfect',
    value: 5,
  },
  {
    title: 'good',
    value: 4,
  },
  {
    title: 'not bad',
    value: 3,
  },
  {
    title: 'badly',
    value: 2,
  },
  {
    title: 'terribly',
    value: 1,
  },
];

export enum FavoriteStatus {
  Favorite = 1,
  NotFavorite = 0,
}


