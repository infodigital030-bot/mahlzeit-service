"use client";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const areas = [
  "Köln (alle Stadtteile)",
  "Bergisch Gladbach",
  "Odenthal & Rösrath",
];

export default function DeliveryArea() {
  return (
    <section id="liefergebiet" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#2C4A35] text-sm font-semibold uppercase tracking-widest mb-2">Hier sind wir unterwegs</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-bold text-[#1C1C1A]">
            Unser Liefergebiet
          </h2>
          <p className="text-[#6B6B5F] mt-3 max-w-lg mx-auto text-sm">
            Wir liefern unser frisch gekochtes Essen täglich in folgenden Gebieten aus:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Areas + info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="space-y-3 mb-8">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-3 bg-[#F9F5EE] rounded-xl px-5 py-4 border border-[#E5DFD3]">
                  <MapPin size={16} className="text-[#2C4A35] flex-shrink-0" />
                  <span className="text-[#1C1C1A] font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-[#2C4A35]/8 rounded-xl px-5 py-4">
              <Clock size={16} className="text-[#2C4A35] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#1C1C1A] font-semibold text-sm">Lieferzeitfenster</p>
                <p className="text-[#6B6B5F] text-sm">Täglich zwischen 10:00 und 13:00 Uhr</p>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="https://ferienhaus-am-meer.org/wp-content/uploads/2026/04/Map-of-Cologne-area.png"
              alt="Liefergebiet Karte Köln"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
