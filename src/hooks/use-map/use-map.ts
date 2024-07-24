import leaflet, { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import { CityType, OfferType } from '../../types';
import {
  currentCustomIcon,
  defaultCustomIcon,
  TileLayerOptions,
} from '../../components/map/map.consts';
import { useNavigate } from 'react-router-dom';
import { changeOfferPageId } from '../../utils/utils';

type UseMapProps = {
  mapRef: React.MutableRefObject<null>;
  city: CityType;
  selectedPoint: OfferType | null;
  points: OfferType[];
};

export default function useMap({
  mapRef,
  city,
  selectedPoint,
  points,
}: UseMapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (mapRef.current === null) {
      return;
    }

    if (isRenderedRef.current) {
      return;
    }

    const instance = leaflet.map(mapRef.current, {
      center: {
        lat: selectedPoint
          ? selectedPoint.location.latitude
          : city.location.latitude,
        lng: selectedPoint
          ? selectedPoint.location.longitude
          : city.location.longitude,
      },
      zoom: selectedPoint ? selectedPoint.location.zoom : city.location.zoom,
    });

    leaflet
      .tileLayer(TileLayerOptions.url, {
        attribution: TileLayerOptions.attribution,
      })
      .addTo(instance);

    setMap(instance);

    isRenderedRef.current = true;
  }, [mapRef, city, selectedPoint]);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon:
                point.location.latitude === selectedPoint?.location.latitude
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .on('click', () => navigate(changeOfferPageId(point.id)))
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint, navigate]);

  return map;
}
