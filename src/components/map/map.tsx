import { useEffect, useRef, useState } from 'react';
import { offersData } from '../../mocks/offers.data';
import { CityType, LocationType, OfferType } from '../../types';
import useMap from './use-map';
import leaflet from 'leaflet';

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

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

type MapProps = {
  city: CityType;
  points: LocationType[];
  selectedPoint: LocationType | null;
  mapClass?: string;
};

function Map({ city, points, selectedPoint, mapClass }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city, selectedPoint });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((item) => {
        leaflet
          .marker(
            {
              lat: item.latitude,
              lng: item.longitude,
            },
            {
              icon:
                item.latitude === selectedPoint?.latitude
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, defaultCustomIcon, currentCustomIcon, selectedPoint]);

  return <div className={`${mapClass} map`} ref={mapRef}></div>;
}

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

// type MapProps = {
//   className: string;
// };

// export default function Map({className} : MapProps) {
//   return <section className={`${className} map`}></section>;
// }
