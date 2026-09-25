import { CONTACT_TEXT, PROFILE, SHARED } from '../data/content';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="contact-card">
        <h2>{CONTACT_TEXT.heading}</h2>
        <p className="muted">{CONTACT_TEXT.body}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
            {PROFILE.emailDisplay}
          </a>
          <a className="btn" href={PROFILE.resume} target="_blank" rel="noreferrer">
            {SHARED.resume}
          </a>
        </div>
        <div className="social-icons">
          <a
            className="icon-btn"
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label={SHARED.github}
          >
            <GithubIcon />
          </a>
          <a
            className="icon-btn"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={SHARED.linkedin}
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
