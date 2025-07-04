import React from 'react';
import { Home, Building, Heart } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
              <Home className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-4xl font-bold text-amber-400 mb-2">250+</h3>
            <p className="text-gray-400 text-lg">Homes Sold</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
              <Building className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-4xl font-bold text-amber-400 mb-2">45</h3>
            <p className="text-gray-400 text-lg">Properties</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
              <Heart className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">And your happiness.</h3>
            <p className="text-gray-400 text-lg">Priceless...</p>
          </div>
        </div>
      </div>
    </section>
  );
};