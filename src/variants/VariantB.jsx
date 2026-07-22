import { useState } from 'react';

const pexels = (id, width = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const officePhotos = [
  { id: 30902075, alt: 'Modern dental clinic interior with equipment' },
  { id: 34779494, alt: 'Modern futuristic dental clinic interior' },
  { id: 15771802, alt: 'Dental equipment and prosthetic model' },
  { id: 6627273, alt: 'Smiling young patient during a dental visit' },
];

const services = [
  {
    title: 'General Dentistry',
    desc: 'Comprehensive exams, cleanings, fillings and preventive care for every age.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Cosmetic Dentistry',
    desc: 'Teeth whitening, veneers and bonding to give you the confident smile you deserve.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Orthodontics',
    desc: 'Invisalign and traditional braces tailored to straighten teeth comfortably.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Gentle, kid-friendly visits that build healthy dental habits from the start.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking replacements to restore function and appearance.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: 'Emergency Care',
    desc: 'Same-day appointments for toothaches, broken teeth and urgent dental needs.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: 'Prevention Plan',
    price: '$149',
    period: '/year',
    desc: 'Ideal for maintaining a healthy smile with regular preventive care.',
    features: ['2 dental cleanings', '2 comprehensive exams', 'Bitewing X-rays', 'Oral cancer screening'],
    featured: false,
  },
  {
    name: 'Restoration Plan',
    price: '$299',
    period: '/year',
    desc: 'Covers preventive visits plus discounts on restorative treatments.',
    features: ['Everything in Prevention', '20% off fillings', '15% off crowns', 'Priority scheduling'],
    featured: true,
  },
  {
    name: 'Smile Makeover',
    price: '$599',
    period: '/year',
    desc: 'A comprehensive plan for cosmetic and restorative transformation.',
    features: ['Everything in Restoration', '25% off whitening', '25% off veneers', 'Free consultation'],
    featured: false,
  },
];

const reviews = [
  {
    name: 'Amanda R.',
    text: 'The office is spotless and the staff made me feel completely at ease. Best cleaning I have ever had!',
    rating: 5,
  },
  {
    name: 'James K.',
    text: 'I came in with a broken tooth and they saw me the same day. The results look completely natural.',
    rating: 5,
  },
  {
    name: 'Sophia L.',
    text: 'My kids actually look forward to the dentist now. Friendly, modern and super professional.',
    rating: 5,
  },
];

const navLinks = [
  { label: 'Plans', href: '#plans' },
  { label: 'Services', href: '#services' },
  { label: 'Office', href: '#office' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

function Star({ filled }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-amber-400' : 'text-slate-600'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function SectionHeading({ subtitle, title, desc, dark = true }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <span className={`inline-block font-semibold tracking-wide uppercase text-sm mb-2 ${dark ? 'text-amber-400' : 'text-teal-600'}`}>
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      <p className={`text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{desc}</p>
    </div>
  );
}

export default function VariantB() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-white">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Bright Smile
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-amber-400 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 text-sm font-semibold rounded-full transition"
              >
                Book Now
              </a>
            </nav>
            <button
              className="md:hidden p-2 text-slate-300 hover:text-amber-400"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-3 py-2 mt-2 text-center bg-amber-500 text-slate-900 rounded-md font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium">
                No hidden fees
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transparent pricing. Premium dental care.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-lg">
                Straightforward membership plans for the dental care you deserve. Know exactly what you pay before you sit in the chair.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#plans"
                  className="px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-full transition shadow-lg"
                >
                  See our plans
                </a>
                <a
                  href="#office"
                  className="px-7 py-3.5 border border-slate-600 text-white font-semibold rounded-full hover:bg-slate-800 transition"
                >
                  Meet the team
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transparent pricing
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Premium experience
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 rounded-3xl blur-3xl" />
              <img
                src={pexels(6812463, 1200)}
                alt="Bright and organized dental treatment room"
                className="relative rounded-3xl shadow-2xl w-full h-80 md:h-96 object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment plans */}
      <section id="plans" className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Membership Plans"
            title="Premium care at clear prices"
            desc="Choose a transparent plan that fits your goals. Every plan includes preventive care and member discounts."
          />
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 border ${
                  plan.featured
                    ? 'border-amber-500/50 bg-gradient-to-b from-slate-800 to-slate-900 ring-2 ring-amber-500 shadow-2xl'
                    : 'border-slate-700 bg-slate-800/50 shadow-lg'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wide rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-slate-400 mt-2 text-sm">{plan.desc}</p>
                <div className="mt-6 mb-6">
                  <span className={`text-5xl font-extrabold ${plan.featured ? 'text-amber-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-300">
                      <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full font-semibold transition ${
                    plan.featured
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-900'
                      : 'border border-amber-500/50 text-amber-400 hover:bg-amber-500/10'
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-indigo-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Services"
            title="Complete dental excellence"
            desc="From preventive care to advanced cosmetics, every service is delivered with precision and comfort."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl border border-slate-700 bg-slate-800/50 hover:border-amber-500/30 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-500 text-slate-900 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office snapshots */}
      <section id="office" className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Office"
            title="A refined, calming environment"
            desc="State-of-the-art technology meets boutique comfort in every detail of our practice."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officePhotos.map((photo) => (
              <div key={photo.id} className="group overflow-hidden rounded-2xl shadow-md border border-slate-700 bg-slate-800">
                <img
                  src={pexels(photo.id, 600)}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Patient Reviews"
            title="Trusted by thousands"
            desc="Real patients share their experiences with premium care that puts them first."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="p-8 rounded-2xl border border-slate-700 bg-slate-800/50 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < review.rating} />
                  ))}
                </div>
                <p className="text-slate-200 text-lg italic mb-6">“{review.text}”</p>
                <p className="font-semibold text-white">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-indigo-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a healthier smile?</h2>
              <p className="text-slate-300 text-lg mb-8">
                Schedule your first visit today. Our team is here to answer your questions and make dental care easy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>hello@brightsmile.dental</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>123 Park Avenue, Suite 400, New York, NY 10010</span>
                </div>
              </div>
            </div>
            <form className="bg-slate-900 rounded-2xl p-8 text-slate-100 shadow-2xl border border-slate-700" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-white mb-6">Request an appointment</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>General check-up</option>
                  <option>Teeth whitening</option>
                  <option>Orthodontics</option>
                  <option>Emergency care</option>
                  <option>Other</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-full transition"
                >
                  Request Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Bright Smile Dental
              </a>
              <p className="max-w-sm text-slate-400">
                Premium, compassionate dentistry for patients who expect the best. Your smile is our passion.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Office Hours</h4>
              <ul className="space-y-2 text-sm">
                <li>Mon – Thu: 8am – 6pm</li>
                <li>Friday: 8am – 4pm</li>
                <li>Saturday: 9am – 2pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#plans" className="hover:text-amber-400 transition">Plans</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition">Services</a></li>
                <li><a href="#reviews" className="hover:text-amber-400 transition">Reviews</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Bright Smile Dental Care. All rights reserved.</p>
            <p>Images sourced from Pexels under free-use license.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
