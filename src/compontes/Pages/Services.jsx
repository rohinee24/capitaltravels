import React, { useState, useEffect, useRef } from "react";
import { FaCar, FaPlane, FaTrain, FaBriefcase, FaBus, FaUserTie, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const services = [
  {
    id: "01",
    icon: <FaCar size={30} />,
    title: "Pre-Paid Taxi",
    subtitle: "Fixed Fare · No Haggling",
    desc: "Book a pre-paid taxi from Aurangabad railway station, bus stand or anywhere in the city. The fare is agreed upfront — no meters, no arguments, no surprises. Just get in and go.",
    features: [
      "Fixed fare agreed upfront",
      "Clean, air-conditioned vehicle",
      "Door-to-door pickup & drop",
      "Available round the clock",
    ],
    image: "/ajantacaves.jpg",
  },
  {
    id: "02",
    icon: <FaPlane size={30} />,
    title: "Airport Transfers",
    subtitle: "On Time · Every Time",
    desc: "We track your flight in real time so your driver is always there — whether you land early or late. No waiting, no stress. Start and end every trip the right way.",
    features: [
      "Real-time flight tracking",
      "Driver waits at arrivals",
      "Luggage loading assistance",
      "Aurangabad Airport · 24/7",
    ],
    image: "/ellora.jpg",
  },
  {
    id: "03",
    icon: <FaTrain size={30} />,
    title: "Railway Station Transfers",
    subtitle: "Smooth Connections",
    desc: "Catching a train or just arrived at Aurangabad station? We coordinate pickups and drops around your train schedule so you never miss a connection or wait at the kerb.",
    features: [
      "Train schedule coordination",
      "Advance booking available",
      "All Aurangabad stations covered",
      "Comfortable sedans & SUVs",
    ],
    image: "/bhimashankar.jpg",
  },
  {
    id: "04",
    icon: <FaBriefcase size={30} />,
    title: "Corporate Travel",
    subtitle: "Professional · Discreet",
    desc: "Transporting executives, visiting delegates, or managing travel for a corporate event? Capital Travels provides reliable, punctual and professionally presented vehicles and chauffeurs.",
    features: [
      "Formal chauffeur service",
      "Corporate billing available",
      "Multi-city travel covered",
      "Executive sedans & SUVs",
    ],
    image: "/bibikamaqbara.webp",
  },
  {
    id: "05",
    icon: <FaBus size={30} />,
    title: "Bus & Tempo Traveller",
    subtitle: "Groups of All Sizes",
    desc: "Travelling with family, a pilgrim group or a corporate team? We have AC and non-AC vehicles from 9-seater tempo travellers to 50-seat coaches — all GPS tracked and well maintained.",
    features: [
      "9 to 50 passenger capacity",
      "AC & non-AC options",
      "GPS tracked fleet",
      "Pilgrimages, events & tours",
    ],
    image: "/ajantacaves.jpg",
  },
  {
    id: "06",
    icon: <FaUserTie size={30} />,
    title: "Luxury Car Hire",
    subtitle: "Premium for Every Occasion",
    desc: "Wedding convoy, VIP guest transfer, or a special anniversary trip — our premium vehicles and uniformed chauffeurs make the occasion as impressive as the destination.",
    features: [
      "Innova Crysta, Fortuner & more",
      "Uniformed chauffeur",
      "Wedding decoration on request",
      "Hourly & full-day hire",
    ],
    image: "/ellora.jpg",
  },
];

const useInView = (threshold = 0.08) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl border border-gray-100 p-7 flex flex-col gap-5 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(32px)",
        boxShadow: hovered ? "0 20px 48px -8px rgba(224,90,26,0.15), 0 4px 16px -4px rgba(0,0,0,0.08)" : "",
        transition: `opacity 0.65s ease ${index * 0.07}s, transform 0.4s ease, box-shadow 0.4s ease`,
      }}
    >
      {/* Number + Icon row */}
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 bg-[#E05A1A]/10 rounded-2xl flex items-center justify-center text-[#E05A1A] transition-all duration-300"
          style={{ background: hovered ? "#E05A1A" : "", color: hovered ? "#fff" : "" }}>
          {service.icon}
        </div>
        {/* <span className="font-heading font-black text-gray-100 text-5xl leading-none select-none">{service.id}</span> */}
      </div>

      {/* Title */}
      <div>
        <p className="text-[#E05A1A] text-[10px] font-bold uppercase tracking-widest mb-1">{service.subtitle}</p>
        <h3 className="font-heading font-black text-[#1A1A2E] text-xl leading-tight">{service.title}</h3>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gray-100" />

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.desc}</p>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded-full bg-[#E05A1A]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-2 h-2 text-[#E05A1A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-500 text-xs">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`https://wa.me/919890363536?text=Hi%2C%20I%20want%20to%20book%3A%20${encodeURIComponent(service.title)}`}
        target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-white font-bold px-5 py-3 rounded-xl text-xs transition-all duration-300 mt-auto"
        style={{ background: "#E05A1A", boxShadow: hovered ? "0 6px 20px -4px rgba(224,90,26,0.5)" : "none" }}
      >
        <FaWhatsapp size={14} />
        Book This Service
        <IoMdArrowForward size={12} />
      </a>
    </div>
  );
};

const ServicesPage = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div className="pt-16 bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <img src="/bhimashankar.jpg" alt="Capital Travels Services" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#1A1A2E]/85" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#E05A1A]/10 rounded-full blur-3xl pointer-events-none" />

        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-[#E05A1A]/50 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(224,90,26,0.12)" }}>
              <span className="w-1.5 h-1.5 bg-[#E05A1A] rounded-full animate-pulse" />
              <span className="text-orange-200 text-xs font-semibold uppercase tracking-widest">Tour Services</span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight mb-5">
              Transport for<br />
              <span className="text-[#F47B3B]">Every Occasion</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Pre-paid taxi, airport transfers, corporate travel, luxury cars and group buses — Capital Travels covers every journey with the same 40-year commitment to comfort and reliability.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919890363536"
                className="inline-flex items-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105">
                <FaPhoneAlt size={13} /> Call Now
              </a>
              <a href="https://wa.me/919890363536" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105">
                <FaWhatsapp size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#E05A1A] font-semibold uppercase tracking-widest text-xs mb-3">What We Provide</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-[#1A1A2E] leading-tight">
              Six Services, One Trusted Name
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
              Every service comes with a professional driver, clean vehicle, and the reliability Capital Travels has built over 40 years.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#1A1A2E] relative overflow-hidden mb-15">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E05A1A]/8 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-white text-3xl md:text-4xl mb-3 leading-tight">
            Need a Vehicle Today?
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
            Call or message us — we confirm bookings fast and handle every detail from pickup to drop.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919890363536" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 text-sm shadow-lg">
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </a>
            <a href="tel:+919890363536"
              className="inline-flex items-center justify-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 text-sm shadow-lg">
              <FaPhoneAlt size={14} /> +91 9890-36-3536
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
