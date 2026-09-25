import { useEffect, useState } from 'react';
import { NAV_LINKS, NAV_TEXT, PROFILE, SHARED, THEMES, type ThemeName } from '../data/content';

type Props = {
  theme: ThemeName;
  onTheme: (t: ThemeName) => void;
  dark: boolean;
  onToggleDark: () => void;
};

export default function Navbar({ theme, onTheme, dark, onToggleDark }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const modeLabel = dark ? NAV_TEXT.switchToLight : NAV_TEXT.switchToDark;

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label={NAV_TEXT.homeAria}>
          <span className="brand-mark" aria-hidden="true">
            {PROFILE.initials}
          </span>
          <span className="brand-text">
            {PROFILE.name}
            <small>{PROFILE.shortRole}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label={NAV_TEXT.primaryAria}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-small" href={PROFILE.resume} target="_blank" rel="noreferrer">
            {SHARED.resume}
          </a>
        </nav>

        <div className="nav-tools">
          <div className="themes" role="group" aria-label={NAV_TEXT.themeGroupAria}>
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`swatch${theme === t.id ? ' is-active' : ''}`}
                style={{ ['--sw' as string]: t.swatch }}
                title={t.label}
                aria-label={t.label}
                aria-pressed={theme === t.id}
                onClick={() => onTheme(t.id)}
              />
            ))}
          </div>
          <button
            type="button"
            className="mode-btn"
            onClick={onToggleDark}
            aria-pressed={dark}
            title={modeLabel}
            aria-label={modeLabel}
          >
            <span aria-hidden="true">{dark ? NAV_TEXT.lightIcon : NAV_TEXT.darkIcon}</span>
          </button>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-label={NAV_TEXT.menuAria}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label={NAV_TEXT.mobileAria}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={PROFILE.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            {SHARED.resume}
          </a>
        </nav>
      )}
    </header>
  );
}
