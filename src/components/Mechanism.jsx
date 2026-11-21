import { useState } from 'react';
import SiteDiagram from './SiteDiagram';
import { IconPressure, IconVibration, IconCryo } from './Icons';
import './Mechanism.css';

const MODES = [
  {
    id: 'pressure',
    n: '01',
    Icon: IconPressure,
    title: 'Localised pressure',
    short: 'Contact spikes moulded into the casing',
    body:
      'Pressure-contact spikes are built into the housing itself, so the moment the device is strapped down it is already loading the skin around the site. No separate part to fit, nothing to hold in place with a spare hand.',
    spec: ['Integrated into casing', 'Applied on strap-down', 'Site stays clear'],
  },
  {
    id: 'vibration',
    n: '02',
    Icon: IconVibration,
    title: 'Controlled vibration',
    short: 'Battery-driven motor, one button',
    body:
      'A battery-powered motor runs the vibration field. One press of the power button brings it up; the LED confirms it is live. Consistency of that vibration under repeated use is one of the things the testing is built to watch.',
    spec: ['Single power button', 'LED state indicator', 'Rechargeable supply'],
  },
  {
    id: 'cold',
    n: '03',
    Icon: IconCryo,
    title: 'Cold stimulation',
    short: 'Detachable plate, pre-cooled before use',
    body:
      'A detachable metal cryo-anaesthesia plate is chilled in a refrigerator, or against an ice pack or cooling gel, then clipped on before the device goes to the patient. Because it detaches, it can be swapped between patients while the next one chills.',
    spec: ['Detachable metal plate', 'Fridge / ice pack / gel', 'Cold-retention tested'],
  },
];

export default function Mechanism() {
  const [active, setActive] = useState('pressure');
  const current = MODES.find((m) => m.id === active);

  return (
    <section className="section section--dark mech" id="mechanism" data-theme="dark">
      <div className="shell">
        <header className="mech__head">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__idx">03</span> Mechanism
            </p>
            <h2 className="mech__title" data-reveal style={{ '--d': '60ms' }}>
              Three signals.
              <br />
              One site. At once.
            </h2>
          </div>
          <p className="lead mech__lead" data-reveal style={{ '--d': '140ms' }}>
            Pressure, vibration and cold are not offered as settings to choose
            between. They are delivered together, in the same seconds, around the
            same square centimetre of skin. That is the whole point of putting them
            in one housing.
          </p>
        </header>

        <div className="mech__body">
          <div className="mech__stage" data-reveal>
            <SiteDiagram active={active} />
            <p className="mech__caption">
              Plan view · the needle passes through the centre while all three
              fields stay engaged
            </p>
          </div>

          <div className="mech__list" role="tablist" aria-label="What the device applies">
            {MODES.map((m, i) => {
              const on = m.id === active;
              return (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={on}
                  className={`mode ${on ? 'is-on' : ''}`}
                  onMouseEnter={() => setActive(m.id)}
                  onFocus={() => setActive(m.id)}
                  onClick={() => setActive(m.id)}
                  data-reveal
                  style={{ '--d': `${80 + i * 90}ms` }}
                >
                  <span className="mode__row">
                    <span className="mode__n">{m.n}</span>
                    <span className="mode__icon"><m.Icon size={21} /></span>
                    <span className="mode__heading">
                      <span className="mode__title">{m.title}</span>
                      <span className="mode__short">{m.short}</span>
                    </span>
                  </span>

                  <span className="mode__drawer">
                    <span className="mode__drawer-inner">
                      <span className="mode__body">{m.body}</span>
                      <span className="mode__spec">
                        {m.spec.map((s) => (
                          <em key={s}>{s}</em>
                        ))}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mech__note" data-reveal>
          <span className="mono-tag">Now showing</span>
          <strong>{current.title}.</strong>
          <span>The other two stay active underneath it.</span>
        </p>
      </div>
    </section>
  );
}
