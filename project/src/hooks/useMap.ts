import {useEffect, useState, useRef} from 'react';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {

  }, []);

  return map;
}

export default useMap;
