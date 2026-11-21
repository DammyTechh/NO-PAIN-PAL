import { useState } from 'react';
import { IconPlus } from './Icons';
import './Reference.css';

const TERMS = [
  ['NO PAIN PAL', 'A handheld medical device that combines pressure, vibration and cold during needle procedures.'],
  ['Tri-modal stimulation', 'The simultaneous application of pressure, vibration and cold stimulation.'],
  ['Cryo-anaesthesia', 'The use of cold stimulation as part of the device’s intended pain-reduction function.'],
  ['Cryo-anaesthesia metal plate', 'A detachable metal plate that is pre-cooled to provide cold stimulation.'],
  ['Vibration motor', 'The motor that produces the vibration used by the device.'],
  ['Pressure spikes', 'Contact features integrated into the casing to provide localised pressure stimulation.'],
  ['Adjustable straps', 'Components used to secure the device at the intended procedure site.'],
  ['Central needle guide', 'The designated opening intended to support syringe positioning during a needle procedure.'],
  ['Battery system', 'The device’s power source for operating the vibration function.'],
  ['Power button', 'The control used to activate or deactivate the device.'],
  ['LED indicator', 'A visual indicator included in the device design.'],
  ['Gate control theory', 'The theoretical basis described in the project documentation for reducing pain perception by stimulating non-pain sensory pathways.'],
  ['Cold retention', 'The ability of the cooling component to hold a reduced temperature over a period of time.'],
  ['Bench testing', 'Evaluation conducted under controlled conditions before clinical use.'],
  ['Biocompatibility', 'The suitability of materials for their intended contact with the human body.'],
  ['Cannulation', 'A needle-based clinical procedure identified as one of the device’s intended applications.'],
  ['Intramuscular injection', 'An injection procedure identified as one of the device’s intended applications.'],
  ['ISO 10993-5', 'The cytotoxicity standard referenced in the project documentation for planned material assessment.'],
  ['NAFDAC', 'National Agency for Food and Drug Administration and Control, identified for future regulatory review.'],
  ['SON', 'Standards Organisation of Nigeria, identified for future regulatory review.'],
];

const PREVIEW = 8;

export default function Reference() {
  const [all, setAll] = useState(false);
  const shown = all ? TERMS : TERMS.slice(0, PREVIEW);

  return (
    <section className="section reference" id="reference">
      <div className="shell">
        <header className="reference__head">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__idx">08</span> Reference
            </p>
            <h2 className="reference__title" data-reveal style={{ '--d': '60ms' }}>
              The words we use,
              <br />
              and what they mean.
            </h2>
          </div>
          <p className="reference__count mono-tag" data-reveal>
            {TERMS.length} terms
          </p>
        </header>

        <dl className={`glossary ${all ? 'is-open' : ''}`}>
          {shown.map(([t, d]) => (
            <div className="glossary__row" key={t}>
              <dt>{t}</dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>

        {!all && (
          <button className="reference__more" onClick={() => setAll(true)}>
            <IconPlus size={16} />
            Show the remaining {TERMS.length - PREVIEW} terms
          </button>
        )}
      </div>
    </section>
  );
}
