import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
                      <h2 className="text-4xl sm:text-5xl font-bold text-gold-400 mb-6">
            ABOUT US
          </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Access our real estate services for the purchase of prestigious apartments and houses. We offer you tailor-made support by putting you in touch with qualified experts to guarantee fast, efficient transactions. Whether you're looking for a property or an apartment in Senegal or abroad, we ensure that every step is perfectly orchestrated to meet your highest expectations..
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Faadia Homes is a perfect consolidation of Real Estate & 
              Hospitality industry.
            </p>
            <button className="text-gold-400 hover:text-gold-300 font-medium text-lg border-b border-gold-400 hover:border-gold-300 transition-colors">
              Learn more →
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Luxury Building"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};