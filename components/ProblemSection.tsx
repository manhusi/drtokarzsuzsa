import React from 'react';
import { Eye, Heart, Users, TrendingDown, MessageCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Eye,
      gradient: "from-rose-500/10 via-pink-500/10 to-purple-500/10",
      iconGradient: "from-rose-500 to-pink-600",
      glowColor: "shadow-rose-500/20",
      title: "Szeretnéd visszakapni a régi kisugárzásodat?",
      desc: "Észreveszed, hogy a bőröd már nem olyan feszes és ragyogó, mint régen. Talán a ráncok kezdenek feltűnőbbek lenni, vagy egyszerűen csak fáradtnak látszik az arcod.",
      impact: "Fotókon nem érzed magad olyan magabiztosnak, mint szeretnéd."
    },
    {
      icon: Heart,
      gradient: "from-amber-500/10 via-orange-500/10 to-red-500/10",
      iconGradient: "from-amber-500 to-orange-600",
      glowColor: "shadow-orange-500/20",
      title: "Otthoni megoldások nem hoznak eredményt?",
      desc: "Krémeket, szérumokat, otthoni eszközöket próbálsz, de a bőrproblémák (pattanások, foltok, hegek) továbbra is ott vannak. Úgy érzed, hiába költöd a pénzt, nem látod az eredményt.",
      impact: "Frusztráló érzés, hogy semmi sem tűnik működőképesnek."
    },
    {
      icon: Users,
      gradient: "from-teal-500/10 via-cyan-500/10 to-blue-500/10",
      iconGradient: "from-teal-500 to-cyan-600",
      glowColor: "shadow-teal-500/20",
      title: "Nem tudod, melyik kezelés lenne a neked való?",
      desc: "Rengeteg kezelésről hallasz: botox, töltés, lézer, microneedling... De melyik lenne a leghatékonyabb a te problémádra? Melyik szakemberre bízd magad?",
      impact: "A bizonytalanság miatt nehéz meghozni a döntést."
    },
    {
      icon: TrendingDown,
      gradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
      iconGradient: "from-violet-500 to-purple-600",
      glowColor: "shadow-purple-500/20",
      title: "Úgy érzed, már 'elkéstél' valamiről?",
      desc: "Talán azt gondolod, hogy már túl sok idő telt el, vagy hogy az eredmények nem lehetnek olyan jók, mint szeretnéd. De a valóság az, hogy sosem késő elkezdeni.",
      impact: "Halogatás helyett most van a legjobb időpont a változásra."
    }
  ];

  const scrollToChatbot = () => {
    const chatInput = document.getElementById('chatbot-input');
    if (chatInput) {
      chatInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => chatInput.focus(), 500);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative z-10 -mt-8 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-6 leading-tight">
            Ismerős{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              helyzetek
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nem vagy egyedül ezekkel. Sok embernek hasonló kérdései vannak -
            és <span className="font-bold text-primary-700">van megoldás</span>.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br ${prob.gradient} backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${prob.iconGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}></div>

              <div className="relative z-10">
                {/* Icon with gradient */}
                <div className={`mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${prob.iconGradient} text-white flex items-center justify-center shadow-lg ${prob.glowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <prob.icon size={28} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                  {prob.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {prob.desc}
                </p>

                {/* Impact - highlighted */}
                <div className="pt-4 border-t border-gray-200/50">
                  <p className="text-sm font-semibold text-gray-500 italic flex items-start gap-2">
                    <span className="text-primary-500 mt-0.5">→</span>
                    <span>{prob.impact}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button to Chatbot */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToChatbot}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-[1.05] transition-all duration-300"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            Találd meg a tökéletes megoldást
            <span className="text-2xl">→</span>
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Szakértőnk 1 perc alatt segít kiválasztani a neked megfelelő kezelést
          </p>
        </div>
      </div>
    </section>
  );
};