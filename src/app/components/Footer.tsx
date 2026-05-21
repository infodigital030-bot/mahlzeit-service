"use client";
import { Mail, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { useState } from "react";

const links = ["So funktioniert's", "Aktueller Speiseplan", "Vorteile", "Liefergebiet", "Häufige Fragen (FAQ)"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [signed, setSigned] = useState(false);

  return (
    <footer className="bg-[#1A1A18] text-white/70 pt-14 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <UtensilsCrossed size={18} className="text-white" />
              <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-white text-xl font-bold">MahlzeitService</span>
            </div>
            <p className="text-sm leading-relaxed mt-4 mb-5">
              Ihr zuverlässiger Partner für Essen auf Rädern in Köln und Bergisch Gladbach. Täglich frisch, herzlich geliefert.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/70">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Wichtiges */}
          <div>
            <h4 className="text-[#F9F5EE] font-semibold mb-4 text-sm uppercase tracking-wider">Wichtiges</h4>
            <ul className="space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-[#F9F5EE] font-semibold mb-4 text-sm uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-white/40" />
                <span>Musterstraße 123,<br />50667 Köln</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0 text-white/40" />
                <a href="tel:022112345678" className="hover:text-white transition-colors">0221 - 123 456 78</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0 text-white/40" />
                <a href="mailto:info@mahlzeitservice.de" className="hover:text-white transition-colors">info@mahlzeitservice.de</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#F9F5EE] font-semibold mb-2 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4">Erhalten Sie den wöchentlichen Speiseplan per E-Mail.</p>
            {signed ? (
              <p className="text-sm text-[#F9F5EE] font-medium">✓ Angemeldet!</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSigned(true); }} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail Adresse"
                  className="w-full bg-white/10 text-white text-sm px-4 py-2.5 rounded-lg placeholder:text-white/30 outline-none focus:ring-1 focus:ring-white/40 transition"
                />
                <button type="submit" className="w-full bg-[#F9F5EE] text-[#1A1A18] text-sm font-semibold py-2.5 rounded-lg hover:bg-[#E8E0D0] transition-colors">
                  Anmelden
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <span>© 2024 MahlzeitService GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Impressum</a>
            <a href="#" className="hover:text-white/60 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white/60 transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
