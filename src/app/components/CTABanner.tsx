"use client";
import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="bestellen-cta" className="py-20 px-4 sm:px-6 bg-[#1C1C1A]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#F9F5EE]/60 text-sm font-semibold uppercase tracking-widest mb-4">
            Möchten Sie unser Essen probieren?
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Bestellen Sie jetzt ganz unverbindlich
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Oder lassen Sie sich von uns beraten. Wir freuen uns auf Ihren Anruf!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a href="tel:022112345678"
              className="flex items-center gap-3 bg-white text-[#1C1C1A] font-semibold px-7 py-4 rounded-full hover:bg-white/90 transition-colors text-sm">
              <Phone size={16} />
              0221 - 123 456 78
            </a>
            <a href="/bestellen"
              className="flex items-center gap-3 border border-[#F9F5EE]/40 text-[#F9F5EE] font-semibold px-7 py-4 rounded-full hover:bg-[#F9F5EE]/10 transition-colors text-sm">
              <FileText size={16} />
              Jetzt bestellen
            </a>
          </div>

          <p className="text-white/40 text-xs">Mo–Fr 8:00 – 16:00 Uhr erreichbar</p>
        </motion.div>
      </div>
    </section>
  );
}
