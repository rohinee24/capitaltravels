import React from "react";

const vehicles = [
  {
    name: "Sedan",
    type: "Hatchback / Compact",
    capacity: "4 passengers",
    examples: "Swift Dzire, Etios, Honda Amaze",
    features: ["AC", "GPS Tracking", "Comfortable Seats"],
    badge: "Most Popular",
    badgeColor: "bg-brand-orange text-white",
    icon: "🚗",
  },
  {
    name: "SUV",
    type: "Premium SUV",
    capacity: "6–7 passengers",
    examples: "Innova Crysta, Ertiga, Scorpio",
    features: ["AC", "GPS Tracking", "Extra Luggage Space"],
    badge: "Best for Families",
    badgeColor: "bg-brand-green text-white",
    icon: "🚙",
  },
  {
    name: "Luxury Car",
    type: "Premium Luxury",
    capacity: "4 passengers",
    examples: "Toyota Fortuner, Mercedes, BMW",
    features: ["AC", "Leather Seats", "Premium Sound"],
    badge: "Executive",
    badgeColor: "bg-purple-600 text-white",
    icon: "🏎️",
  },
  {
    name: "Tempo Traveller",
    type: "Mini Van",
    capacity: "9–12 passengers",
    examples: "Force Tempo, Mahindra Tourister",
    features: ["AC", "Push-Back Seats", "Wide Windows"],
    badge: "Groups",
    badgeColor: "bg-blue-600 text-white",
    icon: "🚐",
  },
  {
    name: "Mini Bus",
    type: "Bus",
    capacity: "17–20 passengers",
    examples: "Tata Winger, Force Traveller",
    features: ["AC", "Overhead Storage", "PA System"],
    badge: "Large Groups",
    badgeColor: "bg-yellow-600 text-white",
    icon: "🚌",
  },
  {
    name: "Full Bus",
    type: "Coach Bus",
    capacity: "35–50 passengers",
    examples: "Volvo, Ashok Leyland",
    features: ["AC", "Reclining Seats", "Entertainment"],
    badge: "Corporate / Pilgrim",
    badgeColor: "bg-rose-600 text-white",
    icon: "🚍",
  },
];

const Fleet = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle">Our Fleet</p>
          <h2 className="section-title">Vehicles for Every Journey</h2>
          <p className="section-desc">
            A well-maintained, modern fleet to match every group size and occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div key={v.name} className="card border border-gray-100 overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              {/* Top */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 text-center relative">
                <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${v.badgeColor}`}>
                  {v.badge}
                </span>
                <div className="text-6xl mb-2">{v.icon}</div>
                <h3 className="font-heading font-bold text-brand-dark text-xl">{v.name}</h3>
                <p className="text-gray-400 text-xs mt-1">{v.type}</p>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="text-sm text-gray-600">{v.capacity}</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">e.g. {v.examples}</p>
                <div className="flex flex-wrap gap-2">
                  {v.features.map((f) => (
                    <span key={f} className="text-xs bg-orange-50 text-brand-orange border border-orange-100 px-2.5 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
