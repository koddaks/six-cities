export type Offer = {
  premium: boolean;
  src: string;
  value: number;
  isFavorite: boolean;
  housingType: string;
  cardName: string;
  cardLink: string;
  rating: number;
  id: number;
  bedrooms?: number;
  maxAdults?: number;
  location?: PropertiesLocation;
};

export type PropertiesLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};
