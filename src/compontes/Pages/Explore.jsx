import React, { useState, useEffect, useRef, useCallback } from "react";

const allTours = [
  {
    id: 1,
    category: "Spiritual",
    image: "/shirdi.jfif",
    title: "Affordable 3-Day Shirdi, Ajanta & Ellora Tour Package",
    duration: "3 Days",
    groupSize: "Up to 6",
    tags: ["Spiritual", "Heritage"],
    desc: "An affordable 3-day journey combining the spiritual blessings of Shirdi Sai Baba with the UNESCO World Heritage wonders of Ajanta & Ellora Caves.",
    highlights: ["Shirdi Sai Baba Temple", "Ajanta Caves", "Ellora Kailasa Temple"],
    emoji: "🙏",
    accent: "#E05A1A",
    popular: true,
    location: "Aurangabad, Maharashtra",
  },
  {
    id: 2,
    category: "Religious",
    image: "/bhimashankar.jpg",
    title: "Grishneshwar, Shani Shingnapur, Shirdi, Trimbakeshwar & Bhimashankar Tour",
    duration: "3 Days",
    groupSize: "Up to 6",
    tags: ["Jyotirlinga", "Pilgrimage"],
    desc: "A sacred pilgrimage trail through Maharashtra's most revered Jyotirlinga temples — Grishneshwar, Trimbakeshwar & Bhimashankar — along with Shani Shingnapur and Shirdi.",
    highlights: ["Grishneshwar Jyotirlinga", "Shani Shingnapur", "Shirdi & Trimbakeshwar"],
    emoji: "🔱",
    accent: "#E05A1A",
    popular: true,
    location: "Maharashtra, India",
  },
];

const categories = ["All", "Spiritual", "Religious"];

// Intersection observer hook
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

const TourCard = ({ tour, index }) => {
  const [ref, inView] = useInView(0.08);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl overflow-hidden relative cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
        transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${index * 0.07}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${index * 0.07}s`,
        boxShadow: hovered
          ? `0 24px 48px -8px ${tour.accent}44, 0 8px 16px -4px rgba(0,0,0,0.12)`
          : "0 2px 16px -4px rgba(0,0,0,0.10)",
      }}
    >
      {/* Popular badge */}
      {tour.popular && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-[#E05A1A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
          ⭐ Popular
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, ${tour.accent}cc 0%, transparent 60%)`,
            opacity: hovered ? 0.9 : 0.6,
          }}
        />

        {/* Shimmer on hover */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.15) 50%,transparent 60%)",
            backgroundSize: "200% 100%",
            backgroundPosition: hovered ? "left" : "right",
            transition: "background-position 0.5s ease",
          }}
        />

        {/* Duration + group */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
            ⏱ {tour.duration}
          </span>
          <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
            👥 {tour.groupSize}
          </span>
        </div>

        {/* Tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {tour.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white backdrop-blur-sm"
              style={{ background: `${tour.accent}cc` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Accent bottom bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
          style={{ width: hovered ? "100%" : "0%", background: tour.accent }}
        />
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Emoji + Title */}
        <div className="flex items-start gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300"
            style={{
              background: `${tour.accent}18`,
              transform: hovered ? "scale(1.1) rotate(-3deg)" : "scale(1) rotate(0deg)",
            }}
          >
            {tour.emoji}
          </div>
          <div className="pt-0.5">
            <h3
              className="font-heading font-bold text-base leading-snug transition-colors duration-200"
              style={{ color: hovered ? tour.accent : "#1A1A2E" }}
            >
              {tour.title}
            </h3>
            {tour.location && (
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400 text-[11px]">{tour.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Desc */}
        <p className="text-gray-500 text-xs leading-relaxed mb-4">{tour.desc}</p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1.5 mb-4">
          {tour.highlights.map((h, i) => (
            <li
              key={h}
              className="flex items-center gap-2 text-xs text-gray-600"
              style={{
                transform: hovered ? "translateX(4px)" : "translateX(0)",
                transition: `transform 0.2s ease ${i * 0.05}s`,
              }}
            >
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: tour.accent }}
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {h}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="pt-3 border-t border-gray-100">
          <a
            href={`https://wa.me/919890363536?text=Hi%2C%20I%20want%20to%20book%3A%20${encodeURIComponent(tour.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs font-bold text-white w-full py-2.5 rounded-xl transition-all duration-300"
            style={{
              background: tour.accent,
              boxShadow: hovered ? `0 6px 20px -4px ${tour.accent}88` : "none",
              transform: hovered ? "scale(1.02)" : "scale(1)",
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Book on WhatsApp
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Explore = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const filtered = allTours;

  return (
    <div className="pt-16">

      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
        <img src="/ajantacaves.jpg" alt="Tours" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/90 via-[#1A1A2E]/70 to-[#E05A1A]/50" />

        {/* Blobs */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#E05A1A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-64 bg-orange-500/10 rounded-full blur-3xl" />

        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E05A1A]/20 border border-[#E05A1A]/40 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#E05A1A] rounded-full animate-pulse" />
            <span className="text-orange-200 text-xs font-semibold uppercase tracking-widest">Capital Travels</span>
          </div>

          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Explore Our
            <span className="block text-[#F47B3B]">Tour Packages</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From day trips around Aurangabad to week-long pan-India adventures — handcrafted itineraries for every group, budget, and dream.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { num: "12+", label: "Tour Packages" },
              { num: "50+", label: "Destinations" },
              { num: "10K+", label: "Happy Travellers" },
              { num: "40+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center min-w-[90px]">
                <p className="text-[#F47B3B] font-black text-xl leading-none">{s.num}</p>
                <p className="text-gray-300 text-[11px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter tabs ── */}

      {/* ── Cards grid ── */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Count */}
          <div className="flex items-center justify-end mb-8">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 bg-[#E05A1A] rounded-full animate-pulse" />
              All tours include AC vehicle & driver
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {filtered.map((t, i) => (
              <TourCard key={t.id} tour={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom CTA ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-gray-900 to-[#E05A1A]" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-orange-500/10 rounded-full translate-y-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-orange-300 text-xs font-semibold uppercase tracking-widest">Custom Itinerary</span>
          </div>
          <h2 className="font-heading font-black text-white text-3xl md:text-4xl mb-3 leading-tight">
            Can't find the perfect tour?
          </h2>
          <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto">
            Tell us your dates, group size, and dream destination — we'll design a custom package just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919890363536"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:scale-105 text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919890363536"
              className="inline-flex items-center justify-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:scale-105 text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +91 9890-36-3536
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
