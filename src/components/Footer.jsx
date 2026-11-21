import lockup from '../assets/logo-lockup.webp';
import './Footer.css';

const COLS = [
  {
    title: 'The device',
    links: [
      ['Mechanism', '#mechanism'],
      ['Anatomy', '#anatomy'],
      ['Protocol', '#protocol'],
    ],
  },
  {
    title: 'Evidence',
    links: [
      ['Clinical use', '#use'],
      ['Assurance', '#assurance'],
      ['Glossary', '#reference'],
    ],
  },
  {
    title: 'Contact',
    links: [
      ['Email us', 'mailto:hello@nopainpal.africa'],
      ['Protocol review', '#protocol'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer" data-theme="dark">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={lockup} alt="NO PAIN PAL" />
            <p>
              A handheld, non-invasive device for reducing pain and distress
              during needle-based medical procedures.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="mono-tag">{c.title}</p>
                <ul>
                  {c.links.map(([label, href]) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} NO PAIN PAL. All rights reserved.</p>
          <p className="footer__credit">Developed under TETFAIR 2026</p>
        </div>
      </div>
    </footer>
  );
}
