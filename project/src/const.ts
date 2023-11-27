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

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const PLACE_CARD_CLASS_NAMES_MAP = {
  cities: {
    article: 'cities__card place-card',
    imageWrapper: 'cities__image-wrapper place-card__image-wrapper',
  },
  nearPlaces: {
    article: 'near-places__card place-card',
    imageWrapper: 'near-places__image-wrapper place-card__image-wrapper',
  },
  favorites: {
    article: 'favorites__card place-card',
    imageWrapper: 'favorites__image-wrapper place-card__image-wrapper',
  },
};
