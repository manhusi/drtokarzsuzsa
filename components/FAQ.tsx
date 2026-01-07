import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-primary-900 to-primary-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent-400 font-bold uppercase tracking-widest text-sm mb-3 block">
            Gyakori Kérdések
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Amit tudni érdemes
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A leggyakrabban feltett kérdésekre adunk választ. Ha további kérdése van, keressen minket bizalommal!
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-accent-400/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent-400/10 rounded-xl flex items-center justify-center shrink-0">
                    <HelpCircle size={20} className="text-accent-400" />
                  </div>
                  <span className="font-bold font-heading text-white text-lg">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-accent-400 transition-transform duration-300 shrink-0 ml-4 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed ml-14">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Nem találta a választ?
          </p>
          <a
            href="tel:30/551-6668"
            className="inline-flex items-center gap-2 text-accent-400 font-bold hover:text-accent-300 transition-colors"
          >
            Hívjon minket: 30/551-6668
          </a>
        </div>
      </div>
    </section>
  );
};