import { projects, publications, research, talkFigure, teaching, teachingFigure } from './data.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import Card from './components/Card.jsx';
import Publications from './components/Publications.jsx';
import Teaching from './components/Teaching.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Section
          id="research"
          title="Research"
          lead="Teaching and coordinating teams of robots, from learning with human demonstrations to planning under uncertainty."
        >
          <div className="grid research">
            {research.map((item, i) => (
              <Card key={item.id} item={item} index={i} />
            ))}
          </div>
        </Section>
        <Section id="publications" title="Publications & Talks">
          <Publications items={publications} figure={talkFigure} />
        </Section>
        <Section id="projects" title="Other Projects">
          <div className="grid projects">
            {projects.map((item, i) => (
              <Card key={item.title} item={item} index={i} />
            ))}
          </div>
        </Section>
        <Section id="teaching" title="Teaching & Outreach">
          <Teaching items={teaching} figure={teachingFigure} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
