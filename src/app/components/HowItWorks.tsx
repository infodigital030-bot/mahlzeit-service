"use client";
import { motion } from "framer-motion";

const BASE = "https://ferienhaus-am-meer.org/wp-content/uploads/2026/04";

const steps = [
  {
    num: "1",
    img: `${BASE}/BackgroundBorder.png`,
    title: "Essen auswählen",
    desc: "Wählen Sie aus unserem abwechslungsreichen Wochenplan Ihre Lieblingsgerichte aus.",
  },
  {
    num: "2",
    img: `${BASE}/BackgroundBorder-1.png`,
    title: "Täglich frisch erwärmt",
    desc: "Unsere Köche bereiten Ihr Essen täglich frisch mit regionalen Zutaten zu und liefern es warm.",
  },
  {
    num: "3",
    img: `${BASE}/BackgroundBorder-2.png`,
    title: "Heiß geliefert",
    desc: "Unser freundlicher Fahrer bringt das warme Essen zwischen 10 und 13 Uhr direkt an Ihre Tür.",
  },
];

export default function HowItWorks() {
  return (
    <section id="so-funktionierts" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#2C4A35] text-sm font-semibold uppercase tracking-widest mb-2">Einfach & Bequem</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-bold text-[#1C1C1A]">
            So kommt das Essen zu Ihnen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-px bg-[#E5DFD3]" style={{ left: "18%", right: "18%" }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2C4A35] text-white text-sm font-bold flex items-center justify-center shadow">
                  {step.num}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#1C1C1A] mb-2">{step.title}</h3>
              <p className="text-[#6B6B5F] text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
