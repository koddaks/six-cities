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
  location: PropertiesLocation;
  reviews?: Review[] | undefined;
};

export type Review = {
  id: number;
  userId: number;
  username: string;
  userPhoto: string;
  date: Date;
  rating: number;
  comment: string;
};

export type PropertiesLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};
