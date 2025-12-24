import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-royal-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                {/* Placeholder Logo */}
                <span className="text-royal-900 font-bold text-xl font-serif">SJ</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg sm:text-xl leading-tight ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
                St. Joseph's
              </span>
              <span className={`text-xs sm:text-sm font-light tracking-wide ${scrolled ? 'text-gray-300' : 'text-gray-200 drop-shadow-sm'}`}>
                Mahoba, U.P.
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive 
                      ? 'text-gold-400 font-semibold' 
                      : scrolled ? 'text-gray-200 hover:text-white' : 'text-white/90 hover:text-white hover:drop-shadow-md'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a 
              href="tel:+911234567890" 
              className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Phone size={14} /> Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-white' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-royal-900 border-t border-royal-800 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `block text-lg font-medium ${isActive ? 'text-gold-400' : 'text-gray-200'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a 
              href="tel:+911234567890" 
              className="mt-4 bg-gold-500 text-white px-6 py-2 rounded-full text-sm font-medium"
            >
              Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;