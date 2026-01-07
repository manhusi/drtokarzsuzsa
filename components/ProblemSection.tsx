import React from 'react';
import { HeartPulse, Activity, Wind, AlertTriangle, MessageCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: HeartPulse,
      gradient: "from-accent-400/10 via-accent-500/10 to-secondary-500/10",
      iconGradient: "from-accent-400 to-accent-600",
      glowColor: "shadow-accent-400/20",
      title: "Mellkasi fájdalom, szorítás",
      desc: "Érez néha nyomást, szorítást a mellkasában? Ez lehet fizikai terhelésre, de akár nyugalomban is jelentkezhet. Fontos időben kivizsgáltatni.",
      impact: "A mellkasi panaszok hátterében szívbetegség is állhat."
    },
    {
      icon: Activity,
      gradient: "from-secondary-400/10 via-secondary-500/10 to-accent-500/10",
      iconGradient: "from-secondary-400 to-secondary-600",
      glowColor: "shadow-secondary-500/20",
      title: "Magas vérnyomás",
      desc: "Tudta, hogy a magas vérnyomás sokáig tünetmentes lehet? Rendszeres ellenőrzéssel megelőzhetők a súlyos szövődmények, mint a szívinfarktus vagy stroke.",
      impact: "A 'csendes gyilkos' – a kezeletlen magas vérnyomás komoly veszély."
    },
    {
      icon: AlertTriangle,
      gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
      iconGradient: "from-orange-500 to-amber-600",
      glowColor: "shadow-orange-500/20",
      title: "Szívritmuszavar, szívdobogásérzés",
      desc: "Érzi, hogy a szíve néha kihagy, túl gyorsan ver, vagy szabálytalanul dobog? Ezek a panaszok jelezhetnek ritmuszavart, ami kivizsgálást igényel.",
      impact: "A ritmuszavarok kezelés nélkül súlyosbodhatnak."
    },
    {
      icon: Wind,
      gradient: "from-primary-500/10 via-blue-500/10 to-cyan-500/10",
      iconGradient: "from-primary-500 to-blue-600",
      glowColor: "shadow-primary-500/20",
      title: "Légszomj, gyors fáradékonyság",
      desc: "Hamarabb elfárad, mint régen? Lépcsőzésnél légszomja van? Ezek a jelek szívproblémára utalhatnak, érdemes kardiológiai vizsgálaton részt venni.",
      impact: "A légszomj és fáradékonyság a szívelégtelenség korai jele lehet."
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
    <section className="py-24 bg-gradient-to-b from-primary-800 via-primary-900 to-primary-900 relative z-10 -mt-8 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-6 leading-tight">
            Ismerős{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
              panaszok
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Ne hagyja figyelmen kívül a szervezete jelzéseit –
            a <span className="font-bold text-accent-400">korai felismerés életet menthet</span>.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br ${prob.gradient} backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${prob.iconGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}></div>

              <div className="relative z-10">
                {/* Icon with gradient */}
                <div className={`mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${prob.iconGradient} text-white flex items-center justify-center shadow-lg ${prob.glowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <prob.icon size={28} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-heading text-white mb-4 leading-tight">
                  {prob.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  {prob.desc}
                </p>

                {/* Impact - highlighted */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm font-semibold text-gray-400 italic flex items-start gap-2">
                    <span className="text-accent-400 mt-0.5">→</span>
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
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent-400 to-accent-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-accent-400/30 hover:shadow-accent-400/50 hover:scale-[1.05] transition-all duration-300"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            Beszéljen szakemberrel
            <span className="text-2xl">→</span>
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Segítünk eldönteni, milyen vizsgálatra van szüksége
          </p>
        </div>
      </div>
    </section>
  );
};