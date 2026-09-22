import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    q: 'Le protezioni sono incluse o si comprano a parte?',
    a: 'Tutte le giacche e le tute MotoVestia arrivano con protezioni D3O® livello 2 su spalle e gomiti già montate. Il paraschiena è incluso nelle linee Pro e Pista, opzionale e acquistabile separatamente sulla linea Street.',
  },
  {
    q: 'Come faccio a scegliere la taglia corretta?',
    a: 'Nella sezione Guida alle taglie trovi le tabelle per giacche, guanti e stivali con le misure in centimetri. Se hai un dubbio, scrivi al servizio clienti indicando modello e misure: ti rispondiamo con la taglia consigliata entro 12 ore lavorative. I cambi taglia sono gratuiti entro 30 giorni.',
  },
  {
    q: 'Quanto costa e quanto impiega la spedizione?',
    a: 'Spedizione gratuita in Italia sopra i 99 €, altrimenti 6,90 €. Consegna in 48 ore lavorative con corriere espresso tracciato. Per il resto d’Europa la spedizione parte da 12 € con consegna in 3-5 giorni lavorativi.',
  },
  {
    q: 'I tessuti sono davvero impermeabili?',
    a: 'La membrana interna garantisce 10.000 mm di colonna d’acqua e 8.000 g/m²/24h di traspirabilità. Le cuciture dei capi impermeabili sono nastrate. Nella linea Pro aggiungiamo trattamento idrorepellente DWR sul tessuto esterno.',
  },
  {
    q: 'Posso provare un capo prima di acquistarlo?',
    a: 'Sì. Hai 30 giorni per testare il capo su strada. Se non ti soddisfa, il reso è gratuito e il rimborso completo viene emesso entro 5 giorni lavorativi dal ricevimento.',
  },
  {
    q: 'Come si lavano i capi tecnici?',
    a: 'Lavaggio in lavatrice a 30° con detergente delicato, esclusa la centrifuga forte. Rimuovi sempre le protezioni prima. Non usare ammorbidente, non asciugare in asciugatrice: compromettono la membrana. Istruzioni dettagliate su ogni etichetta.',
  },
  {
    q: 'Fate riparazioni sui capi danneggiati?',
    a: 'Sì, offriamo un servizio di riparazione a prezzo calmierato per cuciture, cerniere e zip. Invia una foto del danno e ti mandiamo un preventivo entro 48 ore.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, style } = useReveal();

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#1B102B]">
      <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className="max-w-3xl mx-auto px-4 md:px-6">
        <SectionHeading
          number="05"
          eyebrow="Domande frequenti"
          title="Tutto quello che serve sapere."
          subtitle="Non trovi la risposta che cerchi? Scrivici a supporto@motovestia.it, rispondiamo in giornata."
          align="center"
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-white/5 bg-[#291F38] overflow-hidden transition-colors hover:border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] focus-visible:ring-inset"
                >
                  <span className="font-semibold text-[#F8F7FA] text-sm md:text-base min-w-0">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E63946] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-[#9A98AE] leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}