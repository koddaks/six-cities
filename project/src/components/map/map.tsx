import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import leaflet, { latLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { Offer } from '../../types';
type City = {
  lat: number;
  lng: number;
  zoom: number;
};

type MapProps = {
  city: City;
  placeLocationId: number | null;
  offers: Offer[];
};
type CustomIconOptionsTemplate = {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
};

function Map({ city, offers, placeLocationId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  useEffect(() => {
    const defaultCustomIcon: CustomIconOptionsTemplate = {
      iconUrl: URL_MARKER_DEFAULT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    };

    const currentCustomIcon: CustomIconOptionsTemplate = {
      iconUrl: URL_MARKER_CURRENT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    };

    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon:
                point.id === placeLocationId
                  ? leaflet.icon(currentCustomIcon)
                  : leaflet.icon(defaultCustomIcon),
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, placeLocationId]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
