import { IconCryo, IconStrap, IconNeedle, IconClock, IconPower, IconClean } from './Icons';
import './Protocol.css';

const STAGES = [
  {
    key: 'A',
    Icon: IconCryo,
    title: 'Device preparation',
    note: 'Before the patient is in the chair',
    steps: [
      'Prepare the detachable cryo-anaesthesia metal plate using the available cooling system.',
      'Pre-cool the plate in a refrigerator, or with the documented ice pack or cooling gel method.',
      'Attach the cooled cryo unit to the device.',
      'Select and attach the appropriate adjustable strap.',
      'Prepare the device for positioning at the intended insertion site.',
    ],
  },
  {
    key: 'B',
    Icon: IconStrap,
    title: 'Positioning & activation',
    note: 'Both hands free before the syringe is picked up',
    steps: [
      'Position the device at the intended injection or vaccination site.',
      'Secure the device using the attached strap.',
      'Apply localised pressure through the pressure-contact surface.',
      'Press the power button to activate the vibration system.',
      'Allow the combined pressure, vibration and cold stimulation to settle.',
    ],
  },
  {
    key: 'C',
    Icon: IconNeedle,
    title: 'The needle procedure',
    note: 'Technique unchanged, only the sensation around it',
    steps: [
      'Maintain the device in its intended position.',
      'Align the syringe with the central needle guide.',
      'Carry out the procedure through the designated access area.',
      'Maintain the combined stimulation throughout.',
    ],
  },
];

const AFTER = [
  {
    Icon: IconClock,
    title: 'Routine checks',
    items: [
      'Components properly fitted',
      'Position and stability in use',
      'Vibration consistency when active',
      'Cooling performance and cold retention',
      'Localised pressure as intended',
      'Needle access area stable',
      'Battery performance across repeats',
    ],
  },
  {
    Icon: IconPower,
    title: 'Shutdown',
    items: [
      'Complete the supervised procedure',
      'Power down at the button or switch',
      'Remove the device from the patient',
      'Move straight to the cleaning process',
    ],
  },
  {
    Icon: IconClean,
    title: 'Between patients',
    items: [
      'Switch off and remove after use',
      'Wipe accessible patient-contact surfaces with alcohol',
      'Ready the device for its next use',
      'Recharge or replace the battery as required',
      'Store clean, in its designated container',
    ],
  },
];

export default function Protocol() {
  return (
    <section className="section protocol" id="protocol">
      <div className="shell">
        <header className="protocol__head">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__idx">05</span> Protocol
            </p>
            <h2 className="protocol__title" data-reveal style={{ '--d': '60ms' }}>
              Chill it. Strap it.
              <br />
              Work through it.
            </h2>
          </div>
          <p className="lead protocol__lead" data-reveal style={{ '--d': '130ms' }}>
            The documented preparation and activation sequence, as written for
            operation and clinician training. It is short on purpose. A device
            that adds steps to a vaccination round does not get used twice.
          </p>
        </header>

        <ol className="stages">
          {STAGES.map((s, i) => (
            <li className="stage" key={s.key} data-reveal style={{ '--d': `${i * 110}ms` }}>
              <div className="stage__bar">
                <span className="stage__key">{s.key}</span>
                <span className="stage__line" aria-hidden="true" />
              </div>
              <div className="stage__head">
                <span className="stage__icon"><s.Icon size={22} /></span>
                <h3 className="stage__title">{s.title}</h3>
                <p className="stage__note">{s.note}</p>
              </div>
              <ol className="stage__steps">
                {s.steps.map((t, j) => (
                  <li key={j}>
                    <span className="stage__num">{String(j + 1).padStart(2, '0')}</span>
                    {t}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>

        <div className="after">
          {AFTER.map((a, i) => (
            <article className="after__card" key={a.title} data-reveal style={{ '--d': `${i * 90}ms` }}>
              <span className="after__icon"><a.Icon size={19} /></span>
              <h4 className="after__title">{a.title}</h4>
              <ul>
                {a.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
