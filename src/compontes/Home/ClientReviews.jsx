import React, { useState, useEffect, useRef, useCallback } from "react";

const reviews = [
  {
    id: 1,
    name: "Mary Pipes",
    date: "15/11/2026",
    avatar: "PS",
    avatarBg: "#E05A1A",
    rating: 5,
    short: '" We booked Mr Taqui Mirza for a three day tour of the Ellora and Ajanta Caves and other local sites. ..."',
    full: "We booked Mr Taqui Mirza for a three day tour of the Ellora and Ajanta Caves and other local sites. He promptly replied to our messages by Whats App and was very helpful in arranging an itinerary to suit us, including guides. He both writes and speaks extremely good English and he is very knowledgeable. He welcomed us at the airport and was always on time, messaging us to let us know he had arrived. His car was very comfortable and he is a good driver. He is friendly without being intrusive. Our stay went exceptionally smoothly thanks to him. Highly recommended",
    tour: "Ajanta & Ellora Day Tour",
  },
  {
    id: 2,
    name: "Rahul Verma",
    date: "10/11/2026",
    avatar: "RV",
    avatarBg: "#7c3aed",
    rating: 5,
    short: '"Our experience with Capital Travels has been EXCELLENT. We booked the 3-day Shirdi, Ajanta & Ellora package and everything was seamlessly organised..."',
    full: "Our experience with Capital Travels has been EXCELLENT. We booked the 3-day Shirdi, Ajanta & Ellora package and everything was seamlessly organised. M. Taqui and his team were very responsive and helpful throughout the trip. Will definitely book again!",
    tour: "3-Day Shirdi, Ajanta & Ellora Package",
  },
  {
    id: 3,
    name: "Sowmendra Chanda",
    date: "16/10/2026",
    avatar: "SC",
    avatarBg: "#0369a1",
    rating: 5,
    short: '"As advertised and promised for a 3-day tour. Very professional service. The driver knew all the best spots and timings to avoid crowds at the caves..."',
    full: "As advertised and promised for a 3-day tour. Very professional service. The driver knew all the best spots and timings to avoid crowds at the caves. Hotel suggestions were also spot on. Capital Travels is the real deal in Aurangabad.",
    tour: "3-Day Heritage Tour",
  },
  {
    id: 4,
    name: "Anjali Kulkarni",
    date: "02/11/2026",
    avatar: "AK",
    avatarBg: "#059669",
    rating: 5,
    short: '"Booked a family trip for 8 people in a tempo traveller. Excellent service from start to finish. The vehicle was spacious, clean and the driver was very courteous..."',
    full: "Booked a family trip for 8 people in a tempo traveller. Excellent service from start to finish. The vehicle was spacious, clean and the driver was very courteous. The Ellora caves tour was brilliantly timed. Capital Travels made our trip truly memorable.",
    tour: "Family Group Tour – Ellora Caves",
  },
  {
    id: 5,
    name: "Sandra Herrmann",
    date: "17/11/2026",
    avatar: "SH",
    avatarBg: "#b45309",
    rating: 5,
    short: '"(Translated by Google) I booked a two-day Ajanta & Ellora tour through Capital Travels. Everything was perfectly organised, the guide spoke excellent English..."',
    full: "(Translated by Google) I booked a two-day Ajanta & Ellora tour through Capital Travels. Everything was perfectly organised, the guide spoke excellent English and was passionate about the history. The best travel experience I had in India!",
    tour: "2-Day Ajanta & Ellora Private Tour",
  },
  {
    id: 6,
    name: "Rekha Chari",
    date: "16/10/2026",
    avatar: "RC",
    avatarBg: "#be185d",
    rating: 5,
    short: '"Our experience with Capital Travels has been EXCELLENT. Visited Shirdi and Aurangabad on a customised package. Everything — vehicle, guide, hotels — was top class..."',
    full: "Our experience with Capital Travels has been EXCELLENT. Visited Shirdi and Aurangabad on a customised package. Everything — vehicle, guide, hotels — was top class. M. Mohsin was very helpful in planning the itinerary. 10/10 would recommend.",
    tour: "Custom Shirdi & Aurangabad Tour",
  },
];

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review, active }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col gap-4 transition-all duration-500 mx-0"
      style={{
        transform: active ? "scale(1.03)" : "scale(0.97)",
        opacity: active ? 1 : 0.7,
        boxShadow: active
          ? "0 20px 60px -10px rgba(0,0,0,0.25)"
          : "0 4px 20px -4px rgba(0,0,0,0.10)",
      }}
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md"
          style={{ background: review.avatarBg }}
        >
          {review.avatar}
        </div>
        <div>
          <p className="font-heading font-bold text-gray-800 text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs">{review.date}</p>
        </div>
        {/* Google G */}
        <div className="ml-auto w-7 h-7 rounded-full bg-white shadow flex items-center justify-center flex-shrink-0 border border-gray-100">
          <svg className="w-4 h-4" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.1 33.9 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.4-.2-2.7-.5-4z"/>
            <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3c-7.6 0-14.2 4.5-17.7 11.7z"/>
            <path fill="#FBBC05" d="M24 45c5.5 0 10.5-1.9 14.3-5l-6.6-5.4C29.6 36.1 27 37 24 37c-5.6 0-10.1-3.1-11.7-7.5l-7 5.4C8.7 41.1 15.9 45 24 45z"/>
            <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.8 2.5-2.4 4.6-4.5 6.1l6.6 5.4C41.5 36.5 44.5 30.7 44.5 24c0-1.4-.2-2.7-.5-4z"/>
          </svg>
        </div>
      </div>

      {/* Stars */}
      <Stars count={review.rating} />

      {/* Review text */}
      <div>
        <p className="text-gray-600 text-sm leading-relaxed italic">
          {expanded ? `"${review.full}"` : review.short}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex items-center gap-1 text-xs font-semibold text-[#E05A1A] hover:text-[#C04A10] transition-colors"
        >
          {expanded ? "Show less" : "Read full review"}
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Tour tag */}
      <div className="flex items-center gap-1.5 pt-3 border-t border-gray-100">
        <svg className="w-3 h-3 text-[#E05A1A]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-400 text-xs">{review.tour}</span>
      </div>
    </div>
  );
};

const ClientReviews = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const visibleCount = 3; // show 3 cards at once on desktop

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 400);
  }, [animating]);

  const goNext = useCallback(() => {
    goTo((current + 1) % reviews.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length);
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    intervalRef.current = setInterval(goNext, 5000);
    return () => clearInterval(intervalRef.current);
  }, [goNext]);

  // Get 3 visible indices (wrap around)
  const getVisible = () => {
    return [0, 1, 2].map((offset) => (current + offset) % reviews.length);
  };

  const visibleIndices = getVisible();

  return (
    <section className="relative py-20 overflow-hidden mb-10">
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ellora.jpg"
          alt="Ellora Caves"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Discover what our happy
            <span className="block text-[#F47B3B]">customers have to say!</span>
          </h2>

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 sm:px-6 py-3 mt-2 max-w-full">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 48 48">
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.1 33.9 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.4-.2-2.7-.5-4z"/>
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3c-7.6 0-14.2 4.5-17.7 11.7z"/>
                <path fill="#FBBC05" d="M24 45c5.5 0 10.5-1.9 14.3-5l-6.6-5.4C29.6 36.1 27 37 24 37c-5.6 0-10.1-3.1-11.7-7.5l-7 5.4C8.7 41.1 15.9 45 24 45z"/>
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.8 2.5-2.4 4.6-4.5 6.1l6.6 5.4C41.5 36.5 44.5 30.7 44.5 24c0-1.4-.2-2.7-.5-4z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Capital Travels</p>
              <div className="flex items-center gap-2">
                <span className="text-white font-black text-2xl leading-none">4.8</span>
                <Stars count={5} />
              </div>
              <p className="text-gray-300 text-xs mt-0.5">203 Reviews · Google</p>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visibleIndices.map((reviewIndex, pos) => (
              <ReviewCard
                key={`${reviewIndex}-${current}`}
                review={reviews[reviewIndex]}
                active={pos === 1}
              />
            ))}
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <ReviewCard
              key={current}
              review={reviews[current]}
              active={true}
            />
          </div>

          {/* Prev arrow */}
          <button
            onClick={goPrev}
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={goNext}
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* ── Dots ── */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-7 h-2.5 bg-[#E05A1A]" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/919890363536"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg text-sm hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Book Your Tour Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
