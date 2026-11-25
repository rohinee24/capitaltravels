import React, { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Booked a 3-day Ajanta, Ellora & Shirdi tour. The driver was punctual, polite and incredibly knowledgeable. Vehicle was spotless. Highly recommend Capital Travels!",
    avatar: "PS",
    tour: "Ajanta, Ellora & Shirdi",
  },
  {
    name: "Rahul Verma",
    location: "Pune",
    rating: 5,
    text: "Used their pre-paid taxi from Aurangabad railway station. Fixed fare, clean car, and driver arrived 10 minutes early. No drama, no negotiation. Perfect service.",
    avatar: "RV",
    tour: "Pre-Paid Taxi",
  },
  {
    name: "Anjali Kulkarni",
    location: "Hyderabad",
    rating: 5,
    text: "Organised a family trip for 10 people in a tempo traveller. Everything was seamlessly arranged — hotel suggestions, guided tour of the caves, the works. Worth every rupee.",
    avatar: "AK",
    tour: "Family Package Tour",
  },
  {
    name: "Suresh Nair",
    location: "Bangalore",
    rating: 5,
    text: "Corporate travel to Aurangabad — booked an Innova Crysta. The driver was professional, the car was immaculate, and they handled our last-minute schedule changes without any fuss.",
    avatar: "SN",
    tour: "Corporate Car Hire",
  },
  {
    name: "Fatima Sheikh",
    location: "Aurangabad",
    rating: 5,
    text: "Capital Travels has been our go-to for airport transfers for 5 years. They've never been late. M. Taqui and his team are simply the best in the business.",
    avatar: "FS",
    tour: "Airport Transfer",
  },
  {
    name: "Deepak Joshi",
    location: "Delhi",
    rating: 5,
    text: "The Aurangabad city tour was brilliantly paced. Bibi Ka Maqbara in the morning, Daulatabad Fort at noon, Panchakki in the evening — fantastic planning!",
    avatar: "DJ",
    tour: "City Sightseeing",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-brand-dark to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-orange font-semibold uppercase tracking-widest text-sm mb-2">Testimonials</p>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-3">
            What Our Travellers Say
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Over 10,000 happy travellers can't be wrong. Here's what some of them have to say.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 mb-8 text-center">
          <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white font-heading font-bold text-xl mx-auto mb-4">
            {testimonials[active].avatar}
          </div>
          <StarRating rating={testimonials[active].rating} />
          <div className="mt-1 mb-4">
            <span className="text-xs bg-brand-orange/20 text-brand-orange-light border border-brand-orange/30 px-2.5 py-0.5 rounded-full">
              {testimonials[active].tour}
            </span>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
            "{testimonials[active].text}"
          </p>
          <p className="font-heading font-bold text-white">{testimonials[active].name}</p>
          <p className="text-gray-400 text-sm">{testimonials[active].location}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-200 ${i === active ? "w-8 h-2.5 bg-brand-orange" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>

        {/* Grid of all cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`text-left p-5 rounded-2xl border transition-all duration-200 ${
                i === active
                  ? "border-brand-orange bg-white/10"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${i === active ? "bg-brand-orange" : "bg-white/20"}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="text-gray-400 text-xs mt-2 line-clamp-2">{t.text}</p>
            </button>
          ))}
        </div>

        {/* TripAdvisor badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">TA</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">TripAdvisor Travellers' Choice</p>
              <p className="text-gray-400 text-xs">Recognised for outstanding travel experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
