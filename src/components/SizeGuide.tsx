import { useState } from 'react';
import { Ruler, Info } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

type SizeKey = 'giacca' | 'guanti' | 'stivali';

const tables: Record<SizeKey, { head: string[]; rows: string[][] }> = {
  giacca: {
    head: ['Taglia', 'Petto (cm)', 'Vita (cm)', 'Altezza (cm)'],
    rows: [
      ['S', '90 – 96', '78 – 84', '165 – 172'],
      ['M', '96 – 102', '84 – 90', '170 – 178'],
      ['L', '102 – 108', '90 – 96', '176 – 183'],
      ['XL', '108 – 116', '96 – 104', '181 – 188'],
      ['XXL', '116 – 124', '104 – 112', '186 – 194'],
    ],
  },
  guanti: {
    head: ['Taglia', 'Circonferenza mano (cm)', 'Lunghezza (cm)'],
    rows: [
      ['S', '18 – 20', '17,5'],
      ['M', '20 – 22', '18,5'],
      ['L', '22 – 24', '19,5'],
      ['XL', '24 – 26', '20,5'],
    ],
  },
  stivali: {
    head: ['Taglia EU', 'Piede (cm)', 'US equiv.'],
    rows: [
      ['39', '24,5', '6,5'],
      ['41', '25,8', '8,5'],
      ['43', '27,2', '10'],
      ['45', '28,5', '11,5'],
    ],
  },
};

const tabs: { key: SizeKey; label: string }[] = [
  { key: 'giacca', label: 'Giacche e tute' },
  { key: 'guanti', label: 'Guanti' },
  { key: 'stivali', label: 'Stivali' },
];

export default function SizeGuide() {
  const [active, setActive] = useState<SizeKey>('giacca');
  const { ref, style } = useReveal();
  const table = tables[active];

  return (
    <section id="taglie" className="py-24 md:py-32 bg-[#1B102B]">
      <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeading
          number="03"
          eyebrow="Guida alle taglie"
          title="La misura giusta, la prima volta."
          subtitle="Sei tra due taglie? Scegli la più grande per le giacche, la più piccola per i guanti. Se non è perfetta, il cambio è gratuito entro 30 giorni."
          align="center"
        />

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Categoria guida alle taglie"
            className="inline-flex flex-wrap justify-center gap-1 p-1 rounded-full border border-white/10 bg-[#291F38]"
          >
            {tabs.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={active === t.key}
                onClick={() => setActive(t.key)}
                className={`px-5 py-2.5 min-h-[44px] rounded-full text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] ${
                  active === t.key
                    ? 'bg-[#E63946] text-white shadow-lg'
                    : 'text-[#9A98AE] hover:text-[#F8F7FA] hover:bg-white/5'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/5 bg-[#291F38]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-left">
              <thead>
                <tr className="border-b border-white/10">
                  {table.head.map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#9A98AE] whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-4 text-sm min-w-0 ${
                          ci === 0
                            ? 'font-bold text-[#F8F7FA] whitespace-nowrap'
                            : 'text-[#9A98AE] tabular-nums'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#06D6A0]/20 bg-[#06D6A0]/5 p-5">
          <Ruler className="w-5 h-5 text-[#06D6A0] shrink-0 mt-0.5" />
          <p className="text-sm text-[#F8F7FA]/80 leading-relaxed min-w-0">
            Misura il petto nel punto più ampio, la vita all’altezza dell’ombelico.
            Per i guanti, circonferenza del palmo dominante senza pollice. In dubbio,
            scrivici: rispondiamo entro 12 ore lavorative con una taglia consigliata.
          </p>
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-[#291F38] p-5">
          <Info className="w-5 h-5 text-[#F77F00] shrink-0 mt-0.5" />
          <p className="text-sm text-[#9A98AE] leading-relaxed min-w-0">
            Le taglie variano tra linea Street e linea Pro: la Pro veste aderente per
            ospitare le protezioni. Consulta la tabella della linea specifica nella
            scheda prodotto.
          </p>
        </div>
      </div>
    </section>
  );
}