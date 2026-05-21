"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="py-20 px-4 sm:px-6 bg-[#F9F5EE]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[#2C4A35] text-sm font-semibold uppercase tracking-widest mb-2">Schreiben Sie uns</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-bold text-[#1C1C1A]">
            Kontakt aufnehmen
          </h2>
          <p className="text-[#6B6B5F] mt-3 text-sm">
            Fragen zum Menü, zur Lieferung oder zu Sonderwünschen? Wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </motion.div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-10 text-center border border-[#E5DFD3]"
          >
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-lg font-bold text-[#1C1C1A] mb-2">Nachricht gesendet!</h3>
            <p className="text-[#6B6B5F] text-sm">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-white rounded-2xl p-8 border border-[#E5DFD3] space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Max Mustermann"
                  className="w-full border border-[#E5DFD3] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder:text-[#6B6B5F]/50 outline-none focus:ring-2 focus:ring-[#1C1C1A]/20 focus:border-[#1C1C1A]/40 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">Telefon / E-Mail</label>
                <input
                  type="text"
                  required
                  placeholder="0221 123 456 oder name@mail.de"
                  className="w-full border border-[#E5DFD3] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder:text-[#6B6B5F]/50 outline-none focus:ring-2 focus:ring-[#1C1C1A]/20 focus:border-[#1C1C1A]/40 transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">Nachricht</label>
              <textarea
                required
                rows={4}
                placeholder="Ihre Frage oder Anmerkung..."
                className="w-full border border-[#E5DFD3] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder:text-[#6B6B5F]/50 outline-none focus:ring-2 focus:ring-[#1C1C1A]/20 focus:border-[#1C1C1A]/40 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1C1C1A] text-white font-semibold py-3.5 rounded-full hover:bg-[#333330] transition-colors text-sm"
            >
              Nachricht senden
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
