import React from 'react';
import { PropertyCard } from './PropertyCard';
import { House } from '../types';

interface PropertiesProps {
  houses: House[];
  onHouseClick: (house: House) => void;
}

export const Properties: React.FC<PropertiesProps> = ({ houses, onHouseClick }) => {
  return (
    <section id="properties" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold-400 mb-6">
            PROPERTIES
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our exclusive collection of luxury properties in prime locations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {houses.map((house) => (
            <PropertyCard
              key={house.id}
              house={house}
              onClick={() => onHouseClick(house)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};