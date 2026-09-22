import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const LOGO =
  'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/media/logo/04ec15d461214957b3bb304567464029.png';

const links = [
  { label: 'Collezioni', href: '#collezioni' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Taglie', href: '#taglie' },
  { label: 'Recensioni', href: '#recensioni' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-[#1B102B]/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-[#1B102B] md:bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-[72px] flex items-center justify-between gap-4">
          <a
            href="#top"
            className="flex items-center gap-3 min-w-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B102B]"
            aria-label="MotoVestia — torna all'inizio"
          >
            <span className="p-1 rounded-xl bg-white/10 shrink-0">
              <img
                src={LOGO}
                alt="MotoVestia"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-contain"
              />
            </span>
            <span
              className="text-lg font-extrabold tracking-tight text-[#F8F7FA] truncate"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              MotoVestia
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium text-[#9A98AE] hover:text-[#F8F7FA] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#collezioni"
              className="hidden sm:inline-flex items-center gap-2 bg-[#E63946] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg hover:brightness-110 hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B102B]"
            >
              Shop
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Apri il menu"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#F8F7FA] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className="absolute right-0 top-0 h-full w-[280px] max-w-[85vw] bg-[#1B102B] border-l border-white/10 flex flex-col">
            <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
              <span
                className="text-base font-extrabold text-[#F8F7FA]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Chiudi il menu"
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#F8F7FA] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <button
                      type="button"
                      onClick={() => handleNav(l.href)}
                      className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-[#F8F7FA] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => handleNav('#collezioni')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E63946] text-white rounded-full px-5 py-3 text-sm font-semibold hover:brightness-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Vai alla collezione
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}