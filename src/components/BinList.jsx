import React from 'react';
import { Trash2 } from 'lucide-react';

const BinList = ({ bins, onRemove }) => {
  const fullBins = bins.filter(bin => bin.fullness > 65);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Bin List</h2>
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Bins requiring collection (&gt;65% full): {fullBins.length}
        </p>
      </div>
      <div className="space-y-4">
        {bins.map((bin) => (
          <div
            key={bin.id}
            className={`p-4 border rounded-lg hover:bg-gray-50 ${
              bin.fullness > 65 ? 'border-red-300' : ''
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Bin #{bin.id}</h3>
                <p className="text-sm text-gray-500">
                  Lat: {bin.lat}, Lng: {bin.lng}
                </p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        bin.fullness > 65 ? 'bg-red-600' : 'bg-green-600'
                      }`}
                      style={{ width: `${bin.fullness}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Fullness: {bin.fullness}%
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemove(bin.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BinList;