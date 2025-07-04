import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { House } from '../types';

interface PropertyCardProps {
  house: House;
  onClick: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ house, onClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={house.mainImage}
          alt={house.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full">
          <span className="text-amber-400 font-bold text-lg">{house.price}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{house.title}</h3>
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{house.location}</span>
        </div>
        
        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span className="text-sm">{house.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span className="text-sm">{house.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span className="text-sm">{house.sqft.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};