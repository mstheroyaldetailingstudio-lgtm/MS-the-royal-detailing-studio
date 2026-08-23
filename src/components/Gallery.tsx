import { ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/32494406/pexels-photo-32494406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Black Land Rover Defender at twilight',
    label: 'PPF Protection',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/14908957/pexels-photo-14908957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Car polishing process',
    label: 'Paint Correction',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/30674497/pexels-photo-30674497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Black hypercar with gold rims',
    label: 'Ceramic Coating',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/6873100/pexels-photo-6873100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Interior detailing at night',
    label: 'Interior Deep Clean',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Car alloy wheel detail',
    label: 'Alloy Painting',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/32725712/pexels-photo-32725712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Custom black sports car with golden rims',
    label: 'Colour PPF',
    span: 'lg:col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold-400/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Our Work</span>
            <div className="h-px w-10 bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            The <span className="gold-text">Gallery</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-300">
            A glimpse of the vehicles that have passed through our studio doors.
          </p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[240px]">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-80 transition-opacity duration-400 group-hover:opacity-95" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2">
                  <div className="h-px w-6 bg-gold-400 transition-all duration-400 group-hover:w-10" />
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold-400/0 transition-all duration-400 group-hover:ring-gold-400/30" />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-sm font-semibold text-ink-900 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30"
          >
            Start Your Transformation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
