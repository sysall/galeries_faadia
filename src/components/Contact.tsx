import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold-400 mb-6">
            CONTACTS
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <img
              src="/src/logofaadia.jpeg"
              alt="Faadia Logo"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-gold-400" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-400">+221 78 171 91 15</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gold-400" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400">contact@faadia-conciergerie.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-gold-400" />
              <div>
                <p className="text-white font-medium">Address</p>
                <p className="text-gray-400">Nord foire, Dakar-SN</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};