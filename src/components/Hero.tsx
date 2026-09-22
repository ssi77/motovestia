import { ArrowRight, ShieldCheck, Truck, Wrench } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const { ref, style } = useReveal({ threshold: 0.05 });

  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden bg-[#1B102B]">
      {/* Full-bleed background */}
      <img
        src="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/201/assets/ai-87efb0cab9-57ae877ec813.jpg"
        alt="Motociclista con giacca tecnica MotoVestia su strada di montagna al tramonto"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
=======
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B102B] via-[#1B102B]/80 to-[#1B102B]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B102B] via-[#1B102B]/50 to-transparent" />

      <div
        className="absolute left-0 top-1/3 w-72 h-72 max-w-full rounded-full bg-[#E63946]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
=======
      <div
        className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-[#F77F00]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 pt-32 pb-16 md:pb-24">
        <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F7FA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06D6A0]" />
            Made in Italy · Stagione 2025
          </span>

          <h1
            className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#F8F7FA] leading-[0.95]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ogni curva
            <br />
            merita <span className="text-[#E63946]">l'attrezzatura</span> giusta.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#F8F7FA]/80 max-w-2xl leading-relaxed">
            Abbigliamento tecnico e accessori da moto progettati in Italia. Tessuti
            balistici, protezioni omologate EN 1621 e cuciture rinforzate: pensati
            per chi guida davvero, ogni giorno, con qualsiasi tempo.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#collezioni"
              className="inline-flex items-center justify-center gap-2 bg-[#E63946] text-white rounded-full px-8 py-3.5 font-semibold shadow-lg hover:brightness-110 hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B102B]"
            >
              Scopri la collezione
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#tecnologia"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 font-semibold text-[#F8F7FA] hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
            >
              Come è fatto
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 max-w-2xl">
            {[
              { icon: ShieldCheck, label: 'Protezioni EN 1621' },
              { icon: Truck, label: 'Spedizione in 48h' },
              { icon: Wrench, label: 'Resi gratuiti 30 giorni' },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 min-w-0 text-sm text-[#F8F7FA]/75">
                <Icon className="w-4 h-4 text-[#06D6A0] shrink-0" />
                <span className="min-w-0">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}