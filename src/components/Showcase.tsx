import { Shield, Droplets, Sparkles, Clock } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Industry-Leading Warranties', desc: 'Up to 10 years of guaranteed protection on PPF and coatings.' },
  { icon: Sparkles, title: 'Showroom-Grade Finish', desc: 'Every panel is inspected under LED lighting to ensure zero defects.' },
  { icon: Droplets, title: 'Premium Products Only', desc: 'We use only top-tier films, coatings, and care solutions.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your schedule and deliver when promised — every time.' },
];

export default function Showcase() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/14542677/pexels-photo-14542677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Detailing specialist buffing a car"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold-400/20 bg-ink-900/90 p-6 backdrop-blur-md sm:block">
              <div className="font-serif text-4xl font-bold gold-text">100%</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-ink-300">Satisfaction</div>
            </div>
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold-400/20" />
          </div>

          {/* Text side */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-gold-400/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Why Us</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Not Just a Wash.
              <br />
              A <span className="gold-text">Craft.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300">
              We treat every vehicle as if it were our own. Our studio is equipped with controlled-environment
              bays, specialised lighting, and professional-grade tools — because perfection can't happen by
              accident.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold-400/10">
                    <f.icon className="h-5 w-5 text-gold-400" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{f.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-300">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
