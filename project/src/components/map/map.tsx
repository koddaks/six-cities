import { useRef } from 'react';
// import React from 'react';
// import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: object;
};

function Map({ city }: MapProps) {
  const mapRef = useRef(null);

  return (
    <section
      className="cities__map map"
      style={{ height: '100%' }}
      ref={mapRef}
    />
  );
}

export default Map;
