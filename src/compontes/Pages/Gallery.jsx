import React, { useState, useEffect, useRef, useCallback } from "react";

// All 21 real tourist images
const allImages = [
  { id: 1,  src: "/gallaryImages/img1.jpeg",  span: "row-span-1" },
  { id: 2,  src: "/gallaryImages/img2.jpeg",  span: "row-span-2" },
  { id: 3,  src: "/gallaryImages/img3.jpeg",  span: "row-span-1" },
  { id: 4,  src: "/gallaryImages/img4.jpeg",  span: "row-span-2" },
  { id: 5,  src: "/gallaryImages/img2.jpeg",  span: "row-span-1" },
  { id: 6,  src: "/gallaryImages/img6.jpeg",  span: "row-span-2" },
  { id: 7,  src: "/gallaryImages/img7.jpeg",  span: "row-span-1" },
  { id: 8,  src: "/gallaryImages/img8.jpeg",  span: "row-span-2" },
  { id: 9,  src: "/gallaryImages/img9.jpeg",  span: "row-span-1" },
  { id: 10, src: "/gallaryImages/img10.jpeg", span: "row-span-2" },
  { id: 11, src: "/gallaryImages/img11.jpeg", span: "row-span-1" },
  { id: 12, src: "/gallaryImages/img12.jpeg", span: "row-span-2" },
  { id: 13, src: "/gallaryImages/img13.jpeg", span: "row-span-1" },
  { id: 14, src: "/gallaryImages/img14.jpeg", span: "row-span-2" },
  { id: 15, src: "/gallaryImages/img15.jpeg", span: "row-span-1" },
  { id: 16, src: "/gallaryImages/img16.jpeg", span: "row-span-2" },
  { id: 17, src: "/gallaryImages/img17.jpeg", span: "row-span-1" },
  { id: 18, src: "/gallaryImages/img18.jpeg", span: "row-span-2" },
  { id: 19, src: "/gallaryImages/img19.jpeg", span: "row-span-1" },
  { id: 20, src: "/gallaryImages/img20.jpeg", span: "row-span-2" },
  { id: 21, src: "/gallaryImages/img21.jpeg", span: "row-span-1" },
];

// Intersection observer hook
const useInView = (threshold = 0.08) => {
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

// Single gallery card
const GalleryCard = ({ item, index, onClick }) => {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onClick={() => onClick(item.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${item.span}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        transition: `opacity 0.65s cubic-bezier(.22,1,.36,1) ${(index % 6) * 0.08}s,
                     transform 0.65s cubic-bezier(.22,1,.36,1) ${(index % 6) * 0.08}s`,
        boxShadow: hovered
          ? "0 24px 48px -8px rgba(0,0,0,0.4)"
          : "0 4px 16px -4px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={item.src}
        alt={`Capital Travels tour photo ${item.id}`}
        className="w-full h-full object-cover"
        loading="lazy"
        style={{
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(.22,1,.36,1)",
          minHeight: "200px",
        }}
      />

      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.14) 50%,transparent 60%)",
          backgroundSize: "200% 100%",
          backgroundPosition: hovered ? "left" : "right",
          transition: "background-position 0.55s ease",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity: hovered ? 0.45 : 0, background: "rgba(0,0,0,0.5)" }}
      />

      {/* Zoom icon */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center"
          style={{ transform: hovered ? "scale(1)" : "scale(0.6)", transition: "transform 0.3s ease" }}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0zM10.5 7.5v6m3-3h-6" />
          </svg>
        </div>
      </div>

      {/* Photo number */}
      <div
        className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full transition-opacity duration-200"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {item.id} / {allImages.length}
      </div>

      {/* Orange accent bottom bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-[#E05A1A] transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%" }}
      />
    </div>
  );
};

// Lightbox component
const Lightbox = ({ images, currentId, onClose, onPrev, onNext }) => {
  const current = images.find((i) => i.id === currentId);
  const index = images.findIndex((i) => i.id === currentId);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between w-full mb-3 px-1">
          <span className="text-white/60 text-sm font-mono">{String(index + 1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}</span>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl w-full">
          <img
            src={current.src}
            alt={`Tour photo ${current.id}`}
            className="w-full max-h-[72vh] object-contain bg-[#0a0a0a]"
          />
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-1 scrollbar-hide">
          {images.map((img) => (
            <button
              key={img.id}
              onClick={() => onPrev(img.id)}
              className="flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200"
              style={{
                width: img.id === currentId ? "52px" : "40px",
                height: img.id === currentId ? "52px" : "40px",
                border: img.id === currentId ? "2px solid #E05A1A" : "2px solid transparent",
                opacity: img.id === currentId ? 1 : 0.5,
              }}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

const Gallery = () => {
  const [lightboxId, setLightboxId] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const currentIndex = allImages.findIndex((i) => i.id === lightboxId);

  const goNext = useCallback(() => {
    const next = (currentIndex + 1) % allImages.length;
    setLightboxId(allImages[next].id);
  }, [currentIndex]);

  const goPrev = useCallback((id) => {
    if (typeof id === "number") { setLightboxId(id); return; }
    const prev = (currentIndex - 1 + allImages.length) % allImages.length;
    setLightboxId(allImages[prev].id);
  }, [currentIndex]);

  return (
    <div className="pt-16">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 md:py-28">
        <img src="/gallaryImages/img17.jpeg" alt="Gallery" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/90 via-[#1A1A2E]/65 to-[#E05A1A]/50" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#E05A1A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-64 bg-orange-500/10 rounded-full blur-3xl" />

        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-[#E05A1A]/20 border border-[#E05A1A]/40 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#E05A1A] rounded-full animate-pulse" />
            <span className="text-orange-200 text-xs font-semibold uppercase tracking-widest">Our Gallery</span>
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Moments from
            <span className="block text-[#F47B3B]">Our Tours</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-8">
            Real photos from our travellers — moments of heritage, devotion, and pure joy captured on our tours across Maharashtra and India.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { num: "21", label: "Photos" },
              { num: "10K+", label: "Happy Travellers" },
              { num: "50+", label: "Destinations" },
              { num: "40+", label: "Years" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center min-w-[80px]">
                <p className="text-[#F47B3B] font-black text-xl leading-none">{s.num}</p>
                <p className="text-gray-300 text-[11px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ── */}
      <section className="py-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <div className="text-center mb-10">
            <p className="text-[#E05A1A] font-semibold uppercase tracking-widest text-xs mb-2">Visual Stories</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-gray-900 leading-tight">
              Every Journey Tells a Story —
              <span className="block text-[#E05A1A]">Here Are Ours</span>
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
              Real moments. Real travellers. Real memories captured on Capital Travels tours across Maharashtra and beyond.
            </p>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-300" />
              <div className="w-2 h-2 bg-[#E05A1A] rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-300" />
            </div>
          </div>

          {/* Masonry grid using CSS columns */}
          <div
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
            style={{ columnGap: "16px" }}
          >
            {allImages.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-4"
              >
                <GalleryCard
                  item={item}
                  index={index}
                  onClick={(id) => setLightboxId(id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-gray-900 to-[#E05A1A]" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-white text-2xl md:text-3xl mb-3">
            Want to be in our next gallery?
          </h2>
          <p className="text-gray-400 text-sm mb-7 max-w-md mx-auto">
            Book your tour today and let Capital Travels create unforgettable memories for you — photos included!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919890363536"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3 rounded-xl transition-all hover:scale-105 text-sm shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 00.611.611l6.025-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.509-5.228-1.396l-.375-.218-3.878.95.968-3.878-.224-.381A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Book on WhatsApp
            </a>
            <a
              href="tel:+919890363536"
              className="inline-flex items-center justify-center gap-2 bg-[#E05A1A] hover:bg-[#C04A10] text-white font-bold px-7 py-3 rounded-xl transition-all hover:scale-105 text-sm shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxId && (
        <Lightbox
          images={allImages}
          currentId={lightboxId}
          onClose={() => setLightboxId(null)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
};

export default Gallery;
