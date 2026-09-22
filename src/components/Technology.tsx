import { useReveal, staggerStyle } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Tessuto balistico 600D',
    text: 'Il primo strato resiste all’abrasione: 600 denari di nylon ad alta tenacità, doppio strato su spalle, gomiti e fianchi.',
  },
  {
    number: '02',
    title: 'Protezioni D3O® insertabili',
    text: 'Membrane omologate EN 1621-1 livello 2 su spalle e gomiti, sacca per paraschiena livello 2 e predisposizione per airbag.',
  },
  {
    number: '03',
    title: 'Membrana antivento e traspirante',
    text: '10.000 mm di colonna d’acqua con 8.000 g/m² di traspirabilità: asciutto sotto il temporale, ventilato a 30 gradi.',
  },
  {
    number: '04',
    title: 'Cuciture rinforzate e visibilità',
    text: 'Cuciture a doppia fila nei punti di carico e inserti riflettenti posteriori visibili fino a 100 metri.',
  },
];

export default function Technology() {
  const head = useReveal();
  const list = useReveal({ threshold: 0.08 });

  return (
    <section id="tecnologia" className="relative py-24 md:py-32 bg-[#291F38]/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-start">
          <div ref={head.ref as React.RefObject<HTMLDivElement>} style={head.style} className="lg:sticky lg:top-28">
            <SectionHeading
              number="02"
              eyebrow="Tecnologia"
              title="Quattro strati tra te e l’asfalto."
              subtitle="Nessuna scorciatoia. Ogni capo MotoVestia nasce da un prototipo testato in pista e su strada prima di arrivare in collezione."
            />
            <div className="mt-10 rounded-2xl border border-white/10 bg-[#1B102B]/70 p-6">
              <p className="text-sm text-[#9A98AE] leading-relaxed">
                Certificazioni dei materiali disponibili su richiesta. I capi della linea Pro
                includono scheda di prova con chilometraggio e condizioni di utilizzo.
              </p>
            </div>
          </div>

          <ol ref={list.ref as React.RefObject<HTMLOListElement>} className="flex flex-col gap-4">
            {steps.map((s, i) => (
              <li
                key={s.number}
                style={staggerStyle(i, 90)}
                className="flex gap-5 min-w-0 bg-[#291F38] border border-white/5 rounded-2xl p-6 md:p-8"
              >
                <span
                  className="text-2xl md:text-3xl font-extrabold text-[#E63946]/70 tabular-nums shrink-0"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.number}
                </span>
                <div className="min-w-0">
                  <h3
                    className="text-lg font-bold text-[#F8F7FA]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#9A98AE] leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}