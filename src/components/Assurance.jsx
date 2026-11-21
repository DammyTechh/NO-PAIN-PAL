import { IconClinician, IconClean, IconPlate, IconDoc } from './Icons';
import './Assurance.css';

const POINTS = [
  {
    Icon: IconClinician,
    title: 'Trained hands only',
    body: 'Operated by trained healthcare personnel, positioned and secured with the strap before the syringe is picked up.',
  },
  {
    Icon: IconClean,
    title: 'Clean between patients',
    body: 'Patient-contact surfaces are wiped down with alcohol, then the device is ready for its next use.',
  },
  {
    Icon: IconPlate,
    title: 'Materials assessed',
    body: 'Patient-contact materials are assessed against ISO 10993-5 cytotoxicity requirements and the cleaning regime.',
  },
  {
    Icon: IconDoc,
    title: 'Documented for review',
    body: 'Labelling, cleaning guidance and training materials are being prepared for NAFDAC and SON review.',
  },
];

export default function Assurance() {
  return (
    <section className="section assurance" id="assurance">
      <div className="shell">
        <header className="assurance__head">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__idx">07</span> Assurance
            </p>
            <h2 className="assurance__title" data-reveal style={{ '--d': '60ms' }}>
              Built to be checked.
            </h2>
          </div>
          <p className="lead assurance__lead" data-reveal style={{ '--d': '120ms' }}>
            Four things we hold ourselves to, every time the device goes near a
            patient.
          </p>
        </header>

        <ul className="points">
          {POINTS.map((p, i) => (
            <li key={p.title} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <span className="points__icon"><p.Icon size={20} /></span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
