import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-blue-600 font-bold text-2xl flex items-center">
            Heartland Workforce
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#overview" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Overview
          </a>
          <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Features
          </a>
          <a href="#beta" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Beta Program
          </a>
          <a href="#beta" className="btn-primary">
            Join the Free Beta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen bg-white' : 'max-h-0'
      }`}>
        <div className="container-custom py-4 space-y-4">
          <a 
            href="#overview" 
            className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Overview
          </a>
          <a 
            href="#features" 
            className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#beta" 
            className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Beta Program
          </a>
          <a 
            href="#beta" 
            className="block btn-primary w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Join the Free Beta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;