import React from 'react';
import { LANDING_DATA } from '../constants';
import { ArrowRight } from 'lucide-react';

const STATIC_IMAGES: Record<string, string> = {
  "Regeneratív lézeres & IPL kezelések": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  "Koreai bőrápolás": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
  "Kozmetika & Testkezelések": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
  "Plasmage & Tetoválás eltávolítás": "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop",
  "Botox & Izzadáskezelés": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
  "Feltöltések & Biostimulátorok": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
};

export const SolutionSection: React.FC = () => {
  const excludedCategories = ["Botox & Izzadáskezelés", "Plasmage & Tetoválás eltávolítás"];
  const filteredServices = LANDING_DATA.service_categories.filter(
    service => !excludedCategories.includes(service.category_name)
  );

  const marqueeItems = [...filteredServices, ...filteredServices];

  const scrollToChatbot = () => {
    const chatInput = document.getElementById('chatbot-input');
    if (chatInput) {
      chatInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => chatInput.focus(), 500);
    }
  };

  return (
    <section id="solutions" className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-800 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-secondary-400 font-bold uppercase tracking-widest text-sm mb-3 block">Megoldásaink</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Prémium Esztétikai Kezelések
          </h2>
          <p className="text-primary-100 text-lg leading-relaxed">
            A legmodernebb technológiák és szakértelem találkozása. Virtuális szakértőnk segít megtalálni a tökéleteset.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden pb-12">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-stretch gap-6 px-4">
          {marqueeItems.map((service, idx) => (
            <div
              key={`${service.category_name}-${idx}`}
              onClick={scrollToChatbot}
              className="w-[300px] md:w-[380px] flex flex-col bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-300 group overflow-hidden hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 w-full relative overflow-hidden shrink-0">
                <img
                  src={STATIC_IMAGES[service.category_name]}
                  alt={service.category_name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-secondary-400 transition-colors">
                  {service.category_name}
                </h3>
                <p className="text-primary-100/80 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center text-secondary-400 text-sm font-bold gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Beszéljünk <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex justify-center pb-4">
        <button
          onClick={() => document.getElementById('chatbot-input')?.focus()}
          className="text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-primary-900 transition-all font-bold flex items-center gap-3 group bg-white/5 backdrop-blur-sm"
        >
          Melyik való nekem? <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};