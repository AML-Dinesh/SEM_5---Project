import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Recycle, Route, Fuel } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Waste Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              Smart Waste Collection Route Optimization
            </h1>
            <p className="text-2xl text-gray-200 mb-8">
              Revolutionizing waste management with AI-powered route optimization
            </p>
            <button
              onClick={() => navigate('/login')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors transform hover:scale-105 duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Choose Our Solution?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard
              icon={<Route className="w-16 h-16 text-green-600" />}
              title="Smart Routing"
              description="AI-powered route optimization reduces collection time by up to 30%"
              image="https://images.unsplash.com/photo-1577462282715-36dc53ab0a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <FeatureCard
              icon={<Fuel className="w-16 h-16 text-green-600" />}
              title="Eco-Friendly"
              description="Reduce fuel consumption and carbon emissions by optimizing routes"
              image="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <FeatureCard
              icon={<Truck className="w-16 h-16 text-green-600" />}
              title="Real-time Tracking"
              description="Monitor collection vehicles and bin status in real-time"
              image="https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <FeatureCard
              icon={<Recycle className="w-16 h-16 text-green-600" />}
              title="Smart Analytics"
              description="Data-driven insights to improve waste management efficiency"
              image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, image }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default LandingPage;