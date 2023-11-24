import { useRef } from 'react';
import useMap from '../../hooks/useMap';
// import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
type City = {
  lat: number;
  lng: number;
  zoom: number;
};

type MapProps = {
  city: City;
};

function Map({ city }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });
  // console.log(city);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
