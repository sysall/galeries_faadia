import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Properties } from './components/Properties';
import { Modal } from './components/Modal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { houses } from './data/houses';
import { House } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHouseClick = (house: House) => {
    setSelectedHouse(house);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedHouse(null);
  };

  return (
    <div className="bg-black min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Stats />
      <Properties houses={houses} onHouseClick={handleHouseClick} />
      <Contact />
      <Footer />
      <Modal 
        house={selectedHouse} 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
      />
    </div>
  );
}

export default App;