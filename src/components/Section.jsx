import { useReveal } from '../hooks/useReveal.js';

export default function Section({ id, title, lead, children }) {
  const ref = useReveal();
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container reveal" ref={ref}>
        <h2 className="section-title" id={`${id}-title`}>
          {title}
        </h2>
        {lead && <p className="section-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
