import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { Offer } from '../../types';
import { useParams } from 'react-router-dom';
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
  const { id } = useParams<{ id: string }>();

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

      const currentProperty = offers.find(
        (offer) => offer.id.toString() === id
      );
      if (currentProperty) {
        leaflet
          .circle(
            {
              lat: currentProperty.location.latitude,
              lng: currentProperty.location.longitude,
            },
            {
              color: 'steelblue',
              radius: 5000,
              fillColor: 'steelblue',
              opacity: 0.5,
            }
          )
          .addTo(map);

        leaflet
          .marker(
            {
              lat: currentProperty.location.latitude,
              lng: currentProperty.location.longitude,
            },
            {
              icon: leaflet.icon(currentCustomIcon),
            }
          )
          .addTo(map);
      }
    }
  }, [map, offers, placeLocationId, id]);

  return (
    <div
      style={{ height: '100%', maxWidth: '1144px', margin: '0 auto' }}
      ref={mapRef}
    ></div>
  );
}

export default Map;
