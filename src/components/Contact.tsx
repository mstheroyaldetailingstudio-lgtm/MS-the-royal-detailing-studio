import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, CircleCheck as CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { services } from '@/data';

// Replace this with your WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = '917075874145';
// Replace with your Google Maps link
const MAPS_LINK = 'https://maps.google.com/?q=MS+The+Royal+Detailing+Studio';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedService = services.find((s) => s.id === form.service);
    const serviceLabel = selectedService ? selectedService.title : form.service;

    const text =
      `*New Booking Request — MS The Royal Detailing Studio*\n` +
      `*Grand Opening: Up to 50% OFF applied*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Vehicle Model:* ${form.vehicle || 'Not specified'}\n` +
      `*Service:* ${serviceLabel}\n` +
      `*Message:* ${form.message || 'None'}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', vehicle: '', service: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold-400/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Get In Touch</span>
            <div className="h-px w-10 bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            Book Your <span className="gold-text">Appointment</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-ink-300">
            Ready to give your car the treatment it deserves? Fill the form and we'll receive your details instantly on WhatsApp. <span className="font-semibold text-gold-400">Grand Opening: Up to 50% OFF on every service.</span>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: MapPin, title: 'Visit Us', lines: ['5, Market Rd, Muneshwara Nagar,', 'Ramamurthy Nagar, Bengaluru, Karnataka 560016'], isLink: true, href: 'https://maps.app.goo.gl/wk4sHDBHD25xs2tV6' },
              { icon: Phone, title: 'Call Us', lines: ['+91 7075874145', '+91 7075874145'], isLink: false, href: '' },
              { icon: Mail, title: 'Email Us', lines: ['hello@msroyaldetailing.in', 'bookings@msroyaldetailing.in'], isLink: false, href: '' },
              { icon: Clock, title: 'Studio Hours', lines: ['Monday – Sunday: 9:30 AM – 9:30 PM'], isLink: false, href: '' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-gold-400/10 bg-ink-900/50 p-4 transition-all duration-300 hover:border-gold-400/30"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600">
                  <item.icon className="h-5 w-5 text-ink-900" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  {item.lines.map((line, index) => (
                    <p key={`${item.title}-${index}`} className="mt-0.5 text-sm text-ink-300">{line}</p>
                  ))}
                  {item.isLink && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-gold-400 transition-colors hover:text-gold-300"
                    >
                      Open in Maps
                      <MapPin className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              {[Instagram, Facebook, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 text-ink-200 transition-all duration-300 hover:border-gold-400/50 hover:bg-gold-400/10 hover:text-gold-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-gold-400/10 bg-ink-900/50 p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-4 h-16 w-16 text-gold-400" />
                <h3 className="font-serif text-2xl font-bold text-white">Opening WhatsApp...</h3>
                <p className="mt-2 text-sm text-ink-300">
                  Your booking details have been prepared. Please send the WhatsApp message to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-300">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-gold-400/15 bg-ink-950/50 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-gold-400/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-300">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-gold-400/15 bg-ink-950/50 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-gold-400/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-300">Vehicle Model</label>
                  <input
                    type="text"
                    required
                    value={form.vehicle}
                    onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                    className="w-full rounded-xl border border-gold-400/15 bg-ink-950/50 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-gold-400/50"
                    placeholder="e.g. Land Rover Defender, BMW M5..."
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-300">Service</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl border border-gold-400/15 bg-ink-950/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold-400/50"
                  >
                    <option value="" className="bg-ink-900">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id} className="bg-ink-900">{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-300">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-gold-400/15 bg-ink-950/50 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-gold-400/50"
                    placeholder="Tell us about your vehicle and what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-sm font-semibold text-ink-900 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30"
                >
                  <Send className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
