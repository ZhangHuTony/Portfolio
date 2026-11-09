import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons.jsx';

const current = () => document.documentElement.dataset.theme || 'light';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(current);

  // Follow the OS setting until the visitor picks a theme themselves.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      let stored = null;
      try {
        stored = localStorage.getItem('theme');
      } catch {
        /* storage unavailable */
      }
      if (!stored) {
        const next = e.matches ? 'dark' : 'light';
        document.documentElement.dataset.theme = next;
        setTheme(next);
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? <SunIcon width="18" height="18" /> : <MoonIcon width="18" height="18" />}
    </button>
  );
}
