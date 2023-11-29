import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { City, Offer } from '../../types';
import { useParams } from 'react-router-dom';

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

function Map({ city, offers, placeLocationId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      const locationOfRentalOffers = offers.filter(
        (offer) => offer.id.toString() !== id
      );

      locationOfRentalOffers.forEach((point) => {
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
  }, [map, offers, placeLocationId, id]);

  return (
    <div
      style={{ height: '100%', maxWidth: '1144px', margin: '0 auto' }}
      ref={mapRef}
    />
  );
}

export default Map;
