import { EXPERIENCE, EXPERIENCE_TEXT } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <div className="section-head">
        <p className="eyebrow">{EXPERIENCE_TEXT.eyebrow}</p>
        <h2>{EXPERIENCE_TEXT.heading}</h2>
        <p className="muted">{EXPERIENCE_TEXT.intro}</p>
      </div>
      <div className="timeline">
        {EXPERIENCE.map((job) => (
          <article key={`${job.company}-${job.period}`} className="job">
            <div className="job-head">
              <div>
                <h3>{job.role}</h3>
                <p className="job-company">
                  {job.company} · {job.location}
                </p>
              </div>
              <span className="period">{job.period}</span>
            </div>
            <ul>
              {job.highlights.map((h) => (
                <li key={h.slice(0, 32)}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
