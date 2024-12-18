import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Trash2 } from 'lucide-react';
import L from 'leaflet';

const BinMarker = ({ bin, onRemove }) => {
  const icon = new L.Icon({
    iconUrl: bin.fullness > 65 
      ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
      : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <Marker 
      position={[bin.lat, bin.lng]}
      icon={icon}
    >
      <Popup>
        <div>
          <p>Bin #{bin.id}</p>
          <p>Fullness: {bin.fullness}%</p>
          <button
            onClick={() => onRemove(bin.id)}
            className="flex items-center text-red-600 mt-2"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Remove Bin
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

export default BinMarker;