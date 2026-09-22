import { useEffect, useRef, useState, type CSSProperties } from 'react';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Scroll-reveal hook. Attach `ref` to the element and spread `style`.
 * Fades + slides in once when the element enters the viewport.
 */
export function useReveal(options: RevealOptions = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
    willChange: 'opacity, transform',
  };

  return { ref, style, visible };
}

/** Returns a stagger delay style for children of a revealed container. */
export function staggerStyle(index: number, base = 100): CSSProperties {
  return { transitionDelay: `${index * base}ms` };
}

export default useReveal;