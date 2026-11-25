import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsClock, BsCalendarCheck, BsPeopleFill } from "react-icons/bs";
import { MdOutlineExplore, MdSend } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";

const contactCards = [
  {
    icon: <FaPhoneAlt size={22} />,
    title: "M. Taqui",
    value: "+91 9890-36-3536",
    sub: "Founder & Director",
    href: "tel:+919890363536",
  },
  {
    icon: <FaPhoneAlt size={22} />,
    title: "M. Mohsin",
    value: "+91 9860-36-7110",
    sub: "Co-Director",
    href: "tel:+919860367110",
  },
  {
    icon: <FaEnvelope size={22} />,
    title: "Email",
    value: "capitaltoursind@gmail.com",
    sub: "Reply within a few hours",
    href: "mailto:capitaltoursind@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt size={22} />,
    title: "Office",
    value: "1-23-9, Deodi Bazar, City Chowk",
    sub: "Aurangabad – 431 001, MS",
    href: "https://maps.google.com/?q=Deodi+Bazar+City+Chowk+Aurangabad",
  },
];

const hours = [
  { day: "Monday – Friday",    time: "6:00 AM – 10:00 PM", note: "All services available" },
  { day: "Saturday – Sunday",  time: "6:00 AM – 10:00 PM", note: "Tours & taxi service" },
  { day: "Airport / Emergency",time: "24 / 7",              note: "Call directly" },
];

const whyUs = [
  { icon: <RiCustomerService2Line size={22} />, title: "Personal Assistance",   desc: "Our team helps you choose the right tour and vehicle for your group." },
  { icon: <BsCalendarCheck size={20} />,        title: "Flexible Planning",     desc: "Travel on your preferred dates — we adjust to your schedule." },
  { icon: <MdOutlineExplore size={22} />,       title: "Custom Itineraries",    desc: "Every trip is tailored to your group size, budget and destination." },
  { icon: <BsPeopleFill size={20} />,           title: "Group Travel Experts",  desc: "From couples to 50-person groups — we handle all sizes comfortably." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", destination: "", date: "", travelers: "2", message: "" });
  const [visible, setVisible] = useState(false);

  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Capital Travels!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ADestination: ${form.destination}%0ATravel Date: ${form.date}%0ATravellers: ${form.travelers}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919890363536?text=${msg}`, "_blank");
  };

  return (
    <div className="pt-16 bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <img src="/bibikamaqbara.webp" alt="Contact Capital Travels" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#1A1A2E]/85" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#E05A1A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-[#E05A1A]/50 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(224,90,26,0.12)" }}>
              <span className="w-1.5 h-1.5 bg-[#E05A1A] rounded-full animate-pulse" />
              <span className="text-orange-200 text-xs font-semibold uppercase tracking-widest">We're Here for You</span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight mb-5">
              Let's Plan Your<br />
              <span className="text-[#F47B3B]">Perfect Journey</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Call, WhatsApp, or fill the form — our team responds within the hour and personally helps you plan every detail.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919890363536"
                className="inline-flex items-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-lg">
                <FaPhoneAlt size={13} /> Call Now
              </a>
              <a href="https://wa.me/919890363536" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-lg">
                <FaWhatsapp size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact cards ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#E05A1A] font-semibold uppercase tracking-widest text-xs mb-2">Reach Us</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-[#1A1A2E]">Get In Touch</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((c) => (
              <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#E05A1A]/10 rounded-xl flex items-center justify-center text-[#E05A1A] group-hover:bg-[#E05A1A] group-hover:text-white transition-all duration-300">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{c.title}</p>
                  <p className="font-bold text-[#1A1A2E] text-sm group-hover:text-[#E05A1A] transition-colors leading-snug">{c.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{c.sub}</p>
                </div>
                <div className="flex items-center gap-1 text-[#E05A1A] text-xs font-semibold mt-auto">
                  <span>Connect</span>
                  <IoMdArrowForward size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Why Us ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left — Info panel */}
            <div>
              {/* Info card */}
              <div className="bg-[#1A1A2E] rounded-3xl overflow-hidden mb-6">
                {/* Top banner */}
                <div className="relative px-8 py-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#E05A1A]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <p className="text-[#E05A1A] text-xs font-bold uppercase tracking-widest mb-3 relative z-10">Capital Travels · Since 1983</p>
                  <h2 className="font-heading font-black text-3xl text-white leading-tight relative z-10">
                    Talk to Us,<br />
                    <span className="text-[#F47B3B]">We'll Handle the Rest</span>
                  </h2>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed relative z-10 max-w-sm">
                    40+ years of trusted service across Maharashtra. From booking to drop-back — every detail is taken care of.
                  </p>
                </div>

                {/* Contact rows */}
                <div className="flex flex-col divide-y divide-white/5">
                  {[
                    { icon: <FaPhoneAlt size={14} />, label: "M. Taqui", value: "+91 9890-36-3536", href: "tel:+919890363536" },
                    { icon: <FaPhoneAlt size={14} />, label: "M. Mohsin", value: "+91 9860-36-7110", href: "tel:+919860367110" },
                    { icon: <FaWhatsapp size={16} />, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/919890363536" },
                    { icon: <FaEnvelope size={14} />, label: "Email", value: "capitaltoursind@gmail.com", href: "mailto:capitaltoursind@gmail.com" },
                    { icon: <FaMapMarkerAlt size={14} />, label: "Office", value: "Deodi Bazar, City Chowk, Aurangabad", href: "https://maps.google.com/?q=Deodi+Bazar+Aurangabad" },
                  ].map((c) => (
                    <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="flex items-center gap-4 px-8 py-4 hover:bg-white/5 transition-colors group">
                      <div className="w-9 h-9 bg-[#E05A1A]/15 group-hover:bg-[#E05A1A] rounded-xl flex items-center justify-center text-[#E05A1A] group-hover:text-white transition-all duration-200 flex-shrink-0">
                        {c.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-500 text-[10px] leading-none mb-0.5">{c.label}</p>
                        <p className="text-gray-200 text-sm font-medium group-hover:text-[#F47B3B] transition-colors truncate">{c.value}</p>
                      </div>
                      <IoMdArrowForward size={14} className="text-gray-600 group-hover:text-[#E05A1A] group-hover:translate-x-1 transition-all duration-200 ml-auto flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Business hours */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BsClock className="text-[#E05A1A]" size={15} />
                  <h3 className="font-heading font-bold text-[#1A1A2E] text-sm uppercase tracking-widest">Business Hours</h3>
                </div>
                <div className="flex flex-col gap-2.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-gray-100">
                      <div>
                        <p className="text-xs font-bold text-[#1A1A2E]">{h.day}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{h.note}</p>
                      </div>
                      <span className="text-sm font-black text-[#E05A1A]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-10">
              <div className="mb-7">
                <h3 className="font-heading font-black text-2xl text-[#1A1A2E] mb-1">Plan Your Trip</h3>
                <p className="text-gray-400 text-sm">Fill the details — we'll reply on WhatsApp within the hour.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E05A1A]/30 focus:border-[#E05A1A] transition" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1.5">Phone <span className="text-red-500">*</span></label>
                    <input name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E05A1A]/30 focus:border-[#E05A1A] transition" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1.5">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E05A1A]/30 focus:border-[#E05A1A] transition" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1.5">Destination <span className="text-red-500">*</span></label>
                    <select name="destination" required value={form.destination} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E05A1A]/30 focus:border-[#E05A1A] transition bg-white">
                      <option value="">Select destination</option>
                      <option>Ajanta Caves</option>
                      <option>Ellora Caves</option>
                      <option>Ajanta & Ellora</option>
                      <option>Shirdi</option>
                      <option>Aurangabad City Tour</option>
                      <option>Grishneshwar & Jyotirlinga</option>
                      <option>Bhimashankar</option>
                      <option>Custom Tour</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1.5">No. of Travellers</label>
                    <select name="travelers" value={form.travelers} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E05A1A]/30 focus:border-[#E05A1A] transition bg-white">
                      <option value="1">1 Traveller</option>
                      <option value="2">2 Travellers</option>
                      <option value="3">3 Travellers</option>
                      <option value="4">4 Travellers</option>
                      <option value="5-10">5–10 Travellers</option>
                      <option value="10+">More than 10</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1.5">Travel Date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E05A1A]/30 focus:border-[#E05A1A] transition" />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Tell us your travel requirements, group details, special requests…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E05A1A]/30 focus:border-[#E05A1A] transition resize-none" />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-sm mt-1">
                  <FaWhatsapp size={17} />
                  Send via WhatsApp
                  <MdSend size={15} />
                </button>
                <p className="text-center text-xs text-gray-400">Opens WhatsApp with your enquiry pre-filled</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="h-72 md:h-96 w-full mb-10">
        <iframe
          title="Capital Travels Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2!2d75.3233!3d19.8762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda596e9697ecb7%3A0x7deea6ef3bef5d3f!2sCity%20Chowk%2C%20Aurangabad!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </div>
  );
};

export default Contact;
