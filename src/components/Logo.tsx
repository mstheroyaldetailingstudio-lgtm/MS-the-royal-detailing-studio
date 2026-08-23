import logoImage from '../../MS.jpg.jpeg';

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dim = size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-16 w-16' : 'h-10 w-10';
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg';

  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative ${dim} flex-shrink-0 overflow-hidden rounded-full`}>
        <img src={logoImage} alt="MS The Royal logo" className="h-full w-full object-cover" />
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
