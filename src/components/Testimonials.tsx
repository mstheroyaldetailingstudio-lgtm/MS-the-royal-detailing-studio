import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold-400/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Client Love</span>
            <div className="h-px w-10 bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            What Owners <span className="gold-text">Say</span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-gold-400/10 bg-ink-900/50 p-8 transition-all duration-400 hover:border-gold-400/30 hover:shadow-xl hover:shadow-gold-500/5"
            >
              <Quote className="mb-4 h-8 w-8 text-gold-400/40" />

              <div className="mb-4 flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-ink-200">"{t.quote}"</p>

              <div className="flex items-center gap-3 border-t border-gold-400/10 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-serif text-lg font-bold text-ink-900">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-ink-400">{t.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
