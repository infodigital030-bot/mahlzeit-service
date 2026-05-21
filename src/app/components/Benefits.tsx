"use client";
import { motion } from "framer-motion";
import { ChefHat, Clock, Heart, UtensilsCrossed, Users, Leaf } from "lucide-react";

const benefits = [
  {
    icon: ChefHat,
    title: "Kein Kochen mehr nötig",
    desc: "Sparen Sie sich den Einkauf und das Kochen. Wir übernehmen die Arbeit, Sie genießen das Essen.",
  },
  {
    icon: Clock,
    title: "Zuverlässige Lieferung",
    desc: "Pünktlich zwischen 10:00 und 13:00 Uhr steht unser Fahrer vor Ihrer Tür. Verlass ist garantiert.",
  },
  {
    icon: Heart,
    title: "Ideal für Angehörige",
    desc: "Wissen Sie Ihre Eltern oder Großeltern gut versorgt. Eine Sorge weniger im stressigen Alltag.",
  },
  {
    icon: UtensilsCrossed,
    title: "Große Auswahl",
    desc: "Von deftiger Hausmannskost bis zu leichten mediterranen Gerichten – für jeden Geschmack ist etwas dabei.",
  },
  {
    icon: Users,
    title: "Persönlicher Kontakt",
    desc: "Unsere Fahrer nehmen sich Zeit für ein kurzes \"Hallo\". Wir sind mehr als nur ein Lieferdienst.",
  },
  {
    icon: Leaf,
    title: "Regionale Zutaten",
    desc: "Wir beziehen unser Gemüse und Fleisch bevorzugt von Erzeugern aus dem Rheinland.",
  },
];

export default function Benefits() {
  return (
    <section id="vorteile" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#2C4A35] text-sm font-semibold uppercase tracking-widest mb-2">Warum wir?</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-bold text-[#1C1C1A]">
            Vorteile unseres Essensservices
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="bg-[#F9F5EE] rounded-2xl p-7 hover:shadow-sm transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-[#2C4A35]/10 flex items-center justify-center mb-5">
                <b.icon size={20} className="text-[#2C4A35]" />
              </div>
              <h3 className="font-semibold text-[#1C1C1A] mb-2">{b.title}</h3>
              <p className="text-[#6B6B5F] text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
