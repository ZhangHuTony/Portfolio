import { nav, site } from '../data.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Nav() {
  return (
    <header className="nav">
      <nav className="nav-inner" aria-label="Main">
        <a className="nav-brand" href="#top">
          {site.name}
        </a>
        <div className="nav-links">
          {nav.map((item) => (
            <a className="nav-link" key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-link cv"
            href={`${import.meta.env.BASE_URL}${site.cv}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
