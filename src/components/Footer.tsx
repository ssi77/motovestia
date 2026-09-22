import { Instagram, Youtube, Facebook, Mail } from 'lucide-react';

const LOGO =
  'https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/media/logo/04ec15d461214957b3bb304567464029.png';

const columns = [
  {
    title: 'Collezioni',
    links: [
      { label: 'Giacche tecniche', href: '#collezioni' },
      { label: 'Guanti', href: '#collezioni' },
      { label: 'Stivali e calzature', href: '#collezioni' },
      { label: 'Casco e accessori', href: '#collezioni' },
      { label: 'Linea Pro Pista', href: '#collezioni' },
    ],
  },
  {
    title: 'Assistenza',
    links: [
      { label: 'Guida alle taglie', href: '#taglie' },
      { label: 'Spedizioni e resi', href: '#faq' },
      { label: 'Istruzioni di lavaggio', href: '#faq' },
      { label: 'Riparazioni', href: '#faq' },
      { label: 'Contattaci', href: '#cta' },
    ],
  },
  {
    title: 'Azienda',
    links: [
      { label: 'Chi siamo', href: '#tecnologia' },
      { label: 'Tecnologia dei materiali', href: '#tecnologia' },
      { label: 'Rivenditori', href: '#cta' },
      { label: 'Lavora con noi', href: '#cta' },
      { label: 'Privacy e cookie', href: '#faq' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B102B] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="p-1 rounded-xl bg-white/10 shrink-0">
                <img
                  src={LOGO}
                  alt="MotoVestia"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-xl object-contain"
                />
              </span>
              <span
                className="text-lg font-extrabold text-[#F8F7FA]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                MotoVestia
              </span>
            </div>
            <p className="mt-4 text-sm text-[#9A98AE] leading-relaxed max-w-xs">
              Abbigliamento tecnico e accessori da moto progettati in Italia.
              Materiali testati su strada, protezioni omologate, vestibilità
              pensata per chi guida tutti i giorni.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, label: 'Instagram', href: '#top' },
                { Icon: Youtube, label: 'YouTube', href: '#top' },
                { Icon: Facebook, label: 'Facebook', href: '#top' },
                { Icon: Mail, label: 'Email', href: '#cta' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-[#9A98AE] hover:text-[#F8F7FA] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} className="min-w-0" aria-label={col.title}>
              <h3
                className="text-sm font-bold uppercase tracking-wider text-[#E63946]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[#9A98AE] hover:text-[#F8F7FA] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#9A98AE] text-center md:text-left">
            © {year} MotoVestia S.r.l. — P.IVA IT01234567890. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#faq"
              className="text-sm text-[#9A98AE] hover:text-[#F8F7FA] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
            >
              Privacy
            </a>
            <a
              href="#faq"
              className="text-sm text-[#9A98AE] hover:text-[#F8F7FA] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
            >
              Termini
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}