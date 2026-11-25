import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const dropdownItems = [
  {
    label: "Tour Packages",
    to: "/explore",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    desc: "Ajanta, Ellora, Shirdi & more",
    
  },
  {
    label: "Transport Services",
    to: "/services",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    desc: "Taxi, luxury cars & buses",
  },
  {
    label: "Gallery",
    to: "/gallery",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    desc: "Photos from our tours",
  },
];

const navLinks = [
  {
    label: "Home",
    to: "/",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: "About Us",
    to: "/about",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    to: "/contact",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [dropOpen, setDropOpen]       = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
    setMobileDropOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const exploreActive = location.pathname === "/explore" || location.pathname === "/gallery";
  const textColor = scrolled ? "text-gray-600" : "text-white";
  const activeColor = scrolled ? "text-[#E05A1A]" : "text-orange-300";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-3 border-b border-gray-100"
            : "bg-[#1A1A2E]/80 backdrop-blur-md py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-[#E05A1A] to-[#C04A10] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-black text-base leading-none tracking-tight">CT</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[6px] font-black">✓</span>
                </div>
              </div>
              <div className="leading-tight">
                <p className={`font-black text-sm tracking-widest uppercase transition-colors duration-300 ${scrolled ? "text-[#1A1A2E]" : "text-white"}`}>
                  Capital Travels
                </p>
                <p className="text-[10px] font-medium tracking-wider text-orange-300">
                  ✦ Comfort on Wheels · Since 1983
                </p>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex items-center gap-1">

              {/* Home */}
              {navLinks.slice(0, 1).map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link key={link.to} to={link.to}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group ${
                      active ? activeColor : `${textColor} hover:text-[#E05A1A]`
                    }`}
                  >
                    {link.icon}
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#E05A1A] rounded-full transition-all duration-300 ${active ? "w-3/4" : "w-0 group-hover:w-1/2"}`} />
                  </Link>
                );
              })}

              {/* About Us */}
              {navLinks.slice(1, 2).map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link key={link.to} to={link.to}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group ${
                      active ? activeColor : `${textColor} hover:text-[#E05A1A]`
                    }`}
                  >
                    {link.icon}
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#E05A1A] rounded-full transition-all duration-300 ${active ? "w-3/4" : "w-0 group-hover:w-1/2"}`} />
                  </Link>
                );
              })}

              {/* ── Explore dropdown ── */}
              <div ref={dropRef} className="relative">
                <button
                  onClick={() => setDropOpen(!dropOpen)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group ${
                    exploreActive ? activeColor : `${textColor} hover:text-[#E05A1A]`
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Explore
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#E05A1A] rounded-full transition-all duration-300 ${exploreActive ? "w-3/4" : "w-0 group-hover:w-1/2"}`} />
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                    dropOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                  }`}
                >
                  {/* Orange top bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#E05A1A] to-[#F47B3B]" />

                  <div className="p-2">
                    {dropdownItems.map((item) => (
                      <div key={item.label}>
                        <Link
                          to={item.to}
                          onClick={() => setDropOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-50 group transition-colors duration-150"
                        >
                          <div className="w-8 h-8 bg-orange-50 group-hover:bg-[#E05A1A] rounded-lg flex items-center justify-center text-[#E05A1A] group-hover:text-white transition-colors duration-150 flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 group-hover:text-[#E05A1A] transition-colors">{item.label}</p>
                            <p className="text-[11px] text-gray-400">{item.desc}</p>
                          </div>
                        </Link>

                        {/* Sub-items under Tour Packages */}
                        {item.subItems && (
                          <div className="ml-11 mb-1 flex flex-col gap-0.5">
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                onClick={() => setDropOpen(false)}
                                className="flex items-start gap-2 px-3 py-2 rounded-lg hover:bg-orange-50 group transition-colors duration-150"
                              >
                                <svg className="w-3 h-3 text-[#E05A1A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                  <p className="text-xs font-medium text-gray-700 group-hover:text-[#E05A1A] leading-snug transition-colors">{sub.label}</p>
                                  <p className="text-[10px] text-gray-400 mt-0.5">{sub.location}</p>
                                </div>
                              </Link>
                            ))}
                            <div className="border-t border-gray-100 mt-1 mb-1" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              {navLinks.slice(2).map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link key={link.to} to={link.to}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group ${
                      active ? activeColor : `${textColor} hover:text-[#E05A1A]`
                    }`}
                  >
                    {link.icon}
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#E05A1A] rounded-full transition-all duration-300 ${active ? "w-3/4" : "w-0 group-hover:w-1/2"}`} />
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <a href="https://wa.me/919890363536" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-md">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp
              </a>
              <a href="tel:+919890363536"
                className="flex items-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-md">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Book Now
              </a>
            </div>

            {/* ── Mobile hamburger ── */}
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
              className={`md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-200 ${
                scrolled ? "text-[#1A1A2E] hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`} />
              <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
              <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-[#1A1A2E]/95 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

          {/* Panel header */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-gray-900 px-6 py-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E05A1A] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-base">CT</span>
              </div>
              <div>
                <p className="text-white font-black text-sm tracking-widest uppercase">Capital Travels</p>
                <p className="text-orange-300 text-[10px]">Comfort on Wheels</p>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-4 pt-5 gap-1 flex-1 overflow-y-auto">

            {/* Regular links */}
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link key={link.to} to={link.to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    active ? "bg-[#E05A1A] text-white" : "text-gray-700 hover:bg-orange-50 hover:text-[#E05A1A]"
                  }`}
                >
                  {link.label}
                  {active && <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                </Link>
              );
            })}

            {/* Explore with sub-items */}
            <div>
              <button
                onClick={() => setMobileDropOpen(!mobileDropOpen)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  exploreActive ? "bg-[#E05A1A] text-white" : "text-gray-700 hover:bg-orange-50 hover:text-[#E05A1A]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Explore
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileDropOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Sub-items */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileDropOpen ? "max-h-60 mt-1" : "max-h-0"}`}>
                {dropdownItems.map((item) => (
                  <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 ml-4 rounded-xl text-sm text-gray-600 hover:bg-orange-50 hover:text-[#E05A1A] transition-colors"
                  >
                    <span className="w-7 h-7 bg-orange-50 rounded-lg flex items-center justify-center text-[#E05A1A] flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-[11px] text-gray-400">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div className="px-4 pb-8 flex flex-col gap-3">
            <a href="https://wa.me/919890363536" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a href="tel:+919890363536"
              className="flex items-center justify-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-semibold py-3 rounded-xl transition-colors text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +91 9890-36-3536
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
