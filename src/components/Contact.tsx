import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-400 mb-6">
            CONTACTS
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-md border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-md border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button className="w-full bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-md font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-amber-400" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-400">000-XXX14120 / 000-XXXX6144</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-amber-400" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400">info@luxehomes.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-amber-400" />
              <div>
                <p className="text-white font-medium">Address</p>
                <p className="text-gray-400">123 Luxury Ave, Beverly Hills, CA 90210</p>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};