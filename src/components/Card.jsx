import { useReveal } from '../hooks/useReveal.js';
import { ExternalIcon } from './Icons.jsx';

// Renders only links that have an href. Placeholders (href: null) in data.js
// stay hidden until a real URL is filled in. Links with `highlight: true`
// (project websites) come first and render as buttons.
export function LinkList({ links }) {
  const live = (links || []).filter((link) => link.href);
  if (live.length === 0) return null;
  const ordered = [...live.filter((l) => l.highlight), ...live.filter((l) => !l.highlight)];
  return (
    <div className="links">
      {ordered.map((link) => (
        <a
          key={link.label}
          className={link.highlight ? 'link-btn' : undefined}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
          <ExternalIcon className="ext-icon" />
        </a>
      ))}
    </div>
  );
}

// One card for both research and project items.
export default function Card({ item, index = 0 }) {
  const ref = useReveal();
  const { image, org, role, period, title, summary, description, badge, tags, links } = item;
  const text = summary || description;

  return (
    <article
      className="card reveal"
      ref={ref}
      style={{ transitionDelay: `${Math.min(index * 60, 150)}ms` }}
    >
      {image && (
        <div className={`card-figure ${image.fit === 'contain' ? 'contain' : ''}`}>
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        </div>
      )}
      <div className="card-body">
        {org && <p className="card-meta">{org}</p>}
        <h3 className="card-title">{title}</h3>
        {role && (
          <p className="card-role">
            {role}
            {period ? ` · ${period}` : ''}
          </p>
        )}
        {badge && (
          <div className="badges">
            {[].concat(badge).map((b) => (
              <span className="badge" key={b}>
                {b}
              </span>
            ))}
          </div>
        )}
        <p className="card-text">{text}</p>
        {tags && tags.length > 0 && (
          <ul className="tags">
            {tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        <LinkList links={links} />
      </div>
    </article>
  );
}
