import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const TruckMarker = ({ position }) => {
  const truckIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <Marker position={position} icon={truckIcon}>
      <Popup>
        <div>
          <p className="font-semibold">Garbage Truck</p>
          <p className="text-sm text-gray-600">
            Current Location: {position[0].toFixed(4)}, {position[1].toFixed(4)}
          </p>
        </div>
      </Popup>
    </Marker>
  );
};

export default TruckMarker;