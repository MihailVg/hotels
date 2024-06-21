import { CityType } from './city.type';
import { HostType } from './host.type';
import { LocationType } from './location.type';

export type OfferType = {
  city: CityType;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: HostType;
  description: string;
  location: LocationType;
  id: string;
};
