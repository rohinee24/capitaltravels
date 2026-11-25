import React from "react";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Ajanta & Ellora Caves",
    duration: "1 Day",
    price: "₹5,000",
    priceNote: "per group",
    tags: ["UNESCO Heritage", "History"],
    desc: "Explore the magnificent rock-cut caves featuring ancient Buddhist paintings and the iconic Kailasa Temple.",
    color: "from-amber-500 to-orange-600",
    emoji: "🏛️",
  },
  {
    title: "Ajanta, Ellora & Shirdi",
    duration: "3 Days",
    price: "₹10,500",
    priceNote: "per group",
    tags: ["Spiritual", "Heritage"],
    desc: "Combine the spiritual aura of Shirdi's Sai Baba Temple with the ancient wonders of Ajanta and Ellora.",
    color: "from-orange-500 to-red-600",
    emoji: "🙏",
  },
  {
    title: "Aurangabad City Tour",
    duration: "1 Day",
    price: "₹3,500",
    priceNote: "per group",
    tags: ["Sightseeing", "Culture"],
    desc: "Bibi Ka Maqbara, Panchakki, Daulatabad Fort — discover the crown jewels of Aurangabad city.",
    color: "from-green-500 to-teal-600",
    emoji: "🕌",
  },
  {
    title: "Pune to Aurangabad",
    duration: "3 Days",
    price: "₹8,500",
    priceNote: "per group",
    tags: ["Jyotirlinga", "Temples"],
    desc: "Sacred Bhimashankar, Trimbakeshwar, Grishneshwar and Ellora Caves — a spiritual and cultural trail through Maharashtra.",
    color: "from-purple-500 to-indigo-600",
    emoji: "⛩️",
  },
  {
    title: "Goa Holiday Package",
    duration: "4 Days",
    price: "₹15,000",
    priceNote: "per group",
    tags: ["Beach", "Leisure"],
    desc: "Sun, sand, and sea. Comfortable AC travel from Aurangabad to Goa with handpicked sightseeing stops.",
    color: "from-cyan-500 to-blue-600",
    emoji: "🏖️",
  },
  {
    title: "Pan-India Tours",
    duration: "Custom",
    price: "On Request",
    priceNote: "",
    tags: ["Custom", "Flexible"],
    desc: "Rajasthan, Kerala, Himachal, Kashmir — plan any destination across India with our experienced team.",
    color: "from-rose-500 to-pink-600",
    emoji: "🗺️",
  },
];

const Tours = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle">Popular Destinations</p>
          <h2 className="section-title">Tour Packages</h2>
          <p className="section-desc">
            Handcrafted itineraries designed to give you the best of Aurangabad and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((t) => (
            <div key={t.title} className="card overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${t.color} p-6 relative`}>
                <div className="text-5xl mb-2">{t.emoji}</div>
                <h3 className="font-heading font-bold text-white text-lg leading-tight">{t.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  {t.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full border border-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur border border-white/30 rounded-lg px-3 py-1 text-white text-xs font-semibold">
                  ⏱ {t.duration}
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-heading font-bold text-brand-dark text-xl">{t.price}</span>
                    {t.priceNote && <span className="text-gray-400 text-xs ml-1">{t.priceNote}</span>}
                  </div>
                  <Link
                    to="/contact"
                    className="text-brand-orange font-semibold text-sm hover:text-brand-orange-dark inline-flex items-center gap-1 group"
                  >
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/explore" className="btn-primary">
            See All Packages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tours;
