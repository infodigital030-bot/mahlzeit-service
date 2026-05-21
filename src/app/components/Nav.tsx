"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "So funktioniert's", href: "#so-funktionierts" },
  { label: "Gerichte", href: "/gerichte" },
  { label: "Preise", href: "#preise" },
  { label: "Liefergebiet", href: "#liefergebiet" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`w-full px-4 sm:px-6 pt-5 pb-2 ${scrolled ? "sticky top-0 z-50" : "relative z-50"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Floating pill nav */}
        <div className="bg-white rounded-full shadow-md px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="/" style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-xl font-bold text-[#1C1C1A] tracking-tight whitespace-nowrap">
            MahlzeitService
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm text-[#1C1C1A] hover:text-[#2C4A35] transition-colors font-medium whitespace-nowrap">
                {l.label}
              </a>
            ))}
          </div>

          {/* Hotline + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B6B5F]">Bestell-Hotline</p>
              <a href="tel:022112345678" className="text-sm font-bold text-[#1C1C1A] whitespace-nowrap">
                0221 - 123 456 78
              </a>
            </div>
            <a href="/bestellen"
              className="bg-white border border-[#1C1C1A] text-[#1C1C1A] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1C1C1A] hover:text-white transition-colors whitespace-nowrap">
              Jetzt bestellen
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 bg-white rounded-2xl shadow-md px-5 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block py-3 text-sm text-[#1C1C1A] border-b border-[#E5DFD3] last:border-0">
                {l.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-[#E5DFD3]">
              <p className="text-xs text-[#6B6B5F] mb-1">Bestell-Hotline</p>
              <a href="tel:022112345678" className="font-bold text-[#1C1C1A] block mb-3">0221 - 123 456 78</a>
              <a href="/bestellen" className="block bg-[#1C1C1A] text-white text-sm font-semibold px-5 py-3 rounded-full text-center">
                Jetzt bestellen
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
