import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { gerichte } from "./data";

export default function GerichtePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#F9F5EE] pt-28 pb-20">

        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 text-center">
          <p className="text-[#2C4A35] text-sm font-semibold uppercase tracking-widest mb-2">Täglich frisch zubereitet</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl sm:text-5xl font-bold text-[#1C1C1A] mb-4">
            Unsere Gerichte
          </h1>
          <p className="text-[#6B6B5F] max-w-xl mx-auto leading-relaxed text-sm">
            {gerichte.length} Gerichte aus unserem Repertoire — täglich frisch mit regionalen Zutaten zubereitet.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {gerichte.map((g) => (
              <div key={g.id} className="bg-white rounded-2xl overflow-hidden border border-[#E5DFD3] hover:shadow-md transition-shadow group">
                <div className="aspect-square bg-[#F9F5EE] overflow-hidden">
                  <img
                    src={`/gerichte/${g.id}_s.jpg`}
                    alt={g.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[#1C1C1A] text-xs font-semibold leading-snug">{g.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-16 text-center">
          <div className="bg-[#1C1C1A] rounded-2xl p-10">
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-white mb-3">
              Hunger bekommen?
            </h2>
            <p className="text-white/60 text-sm mb-6">Bestellen Sie jetzt und wir liefern schon ab morgen.</p>
            <a href="/bestellen" className="inline-block bg-white text-[#1C1C1A] font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors text-sm">
              Jetzt bestellen
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
