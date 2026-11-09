import { useReveal } from '../hooks/useReveal.js';

export default function Teaching({ items, figure }) {
  const figRef = useReveal();

  return (
    <div className={`pub-layout ${figure ? 'has-figure' : ''}`}>
      <ul className="pub-list">
        {items.map((item) => (
          <li className="pub" key={item.title}>
            <div className="pub-head">
              <span className="pub-type">{item.kind}</span>
              <span className="pub-year">{item.period}</span>
            </div>
            <h3 className="pub-title">{item.title}</h3>
            <p className="pub-venue">{item.org}</p>
            <ul className="points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {figure && (
        <figure className="figure reveal" ref={figRef}>
          <img
            src={figure.src}
            alt={figure.alt}
            width="960"
            height="720"
            loading="lazy"
            decoding="async"
          />
          <figcaption>{figure.caption}</figcaption>
        </figure>
      )}
    </div>
  );
}
