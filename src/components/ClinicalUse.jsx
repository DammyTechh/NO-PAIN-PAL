import { IconClinician, IconNeedle, IconCryo, IconPlate, IconShield } from './Icons';
import './ClinicalUse.css';

const USERS = [
  'Nurses',
  'Doctors',
  'Midwives',
  'Community health workers',
  'Vaccinators',
  'Laboratory professionals',
];

const PROCEDURES = [
  { n: '01', name: 'Intramuscular injection', note: 'Routine IM administration' },
  { n: '02', name: 'Vaccination', note: 'Campaign and clinic rounds' },
  { n: '03', name: 'Blood collection', note: 'Phlebotomy and sampling' },
  { n: '04', name: 'Cannulation', note: 'IV line placement' },
];

export default function ClinicalUse() {
  return (
    <section className="section section--dark use" id="use" data-theme="dark">
      <div className="shell">
        <div className="use__top">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__idx">06</span> Clinical use
            </p>
            <h2 className="use__title" data-reveal style={{ '--d': '60ms' }}>
              Built for the people
              <br />
              holding the syringe.
            </h2>
            <p className="lead use__lead" data-reveal style={{ '--d': '130ms' }}>
              The device is intended for trained healthcare personnel, and it is
              designed to sit inside procedures they already perform, not to replace
              a technique or ask for a new one.
            </p>
          </div>

          <ul className="users" aria-label="Intended users">
            {USERS.map((u, i) => (
              <li key={u} data-reveal style={{ '--d': `${80 + i * 60}ms` }}>
                <IconClinician size={17} />
                {u}
              </li>
            ))}
          </ul>
        </div>

        <div className="procs">
          <p className="mono-tag procs__kicker" data-reveal>Intended applications</p>
          <ul>
            {PROCEDURES.map((p, i) => (
              <li key={p.n} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <span className="procs__n">{p.n}</span>
                <span className="procs__name">{p.name}</span>
                <span className="procs__note">{p.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pillars">
          {[
            { Icon: IconPlate, t: 'Reusable', d: 'A cleanable housing built to come back for the next patient, not into a bin.' },
            { Icon: IconCryo, t: 'Detachable cooling', d: 'The cryo unit comes off, so one can chill while another is in service.' },
            { Icon: IconNeedle, t: 'Site stays clear', d: 'The needle guide holds the access area open through the whole procedure.' },
            { Icon: IconShield, t: 'Trained hands', d: 'Intended for trained healthcare personnel, working inside their existing procedures.' },
          ].map((p, i) => (
            <article key={p.t} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <p.Icon size={20} />
              <h4>{p.t}</h4>
              <p>{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
