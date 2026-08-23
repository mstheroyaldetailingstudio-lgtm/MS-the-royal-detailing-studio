import { Shield, Droplets, Sun, Lightbulb, Sparkles, Palette, Wrench } from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Shield;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: 'ppf',
    title: 'Paint Protection Film',
    tagline: 'Invisible armour for your finish',
    description:
      'Self-healing thermoplastic urethane film applied with precision to guard your paint against stone chips, scratches, and road debris — while preserving a flawless, factory-fresh look.',
    icon: Shield,
    image:
      'https://images.pexels.com/photos/14615262/pexels-photo-14615262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Self-healing top coat', '10-year warranty', 'Optically clear finish', 'Stain & chemical resistant'],
  },
  {
    id: 'ceramic',
    title: 'Ceramic Coating',
    tagline: 'Liquid glass that never quits',
    description:
      'A nano-ceramic layer that bonds molecularly with your paint, delivering a deep, wet-look gloss with extreme hydrophobic properties and resistance to UV, oxidation, and contaminants.',
    icon: Droplets,
    image:
      'https://images.pexels.com/photos/6873177/pexels-photo-6873177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['9H hardness rating', 'Hydrophobic surface', 'UV & oxidation shield', 'Up to 7-year protection'],
  },
  {
    id: 'sunfilm',
    title: 'Sun Films',
    tagline: 'Cool comfort, sharp style',
    description:
      'Premium window films that reject up to 99% of UV rays and dramatically cut cabin heat — with crystal-clear visibility from inside and a sleek, private look from outside.',
    icon: Sun,
    image:
      'https://images.pexels.com/photos/29884884/pexels-photo-29884884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['99% UV rejection', 'Heat reduction up to 70%', 'Glare-free visibility', 'Scratch-resistant layer'],
  },
  {
    id: 'headlight',
    title: 'Headlight Restoration',
    tagline: 'See and be seen',
    description:
      'Multi-stage sanding and polishing that strips away yellowing, haze, and oxidation — restoring crystal clarity and night-time beam intensity without replacing the housing.',
    icon: Lightbulb,
    image:
      'https://images.pexels.com/photos/5233268/pexels-photo-5233268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['UV-clear coat seal', 'Restored light output', 'No-replacement needed', '2-hour turnaround'],
  },
  {
    id: 'interior',
    title: 'Deep Interior Cleaning',
    tagline: 'A cabin reborn',
    description:
      'A meticulous top-to-bottom treatment — steam cleaning, leather conditioning, stain extraction, and odour elimination — that brings your interior back to showroom condition.',
    icon: Sparkles,
    image:
      'https://images.pexels.com/photos/6873185/pexels-photo-6873185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Steam sanitation', 'Leather conditioning', 'Stain & odour removal', 'AC vent detailing'],
  },
  {
    id: 'colour-ppf',
    title: 'Colour PPF',
    tagline: 'Change the game, not the paint',
    description:
      'Full-colour paint protection film that lets you reskin your vehicle in any shade — matte, satin, gloss, or chrome — while delivering the same chip and scratch defence as clear PPF.',
    icon: Palette,
    image:
      'https://images.pexels.com/photos/2937422/pexels-photo-2937422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Matte, satin & gloss finishes', 'Reversible transformation', 'Self-healing protection', 'Custom colour matching'],
  },
  {
    id: 'alloy',
    title: 'Alloy Painting',
    tagline: 'Wheels that turn heads',
    description:
      'Professional powder-coated and painted alloy refinishing — strip, prep, colour, and cure — for a durable, show-grade finish that resists brake dust, heat, and curb rash.',
    icon: Wrench,
    image:
      'https://images.pexels.com/photos/4056596/pexels-photo-4056596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Powder-coat durability', 'Custom colour options', 'Brake-dust resistant', 'Curb-rash repair'],
  },
];

export const stats = [
  { value: '1500+', label: 'Cars Detailed' },
  { value: '7', label: 'Years of Craft' },
  { value: '98%', label: 'Client Retention' },
  { value: '10yr', label: 'Max Warranty' },
];

export const steps = [
  {
    number: '01',
    title: 'Inspection & Consultation',
    description: 'We assess your vehicle’s paint depth, contamination level, and interior condition, then recommend a tailored treatment plan.',
  },
  {
    number: '02',
    title: 'Decontamination Wash',
    description: 'A multi-stage wash, clay-bar treatment, and iron remover strip away embedded contaminants to create a flawless base.',
  },
  {
    number: '03',
    title: 'Paint Correction',
    description: 'Machine polishing removes swirl marks, oxidation, and micro-scratches, restoring depth and clarity to your finish.',
  },
  {
    number: '04',
    title: 'Protection & Delivery',
    description: 'We apply your chosen PPF, coating, or film with surgical precision, inspect every panel, and hand over a flawless vehicle.',
  },
];

export const testimonials = [
  {
    name: 'Arjun Mehta',
    car: 'BMW M5 Competition',
    quote: 'The ceramic coating on my M5 is unreal. Water just slides off and the gloss is deeper than the day I picked it up from the showroom.',
    rating: 5,
  },
  {
    name: 'Rohan Kapoor',
    car: 'Land Rover Defender',
    quote: 'Full-body PPF on my black Defender. Flawless install, zero bubbles, and the self-healing is genuinely magic. Worth every rupee.',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    car: 'Porsche Cayenne',
    quote: 'The interior deep clean brought my Cayenne back to life. The leather looks and smells new again. These guys are artists.',
    rating: 5,
  },
];
