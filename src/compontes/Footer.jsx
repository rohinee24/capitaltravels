import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCar, FaBus, FaStar } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";

const quickLinks = [
  { label: "Home",         to: "/" },
  { label: "About Us",     to: "/about" },
  { label: "Tour Packages",to: "/explore" },
  { label: "Gallery",      to: "/gallery" },
  { label: "Contact",      to: "/contact" },
];

const tours = [
  "Ajanta & Ellora Caves",
  "3-Day Shirdi, Ajanta & Ellora",
  "Aurangabad City Tour",
  "Jyotirlinga Pilgrimage",
  "Bhimashankar Tour",
  "Custom Private Tour",
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-gray-400">

      {/* ── CTA Banner ── */}
      <div className="bg-[#E05A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-heading font-black text-white text-xl leading-tight">Ready to plan your next trip?</p>
            <p className="text-orange-100 text-sm mt-0.5">Call or WhatsApp us — we respond within minutes.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:+919890363536"
              className="inline-flex items-center gap-2 bg-white text-[#E05A1A] font-bold px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors text-sm shadow-md">
              <FaPhoneAlt size={13} /> Call Now
            </a>
            <a href="https://wa.me/919890363536" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm shadow-md">
              <FaWhatsapp size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-11 h-11 bg-[#E05A1A] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-heading font-black text-base">CT</span>
              </div>
              <div>
                <p className="font-heading font-black text-white text-sm tracking-widest uppercase">Capital Travels</p>
                <p className="text-[#E05A1A] text-[10px] font-medium">Comfort on Wheels</p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-5 text-gray-400">
              Aurangabad's most trusted travel partner since 1983 — Pre-Paid Taxi, Package Tours, Luxury Cars & Buses across Maharashtra and India.
            </p>

            {/* Services pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["Pre-Paid Taxi", "Package Tours", "Luxury Cars", "Bus & Tempo"].map((s) => (
                <span key={s} className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10 text-gray-400">
                  {s}
                </span>
              ))}
            </div>

            {/* TripAdvisor */}
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 w-fit">
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-[9px] font-black flex-shrink-0">TA</div>
              <div>
                <p className="text-white text-xs font-semibold leading-none">Travellers' Choice</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[1,2,3,4,5].map((s) => <FaStar key={s} size={9} className="text-yellow-400" />)}
                </div>
              </div>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#E05A1A] rounded-full" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}
                    className="text-sm text-gray-400 hover:text-[#E05A1A] transition-colors inline-flex items-center gap-2 group">
                    <IoMdArrowForward size={12} className="text-gray-600 group-hover:text-[#E05A1A] group-hover:translate-x-1 transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Popular Tours ── */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#E05A1A] rounded-full" />
              Popular Tours
            </h4>
            <ul className="flex flex-col gap-2.5">
              {tours.map((t) => (
                <li key={t}>
                  <Link to="/explore"
                    className="text-sm text-gray-400 hover:text-[#E05A1A] transition-colors inline-flex items-center gap-2 group">
                    <MdOutlineExplore size={13} className="text-gray-600 group-hover:text-[#E05A1A] transition-colors flex-shrink-0" />
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#E05A1A] rounded-full" />
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">

              <li>
                <a href="tel:+919890363536"
                  className="flex items-start gap-3 group hover:text-[#E05A1A] transition-colors">
                  <div className="w-8 h-8 bg-white/5 group-hover:bg-[#E05A1A]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <FaPhoneAlt size={12} className="text-[#E05A1A]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 mb-0.5">M. Taqui</p>
                    <p className="text-sm text-gray-300 group-hover:text-[#E05A1A] transition-colors font-medium">+91 9890-36-3536</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="tel:+919860367110"
                  className="flex items-start gap-3 group hover:text-[#E05A1A] transition-colors">
                  <div className="w-8 h-8 bg-white/5 group-hover:bg-[#E05A1A]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <FaPhoneAlt size={12} className="text-[#E05A1A]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 mb-0.5">M. Mohsin</p>
                    <p className="text-sm text-gray-300 group-hover:text-[#E05A1A] transition-colors font-medium">+91 9860-36-7110</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="mailto:capitaltoursind@gmail.com"
                  className="flex items-start gap-3 group hover:text-[#E05A1A] transition-colors">
                  <div className="w-8 h-8 bg-white/5 group-hover:bg-[#E05A1A]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <FaEnvelope size={12} className="text-[#E05A1A]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 mb-0.5">Email</p>
                    <p className="text-sm text-gray-300 group-hover:text-[#E05A1A] transition-colors font-medium break-all">capitaltoursind@gmail.com</p>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt size={12} className="text-[#E05A1A]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 mb-0.5">Address</p>
                    <p className="text-sm text-gray-400 leading-snug">1-23-9, Deodi Bazar,<br />City Chowk, Aurangabad – 431 001</p>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/8" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Capital Travels. All rights reserved. · Est. 1983, Aurangabad</p>
          <div className="flex items-center gap-4">
            <a href="https://www.capitaltravels.biz" className="hover:text-[#E05A1A] transition-colors">
              www.capitaltravels.biz
            </a>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <a href="mailto:capitaltoursind@gmail.com" className="hover:text-[#E05A1A] transition-colors">
              capitaltoursind@gmail.com
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
