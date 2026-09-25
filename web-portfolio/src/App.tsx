import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { SITE } from './data/content';
import type { ThemeName } from './data/content';

function getInitialTheme(): ThemeName {
  const saved = localStorage.getItem('lb-theme');
  if (saved === 'rose' || saved === 'matcha' || saved === 'lavender') return saved;
  return 'matcha';
}

function getInitialDark(): boolean {
  const saved = localStorage.getItem('lb-mode');
  if (saved === 'dark') return true;
  if (saved === 'light') return false;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

export default function App() {
  const [theme, setTheme] = useState<ThemeName>(getInitialTheme);
  const [dark, setDark] = useState<boolean>(getInitialDark);

  useEffect(() => {
    document.title = SITE.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', SITE.description);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('lb-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.mode = dark ? 'dark' : 'light';
    localStorage.setItem('lb-mode', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div id="top" className="page">
      <div className="bg-blobs" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <Navbar
        theme={theme}
        onTheme={setTheme}
        dark={dark}
        onToggleDark={() => setDark((v) => !v)}
      />
      <main className="wrap">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
