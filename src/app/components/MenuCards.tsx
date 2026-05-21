"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const dishes = [
  {
    img: "/gerichte/1005_s.jpg",
    name: "Bratwurst mit Rotkohl und Kartoffelpüree",
    tags: ["Klassiker", "Herzhaft"],
  },
  {
    img: "/gerichte/1007_s.jpg",
    name: "Paniertes Schnitzel mit Bohnen und Bratkartoffeln",
    tags: ["Herzhaft", "Deftig"],
  },
  {
    img: "/gerichte/1053_s.jpg",
    name: "Hähnchen in Paprikasoße mit Nudeln",
    tags: ["Beliebt", "Mild"],
  },
  {
    img: "/gerichte/4119_s.jpg",
    name: "Rinderroulade mit Kartoffelsalat und Möhren",
    tags: ["Klassiker", "Deftig"],
  },
  {
    img: "/gerichte/4127_s.jpg",
    name: "Schweinebraten mit Sauce und Salzkartoffeln",
    tags: ["Klassiker", "Sonntag"],
  },
];

export default function MenuCards() {
  return (
    <section id="wochenplan" className="py-20 px-4 sm:px-6 bg-[#F9F5EE]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#2C4A35] text-sm font-semibold uppercase tracking-widest mb-2">Lecker & Abwechslungsreich</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-bold text-[#1C1C1A]">
              Unsere Empfehlungen
            </h2>
            <p className="text-[#6B6B5F] mt-2 text-sm max-w-lg">
              Jeden Tag ein neues Geschmackserlebnis. Hier sehen Sie unser aktuelles Beispiel-Menü für diese Woche.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-[#1C1C1A] border border-[#1C1C1A]/30 px-4 py-2.5 rounded-full hover:bg-[#1C1C1A] hover:text-white transition-colors whitespace-nowrap">
            <Download size={15} />
            Ganzen Plan als PDF
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {dishes.map((dish, i) => (
            <motion.div
              key={`${dish.name}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-4 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* PNG food image — transparent bg, show full plate */}
              <div className="flex items-center justify-center mb-4 h-36">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[#1C1C1A] text-sm font-bold leading-snug mb-3 flex-1">{dish.name}</p>
              <div className="flex flex-wrap gap-1.5">
                {dish.tags.map((tag) => (
                  <span key={tag} className="text-[10px] text-[#6B6B5F] px-2 py-0.5 rounded-full border border-[#E5DFD3] font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#6B6B5F] text-sm mt-8">
          Auch für Diabetiker und spezielle Diätwünsche bieten wir Alternativen an.{" "}
          <a href="#kontakt" className="text-[#1C1C1A] font-semibold underline underline-offset-2">Sprechen Sie uns an!</a>
        </p>
      </div>
    </section>
  );
}
