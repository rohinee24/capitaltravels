import React, { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const useInView = (threshold = 0.15) => {
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

const TrustedBy = () => {
  const [ref, inView] = useInView();

  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#E05A1A] font-semibold uppercase tracking-widest text-xs mb-2">Recognition</p>
          <h2 className="font-heading font-black text-2xl md:text-3xl text-[#1A1A2E]">
            Recognised on a Leading
            <span className="text-[#E05A1A]"> Travel Platform</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-sm mx-auto">
            Our service quality has earned us a trusted place where travellers go to review and book.
          </p>
        </div>

        {/* Single TripAdvisor card — centered */}
        <div
          ref={ref}
          className="flex justify-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <a
            href="https://www.tripadvisor.com/ShowUserReviews-g297649-d15086244-r922673434-Tour_My_Choice-Chhatrapati_Sambhaji_Nagar_Aurangabad_District_Maharashtra.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 px-10 py-8 flex flex-col sm:flex-row items-center gap-8 max-w-xl w-full"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/tripadvoiser.webp"
                alt="TripAdvisor"
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 bg-gray-100" />

            {/* Info */}
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-green-700 text-[11px] font-bold uppercase tracking-widest">Travellers' Choice</span>
              </div>
              <h3 className="font-heading font-black text-[#1A1A2E] text-lg mb-1">Capital Travels</h3>
              <div className="flex items-center gap-1 justify-center sm:justify-start mb-2">
                {[1,2,3,4,5].map((s) => <FaStar key={s} size={14} className="text-yellow-400" />)}
                <span className="text-gray-500 text-xs ml-1">5.0 · TripAdvisor</span>
              </div>
              <p className="text-gray-400 text-xs">Aurangabad, Maharashtra, India</p>
            </div>

            {/* Arrow */}
            <div className="sm:ml-auto flex-shrink-0">
              <div className="w-10 h-10 bg-[#E05A1A]/10 group-hover:bg-[#E05A1A] rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-[#E05A1A] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
