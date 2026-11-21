import { useEffect, useState } from 'react';
import useNavVisibility from '../hooks/useNavVisibility';
import useSectionSpy from '../hooks/useSectionSpy';
import { IconMenu, IconClose } from './Icons';
import mark from '../assets/logo-mark.webp';
import './Nav.css';

const LINKS = [
  { id: 'mechanism', label: 'Mechanism' },
  { id: 'anatomy', label: 'Anatomy' },
  { id: 'protocol', label: 'Protocol' },
  { id: 'use', label: 'Clinical use' },
  { id: 'assurance', label: 'Assurance' },
];

const IDS = LINKS.map((l) => l.id);

export default function Nav() {
  const { visible, scrolled, overDark } = useNavVisibility();
  const active = useSectionSpy(IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 18,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header
        className={[
          'nav',
          visible || open ? 'is-visible' : 'is-tucked',
          scrolled ? 'is-scrolled' : '',
          overDark ? 'is-dark' : 'is-light',
        ].join(' ')}
      >
        <nav className="nav__pill" aria-label="Primary">
          <a className="nav__brand" href="#top" onClick={(e) => go(e, 'top')}>
            <img src={mark} alt="" width="26" height="18" />
            <span className="nav__wordmark">
              No&#8209;Pain&nbsp;<strong>Pal</strong>
            </span>
          </a>

          <span className="nav__sep" aria-hidden="true" />

          <ul className="nav__links">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  className={active === l.id ? 'is-active' : undefined}
                  aria-current={active === l.id ? 'true' : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </nav>
      </header>

      <div
        className={`sheet ${open ? 'is-open' : ''}`}
        hidden={!open}
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
      >
        <div className="sheet__inner">
          <p className="mono-tag sheet__kicker">Navigate</p>
          <ul>
            {LINKS.map((l, i) => (
              <li key={l.id} style={{ '--i': i }}>
                <a href={`#${l.id}`} onClick={(e) => go(e, l.id)}>
                  <span className="sheet__num">{String(i + 1).padStart(2, '0')}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
