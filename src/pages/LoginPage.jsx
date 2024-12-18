import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('admin');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, implement actual authentication
    navigate(userType === 'admin' ? '/admin' : '/collector');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User Type
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="admin">Admin</option>
              <option value="collector">Garbage Collector</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
