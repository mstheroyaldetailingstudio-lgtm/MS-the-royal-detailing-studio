import { Sparkles, X } from 'lucide-react';
import { useState } from 'react';

export default function OfferBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="relative z-[60] overflow-hidden bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-10 py-2.5 text-center">
        <Sparkles className="h-4 w-4 flex-shrink-0 animate-pulse text-ink-900" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-900 sm:text-sm">
          Grand Opening — <span className="font-extrabold">Up to 50% OFF</span> on every service. Limited time only.
        </p>
        <a
          href="#contact"
          className="hidden flex-shrink-0 rounded-full bg-ink-900 px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-400 transition-transform hover:scale-105 sm:inline-block"
        >
          Claim Now
        </a>
        <button
          onClick={() => setClosed(true)}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-900/70 transition-colors hover:text-ink-900"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
