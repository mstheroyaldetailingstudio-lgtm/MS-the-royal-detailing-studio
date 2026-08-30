import { Tag, Clock, Gift, ArrowRight } from 'lucide-react';

export default function Offer() {
  return (
    <section id="offer" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold-400/30 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-950 p-8 text-center sm:p-12">
          {/* Corner accents */}
          <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-gold-400/40 rounded-tl-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-gold-400/40 rounded-br-3xl" />

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5">
            <Tag className="h-4 w-4 text-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Grand Opening Offer</span>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Flat <span className="gold-shimmer">50% OFF</span>
            <br />
            On Every Service
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300">
            To celebrate our grand opening, every service at MS The Royal Detailing Studio is now half price —
            from PPF and ceramic coating to interior detailing and alloy painting. Premium care, unbeatable value.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-sm font-semibold text-ink-900 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30"
            >
              Claim Your 50% Off
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400/40 px-8 py-4 text-sm font-semibold text-gold-400 transition-all duration-300 hover:bg-gold-400/10"
            >
              View All Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-gold-400" />
              <span className="text-sm text-ink-200">All services included</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gold-400" />
              <span className="text-sm text-ink-200">Limited time only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
