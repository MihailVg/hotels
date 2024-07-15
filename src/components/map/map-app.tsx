import { useEffect, useState } from 'react';
import { offersData } from '../../mocks/offers.data';
import { CityType, LocationType, OfferType } from '../../types';
import Map from './map';

const POINTS: LocationType[] = offersData
  .filter((offer) => offer.city.name === 'Amsterdam')
  .map((offer) => offer.location);

const CITY: CityType = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
};

type MapAppProps = {
  activeOffer: OfferType | null;
  mapClass?: string;
};

export default function MapApp({ activeOffer, mapClass }: MapAppProps) {
  const [selectedPoint, setSelectedPoint] = useState<LocationType | null>(null);

  useEffect(() => {
    const currentPoint = POINTS.find(
      (item) => item.latitude === activeOffer?.location.latitude
    );

    if (currentPoint) {
      setSelectedPoint(currentPoint);
    } else {
      setSelectedPoint(null);
    }
  }, [activeOffer]);

  return (
    <Map
      city={CITY}
      points={POINTS}
      selectedPoint={selectedPoint}
      mapClass={mapClass}
    />
  );
}
