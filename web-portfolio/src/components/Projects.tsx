import { PROJECTS, PROJECTS_TEXT } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="section-head">
        <p className="eyebrow">{PROJECTS_TEXT.eyebrow}</p>
        <h2>{PROJECTS_TEXT.heading}</h2>
        <p className="muted">{PROJECTS_TEXT.intro}</p>
      </div>
      <div className="grid">
        {PROJECTS.map((p) => (
          <article key={p.title} className="card">
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title} ${PROJECTS_TEXT.cardLinkAriaSuffix}`}
            >
              <div className="thumb">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
            </a>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <a className="card-link" href={p.link} target="_blank" rel="noreferrer">
                {PROJECTS_TEXT.cardLink}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
