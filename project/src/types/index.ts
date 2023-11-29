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

export type NewOffer = {
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: [string];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: [string];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  bedrooms: number;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Review = {
  id: number;
  userId: number;
  username: string;
  userPhoto: string;
  date: string;
  rating: number;
  comment: string;
};

export type PropertiesLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  lat: number;
  lng: number;
  zoom: number;
};
