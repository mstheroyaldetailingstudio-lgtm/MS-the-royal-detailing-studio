import { stats } from '@/data';

export default function Stats() {
  return (
    <section className="relative border-y border-gold-400/10 bg-ink-900 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="font-serif text-4xl font-bold gold-text sm:text-5xl">{stat.value}</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-ink-300 sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
