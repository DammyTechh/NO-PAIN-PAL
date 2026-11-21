import { IconGate } from './Icons';
import './Problem.css';

const FIGURES = [
  { n: '1', label: 'Site, left clear', sub: 'the needle path stays open' },
  { n: '3', label: 'Things applied at once', sub: 'pressure, vibration, cold' },
  { n: '4', label: 'Procedures it fits', sub: 'injection, vaccination, blood draw, cannulation' },
];

export default function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="shell">
        <header className="problem__head">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__idx">02</span> The case
          </p>
          <h2 className="problem__title" data-reveal style={{ '--d': '60ms' }}>
            The procedure isn&rsquo;t the problem.
            <br />
            <span className="problem__dim">What it feels like is.</span>
          </h2>
        </header>

        <div className="problem__body">
          <div className="problem__text" data-reveal style={{ '--d': '120ms' }}>
            <p className="lead">
              Injections, vaccinations, blood collection and cannulation are the most
              repeated procedures in any clinic, and for a great many patients they
              are the most dreaded. Needle distress makes children harder to treat,
              makes adults put off care, and makes routine work slower for the person
              holding the syringe.
            </p>
            <p className="problem__p">
              NO PAIN PAL does not change the clinical technique. The needle goes
              where it was always going to go, at the depth and angle the clinician
              chooses. What changes is the sensory traffic around it: three
              competing signals delivered at the skin, at the same time, in the
              seconds that matter.
            </p>
          </div>

          <aside className="theory" data-reveal style={{ '--d': '200ms' }}>
            <span className="theory__icon"><IconGate size={22} /></span>
            <p className="mono-tag theory__kicker">Theoretical basis</p>
            <h3 className="theory__title">Gate control</h3>
            <p className="theory__copy">
              The project documentation builds on gate control theory: stimulating
              non-pain sensory pathways around a site can reduce how much pain
              signal gets through. Pressure, vibration and cold each recruit a
              different pathway, so the device applies all three rather than
              betting on one.
            </p>
          </aside>
        </div>

        <ul className="figures">
          {FIGURES.map((f, i) => (
            <li key={f.n} data-reveal style={{ '--d': `${120 + i * 90}ms` }}>
              <span className="figures__n">{f.n}</span>
              <span className="figures__label">{f.label}</span>
              <span className="figures__sub">{f.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
