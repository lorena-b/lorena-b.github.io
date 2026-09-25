import { useEffect, useState } from 'react';
import { HERO_TEXT, PROFILE } from '../data/content';

const FULL_TITLE = `${HERO_TEXT.greetingBefore} ${PROFILE.firstName}${HERO_TEXT.greetingAfter}`;
const BEFORE_LEN = HERO_TEXT.greetingBefore.length + 1; // + the space before the name
const NAME_LEN = PROFILE.firstName.length;
const TYPE_DELAY_MS = 500;
const TYPE_SPEED_MS = 55;

export default function Hero() {
  const [progress, setProgress] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? FULL_TITLE.length : 0,
  );
  const done = progress >= FULL_TITLE.length;

  useEffect(() => {
    if (progress !== 0) return;
    let interval = 0;
    let typed = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        typed += 1;
        setProgress(typed);
        if (typed >= FULL_TITLE.length) window.clearInterval(interval);
      }, TYPE_SPEED_MS);
    }, TYPE_DELAY_MS);
    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
    };
    // Run once on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const before = FULL_TITLE.slice(0, Math.min(progress, BEFORE_LEN));
  const name =
    progress > BEFORE_LEN
      ? FULL_TITLE.slice(BEFORE_LEN, Math.min(progress, BEFORE_LEN + NAME_LEN))
      : '';
  const after =
    progress > BEFORE_LEN + NAME_LEN ? FULL_TITLE.slice(BEFORE_LEN + NAME_LEN, progress) : '';

  return (
    <section id="about" className="hero reveal">
      <div className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse" aria-hidden="true" /> {PROFILE.title}
          </p>
          <h1 aria-label={FULL_TITLE}>
            <span aria-hidden="true">
              {before}
              <em>{name}</em>
              {after}
              {!done && <span className="caret" aria-hidden="true" />}
            </span>
          </h1>
          <p className="lede">{PROFILE.tagline}</p>
          <div className="prose">
            {PROFILE.bio.slice(1).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              {HERO_TEXT.ctaProjects}
            </a>
            <a className="btn" href={`mailto:${PROFILE.email}`}>
              {HERO_TEXT.ctaContact}
            </a>
          </div>
          <ul className="skill-pills" aria-label={HERO_TEXT.skillsAria}>
            {PROFILE.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
