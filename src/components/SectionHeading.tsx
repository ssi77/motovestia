import { useReveal } from '../hooks/useReveal';

interface Props {
  number: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ number, eyebrow, title, subtitle, align = 'left' }: Props) {
  const { ref, style } = useReveal();
  const isCenter = align === 'center';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={style}
      className={isCenter ? 'text-center flex flex-col items-center' : ''}
    >
      <div className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
        <span
          className="text-sm font-bold text-[#E63946] tabular-nums"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {number}
        </span>
        <span className="h-px w-8 bg-[#E63946]/40" />
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#9A98AE]">
          {eyebrow}
        </p>
      </div>
      <h2
        className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-[#F8F7FA]"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg text-[#9A98AE] leading-relaxed ${
            isCenter ? 'max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}