import { ArrowUpRight } from 'lucide-react';
import { useReveal, staggerStyle } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

interface Product {
  name: string;
  category: string;
  price: string;
  tag?: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  {
    name: 'Giacca Corsa RS-9',
    category: 'Giacca tecnica',
    price: '€389',
    tag: 'Best seller',
    image:
      'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/201/assets/ai-1e3314208f.jpg',
    alt: 'Giacca tecnica moto MotoVestia Corsa RS-9 nera con inserti rossi',
  },
  {
    name: 'Guanti Perforati GP',
    category: 'Guanti',
    price: '€119',
    image:
      'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/201/assets/ai-6b48eece5a.jpg',
    alt: 'Guanti moto in pelle perforata MotoVestia con protezioni sulle nocche',
  },
  {
    name: 'Stivali Touring Vento',
    category: 'Calzature',
    price: '€249',
    tag: 'Novità',
    image:
      'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/201/assets/ai-c35f8000da.jpg',
    alt: 'Stivali da moto touring impermeabili MotoVestia',
  },
  {
    name: 'Casco Modulare Aria',
    category: 'Casco',
    price: '€329',
    image:
      'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/201/assets/ai-257fd905d8.jpg',
    alt: 'Casco modulare moto MotoVestia Aria opaco nero',
  },
  {
    name: 'Zaino Idro Track',
    category: 'Accessori',
    price: '€149',
    image:
      'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/201/assets/ai-bcc837266e.jpg',
    alt: 'Zaino moto idrorepellente MotoVestia Track',
  },
  {
    name: 'Tuta Intera Pista',
    category: 'Tuta',
    price: '€899',
    tag: 'Pro',
    image:
      'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/201/assets/ai-04d8f12fb5.jpg',
    alt: 'Tuta intera da pista in pelle MotoVestia',
  },
];

export default function Collections() {
  const head = useReveal();
  const grid = useReveal({ threshold: 0.05 });

  return (
    <section id="collezioni" className="relative py-24 md:py-32 bg-[#1B102B]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div ref={head.ref as React.RefObject<HTMLDivElement>} style={head.style}>
          <SectionHeading
            number="01"
            eyebrow="Collezione"
            title="Attrezzatura da strada, non da vetrina."
            subtitle="Sei famiglie di prodotto, un solo standard: protezioni reali, materiali testati su chilometri veri e una vestibilità pensata per la posizione di guida."
          />
        </div>

        <div
          ref={grid.ref as React.RefObject<HTMLDivElement>}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {products.map((p, i) => (
            <article
              key={p.name}
              style={staggerStyle(i, 90)}
              className="group flex flex-col min-w-0 bg-[#291F38] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1B102B]">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {p.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-[#E63946] text-white text-xs font-semibold px-3 py-1 shadow-lg">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#06D6A0]">
                  {p.category}
                </p>
                <h3
                  className="mt-2 text-lg font-bold text-[#F8F7FA] min-w-0"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {p.name}
                </h3>
                <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
                  <span
                    className="text-xl font-bold text-[#F8F7FA] tabular-nums"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {p.price}
                  </span>
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E63946] hover:text-[#F8F7FA] transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
                    aria-label={`Dettagli di ${p.name}`}
                  >
                    Dettagli
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}