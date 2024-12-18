import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Plus, Navigation, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import BinMarker from '../components/BinMarker';
import BinList from '../components/BinList';
import AddBinForm from '../components/AddBinForm';
import TruckMarker from '../components/TruckMarker';
import RouteDirections from '../components/RouteDirections';

const CollectorDashboard = () => {
  const [bins, setBins] = useState([
    { id: 1, lat: 40.7128, lng: -74.0060, fullness: 75 },
    { id: 2, lat: 40.7148, lng: -74.0040, fullness: 85 },
    { id: 3, lat: 40.7138, lng: -74.0020, fullness: 70 },
    { id: 4, lat: 40.7158, lng: -74.0080, fullness: 90 },
    { id: 5, lat: 40.7168, lng: -74.0030, fullness: 45 },
  ]);

  const [newBin, setNewBin] = useState({ lat: '', lng: '', fullness: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [showOptimizedRoute, setShowOptimizedRoute] = useState(false);
  const [truckPosition, setTruckPosition] = useState(null);
  const [showTruckForm, setShowTruckForm] = useState(false);
  const [truckLocationInput, setTruckLocationInput] = useState({ lat: '', lng: '' });

  const handleAddBin = (e) => {
    e.preventDefault();
    const bin = {
      id: Date.now(),
      lat: parseFloat(newBin.lat),
      lng: parseFloat(newBin.lng),
      fullness: parseInt(newBin.fullness),
    };
    setBins([...bins, bin]);
    setNewBin({ lat: '', lng: '', fullness: '' });
    setShowAddForm(false);
  };

  const handleRemoveBin = (id) => {
    setBins(bins.filter(bin => bin.id !== id));
  };

  const handleBinFormChange = (e) => {
    const { name, value } = e.target;
    setNewBin(prev => ({ ...prev, [name]: value }));
  };

  const handleTruckLocationSubmit = (e) => {
    e.preventDefault();
    setTruckPosition([
      parseFloat(truckLocationInput.lat),
      parseFloat(truckLocationInput.lng)
    ]);
    setShowTruckForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Collector Dashboard</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setShowTruckForm(!showTruckForm)}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Set Truck Location
            </button>
            <button
              onClick={() => setShowOptimizedRoute(!showOptimizedRoute)}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              disabled={!truckPosition}
            >
              <Navigation className="w-5 h-5 mr-2" />
              {showOptimizedRoute ? 'Hide Route' : 'Show Optimized Route'}
            </button>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Bin
            </button>
          </div>
        </div>

        {showTruckForm && (
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-4">Set Truck Location</h2>
            <form onSubmit={handleTruckLocationSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Latitude"
                value={truckLocationInput.lat}
                onChange={(e) => setTruckLocationInput(prev => ({ ...prev, lat: e.target.value }))}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Longitude"
                value={truckLocationInput.lng}
                onChange={(e) => setTruckLocationInput(prev => ({ ...prev, lng: e.target.value }))}
                className="p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Set Location
              </button>
            </form>
          </div>
        )}

        {showAddForm && (
          <AddBinForm
            newBin={newBin}
            onSubmit={handleAddBin}
            onChange={handleBinFormChange}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <MapContainer
              center={[40.7128, -74.0060]}
              zoom={13}
              style={{ height: '600px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {bins.map((bin) => (
                <BinMarker
                  key={bin.id}
                  bin={bin}
                  onRemove={handleRemoveBin}
                />
              ))}
              {truckPosition && <TruckMarker position={truckPosition} />}
              {showOptimizedRoute && truckPosition && (
                <RouteDirections truckPosition={truckPosition} bins={bins} />
              )}
            </MapContainer>
          </div>

          <BinList bins={bins} onRemove={handleRemoveBin} />
        </div>
      </div>
    </div>
  );
};

export default CollectorDashboard;