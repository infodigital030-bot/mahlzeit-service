"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F0E8] min-h-[85vh] flex items-center">

      {/* Background food plates – dezent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(/food-plates.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left – text (below image on mobile, left on desktop) */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="order-2 lg:order-1">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-[#1C1C1A] text-sm font-medium px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="text-[#2C4A35]">♥</span>
            Mit Liebe für Köln &amp; Bergisch Gladbach
          </div>

          {/* Headline */}
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl sm:text-5xl font-extrabold text-[#1C1C1A] leading-[1.12] mb-5"
          >
            Essen auf Rädern –<br />
            warmes Mittagessen<br />
            direkt zu Ihnen.
          </h1>

          <p className="text-[#4A4A40] text-base leading-relaxed mb-8 max-w-lg">
            Mit Liebe täglich für Sie zubereitet und zuverlässig an die Haustür gebracht.
            Genießen Sie wieder jeden Bissen.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white border border-[#E5DFD3] text-[#1C1C1A] text-sm font-medium px-4 py-2.5 rounded-full shadow-sm">
              <span>🍽️</span> Täglich frisch
            </div>
            <div className="flex items-center gap-2 bg-white border border-[#E5DFD3] text-[#1C1C1A] text-sm font-medium px-4 py-2.5 rounded-full shadow-sm">
              <span>🚚</span> Kostenlose Lieferung
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a href="#wochenplan"
              className="flex items-center gap-2 bg-white border border-[#1C1C1A] text-[#1C1C1A] font-semibold px-6 py-3.5 rounded-full hover:bg-[#1C1C1A] hover:text-white transition-colors text-sm shadow-sm">
              <span>📅</span> Speiseplan ansehen
            </a>
            <a href="/bestellen"
              className="flex items-center gap-2 bg-white border border-[#1C1C1A] text-[#1C1C1A] font-semibold px-6 py-3.5 rounded-full hover:bg-[#1C1C1A] hover:text-white transition-colors text-sm shadow-sm">
              <span>📞</span> Jetzt bestellen
            </a>
          </div>
        </motion.div>

        {/* Right – collage image (top on mobile, right on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <img
            src="https://ferienhaus-am-meer.org/wp-content/uploads/2026/04/Hero-Image-Collage-1-e1776505544843.png"
            alt="Frisch gekochtes Mittagessen – täglich geliefert"
            className="w-full max-w-lg object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
