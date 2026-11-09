import { site } from '../data.js';

const href = (h) => (h === 'cv' ? `${import.meta.env.BASE_URL}${site.cv}` : h);

export default function Hero() {
  const { heroImage: img } = site;
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>{site.name}</h1>
          <p className="hero-title">{site.title}</p>
          <p className="hero-intro">{site.intro}</p>
          <ul className="hero-edu">
            {site.education.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <div className="hero-actions">
            {site.cta.map((c) => (
              <a
                key={c.label}
                className={`btn ${c.primary ? 'primary' : ''}`}
                href={href(c.href)}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src={img.src}
            srcSet={img.srcSet}
            sizes="(min-width: 900px) 560px, 100vw"
            alt={img.alt}
            width={img.width}
            height={img.height}
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
