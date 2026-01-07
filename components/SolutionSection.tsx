import React from 'react';
import { LANDING_DATA } from '../constants';
import { ArrowRight, Heart, Activity, Stethoscope, Clock, Gauge } from 'lucide-react';

// Medical service icons mapping
const SERVICE_ICONS: Record<string, React.ElementType> = {
  "Kardiológiai konzultáció": Stethoscope,
  "Szívultrahang": Heart,
  "Terheléses EKG": Activity,
  "Holter vizsgálat": Clock,
  "ABPM vizsgálat": Gauge,
};

export const SolutionSection: React.FC = () => {
  const marqueeItems = [...LANDING_DATA.service_categories, ...LANDING_DATA.service_categories];

  const askAboutService = (serviceName: string) => {
    const chatInput = document.getElementById('chatbot-input') as HTMLInputElement;
    if (chatInput) {
      chatInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        const message = `Mire jó a ${serviceName}?`;

        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
        nativeInputValueSetter?.call(chatInput, message);

        const inputEvent = new Event('input', { bubbles: true });
        chatInput.dispatchEvent(inputEvent);

        setTimeout(() => {
          const enterEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13,
            bubbles: true
          });
          chatInput.dispatchEvent(enterEvent);
        }, 100);
      }, 600);
    }
  };

  return (
    <section id="solutions" className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#c53d5d_1px,transparent_1px)] [background-size:40px_40px]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-400/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-accent-400 font-bold uppercase tracking-widest text-sm mb-3 block">Vizsgálataink</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Átfogó Kardiológiai Ellátás
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Modern diagnosztikai eszközökkel, egy helyen, egy alkalommal. A legkorszerűbb vizsgálatok a szíve egészségéért.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden pb-12">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-stretch gap-6 px-4">
          {marqueeItems.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.category_name] || Heart;
            return (
              <div
                key={`${service.category_name}-${idx}`}
                onClick={() => askAboutService(service.category_name)}
                className="w-[300px] md:w-[380px] flex flex-col bg-white/5 backdrop-blur-md rounded-2xl border border-accent-400/20 transition-all duration-300 group overflow-hidden hover:bg-white/10 hover:shadow-2xl hover:shadow-accent-400/10 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-32 w-full relative overflow-hidden shrink-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <Icon size={48} className="text-accent-400 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow relative">
                  <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-accent-400 transition-colors">
                    {service.category_name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center text-accent-400 text-sm font-bold gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Tudjon meg többet <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex justify-center pb-4">
        <button
          onClick={() => document.getElementById('chatbot-input')?.focus()}
          className="text-accent-400 border border-accent-400/50 px-8 py-4 rounded-full hover:bg-accent-400 hover:text-white transition-all font-bold flex items-center gap-3 group bg-accent-400/5 backdrop-blur-sm"
        >
          Melyik vizsgálat kell nekem? <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};