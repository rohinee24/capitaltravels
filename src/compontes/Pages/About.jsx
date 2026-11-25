import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCar, FaBus, FaStar, FaUserTie, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaCheckCircle, FaShieldAlt, FaClock, FaHandshake, FaTrophy } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { BsCalendarCheck } from "react-icons/bs";

const milestones = [
  { year: "1983", label: "Founded", desc: "M. Taqui started Capital Travels with a single pre-paid taxi — built on trust and punctuality.", icon: <FaCar className="text-[#E05A1A]" /> },
  { year: "1990", label: "Fleet Grew", desc: "Expanded to SUVs and launched curated package tour services across Maharashtra.", icon: <FaBus className="text-[#E05A1A]" /> },
  { year: "2000", label: "Group Travel", desc: "Launched pan-Maharashtra bus & group travel for pilgrimages and corporate trips.", icon: <MdOutlineExplore className="text-[#E05A1A]" /> },
  { year: "2010", label: "Award", desc: "Recognised as TripAdvisor Travellers' Choice — earned through thousands of 5-star reviews.", icon: <FaTrophy className="text-[#E05A1A]" /> },
  { year: "2015", label: "Expanded", desc: "M. Mohsin joined as Co-Director, strengthening luxury car hire and corporate services.", icon: <FaUserTie className="text-[#E05A1A]" /> },
  { year: "2024", label: "Still Growing", desc: "10,000+ happy travellers, 100+ vehicles, and Aurangabad's most trusted travel name.", icon: <BsCalendarCheck className="text-[#E05A1A]" /> },
];

const values = [
  { icon: <FaShieldAlt size={22} />, title: "Safety First", desc: "GPS-tracked vehicles and verified professional drivers on every trip." },
  { icon: <FaClock size={22} />, title: "Always On Time", desc: "Punctuality is our promise — from airport pickups to multi-day tours." },
  { icon: <FaCheckCircle size={22} />, title: "Transparent Pricing", desc: "No hidden charges. What we quote is what you pay — always." },
  { icon: <FaHandshake size={22} />, title: "Genuine Hospitality", desc: "We treat every traveller like family. Your comfort is our highest priority." },
];

const team = [
  {
    name: "M. Taqui",
    role: "Founder & Director",
    phone: "+91 9890-36-3536",
    whatsapp: "919890363536",
    desc: "With over 40 years in the travel industry, Taqui built Capital Travels from the ground up — driven by a commitment to comfort, reliability, and genuine hospitality.",
    initial: "MT",
    since: "Since 1983",
  },
  {
    name: "M. Mohsin",
    role: "Co-Director & Operations Head",
    phone: "+91 9860-36-7110",
    whatsapp: "919860367110",
    desc: "Mohsin oversees fleet management, tour operations, and corporate accounts — ensuring every journey runs like clockwork.",
    initial: "MM",
    since: "Since 2015",
  },
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

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}>
      {children}
    </div>
  );
};

const About = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div className="pt-16 bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "88vh" }}>
        <img src="/ajantacaves.jpg" alt="Capital Travels" className="absolute inset-0 w-full h-full object-cover object-top" />
        {/* Two-layer overlay — dark base + orange tint */}
        <div className="absolute inset-0 bg-[#1A1A2E]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/60 to-transparent" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#E05A1A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-96 h-64 bg-[#E05A1A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-32"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#E05A1A]/50 rounded-full px-4 py-1.5 mb-6 w-fit"
            style={{ background: "rgba(224,90,26,0.12)" }}>
            <span className="w-1.5 h-1.5 bg-[#E05A1A] rounded-full animate-pulse" />
            <span className="text-orange-200 text-xs font-semibold uppercase tracking-widest">Our Story</span>
          </div>

          <h1 className="font-heading font-black text-3xl md:text-3xl lg:text-5xl text-white leading-tight mb-6 max-w-2xl">
            40+ Years of<br />
            <span className="text-[#F47B3B]">Comfort</span> on Wheels
          </h1>

          <p className="text-gray-300 text-lg max-w-xl leading-relaxed mb-10">
            Born in Aurangabad in 1983 from a simple belief — every traveller deserves to arrive safely, comfortably, and on time.
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <BsCalendarCheck />, val: "40+", lbl: "Years" },
              { icon: <FaStar />, val: "10K+", lbl: "Travellers" },
              { icon: <FaMapMarkerAlt />, val: "50+", lbl: "Destinations" },
              { icon: <FaBus />, val: "100+", lbl: "Vehicles" },
            ].map((s) => (
              <div key={s.lbl}
                className="flex items-center gap-2.5 bg-white/8 border border-white/15 backdrop-blur-sm rounded-xl px-4 py-3"
                style={{ background: "rgba(255,255,255,0.07)" }}>
                <span className="text-[#E05A1A] text-sm">{s.icon}</span>
                <div>
                  <p className="text-white font-black text-lg leading-none">{s.val}</p>
                  <p className="text-gray-400 text-[11px]">{s.lbl}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-11 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <Reveal delay={0}>
              <p className="text-[#E05A1A] font-semibold uppercase tracking-widest text-xs mb-3">Who We Are</p>
              <h2 className="font-heading font-black text-4xl text-[#1A1A2E] mb-6 leading-tight">
                Aurangabad's Most<br />Trusted Travel Partner
              </h2>
              <div className="flex flex-col gap-4 text-gray-500 text-sm leading-relaxed">
                <p>Capital Travels has been serving travellers in and around Aurangabad since 1983. What started as a single pre-paid taxi has grown into a full-service travel company with over 100 vehicles, a dedicated team, and a reputation built entirely on trust and word-of-mouth.</p>
                <p>We specialise in pre-paid taxi services, curated package tours to Ajanta & Ellora, Shirdi, and destinations across India, luxury car hire for corporate events, and group transportation via bus and tempo traveller.</p>
                <p>Our TripAdvisor Travellers' Choice recognition is earned — the result of thousands of satisfied travellers who chose us and came back again.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/explore"
                  className="inline-flex items-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-md">
                  <MdOutlineExplore size={16} /> Explore Tours <IoMdArrowForward size={14} />
                </Link>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#E05A1A] text-[#E05A1A] hover:bg-[#E05A1A] hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-all">
                  Contact Us
                </Link>
              </div>
            </Reveal>

            {/* Stats grid */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: <FaTrophy size={24} className="text-[#E05A1A]" />, val: "40+", lbl: "Years in Service" },
                  { icon: <FaStar size={24} className="text-[#E05A1A]" />, val: "10K+", lbl: "Happy Travellers" },
                  { icon: <FaMapMarkerAlt size={24} className="text-[#E05A1A]" />, val: "50+", lbl: "Destinations" },
                  { icon: <FaBus size={24} className="text-[#E05A1A]" />, val: "100+", lbl: "Fleet Vehicles" },
                ].map((s) => (
                  <div key={s.lbl}
                    className="rounded-2xl p-7 text-center border border-gray-100 hover:border-[#E05A1A]/30 hover:shadow-lg transition-all duration-300 group bg-white">
                    <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                    <p className="font-heading font-black text-4xl text-[#1A1A2E] mb-1">{s.val}</p>
                    <p className="text-gray-400 text-xs">{s.lbl}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-[#E05A1A] font-semibold uppercase tracking-widest text-xs mb-3">What We Stand For</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white">Our Core Values</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="border border-white/10 rounded-2xl p-7 text-center group hover:border-[#E05A1A]/50 hover:bg-white/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-[#E05A1A]/15 flex items-center justify-center text-[#E05A1A] group-hover:bg-[#E05A1A] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-11 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-[#E05A1A] font-semibold uppercase tracking-widest text-xs mb-3">Our Journey</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-[#1A1A2E]">Four Decades of Milestones</h2>
          </Reveal>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#E05A1A] to-gray-200" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.08} className="flex gap-6 items-start">
                  {/* Circle */}
                  <div className="w-12 h-12 bg-[#E05A1A] rounded-full flex items-center justify-center text-white font-heading font-black text-xs flex-shrink-0 z-10 shadow-md">
                    {m.year.slice(2)}
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[#E05A1A]/20 transition-all duration-300 group mt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg group-hover:scale-110 transition-transform duration-200">{m.icon}</span>
                      <span className="font-heading font-black text-[#E05A1A] text-sm">{m.year}</span>
                      <span className="text-xs text-gray-400 font-medium">· {m.label}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-11 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center mb-14">
            <p className="text-[#E05A1A] font-semibold uppercase tracking-widest text-xs mb-3">Leadership</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-[#1A1A2E]">The Faces of Capital Travels</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.15}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">

                  {/* Card header */}
                  <div className="bg-[#1A1A2E] px-8 py-8 flex items-center gap-5">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-2xl bg-[#E05A1A] flex items-center justify-center text-white font-heading font-black text-2xl flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {t.initial}
                    </div>
                    {/* Name & role */}
                    <div>
                      <div className="inline-flex items-center gap-1.5 bg-[#E05A1A]/20 border border-[#E05A1A]/30 rounded-full px-2.5 py-0.5 mb-1.5">
                        <span className="text-[#F47B3B] text-[10px] font-bold uppercase tracking-widest">{t.since}</span>
                      </div>
                      <h3 className="font-heading font-black text-white text-xl leading-tight">{t.name}</h3>
                      <p className="text-[#F47B3B] text-sm font-medium mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-8 py-6">
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.desc}</p>

                    {/* Contact */}
                    <div className="flex flex-col gap-3">
                      <a href={`tel:${t.phone.replace(/[\s\-]/g, "")}`}
                        className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-[#E05A1A]/30 hover:bg-orange-50 transition-all duration-200 group/btn">
                        <div className="w-9 h-9 bg-[#1A1A2E] group-hover/btn:bg-[#E05A1A] rounded-xl flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                          <FaPhoneAlt className="text-white" size={13} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 leading-none mb-0.5">Call Directly</p>
                          <p className="text-sm font-bold text-[#1A1A2E]">{t.phone}</p>
                        </div>
                      </a>

                      <a href={`https://wa.me/${t.whatsapp}`} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all duration-200 group/wa">
                        <div className="w-9 h-9 bg-green-500 group-hover/wa:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                          <FaWhatsapp className="text-white" size={15} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 leading-none mb-0.5">Chat on WhatsApp</p>
                          <p className="text-sm font-bold text-[#1A1A2E]">Send a Message</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 md:py-13 bg-[#1A1A2E] relative overflow-hidden mb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-gray-900 to-[#E05A1A]" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-orange-500/10 rounded-full translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          {/* TripAdvisor */}
          <div className="inline-flex items-center gap-4 border border-white/10 rounded-2xl px-6 py-4 mb-10 bg-white/5">
            <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs">TA</span>
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">TripAdvisor Travellers' Choice</p>
              <div className="flex gap-0.5 mt-1">
                {[1,2,3,4,5].map((s) => <FaStar key={s} className="w-3.5 h-3.5 text-yellow-400" />)}
              </div>
              <p className="text-gray-400 text-xs mt-0.5">Recognised for outstanding travel experiences</p>
            </div>
          </div>

          <h2 className="font-heading font-black text-white text-3xl md:text-3xl lg:text-5xl mb-3">Ready to Travel with Us?</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">Join 10,000+ satisfied travellers who trust Capital Travels across Maharashtra and India.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/explore"
              className="inline-flex items-center justify-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 text-sm shadow-lg">
              <MdOutlineExplore size={18} /> View Tour Packages
            </Link>
            <a href="https://wa.me/919890363536" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 text-sm shadow-lg">
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
