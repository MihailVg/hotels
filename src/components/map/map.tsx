import { useEffect, useRef } from 'react';
import useMap from './use-map';
import { CityType, LocationType } from '../../types';
import leaflet from 'leaflet';

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

type MapProps = {
  city: CityType;
  points: LocationType[];
  selectedPoint: LocationType | null;
  mapClass?: string;
};

export default function Map({
  city,
  points,
  selectedPoint,
  mapClass,
}: MapProps) {
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
