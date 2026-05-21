"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basis",
    price: "7,90",
    unit: "/ Tag",
    desc: "Einfach und sättigend",
    features: [
      "1 Hauptgericht täglich",
      "Mo–Fr Lieferung",
      "Wechselnder Wochenplan",
      "Kostenlose Lieferung",
    ],
    cta: "Jetzt bestellen",
    highlight: false,
  },
  {
    name: "Standard",
    price: "10,90",
    unit: "/ Tag",
    desc: "Unser beliebtestes Angebot",
    features: [
      "Hauptgericht + Dessert",
      "Mo–Fr Lieferung",
      "Wechselnder Wochenplan",
      "Kostenlose Lieferung",
      "Wunschgerichte möglich",
    ],
    cta: "Jetzt bestellen",
    highlight: true,
  },
  {
    name: "Premium",
    price: "13,90",
    unit: "/ Tag",
    desc: "Das Rundum-sorglos-Paket",
    features: [
      "Suppe + Hauptgericht + Dessert",
      "Mo–Sa Lieferung",
      "Individuelle Menüwahl",
      "Kostenlose Lieferung",
      "Diät & Sonderkost möglich",
      "Persönlicher Ansprechpartner",
    ],
    cta: "Jetzt bestellen",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="preise" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[#2C4A35] text-sm font-semibold uppercase tracking-widest mb-2">Transparente Preise</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-bold text-[#1C1C1A]">
            Einfach. Günstig. Lecker.
          </h2>
          <p className="text-[#6B6B5F] mt-3 text-sm max-w-lg mx-auto">
            Keine versteckten Kosten. Keine Mindestlaufzeit. Jederzeit kündbar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-[#1C1C1A] text-white shadow-2xl scale-105"
                  : "bg-[#F9F5EE] text-[#1C1C1A] border border-[#E5DFD3]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2C4A35] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Beliebteste Wahl
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plan.highlight ? "text-white/50" : "text-[#6B6B5F]"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-[#1C1C1A]"}`}>
                    {plan.price} €
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-white/50" : "text-[#6B6B5F]"}`}>{plan.unit}</span>
                </div>
                <p className={`text-sm mt-1 ${plan.highlight ? "text-white/60" : "text-[#6B6B5F]"}`}>{plan.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-white/20" : "bg-[#2C4A35]/10"}`}>
                      <Check size={10} className={plan.highlight ? "text-white" : "text-[#2C4A35]"} strokeWidth={3} />
                    </span>
                    <span className={plan.highlight ? "text-white/80" : "text-[#4A4A40]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/bestellen"
                className={`block text-center text-sm font-semibold py-3.5 rounded-full transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#1C1C1A] hover:bg-white/90"
                    : "bg-[#1C1C1A] text-white hover:bg-[#333330]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#6B6B5F] text-xs mt-8">
          Alle Preise inkl. MwSt. und Lieferung. Mindestbestellmenge: 5 Mahlzeiten/Woche.{" "}
          <a href="#kontakt" className="underline underline-offset-2 hover:text-[#1C1C1A]">Fragen? Einfach melden.</a>
        </p>
      </div>
    </section>
  );
}
