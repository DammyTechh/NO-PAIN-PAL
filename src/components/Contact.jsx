import { IconDoc } from './Icons';
import innov8 from '../assets/innov8.webp';
import tetfund from '../assets/tetfund.webp';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section section--dark contact" id="contact" data-theme="dark">
      <div className="contact__glow" aria-hidden="true" />
      <div className="shell contact__shell">
        <p className="eyebrow" data-reveal>
          <span className="eyebrow__idx">10</span> Next
        </p>

        <h2 className="contact__title" data-reveal style={{ '--d': '70ms' }}>
          If you run a ward,
          <br />
          a lab or a vaccination
          <br />
          round, <span className="serif-em">talk to us.</span>
        </h2>

        <p className="lead contact__lead" data-reveal style={{ '--d': '140ms' }}>
          We are looking for clinical partners to put the device in front of real
          patients, and for clinicians willing to read the protocol and tell us
          what is wrong with it.
        </p>

        <div className="contact__actions" data-reveal style={{ '--d': '210ms' }}>
          <a className="btn btn--sage" href="#protocol">
            <IconDoc size={16} />
            Review the protocol
          </a>
        </div>

        <div className="supporters" data-reveal style={{ '--d': '280ms' }}>
          <div className="supporters__line" aria-hidden="true" />
          <p className="mono-tag supporters__kicker">Supported by</p>
          <div className="supporters__row">
            <div className="supporters__item">
              <span className="plate plate--innov8"><img src={innov8} alt="Innov8 Hub" /></span>
              <span>Innov8 Hub</span>
            </div>
            <div className="supporters__item">
              <span className="plate plate--tet"><img src={tetfund} alt="TETFund, Tertiary Education Trust Fund" /></span>
              <span>Tertiary Education Trust Fund</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
