import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const imgAjanta      = "/ajantacaves.jpg";
const imgEllora      = "/ellora.jpg";
const imgShirdi      = "/shirdi.jfif";
const imgBhimashankar = "/bhimashankar.jpg";
const imgAurangabad  = "/bibikamaqbara.webp";

const slides = [
  {
    id: 1,
    image: imgAjanta,
    location: "Ajanta Caves, Maharashtra",
  
    title: "Step Into History at",
titleHighlight: "The Timeless Ajanta Caves",
sub: "Journey through ancient Buddhist heritage, where magnificent murals, intricate sculptures, and centuries-old rock-cut architecture bring India's glorious past to life.",
    
    cta: "Book This Tour",
    ctaLink: "/explore",
    accent: "#F47B3B",
    overlay: "from-[#1A1A2E]/75 via-[#1A1A2E]/40 to-transparent",
  },
  {
    id: 2,
    image: imgEllora,
    location: "Ellora Caves, Maharashtra",
  
    title: "Witness the Wonder of",
titleHighlight: "Ellora's Magnificent Kailasa Temple",
sub: "Explore an extraordinary masterpiece carved from a single rock. Discover 34 remarkable caves showcasing the artistic brilliance of Hindu, Buddhist, and Jain traditions.",
   
    cta: "Explore Ellora",
    ctaLink: "/explore",
    accent: "#fbbf24",
    overlay: "from-[#1a1200]/75 via-[#2a1e00]/40 to-transparent",
  },
  {
    id: 3,
    image: imgBhimashankar,
    location: "Shirdi, Maharashtra",
  
   title: "Discover Peace Through",
titleHighlight: "Maharashtra's Sacred Jyotirlingas",
sub: "Embark on a spiritual journey through Shirdi, Trimbakeshwar, Bhimashankar, and Grishneshwar. Experience divine blessings, sacred traditions, and unforgettable moments of devotion.",
   
    cta: "View Package",
    ctaLink: "/explore",
    accent: "#c084fc",
    overlay: "from-[#1a0a2e]/75 via-[#2a0a3e]/40 to-transparent",
  },
  {
    id: 4,
    image: imgAurangabad,
    location: "Aurangabad, Maharashtra",
   
    title: "Uncover the Heritage of",
titleHighlight: "Aurangabad's Historic Landmarks",
sub: "From the majestic Bibi Ka Maqbara to the mighty Daulatabad Fort, explore architectural wonders, ancient caves, and fascinating stories that shaped this historic city.",
   
    cta: "Book City Tour",
    ctaLink: "/explore",
    accent: "#4ade80",
    overlay: "from-[#0a2a1a]/75 via-[#0a3a20]/40 to-transparent",
  },
];

const Hero = () => {
  const [current, setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);
  const [destination, setDestination] = useState("");

  const goTo = useCallback((index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  }, [animating, current]);

  const goNext = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "600px" }}>

      {/* ── Background images — cross-fade ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: 1 }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-center"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.overlay}`} />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* ── Accent glow ── */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full blur-3xl opacity-15 z-10 pointer-events-none transition-colors duration-700"
        style={{ background: slide.accent }}
      />

      {/* ── Main content ── */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          key={current}
          className="max-w-2xl"
          style={{ animation: "slideUp 0.65s ease-out forwards" }}
        >
          {/* Location pill */}
          {/* <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4 text-xs text-white/80">
            <svg className="w-3 h-3 text-white/60" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {slide.location}
          </div> */}

          

          {/* Heading */}
          <h1 className="font-heading font-black leading-tight mb-5 text-3xl md:text-3xl lg:text-5xl drop-shadow-lg">
            <span className="block text-white">{slide.title}</span>
            <span className="block" style={{ color: slide.accent }}>{slide.titleHighlight}</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-md mb-4 leading-relaxed max-w-xl drop-shadow">
            {slide.sub}
          </p>

          {/* Price / location tag */}
          <p className="text-sm font-medium mb-8" style={{ color: slide.accent }}>
            {slide.tag}
          </p>

          {/* Quick enquiry */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 mb-6 max-w-lg">
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2.5">Quick Enquiry</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Where do you want to go?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="flex-1 bg-white/90 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E05A1A]"
              />
              <Link
                to={`/contact${destination ? `?dest=${encodeURIComponent(destination)}` : ""}`}
                className="bg-[#E05A1A] hover:bg-[#C04A10] text-white font-semibold px-5 py-2.5 rounded-lg text-sm whitespace-nowrap transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              to={slide.ctaLink}
              className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-xl transition-all duration-200 shadow-lg text-sm text-white"
              style={{ background: slide.accent }}
            >
              {slide.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/919890363536"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 text-sm backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Thumbnail strip (right side, desktop) ── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`relative overflow-hidden rounded-xl transition-all duration-300 border-2 ${
              i === current
                ? "w-16 h-20 border-white scale-105 shadow-lg"
                : "w-12 h-14 border-white/20 opacity-50 hover:opacity-80 hover:border-white/50"
            }`}
          >
            <img src={s.image} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={goPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 md:right-8 lg:right-28 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* ── Bottom: dots + stats ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-7">
          <div className="flex items-end justify-between">

            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-7 h-2 bg-[#E05A1A]" : "w-2 h-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
              <span className="text-white/40 text-xs font-mono ml-2">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex gap-2">
              {[
                { num: "40+", label: "Years" },
                { num: "10K+", label: "Travellers" },
                { num: "50+", label: "Destinations" },
                { num: "24/7", label: "Support" },
              ].map((s) => (
                <div key={s.label} className="bg-black/30 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2 text-center min-w-[72px]">
                  <p className="text-[#F47B3B] font-black text-base leading-none">{s.num}</p>
                  <p className="text-gray-300 text-[10px] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-white/10">
          <div
            key={current}
            className="h-full bg-[#E05A1A]"
            style={{ animation: "heroProgress 6s linear forwards" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes heroProgress {
          from { width: 0% }
          to   { width: 100% }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px) }
          to   { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </section>
  );
};

export default Hero;
