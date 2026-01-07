import React from 'react';
import { LANDING_DATA } from '../constants';
import { MapPin, Phone, Clock, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { contact_details } = LANDING_DATA;

  return (
    <footer className="bg-primary-900 text-white pt-20 pb-10 border-t border-accent-400/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                <Heart size={20} className="text-white" fill="white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Dr. Tokár<span className="text-accent-400"> Zsuzsanna</span>
              </h3>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-4">
              Kardiológiai magánrendelés Nyíregyházán. Átfogó szív-érrendszeri vizsgálatok: szívultrahang, EKG, Holter, terheléses EKG, ABPM.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              A vizsgálati díj egy része a <strong className="text-accent-400">Demeter Alapítványt</strong> támogatja.
            </p>
            <a
              href="/foglalas"
              className="inline-flex items-center gap-2 bg-accent-400 text-white px-6 py-3 rounded-full font-bold hover:bg-accent-500 transition-colors"
            >
              Online időpontfoglalás
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-6">Elérhetőség</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-accent-400 transition-colors">
                <MapPin size={20} className="shrink-0 mt-1 text-accent-400" />
                <span>{contact_details.address}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-accent-400 transition-colors">
                <Phone size={20} className="shrink-0 mt-1 text-accent-400" />
                <a href={`tel:${contact_details.phone_number}`}>{contact_details.phone_number}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-6">Rendelési idő</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={20} className="shrink-0 mt-1 text-accent-400" />
                <span>{contact_details.opening_hours}</span>
              </li>
              <li className="text-sm text-gray-500 italic mt-4">
                Kérjük, előzetesen egyeztessen időpontot telefonon.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Tokár Zsuzsanna Kardiológiai Magánrendelés. Minden jog fenntartva.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent-400 transition-colors">Adatkezelés</a>
            <a href="#" className="hover:text-accent-400 transition-colors">ÁSZF</a>
          </div>
        </div>
      </div>
    </footer>
  );
};