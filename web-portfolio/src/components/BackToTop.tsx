import { useEffect, useState } from 'react';
import { BACK_TO_TOP_TEXT } from '../data/content';

const BOTTOM_OFFSET_PX = 120;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - BOTTOM_OFFSET_PX,
      );
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const goTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <button
      type="button"
      className={`to-top${visible ? ' is-visible' : ''}`}
      onClick={goTop}
      aria-label={BACK_TO_TOP_TEXT.aria}
      tabIndex={visible ? 0 : -1}
    >
      <span aria-hidden="true">{BACK_TO_TOP_TEXT.icon}</span>
    </button>
  );
}
