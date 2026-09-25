import { FOOTER_TEXT, PROFILE, SHARED } from '../data/content';
import { GithubIcon, LinkedinIcon, EmailIcon } from './icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} {PROFILE.name} {FOOTER_TEXT.tagline}
        </p>
        <p className="footer-links">
          <a
            className="footer-icon"
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label={SHARED.github}
          >
            <GithubIcon />
          </a>
          <a
            className="footer-icon"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={SHARED.linkedin}
          >
            <LinkedinIcon />
          </a>
          <a className="footer-icon" href={`mailto:${PROFILE.email}`} aria-label={SHARED.email}>
            <EmailIcon />
          </a>
        </p>
      </div>
    </footer>
  );
}
