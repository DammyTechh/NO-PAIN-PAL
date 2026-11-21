import { useState } from 'react';
import FloatingDevice from './FloatingDevice';
import {
  IconPower, IconPressure, IconLed, IconNeedle,
  IconPlate, IconStrap, IconVibration, IconBattery,
} from './Icons';
import deviceTop from '../assets/device-top.webp';
import './Anatomy.css';

/* x / y are percentages of the cut-out's bounding box, read off the render. */
const PARTS = [
  {
    id: 'power', n: 1, x: 11.7, y: 11.4, Icon: IconPower,
    name: 'Power button',
    desc: 'Brings the vibration system up and takes it down again at the end of the procedure.',
  },
  {
    id: 'spikes', n: 2, x: 24.4, y: 31.4, Icon: IconPressure,
    name: 'Pressure-contact spikes',
    desc: 'Moulded into the casing on both flanks. They load the skin as soon as the strap is tightened.',
  },
  {
    id: 'led', n: 3, x: 46.4, y: 27.6, Icon: IconLed,
    name: 'LED indicator',
    desc: 'Visual confirmation that the device is live, readable at a glance mid-procedure.',
  },
  {
    id: 'guide', n: 4, x: 47.2, y: 34.2, Icon: IconNeedle,
    name: 'Central needle guide',
    desc: 'The designated opening the syringe aligns to. Everything else is arranged around keeping it clear.',
  },
  {
    id: 'plate', n: 5, x: 39.5, y: 37.5, Icon: IconPlate,
    name: 'Cryo-anaesthesia plate',
    desc: 'Detachable metal plate, pre-cooled before use and clipped on at the last moment.',
  },
  {
    id: 'strap', n: 6, x: 26, y: 52, Icon: IconStrap,
    name: 'Adjustable strap',
    desc: 'Selected to match the limb and the site, then secured so the clinician works with both hands free.',
  },
  {
    id: 'drive', n: 7, x: 49.7, y: 72, Icon: IconVibration,
    name: 'Vibration system',
    desc: 'The motor sits inside the housing, under the contact face, driving the vibration field.',
  },
  {
    id: 'power-supply', n: 8, x: 51.3, y: 92, Icon: IconBattery,
    name: 'Battery system',
    desc: 'Powers the vibration function; performance under repeated operation is monitored during testing.',
  },
];

export default function Anatomy() {
  const [active, setActive] = useState(null);

  return (
    <section className="section anatomy" id="anatomy">
      <div className="shell">
        <header className="anatomy__head">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__idx">04</span> Anatomy
          </p>
          <h2 className="anatomy__title" data-reveal style={{ '--d': '60ms' }}>
            Eight parts, and
            <br />
            nothing spare.
          </h2>
          <p className="lead anatomy__lead" data-reveal style={{ '--d': '130ms' }}>
            A reusable, cleanable housing. Every element on it either delivers
            pressure, vibration or cold, holds the device where it needs to be,
            or keeps the needle path open.
          </p>
        </header>

        <div className="anatomy__body">
          <div className="anatomy__stage" data-reveal>
            <FloatingDevice
              src={deviceTop}
              alt="NO PAIN PAL device seen from above: pressure spikes either side of a metal cryo plate, a central needle guide, an LED indicator and webbing straps."
              className="fd--light"
              depth={0.55}
              tiltMax={7}
            >
              <div className="pins" aria-hidden="true">
                {PARTS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    tabIndex={-1}
                    className={`pin ${active === p.id ? 'is-on' : ''}`}
                    style={{ left: `${p.x}%`, top: `${p.y}%`, '--d': `${p.n * 110}ms` }}
                    onMouseEnter={() => setActive(p.id)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <span className="pin__ring" />
                    <span className="pin__n">{p.n}</span>
                  </button>
                ))}
              </div>
            </FloatingDevice>
            <p className="anatomy__caption mono-tag">Top view</p>
          </div>

          <ol className="parts">
            {PARTS.map((p, i) => (
              <li
                key={p.id}
                className={active === p.id ? 'is-on' : ''}
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                data-reveal
                style={{ '--d': `${i * 55}ms` }}
              >
                <span className="parts__n">{String(p.n).padStart(2, '0')}</span>
                <span className="parts__icon"><p.Icon size={18} /></span>
                <span className="parts__text">
                  <strong>{p.name}</strong>
                  <span>{p.desc}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
