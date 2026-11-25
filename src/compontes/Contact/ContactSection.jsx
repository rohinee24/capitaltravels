import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", destination: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello Capital Travels!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ADestination: ${form.destination}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919890363536?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      label: "M. Taqui",
      value: "+91 9890-36-3536",
      href: "tel:+919890363536",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      label: "M. Mohsin",
      value: "+91 9860-36-7110",
      href: "tel:+919860367110",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      label: "Email",
      value: "capitaltoursind@gmail.com",
      href: "mailto:capitaltoursind@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      label: "Address",
      value: "1-23-9, Deodi Bazar, City Chowk, Aurangabad – 431 001, MS, India",
      href: "https://maps.google.com/?q=Deodi+Bazar+City+Chowk+Aurangabad",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Plan Your Journey Today</h2>
          <p className="section-desc">
            Ready to travel? Drop us a message or call directly — we'll craft the perfect trip for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info panel */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-brand-dark to-gray-900 rounded-3xl p-8 text-white">
              <h3 className="font-heading font-bold text-xl mb-6">Contact Details</h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">{c.label}</p>
                      <p className="text-white text-sm group-hover:text-brand-orange-light transition-colors">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919890363536"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-md h-56">
              <iframe
                title="Capital Travels Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0!2d75.3188!3d19.8762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzM0LjMiTiA3NcKwMTknMDcuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="card p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-heading font-bold text-brand-dark text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">We'll get back to you within a few hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-brand-dark text-xl mb-6">Send an Enquiry</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name *</label>
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number *</label>
                      <input
                        name="phone" required value={form.phone} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Destination / Tour</label>
                    <input
                      name="destination" value={form.destination} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      placeholder="e.g. Ajanta & Ellora, Shirdi, Goa…"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                    <textarea
                      name="message" rows={4} value={form.message} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                      placeholder="Tell us your travel dates, group size, any special requirements…"
                    />
                  </div>
                  <button type="submit" className="btn-primary justify-center w-full py-3 mt-2">
                    Send via WhatsApp
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
