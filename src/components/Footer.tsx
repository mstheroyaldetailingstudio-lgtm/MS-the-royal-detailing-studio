import { Heart } from 'lucide-react';
import Logo from '@/components/Logo';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Grand Opening Offer', href: '#offer' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Paint Protection Film',
  'Ceramic Coating',
  'Sun Films',
  'Headlight Restoration',
  'Deep Interior Cleaning',
  'Colour PPF',
  'Alloy Painting',
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-400/10 bg-ink-950 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" aria-label="MS The Royal Detailing Studio">
              <Logo size="sm" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
              A premium car detailing studio dedicated to protecting and enhancing your vehicle with
              world-class materials and obsessive craftsmanship.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold-400">Navigate</h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-300 transition-colors hover:text-gold-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold-400">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-ink-300 transition-colors hover:text-gold-400">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gold-400/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400">© 2026 MS The Royal Detailing Studio. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-xs text-ink-400">
            Crafted with <Heart className="h-3 w-3 fill-gold-400 text-gold-400" /> for car enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
