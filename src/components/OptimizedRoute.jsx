import React, { useEffect, useState } from 'react';
import { Polyline } from 'react-leaflet';
import { findOptimalRoute } from '../utils/astar';

const OptimizedRoute = ({ bins }) => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    const optimizedRoute = findOptimalRoute(bins);
    const coordinates = optimizedRoute.map(bin => [bin.lat, bin.lng]);
    setRouteCoordinates(coordinates);
  }, [bins]);

  return (
    <Polyline
      positions={routeCoordinates}
      color="green"
      weight={3}
      opacity={0.7}
      dashArray="10"
    />
  );
}

export default OptimizedRoute;