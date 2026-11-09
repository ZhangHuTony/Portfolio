import { site } from '../data.js';

const href = (h) => (h === 'cv' ? `${import.meta.env.BASE_URL}${site.cv}` : h);

export default function Hero() {
  const { heroImage: img } = site;
  return (
    <>
      <section className="hero" id="top" aria-label="Introduction">
        <img
          className="hero-img"
          src={img.src}
          srcSet={img.srcSet}
          sizes="100vw"
          alt={img.alt}
          width={img.width}
          height={img.height}
          fetchPriority="high"
          style={{ objectPosition: img.position }}
        />
        <div className="hero-content">
          <h1>{site.name}</h1>
          <p className="hero-title">{site.title}</p>
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
      </section>

      <div className="intro">
        <div className="container">
          <p className="intro-text">{site.intro}</p>
          <ul className="intro-edu">
            {site.education.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
