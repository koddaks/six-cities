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

export const ratingProperty = (rating: number): string =>
  ((rating / 5) * 100).toFixed(1);
