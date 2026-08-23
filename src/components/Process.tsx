import { steps } from '@/data';

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-16 sm:py-20">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold-400/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">How It Works</span>
            <div className="h-px w-10 bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            Our <span className="gold-text">Process</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-300">
            A meticulous, four-stage workflow that guarantees a flawless result — every single time.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-gold-400/10 bg-ink-900/50 p-7 transition-all duration-400 hover:border-gold-400/30 hover:bg-ink-800/50"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 font-serif text-5xl font-bold text-gold-400/20 transition-colors duration-300 group-hover:text-gold-400/40">
                {step.number}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-300">{step.description}</p>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/20 bg-ink-900 lg:flex">
                  <div className="h-2 w-2 rounded-full bg-gold-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
