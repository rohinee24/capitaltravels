import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const tours = [
  {
    id: 1,
    image: "/ajantacaves.jpg",
    location: "Aurangabad, Maharashtra",
    title: "Step into History — Ajanta & Ellora Caves Day Tour from Aurangabad",
    duration: "10 Hours",
    tags: ["UNESCO", "Heritage"],
    accent: "#E05A1A",
    description: "Experience the beauty and history of two UNESCO World Heritage Sites with a memorable private tour from Aurangabad. Explore magnificent rock-cut architecture, ancient Buddhist paintings, and breathtaking temples — in a private AC vehicle with an experienced driver.",
    pickup: "Aurangabad, Maharashtra",
    highlights: [
      "Explore the world-famous Ajanta Caves",
      "Discover Ellora's magnificent Kailasa Temple",
      "Admire ancient sculptures, paintings & architecture",
      "Private AC transportation included",
      "Flexible sightseeing at your own pace",
    ],
    note: "Professional guide available as optional add-on. Final pricing may vary based on vehicle, group size & date.",
  },
  {
    id: 2,
    image: "/ellora.jpg",
    location: "Aurangabad, Maharashtra",
    title: "2-Day Private Ajanta & Ellora Tour with Expert Guide — Aurangabad",
    duration: "2 Days",
    tags: ["Private", "Guided"],
    accent: "#E05A1A",
    description: "Dive deep into the UNESCO-listed wonders of Aurangabad on this private 2-day guided sightseeing tour. Visit the ancient Buddhist paintings of Ajanta and the rock-cut architectural marvel of Ellora's Kailasa Temple with a professional guide at your own pace.",
    highlights: [
      "2-day private guided experience",
      "Ajanta's ancient Buddhist paintings",
      "Ellora's iconic Kailasa Temple",
      "Comfortable AC vehicle throughout",
      "Flexible schedule & pickup",
    ],
    note: "English-speaking guide included. Vehicle choice affects final pricing.",
  },
  {
    id: 3,
    image: "/shirdi.jfif",
    location: "Aurangabad, Maharashtra",
    title: "3-Day Shirdi Darshan with Ajanta & Ellora Cave Tour Package",
    duration: "3 Days",
    tags: ["Popular", "Spiritual"],
    accent: "#E05A1A",
    description: "Combine spiritual devotion with historical exploration on this affordable 3-day tour. Begin with the sacred Sai Baba Temple in Shirdi, then journey through the ancient Buddhist caves of Ajanta and the magnificent rock-cut temples of Ellora.",
    highlights: [
      "Shirdi Sai Baba Temple darshan",
      "Ajanta Caves Buddhist art & paintings",
      "Ellora's Kailasa Temple & rock-cut caves",
      "Private AC vehicle with driver",
      "Hotel suggestions & flexible itinerary",
    ],
    note: "Guide available as add-on. Pricing varies by vehicle & group size.",
  },
  {
    id: 4,
    image: "/bhimashankar.jpg",
    location: "Pune to Aurangabad, Maharashtra",
    title: "Pune to Aurangabad — 3-Day Jyotirlinga & Heritage Tour",
    duration: "3 Days",
    tags: ["Spiritual", "Jyotirlinga"],
    accent: "#E05A1A",
    description: "Embark on a soul-stirring 3-day journey from Pune to Aurangabad, visiting the sacred Bhimashankar Jyotirlinga, Trimbakeshwar Temple, Grishneshwar Temple, and the UNESCO-listed Ellora Caves. A perfect blend of spirituality and architectural heritage.",
    highlights: [
      "Bhimashankar Jyotirlinga temple visit",
      "Trimbakeshwar & Grishneshwar temples",
      "Ellora Caves & Kailasa Temple",
      "Scenic Pune–Aurangabad drive",
      "Private AC vehicle with experienced driver",
    ],
    note: "Guide available as add-on. Final pricing based on vehicle & group size.",
  },
  {
    id: 5,
    image: "/ajanta2.jpeg",
    location: "Pune, Maharashtra",
    title: "3-Day Ajanta & Ellora Private Tour Package Departing from Pune",
    duration: "3 Days",
    tags: ["From Pune", "UNESCO"],
    accent: "#E05A1A",
    description: "Discover the timeless wonders of Ajanta and Ellora on this ultimate 3-day private guided tour departing from Pune. Explore ancient rock-cut temples, Buddhist paintings, the Kailasa Temple, and Aurangabad's historic landmarks — all in supreme comfort.",
    highlights: [
      "Departs from Pune with door pickup",
      "Ajanta & Ellora UNESCO cave tours",
      "Aurangabad city heritage sightseeing",
      "Professional English-speaking guide",
      "Comfortable AC vehicle throughout",
    ],
    note: "Hotel arrangements available on request. Pricing varies by group size.",
  },
  {
    id: 6,
    image: "/bibikamaqbara.webp",
    location: "Shirdi, Maharashtra",
    title: "Shirdi to Ellora & Ajanta — 2-Day Private Sightseeing Tour",
    duration: "2 Days",
    tags: ["From Shirdi", "Heritage"],
    accent: "#E05A1A",
    description: "Starting from the spiritual town of Shirdi, this 2-day guided tour takes you to the magnificent UNESCO World Heritage Sites of Ellora and Ajanta Caves. A seamless blend of pilgrimage and heritage exploration with private comfortable transportation.",
    highlights: [
      "Departs from Shirdi",
      "Ellora Caves & Kailasa Temple",
      "Ajanta's ancient Buddhist murals",
      "Private AC transportation",
      "Optional English-speaking guide",
    ],
    note: "Flexible pickup from Shirdi hotels. Pricing varies by vehicle & date.",
  },
  {
    id: 7,
    image: "/ellora2.jpg",
    location: "Aurangabad to Hampi",
    title: "8-Day Road Journey — Aurangabad Caves to Hampi Ruins Heritage Trail",
    duration: "8 Days",
    tags: ["Heritage Trail", "Multi-City"],
    accent: "#E05A1A",
    description: "An epic 8-day heritage road trip from Aurangabad to Hampi — covering Ellora, Ajanta, Bijapur, and the magnificent ruins of Vijayanagara Empire at Hampi. Perfect for history lovers who want to experience the grandeur of medieval India in one unforgettable journey.",
    highlights: [
      "Ajanta & Ellora UNESCO caves",
      "Bijapur's Gol Gumbaz & Ibrahim Rauza",
      "Hampi's Vijayanagara Empire ruins",
      "8 days of immersive heritage travel",
      "Private AC vehicle with experienced driver",
    ],
    note: "Hotel bookings available on request. Itinerary customisable.",
  },
  {
    id: 8,
    image: "/Kailasa.jpg",
    location: "Mumbai, Maharashtra",
    title: "Mumbai to Aurangabad — 3-Day Ajanta & Ellora Caves Private Tour",
    duration: "3 Days",
    tags: ["From Mumbai", "UNESCO"],
    accent: "#E05A1A",
    description: "Escape the city and journey from Mumbai to the timeless rock-cut wonders of Ajanta and Ellora on this 3-day private tour. Explore 2,000-year-old Buddhist cave paintings, the monolithic Kailasa Temple, and the historic city of Aurangabad — all in one memorable trip.",
    highlights: [
      "Departs from Mumbai with door pickup",
      "Ajanta Caves — ancient Buddhist paintings",
      "Ellora Caves — Kailasa Temple",
      "Aurangabad sightseeing included",
      "Private AC vehicle & professional driver",
    ],
    note: "English guide available as add-on. Pricing based on vehicle & group size.",
  },
  {
    id: 9,
    image: "/shirdi2.png",
    location: "Shirdi, Maharashtra",
    title: "Shirdi to Ellora & Ajanta — 2-Day Heritage Sightseeing Tour",
    duration: "2 Days",
    tags: ["From Shirdi", "Heritage"],
    accent: "#E05A1A",
    description: "Begin your journey from the spiritual town of Shirdi and explore two of India's most magnificent UNESCO World Heritage Sites — the Ellora Caves with its iconic Kailasa Temple and the Ajanta Caves with their ancient Buddhist murals. A perfect 2-day getaway combining history, art, and architecture in complete comfort.",
    highlights: [
      "Departs directly from Shirdi",
      "Ellora Caves & the monolithic Kailasa Temple",
      "Ajanta's 2,000-year-old Buddhist paintings",
      "Private AC vehicle with experienced driver",
      "Optional English-speaking guide available",
    ],
    note: "Flexible hotel pickup in Shirdi. Final pricing based on vehicle choice & group size.",
  },
];

// Intersection Observer hook for scroll animations
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
  }, [threshold]);
  return [ref, inView];
};

const TourCard = ({ tour, index }) => {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)"
          : "translateY(50px) scale(0.97)",
        boxShadow: hovered
          ? `0 20px 60px -10px ${tour.accent}55, 0 8px 20px -5px rgba(0,0,0,0.15)`
          : "0 4px 20px -4px rgba(0,0,0,0.10)",
        transition: `opacity 0.65s cubic-bezier(.22,1,.36,1) ${index * 0.08}s,
                     transform 0.4s cubic-bezier(.22,1,.36,1),
                     box-shadow 0.4s ease`,
      }}
    >
      {/* ── Image area ── */}
      <div className="relative overflow-hidden h-56">
        {/* Image with zoom */}
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(.22,1,.36,1)",
          }}
        />

        {/* Shimmer sweep on hover */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
            backgroundPosition: hovered ? "left" : "right",
            transition: "background-position 0.6s ease",
          }}
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* Tags — slide down on hover */}
        <div
          className="absolute top-3 left-3 flex gap-1.5"
          style={{
            transform: hovered ? "translateY(0)" : "translateY(-4px)",
            opacity: hovered ? 1 : 0.85,
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          {tour.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white backdrop-blur-sm shadow-sm"
              style={{ background: `${tour.accent}dd` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Duration badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs font-bold text-gray-700 shadow-sm">
          ⏱ {tour.duration}
        </div>

        {/* Location pill — slides up on hover */}
        <div
          className="absolute left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-lg px-2.5 py-1.5"
          style={{
            bottom: hovered ? "12px" : "8px",
            transition: "bottom 0.3s ease",
          }}
        >
          <svg className="w-3 h-3 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-white text-xs font-semibold">{tour.location}</span>
        </div>

        {/* Accent colour bar that grows on hover */}
        <div
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
          style={{
            width: hovered ? "100%" : "0%",
            background: tour.accent,
          }}
        />
      </div>

      {/* ── Card body ── */}
      <div className="p-5">
        {/* Title */}
        <h3
          className="font-heading font-bold text-base mb-2 leading-snug transition-colors duration-300"
          style={{ color: hovered ? tour.accent : "#1A1A2E" }}
        >
          {tour.title}
        </h3>




        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed mb-4">{tour.description}</p>

        {/* Highlights — each item slides in slightly on hover */}
        <div className="mb-4">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Tour Highlights</p>
          <ul className="flex flex-col gap-1.5">
            {tour.highlights.map((h, i) => (
              <li
                key={h}
                className="flex items-start gap-2 text-xs text-gray-600"
                style={{
                  transform: hovered ? "translateX(3px)" : "translateX(0)",
                  transition: `transform 0.25s ease ${i * 0.04}s`,
                }}
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"
                  style={{ color: tour.accent }}>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Note */}
        <p
          className="text-[11px] text-gray-400 italic border-l-2 pl-3 mb-4 transition-colors duration-300"
          style={{ borderColor: tour.accent }}
        >
          {tour.note}
        </p>

        {/* CTA */}
        <div className="pt-3 border-t border-gray-100">
          <a
            href={`https://wa.me/919890363536?text=Hi%2C%20I%20want%20to%20book%20the%20tour%3A%20${encodeURIComponent(tour.title)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-white w-full justify-center px-4 py-2.5 rounded-xl transition-all duration-300"
            style={{
              background: hovered
                ? `linear-gradient(135deg, ${tour.accent}, ${tour.accent}bb)`
                : tour.accent,
              transform: hovered ? "scale(1.03)" : "scale(1)",
              boxShadow: hovered ? `0 6px 20px -4px ${tour.accent}88` : "none",
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Book Now on WhatsApp
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const BestTours = () => {
  const [headerRef, headerInView] = useInView(0.2);

  return (
    <section className="py-16 md:py-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-12"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Top badge */}
          {/* <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#E05A1A] rounded-full animate-pulse" />
            <span className="text-[#E05A1A] text-xs font-bold uppercase tracking-widest">Capital Travels</span>
          </div> */}

          <h2 className="font-heading font-black text-3xl md:text-3xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            Discover the Best Tours
            <span className="block text-[#E05A1A]">of Your Choice</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Handcrafted itineraries designed around Aurangabad's greatest treasures — from UNESCO caves to sacred pilgrimages. Every tour comes with AC vehicles, expert guides, and 40+ years of trusted service.
          </p>

          {/* Divider with icon */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-300" />
            <div className="w-8 h-8 bg-[#E05A1A] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-300" />
          </div>
        </div>

        {/* ── Tour Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="mt-14 rounded-3xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #1A1A2E 0%, #2d1a0e 50%, #E05A1A 100%)",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-orange-500/10 rounded-full translate-y-1/2" />

          <div className="relative px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-orange-300 text-xs font-bold uppercase tracking-widest mb-2">Custom Itinerary</p>
              <h3 className="font-heading font-black text-white text-2xl md:text-3xl leading-tight mb-2">
                Can't find the perfect tour?
              </h3>
              <p className="text-gray-300 text-sm max-w-md">
                Tell us your dates, group size, and dream destination — we'll design a custom package just for you, at the best price.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://wa.me/919890363536"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp Us
              </a>
              <Link
                to="/explore"
                className="inline-flex items-center justify-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-lg"
              >
                View All Tours
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestTours;
