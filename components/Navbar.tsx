import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { LANDING_DATA } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Dunakanyar Esztétika Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col">
            <span className={`text-xl font-extrabold font-heading leading-none ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Dunakanyar
            </span>
            <span className="text-sm font-bold text-primary-600 tracking-widest uppercase">
              Esztétika
            </span>
          </div>
        </div>

        {/* Contact CTA - No Navigation Links */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${LANDING_DATA.contact_details.phone_number}`}
            className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg ${scrolled
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-primary-600/30'
                : 'bg-white text-gray-900 hover:bg-gray-50 shadow-gray-200/50'
              }`}
          >
            <Phone size={18} className="transition-transform group-hover:rotate-12" />
            <span className="hidden md:inline">{LANDING_DATA.contact_details.phone_number}</span>
            <span className="md:hidden">Hívás</span>
          </a>
        </div>
      </div>
    </nav>
  );
};