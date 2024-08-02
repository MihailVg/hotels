import { useEffect, useRef, useState } from 'react';
import useMap from '../../hooks/use-map/use-map';
import { PreviewOfferType } from '../../types';

type MapProps = {
  points: PreviewOfferType[];
  activeOffer?: PreviewOfferType | null;
  className?: string;
};

export default function Map({ points, activeOffer, className }: MapProps) {
  const { city } = points[0];
  const mapRef = useRef(null);
  const [selectedPoint, setSelectedPoint] = useState<PreviewOfferType | null>(
    null
  );
  const map = useMap({ mapRef, city, selectedPoint, points });

  useEffect(() => {
    const currentPoint = points.find(
      (point) => point.location.latitude === activeOffer?.location.latitude
    );

    if (currentPoint) {
      setSelectedPoint(currentPoint);
    } else {
      setSelectedPoint(null);
    }

    if (selectedPoint) {
      map?.flyTo(
        [selectedPoint.location.latitude, selectedPoint.location.longitude],
        selectedPoint.location.zoom
      );
    } else {
      map?.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [activeOffer, points, selectedPoint, city, map]);

  return <section className={`${className} map`} ref={mapRef}></section>;
}
