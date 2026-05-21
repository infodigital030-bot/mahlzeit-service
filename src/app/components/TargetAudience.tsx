"use client";
import { motion } from "framer-motion";
import { Check, Quote } from "lucide-react";

const audience = [
  "Senioren, die ihren Alltag erleichtern möchten",
  "Angehörige, die ihre Eltern gut versorgt wissen wollen",
  "Menschen mit eingeschränkter Mobilität",
  "Pflegebedürftige Personen im eigenen Zuhause",
];

export default function TargetAudience() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#F9F5EE]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left: decorative oval image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-80 sm:w-80 sm:h-96">
            <div className="w-full h-full overflow-hidden shadow-xl rounded-full">
              <img
                src="/food-plates.jpg"
                alt="Unsere Mahlzeiten"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative dot pattern */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, #2C4A35 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-[#2C4A35] text-sm font-semibold uppercase tracking-widest mb-3">Für wen wir da sind</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-bold text-[#1C1C1A] mb-5">
            Unser Service richtet sich an alle, die gutes Essen schätzen
          </h2>
          <p className="text-[#6B6B5F] mb-7 leading-relaxed">
            …aber nicht mehr täglich selbst kochen können oder wollen.
          </p>

          <ul className="space-y-3 mb-10">
            {audience.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2C4A35]/10 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-[#2C4A35]" strokeWidth={3} />
                </span>
                <span className="text-[#1C1C1A] text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Quote */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5DFD3]">
            <Quote size={20} className="text-[#2C4A35] mb-3" />
            <p className="text-[#1C1C1A] text-sm leading-relaxed italic mb-4">
              „Unsere Mission ist es, Senioren täglich nicht nur eine warme Mahlzeit, sondern auch ein Stück Lebensqualität und Freude zu bringen."
            </p>
            <div className="flex items-center gap-3">
              <img src="https://ferienhaus-am-meer.org/wp-content/uploads/2026/04/Maria-Muller.png" alt="Maria Müller" className="w-9 h-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-[#1C1C1A]">Maria Müller</p>
                <p className="text-xs text-[#6B6B5F]">Gründerin MahlzeitService</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
