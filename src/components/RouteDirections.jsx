import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

const RouteDirections = ({ truckPosition, bins }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !truckPosition || bins.length === 0) return;

    // Filter bins with fullness > 65%
    const fullBins = bins.filter(bin => bin.fullness > 65);
    if (fullBins.length === 0) return;

    // Create waypoints starting from truck position
    const waypoints = [
      L.latLng(truckPosition[0], truckPosition[1]),
      ...fullBins.map(bin => L.latLng(bin.lat, bin.lng))
    ];

    // Create routing control
    const routingControl = L.Routing.control({
      waypoints,
      routeWhileDragging: false,
      showAlternatives: false,
      lineOptions: {
        styles: [
          { color: 'green', opacity: 0.8, weight: 4 }
        ]
      },
      createMarker: () => null // Don't create default markers
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, truckPosition, bins]);

  return null;
};

export default RouteDirections;