import React, { useState, useEffect, useRef } from "react";
import { FaShieldAlt, FaClock, FaCheckCircle, FaMapMarkerAlt, FaTrophy, FaStar, FaUsers, FaBus, FaCalendarAlt } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

const reasons = [
  {
    icon: <FaTrophy size={22} />,
    title: "40+ Years of Trust",
    desc: "In business since 1983 — serving travellers across Maharashtra with an impeccable track record.",
  },
  {
    icon: <FaStar size={22} />,
    title: "TripAdvisor Certified",
    desc: "Recognised as Travellers' Choice on TripAdvisor. Your satisfaction is our strongest credential.",
  },
  {
    icon: <FaShieldAlt size={22} />,
    title: "Safe & Reliable",
    desc: "GPS-tracked vehicles, verified chauffeurs, and round-the-clock support for every journey.",
  },
  {
    icon: <FaCheckCircle size={22} />,
    title: "Transparent Pricing",
    desc: "No hidden charges. Fixed-fare pre-paid taxis and clearly quoted packages — always.",
  },
  {
    icon: <RiCustomerService2Line size={24} />,
    title: "24/7 Availability",
    desc: "Early morning flight? Late-night arrival? We operate round the clock, every day of the year.",
  },
  {
    icon: <FaMapMarkerAlt size={22} />,
    title: "Expert Local Knowledge",
    desc: "Our drivers and guides know Aurangabad and Maharashtra inside out — hidden gems included.",
  },
];

const stats = [
  { icon: <FaCalendarAlt size={28} />, value: "40+",     label: "Years in Service",     sub: "Est. 1983" },
  { icon: <FaUsers size={28} />,       value: "50,000+", label: "Happy Clients",        sub: "& counting" },
  { icon: <FaMapMarkerAlt size={28} />,value: "50+",     label: "Destinations Covered", sub: "Across India" },
  { icon: <FaBus size={28} />,         value: "100+",    label: "Vehicles in Fleet",    sub: "Well maintained" },
];

const useInView = (threshold = 0.1) => {
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

const WhyUs = () => {
  const [headerRef, headerInView] = useInView(0.15);

  return (
    <section className="py-10 md:py-11 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="inline-flex items-center gap-2 border border-[#E05A1A]/30 rounded-full px-4 py-1.5 mb-5"
            style={{ background: "rgba(224,90,26,0.07)" }}>
            <span className="w-1.5 h-1.5 bg-[#E05A1A] rounded-full animate-pulse" />
            <span className="text-[#E05A1A] text-xs font-semibold uppercase tracking-widest">Why Choose Us</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-[#1A1A2E] mb-4 leading-tight">
            The Capital Travels
            <span className="block text-[#E05A1A]">Difference</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Decades of experience, a trusted name, and a genuine passion for making every journey memorable.
          </p>
        </div>

        {/* ── Two column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left — image with floating badge */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/ajantacaves.jpg"
                alt="Capital Travels"
                className="w-full h-80 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent rounded-3xl" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 min-w-[160px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#E05A1A]/10 rounded-xl flex items-center justify-center text-[#E05A1A]">
                  <FaUsers size={18} />
                </div>
                <div>
                  <p className="font-heading font-black text-[#1A1A2E] text-2xl leading-none">50,000+</p>
                  <p className="text-gray-400 text-xs mt-0.5">Happy Clients</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-2">
                {[1,2,3,4,5].map((s) => <FaStar key={s} size={12} className="text-yellow-400" />)}
              </div>
            </div>

            {/* Floating experience card */}
            <div className="absolute -top-4 -left-4 bg-[#E05A1A] rounded-2xl shadow-xl p-4 text-white min-w-[130px]">
              <p className="font-heading font-black text-3xl leading-none">40+</p>
              <p className="text-orange-100 text-xs mt-1">Years of<br />Trusted Service</p>
            </div>
          </div>

          {/* Right — reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#E05A1A]/30 hover:shadow-md transition-all duration-300 group bg-white"
                style={{
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                <div className="w-11 h-11 bg-[#E05A1A]/10 rounded-xl flex items-center justify-center text-[#E05A1A] flex-shrink-0 group-hover:bg-[#E05A1A] group-hover:text-white transition-all duration-300">
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#1A1A2E] text-sm mb-1">{r.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats banner ── */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[#1A1A2E]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E05A1A]/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E05A1A]/8 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={s.label}
                className="text-center px-6 py-10 group hover:bg-white/5 transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-[#E05A1A]/15 group-hover:bg-[#E05A1A] rounded-2xl flex items-center justify-center text-[#E05A1A] group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </div>
                </div>
                <p className="font-heading font-black text-white text-3xl md:text-4xl leading-none mb-1">{s.value}</p>
                <p className="text-gray-300 text-sm font-medium mt-1">{s.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
