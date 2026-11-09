import { site } from '../data.js';
import { socialIcons } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="contact-title">
          Contact
        </h2>
        <p className="contact-text">{site.contact}</p>
        <ul className="contact-links">
          {site.social.map(({ label, href, icon }) => {
            const Icon = socialIcons[icon];
            const external = href.startsWith('http');
            return (
              <li key={label}>
                <a
                  className="contact-link"
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon />
                  {label === 'Email' ? site.email : label}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">© {new Date().getFullYear()} Tony Zhang</p>
      </div>
    </footer>
  );
}
