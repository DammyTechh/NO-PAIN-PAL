import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mechanism from './components/Mechanism';
import Anatomy from './components/Anatomy';
import Protocol from './components/Protocol';
import ClinicalUse from './components/ClinicalUse';
import Assurance from './components/Assurance';
import Reference from './components/Reference';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="sr-only" href="#problem">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Mechanism />
        <Anatomy />
        <Protocol />
        <ClinicalUse />
        <Assurance />
        <Reference />
        <Team />
        <Contact />
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
