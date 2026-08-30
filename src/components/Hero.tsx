import { ChevronDown, Star, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30173513/pexels-photo-30173513.png?auto=compress&cs=tinysrgb&h=1200&w=1600"
          alt="Premium car detailing and paint protection"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/50 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-transparent to-ink-950/40" />
      </div>

      {/* Decorative gold lines */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-24 bg-gradient-to-r from-transparent to-gold-400/60 lg:block" />
      <div className="pointer-events-none absolute right-0 top-1/3 hidden h-px w-24 bg-gradient-to-l from-transparent to-gold-400/60 lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-24 pb-16 sm:px-8">
        <div className="max-w-2xl">

          <div className="mb-5 flex animate-fade-down items-center gap-3">
            <div className="h-px w-12 bg-gold-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              MS The Royal Detailing Studio
            </span>
          </div>

          {/* SEO H1 */}
          <h1 className="animate-fade-up font-serif text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            Premium Car Detailing
            <br />
            & <span className="gold-shimmer">Paint Protection</span>
          </h1>

          <p
            className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-ink-200 sm:text-lg"
            style={{ animationDelay: '0.2s' }}
          >
            MS The Royal Detailing Studio provides premium car detailing,
            self-healing PPF, ceramic coating, sun films, interior detailing
            and professional automotive protection services.
          </p>

          {/* Grand opening offer pill */}
          <div
            className="mt-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-2"
            style={{ animationDelay: '0.35s' }}
          >
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-gold-400" />
            <span className="text-sm font-semibold text-gold-300">
              Grand Opening: 50% OFF every service
            </span>
          </div>

          <div
            className="mt-7 flex animate-fade-up flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#offer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-sm font-semibold text-ink-900 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30"
            >
              Claim 50% Off

              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400/40 px-8 py-4 text-sm font-semibold text-gold-400 transition-all duration-300 hover:bg-gold-400/10"
            >
              Book Appointment
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold-400" />

              <span className="text-sm text-ink-200">
                10-Year Warranty
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-gold-400" />

              <span className="text-sm text-ink-200">
                Certified Installers
              </span>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-gold-400 text-gold-400"
                />
              ))}

              <span className="ml-1 text-sm text-ink-200">
                4.9 / 5
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-xs uppercase tracking-widest text-ink-300">
          Scroll
        </span>

        <div className="flex h-10 w-6 justify-center rounded-full border border-gold-400/30 pt-2">
          <div className="h-2 w-1 animate-scroll-down rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
