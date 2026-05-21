"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import Nav from "../components/Nav";

const STEPS = ["Ihre Daten", "Lieferung", "Bestätigung"];

const dishes = [
  "Eierkuchen mit dunkler Beerensoße",
  "Geschnetzeltes in Pilzrahmsoße mit Spätzle",
  "Cremige Gemüsepfanne mit Bällchen",
  "Kartoffelpuffer mit Apfelmus",
  "Pasta mit Tomatensoße",
];

type FormData = {
  vorname: string;
  nachname: string;
  strasse: string;
  plzOrt: string;
  telefon: string;
  startDatum: string;
  haeufigkeit: string;
  portion: string;
  gerichte: string[];
};

const empty: FormData = {
  vorname: "", nachname: "", strasse: "", plzOrt: "", telefon: "",
  startDatum: "", haeufigkeit: "täglich (Mo–Fr)", portion: "normal",
  gerichte: [],
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full border border-[#E5DFD3] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder:text-[#6B6B5F]/50 outline-none focus:ring-2 focus:ring-[#1C1C1A]/20 focus:border-[#1C1C1A]/40 transition bg-white";

export default function BestellenPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(empty);
  const [done, setDone] = useState(false);

  const set = (key: keyof FormData, val: string) => setForm(f => ({ ...f, [key]: val }));
  const toggleDish = (d: string) =>
    setForm(f => ({
      ...f,
      gerichte: f.gerichte.includes(d) ? f.gerichte.filter(x => x !== d) : [...f.gerichte, d],
    }));

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));
  const submit = () => setDone(true);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#F9F5EE] pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">

          <div className="text-center mb-10">
            <p className="text-[#2C4A35] text-sm font-semibold uppercase tracking-widest mb-2">Essen auf Rädern</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-bold text-[#1C1C1A]">
              Jetzt bestellen
            </h1>
          </div>

          {!done && (
            <div className="flex items-center justify-center gap-0 mb-10">
              {STEPS.map((label, i) => (
                <div key={label} className="flex items-center">
                  <div className={`flex flex-col items-center ${i <= step ? "opacity-100" : "opacity-40"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i < step ? "bg-[#1C1C1A] text-white" : i === step ? "bg-[#1C1C1A] text-white ring-4 ring-[#1C1C1A]/10" : "bg-[#E5DFD3] text-[#6B6B5F]"}`}>
                      {i < step ? <Check size={12} /> : i + 1}
                    </div>
                    <span className="text-[10px] font-medium text-[#6B6B5F] mt-1 whitespace-nowrap">{label}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`w-16 h-px mx-2 mb-4 transition-colors ${i < step ? "bg-[#1C1C1A]" : "bg-[#E5DFD3]"}`} />
                  )}
                </div>
              ))}
            </div>
          )}

          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-10 text-center border border-[#E5DFD3]"
            >
              <div className="text-5xl mb-5">🎉</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#1C1C1A] mb-3">
                Bestellung eingegangen!
              </h2>
              <p className="text-[#6B6B5F] text-sm leading-relaxed mb-6">
                Vielen Dank, {form.vorname}! Wir melden uns unter <strong>{form.telefon}</strong> bei Ihnen, um die Details zu bestätigen.
              </p>
              <a href="/" className="inline-block bg-[#1C1C1A] text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-[#333330] transition-colors">
                Zurück zur Startseite
              </a>
            </motion.div>
          ) : (
            <div className="bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 space-y-5"
                >
                  {step === 0 && (
                    <>
                      <div className="grid grid-cols-2 gap-5">
                        <Field label="Vorname">
                          <input className={inputCls} value={form.vorname} onChange={e => set("vorname", e.target.value)} placeholder="Maria" />
                        </Field>
                        <Field label="Nachname">
                          <input className={inputCls} value={form.nachname} onChange={e => set("nachname", e.target.value)} placeholder="Müller" />
                        </Field>
                      </div>
                      <Field label="Straße & Hausnummer">
                        <input className={inputCls} value={form.strasse} onChange={e => set("strasse", e.target.value)} placeholder="Musterstraße 12" />
                      </Field>
                      <Field label="PLZ & Ort">
                        <input className={inputCls} value={form.plzOrt} onChange={e => set("plzOrt", e.target.value)} placeholder="50667 Köln" />
                      </Field>
                      <Field label="Telefonnummer">
                        <input className={inputCls} type="tel" value={form.telefon} onChange={e => set("telefon", e.target.value)} placeholder="0221 123 456 78" />
                      </Field>
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <Field label="Lieferbeginn">
                        <input className={inputCls} type="date" value={form.startDatum} onChange={e => set("startDatum", e.target.value)} />
                      </Field>
                      <Field label="Häufigkeit">
                        {["täglich (Mo–Fr)", "3× pro Woche", "nach Bedarf"].map(opt => (
                          <label key={opt} className={`flex items-center gap-3 border rounded-xl px-4 py-3 mb-2 cursor-pointer transition ${form.haeufigkeit === opt ? "border-[#1C1C1A] bg-[#1C1C1A]/5" : "border-[#E5DFD3]"}`}>
                            <input type="radio" name="haeufigkeit" className="accent-[#1C1C1A]" checked={form.haeufigkeit === opt} onChange={() => set("haeufigkeit", opt)} />
                            <span className="text-sm text-[#1C1C1A]">{opt}</span>
                          </label>
                        ))}
                      </Field>
                      <Field label="Portionsgröße">
                        {["klein", "normal", "groß"].map(opt => (
                          <label key={opt} className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 mr-2 mb-2 cursor-pointer text-sm transition ${form.portion === opt ? "border-[#1C1C1A] bg-[#1C1C1A] text-white" : "border-[#E5DFD3] text-[#1C1C1A]"}`}>
                            <input type="radio" name="portion" className="sr-only" checked={form.portion === opt} onChange={() => set("portion", opt)} />
                            {opt}
                          </label>
                        ))}
                      </Field>
                      <Field label="Lieblingsgerichte (optional)">
                        <div className="space-y-2">
                          {dishes.map(d => (
                            <label key={d} className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition ${form.gerichte.includes(d) ? "border-[#1C1C1A] bg-[#1C1C1A]/5" : "border-[#E5DFD3]"}`}>
                              <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition ${form.gerichte.includes(d) ? "bg-[#1C1C1A]" : "border border-[#E5DFD3]"}`}>
                                {form.gerichte.includes(d) && <Check size={10} className="text-white" />}
                              </div>
                              <span className="text-sm text-[#1C1C1A]">{d}</span>
                              <input type="checkbox" className="sr-only" checked={form.gerichte.includes(d)} onChange={() => toggleDish(d)} />
                            </label>
                          ))}
                        </div>
                      </Field>
                    </>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <h3 className="font-bold text-[#1C1C1A] text-base">Ihre Bestellung im Überblick</h3>
                      <div className="bg-[#F9F5EE] rounded-xl p-5 space-y-3 text-sm">
                        <Row label="Name" val={`${form.vorname} ${form.nachname}`} />
                        <Row label="Adresse" val={`${form.strasse}, ${form.plzOrt}`} />
                        <Row label="Telefon" val={form.telefon} />
                        <hr className="border-[#E5DFD3]" />
                        <Row label="Lieferbeginn" val={form.startDatum || "—"} />
                        <Row label="Häufigkeit" val={form.haeufigkeit} />
                        <Row label="Portion" val={form.portion} />
                        {form.gerichte.length > 0 && (
                          <Row label="Gerichte" val={form.gerichte.join(", ")} />
                        )}
                      </div>
                      <p className="text-xs text-[#6B6B5F] leading-relaxed">
                        Mit dem Absenden stimmen Sie zu, dass wir Sie zur Bestätigung kontaktieren. Es entstehen keine Kosten ohne Ihre ausdrückliche Zustimmung.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="px-8 pb-8 flex justify-between">
                {step > 0 ? (
                  <button onClick={back} className="flex items-center gap-2 text-sm text-[#6B6B5F] hover:text-[#1C1C1A] transition-colors font-medium">
                    <ChevronLeft size={16} /> Zurück
                  </button>
                ) : <div />}
                {step < STEPS.length - 1 ? (
                  <button onClick={next} className="flex items-center gap-2 bg-[#1C1C1A] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#333330] transition-colors">
                    Weiter <ChevronRight size={16} />
                  </button>
                ) : (
                  <button onClick={submit} className="flex items-center gap-2 bg-[#1C1C1A] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#333330] transition-colors">
                    Jetzt verbindlich bestellen <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

function Row({ label, val }: { label: string; val: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-[#6B6B5F] font-medium">{label}</span>
      <span className="text-[#1C1C1A] text-right">{val}</span>
    </div>
  );
}
