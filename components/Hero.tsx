import React from 'react';
import { ChatInterface } from './ChatInterface';
import { ArrowRight, Star, MapPin, Phone, Heart, Award, Stethoscope } from 'lucide-react';
import { LANDING_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center">
      {/* Background Decor - Subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#c53d5d_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none"></div>

      {/* Ambient glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent-400/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[15%] w-[200px] h-[200px] bg-primary-500/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full shadow-lg border border-accent-400/20 mx-auto lg:mx-0 animate-fade-in-up group hover:scale-[1.02] transition-transform cursor-default">
              <Heart className="text-accent-400" size={18} fill="currentColor" />
              <span className="text-white font-semibold">30+ év kardiológiai tapasztalat</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-white leading-[1.1] tracking-tight">
              Szíve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500">
                jó kezekben.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-body leading-relaxed">
              Professzionális kardiológiai ellátás Nyíregyházán. <br className="hidden md:block" />
              <strong className="text-accent-400">Dr. Tokár Zsuzsanna</strong> – szakorvos, akire bátran rábízhatja szíve egészségét.
            </p>

            {/* Expertise badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Stethoscope size={16} className="text-accent-400" />
                <span className="text-sm font-medium">Szívultrahang</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Award size={16} className="text-accent-400" />
                <span className="text-sm font-medium">Invazív kardiológia</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <div className="flex items-center gap-3 text-accent-400 bg-accent-400/10 px-6 py-3 rounded-2xl border border-accent-400/20 shadow-lg shadow-accent-400/5">
                <MapPin className="shrink-0" size={24} />
                <span className="text-lg font-bold tracking-wide">{LANDING_DATA.contact_details.address}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => document.getElementById('chatbot-input')?.focus()}
                className="bg-gradient-to-r from-accent-400 to-accent-500 text-white px-8 py-4 rounded-2xl font-bold font-heading shadow-xl shadow-accent-400/20 hover:from-accent-500 hover:to-accent-600 hover:scale-[1.02] transition-all transform flex items-center justify-center gap-3 group"
              >
                Kérdése van? Segítünk
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`tel:${LANDING_DATA.contact_details.phone_number}`}
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={20} />
                {LANDING_DATA.contact_details.phone_number}
              </a>
            </div>
          </div>

          {/* Chatbot Interface */}
          <div className="flex-1 w-full relative perspective-1000">
            {/* Glow Effect behind chat */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent-400/10 to-primary-500/5 blur-3xl rounded-full z-0"></div>

            <div className="relative z-10">
              <ChatInterface />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};