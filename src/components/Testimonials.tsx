import { Star } from 'lucide-react';
import { useReveal, staggerStyle } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

const reviews = [
  {
    quote:
      'Ho fatto 4.000 km tra Appennino e Dolomiti con la giacca RS-9. Con la pioggia non è mai passata una goccia, e d’estate tengo le cerniere aperte e si sta bene.',
    name: 'Marco Bellini',
    role: 'Ducati Monster 821 · Bologna',
    initial: 'M',
  },
  {
    quote:
      'I guanti GP sono i primi che non mi hanno lasciato il palmo segnato dopo sei ore. Protezione sulle nocche seria ma le dita restano sensibili ai comandi.',
    name: 'Giulia Ferretti',
    role: 'Triumph Street Triple · Milano',
    initial: 'G',
  },
  {
    quote:
      'Uso la tuta Pista in track day. Cuciture intatte dopo due stagioni, paraschiena livello 2 incluso. Rapporto qualità-prezzo nettamente sopra le solite marche.',
    name: 'Andrea Costantino',
    role: 'Yamaha R6 · Vallelunga',
    initial: 'A',
  },
];

export default function Testimonials() {
  const head = useReveal();
  const grid = useReveal({ threshold: 0.05 });

  return (
    <section id="recensioni" className="py-24 md:py-32 bg-[#291F38]/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div ref={head.ref as React.RefObject<HTMLDivElement>} style={head.style}>
          <SectionHeading
            number="04"
            eyebrow="Recensioni"
            title="Chi guida davvero, lo dice meglio di noi."
            subtitle="Oltre 12.000 recensioni verificate su prodotti spediti in Italia ed Europa."
          />
        </div>

        <div
          ref={grid.ref as React.RefObject<HTMLDivElement>}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              style={staggerStyle(i, 100)}
              className="flex flex-col min-w-0 bg-[#291F38] border border-white/5 rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1" aria-label="Valutazione 5 su 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#F77F00] text-[#F77F00]" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm md:text-base text-[#F8F7FA]/85 italic leading-relaxed">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 min-w-0 pt-6 border-t border-white/5">
                <span
                  className="w-10 h-10 rounded-full bg-[#E63946]/20 text-[#E63946] font-bold flex items-center justify-center shrink-0"
                  style={{ fontFamily: 'var(--font-display)' }}
                  aria-hidden="true"
                >
                  {r.initial}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-[#F8F7FA] text-sm truncate">{r.name}</span>
                  <span className="block text-xs text-[#9A98AE] truncate">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}