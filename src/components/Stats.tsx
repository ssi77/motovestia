import { useEffect, useRef, useState } from 'react';
import { useReveal, staggerStyle } from '../hooks/useReveal';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 4);
              setDisplay(Math.round(value * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString('it-IT')}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 42, suffix: 'k+', label: 'Motociclisti attrezzati' },
  { value: 98, suffix: '%', label: 'Clienti che riacquistano' },
  { value: 126, suffix: '', label: 'Punti vendita in Europa' },
  { value: 30, suffix: 'gg', label: 'Prova su strada o rimborso' },
];

export default function Stats() {
  const { ref, style } = useReveal({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-[#1B102B]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={style}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 rounded-2xl border border-white/5 bg-[#291F38] p-8 md:p-12"
        >
          {stats.map((s, i) => (
            <div key={s.label} style={staggerStyle(i, 80)} className="min-w-0 text-center">
              <p
                className="text-3xl md:text-5xl font-extrabold text-[#E63946]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-[#9A98AE] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}