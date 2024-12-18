import React from 'react';

const AddBinForm = ({ newBin, onSubmit, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold mb-4">Add New Bin</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Latitude"
          name="lat"
          value={newBin.lat}
          onChange={onChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Longitude"
          name="lng"
          value={newBin.lng}
          onChange={onChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Fullness %"
          name="fullness"
          value={newBin.fullness}
          onChange={onChange}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Bin
        </button>
      </form>
    </div>
  );
};

export default AddBinForm;