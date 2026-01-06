import React from 'react';
import { LANDING_DATA } from '../constants';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = LANDING_DATA.trust_signals.filter(t => t.type === 'testimonial');
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Google G icon SVG
  const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );

  // Generate initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  // Generate a consistent color based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-purple-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-orange-500',
      'bg-pink-500',
      'bg-teal-500',
      'bg-indigo-500',
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      const newPosition = direction === 'left'
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  return (
    <section className="py-20 bg-[#f8f9fa] overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Mit mondanak vendégeink?
          </h2>

          {/* Google Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-lg border border-gray-100">
            <GoogleIcon />
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-gray-900">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} fill="#FBBC05" stroke="#FBBC05" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">260+ értékelés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all hidden md:flex"
            aria-label="Előző"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all hidden md:flex"
            aria-label="Következő"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[320px] bg-white rounded-xl p-5 shadow-md border border-gray-100 snap-start hover:shadow-lg transition-shadow"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full ${getAvatarColor(test.source || '')} flex items-center justify-center text-white font-semibold text-sm`}>
                      {getInitials(test.source || 'U')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                        {test.source}
                      </h4>
                      <span className="text-gray-400 text-xs">
                        {test.reviewCount}
                      </span>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Rating & Date */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill="#FBBC05" stroke="#FBBC05" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-xs">{test.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                  {test.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <p className="text-center text-gray-400 text-sm mt-4 md:hidden">
          ← Húzd oldalra a további véleményekért →
        </p>

      </div>
    </section>
  );
};