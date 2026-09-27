export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dim = size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-16 w-16' : 'h-10 w-10';
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg';

  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative ${dim} flex-shrink-0`}>
        <svg viewBox="0 0 64 64" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E4C561" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#A8841F" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="30" fill="#0A0A0A" stroke="url(#goldGrad)" strokeWidth="2" />
          {/* Crown */}
          <path
            d="M18 40 L18 26 L24 32 L32 22 L40 32 L46 26 L46 40 Z"
            fill="url(#goldGrad)"
          />
          <rect x="18" y="41" width="28" height="3" rx="1" fill="url(#goldGrad)" />
          {/* MS monogram */}
          <text
            x="32"
            y="52"
            textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontSize="9"
            fontWeight="700"
            fill="url(#goldGrad)"
          >
            MS
          </text>
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-serif ${textSize} font-bold tracking-wide text-white`}>
          MS THE ROYAL
        </span>
        <span className={`font-serif ${size === 'sm' ? 'text-[10px]' : 'text-xs'} font-medium uppercase tracking-[0.2em] gold-text`}>
          Detailing Studio
        </span>
      </div>
    </div>
  );
}
