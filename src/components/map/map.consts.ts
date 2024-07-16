import leaflet from 'leaflet';

export const TileLayerOptions = {
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

type CustomIconType = {
  defaultIcon: string;
  currentIcon: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
}

const customIcon: CustomIconType = {
  defaultIcon: './img/pin.svg',
  currentIcon: './img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [14, 39],
};

export const defaultCustomIcon = leaflet.icon({
  iconUrl: customIcon.defaultIcon,
  iconSize: customIcon.iconSize,
  iconAnchor: customIcon.iconAnchor,
});

export const currentCustomIcon = leaflet.icon({
  iconUrl: customIcon.currentIcon,
  iconSize: customIcon.iconSize,
  iconAnchor: customIcon.iconAnchor,
});
