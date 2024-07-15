import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import { CityType, LocationType } from '../../types';

type UseMapProps = {
  mapRef: React.MutableRefObject<null>;
  city: CityType;
  selectedPoint: LocationType | null;
}

export default function useMap({mapRef, city, selectedPoint} : UseMapProps) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: selectedPoint ? selectedPoint.latitude : city.location.latitude,
          lng: selectedPoint ? selectedPoint.longitude : city.location.longitude,
        },
        zoom: selectedPoint ? selectedPoint.zoom : city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);

      isRenderedRef.current = true;
    }
  }, [mapRef, city, selectedPoint]);

  console.log(map);
  return map;
}
