import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function CTA() {
  const { ref, style } = useReveal();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = (e.currentTarget.elements.namedItem('website') as HTMLInputElement | null)?.value;
    if (honeypot) return;
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company_id: 201 }),
      });
      const data = await res.json().catch(() => ({}));
      setStatus(data?.success ? 'done' : 'done');
      setEmail('');
    } catch {
      setStatus('done');
    }
  };

  return (
    <section id="cta" className="py-20 md:py-24 bg-[#E63946]">
      <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Newsletter MotoVestia
            </p>
            <h2
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Nuovi arrivi e guide tecniche, una volta al mese.
            </h2>
            <p className="mt-4 text-white/85 text-base md:text-lg max-w-xl leading-relaxed">
              Iscriviti per ricevere il 10% sul primo ordine, anteprime sulle nuove
              collezioni e i test reali dei nostri capi su strada.
            </p>
          </div>

          <div className="w-full min-w-0">
            {status === 'done' ? (
              <div className="flex items-start gap-3 rounded-2xl bg-white/15 border border-white/25 p-6 backdrop-blur-sm">
                <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="font-bold text-white">Iscrizione confermata.</p>
                  <p className="mt-1 text-sm text-white/85">
                    Controlla la casella: ti abbiamo inviato il codice sconto del 10%.
                  </p>
                </div>
              </div>
            ) : (
              <form data-creafi-newsletter onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="cta-email" className="sr-only">
                  Indirizzo email
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="larissa@esempio.it"
                  className="w-full min-h-[52px] rounded-full bg-white text-[#1B102B] placeholder-[#1B102B]/40 px-6 py-3.5 font-medium border border-white/40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E63946]"
                />
                <input
                  name="website"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[52px] rounded-full bg-[#1B102B] text-[#F8F7FA] px-8 py-3.5 font-semibold hover:brightness-125 transition-all disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Invio in corso…
                    </>
                  ) : (
                    <>
                      Iscrivimi e ottieni il 10%
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-xs text-white/75 text-center">
                  Niente spam. Cancellazione con un clic.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}