import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square, Maximize2 } from 'lucide-react';
import { House } from '../types';

interface ModalProps {
  house: House | null;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ house, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !house) return;
      
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, house, isFullscreen, currentImageIndex]);

  if (!isOpen || !house) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % house.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + house.images.length) % house.images.length);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // Fullscreen Image Component
  const FullscreenImage = () => (
    <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center">
      <button
        onClick={closeFullscreen}
        className="absolute top-6 right-6 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      
      <img
        src={house.images[currentImageIndex]}
        alt={`${house.title} ${currentImageIndex + 1}`}
        className="max-w-full max-h-full object-contain"
      />
      
      {house.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full">
        <span className="text-white text-sm">
          {currentImageIndex + 1} / {house.images.length}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
          
          <div className="relative bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative">
              <div className="relative cursor-pointer group" onClick={openFullscreen}>
                <img
                  src={house.images[currentImageIndex]}
                  alt={house.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 p-3 rounded-full">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              {house.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full">
                <span className="text-amber-400 font-bold text-lg">{house.price}</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full">
                <span className="text-white text-sm">
                  {currentImageIndex + 1} / {house.images.length}
                </span>
              </div>
            </div>
            
            <div className="p-6 max-h-96 overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-2">{house.title}</h2>
              <div className="flex items-center text-gray-400 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{house.location}</span>
              </div>
              
              <div className="flex items-center space-x-6 mb-6 text-gray-300">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2" />
                  <span>{house.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2" />
                  <span>{house.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2" />
                  <span>{house.sqft.toLocaleString()} sq ft</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {house.description}
              </p>
              
              {house.images.length > 1 && (
                <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
                  {house.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all hover:scale-105 ${
                        index === currentImageIndex
                          ? 'border-amber-400'
                          : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${house.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
              
              <div className="flex space-x-4">
                <button className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-md font-medium transition-colors flex-1">
                  Schedule Tour
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex-1">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isFullscreen && <FullscreenImage />}
    </>
  );
};