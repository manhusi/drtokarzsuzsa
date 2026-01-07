import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { BookingWidget } from '../booking/BookingWidget';
import '../booking/styles.css';

export const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 font-body">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#c53d5d_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent-400/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors font-medium group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Vissza a főoldalra
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent-400/10 text-accent-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent-400/20">
            <Calendar size={16} />
            Online időpontfoglalás
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Foglaljon <span className="text-accent-400">időpontot</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dr. Tokár Zsuzsanna Kardiológiai Magánrendelése – válassza ki az Önnek megfelelő időpontot.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-8 h-8 bg-accent-400/10 rounded-full flex items-center justify-center border border-accent-400/20">
              <Clock size={16} className="text-accent-400" />
            </div>
            <span>Rugalmas időpontok</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-8 h-8 bg-accent-400/10 rounded-full flex items-center justify-center border border-accent-400/20">
              <Heart size={16} className="text-accent-400" />
            </div>
            <span>30+ év tapasztalat</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-8 h-8 bg-accent-400/10 rounded-full flex items-center justify-center border border-accent-400/20">
              <MapPin size={16} className="text-accent-400" />
            </div>
            <span>Nyíregyháza, Északi krt 46</span>
          </div>
        </div>

        {/* Booking Widget Container */}
        <div className="max-w-lg mx-auto">
          <BookingWidget />
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 text-sm mt-8 max-w-md mx-auto">
          A foglalás után visszaigazolást kap. Kérdés esetén hívjon: 30/551-6668
        </p>
      </main>
    </div>
  );
};

export default BookingPage;
