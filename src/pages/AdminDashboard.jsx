import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Truck, Fuel, MapPin, BarChart as ChartIcon } from 'lucide-react';

const data = [
  { name: 'Route 1', distance: 45, fuel: 12 },
  { name: 'Route 2', distance: 35, fuel: 9 },
  { name: 'Route 3', distance: 55, fuel: 15 },
  { name: 'Route 4', distance: 40, fuel: 11 },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Truck className="w-8 h-8 text-green-600" />}
            title="Total Distance"
            value="175 km"
            subtitle="Today's routes"
          />
          <StatCard
            icon={<Fuel className="w-8 h-8 text-green-600" />}
            title="Fuel Saved"
            value="47 L"
            subtitle="vs. traditional routes"
          />
          <StatCard
            icon={<MapPin className="w-8 h-8 text-green-600" />}
            title="Active Bins"
            value="142"
            subtitle="Currently monitored"
          />
          <StatCard
            icon={<ChartIcon className="w-8 h-8 text-green-600" />}
            title="Efficiency"
            value="89%"
            subtitle="Route optimization"
          />
        </div>

        {/* Charts */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Route Analytics</h2>
          <BarChart width={800} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="distance" fill="#059669" name="Distance (km)" />
            <Bar dataKey="fuel" fill="#047857" name="Fuel Usage (L)" />
          </BarChart>
        </div>

        {/* Bin Status Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Bin Status</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bin ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fullness
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Collected
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">BIN-{i}001</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Location {i}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(Math.random() * 30) + 70}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date().toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, subtitle }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-3 text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
    <p className="text-sm text-gray-500">{subtitle}</p>
  </div>
);

export default AdminDashboard;
