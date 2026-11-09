import { useReveal } from '../hooks/useReveal.js';
import { LinkList } from './Card.jsx';

const ME = 'T. Zhang';

export default function Publications({ items, figure }) {
  const figRef = useReveal();

  return (
    <div className={`pub-layout ${figure ? 'has-figure' : ''}`}>
      <ol className="pub-list">
        {items.map((pub) => (
          <li className="pub" key={`${pub.venue}-${pub.year}-${pub.type}`}>
            <div className="pub-head">
              <span className="pub-type">{pub.type}</span>
              <span className="pub-year">{pub.year}</span>
              {pub.badge && <span className="badge">{pub.badge}</span>}
            </div>
            <h3 className="pub-title">{pub.title}</h3>
            <p className="pub-authors">
              {pub.authors.map((name, i) => (
                <span key={name}>
                  {name === ME ? <strong>{name}</strong> : name}
                  {i < pub.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <p className="pub-venue">{pub.venue}</p>
            <LinkList links={pub.links} />
          </li>
        ))}
      </ol>
      {figure && (
        <figure className="figure reveal" ref={figRef}>
          <img src={figure.src} alt={figure.alt} loading="lazy" decoding="async" />
          <figcaption>{figure.caption}</figcaption>
        </figure>
      )}
    </div>
  );
}
