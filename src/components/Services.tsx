import { useState } from 'react';
import { services } from '@/data';
import { ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold-400/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">What We Do</span>
            <div className="h-px w-10 bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            Services Crafted for <span className="gold-text">Perfection</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-300">
            Every vehicle that enters our studio receives obsessive attention to detail. Explore our full
            range of premium protection and enhancement services.
          </p>
        </div>

        {/* Service selector tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-ink-900 shadow-lg shadow-gold-500/20'
                  : 'border border-gold-400/20 text-ink-200 hover:border-gold-400/50 hover:text-gold-400'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Active service display */}
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <img
                key={current.image}
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover animate-fade-in"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold-400/20" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl glass px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600">
                <current.icon className="h-5 w-5 text-ink-900" strokeWidth={2} />
              </div>
              <span className="text-sm font-semibold text-white">{current.tagline}</span>
            </div>
          </div>

          <div key={current.id} className="animate-fade-in">
            <h3 className="font-serif text-3xl font-bold text-white sm:text-4xl">{current.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-300">{current.description}</p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {current.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-ink-200">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold-400/15">
                    <Check className="h-3 w-3 text-gold-400" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-6 py-3 text-sm font-semibold text-gold-400 transition-all duration-300 hover:bg-gold-400/10"
            >
              Enquire about {current.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
