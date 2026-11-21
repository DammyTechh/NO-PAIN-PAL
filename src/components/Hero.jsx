import FloatingDevice from './FloatingDevice';
import { IconArrow, IconArrowDown, IconPressure, IconVibration, IconCryo } from './Icons';
import deviceFront from '../assets/device-front.webp';
import innov8 from '../assets/innov8.webp';
import tetfund from '../assets/tetfund.webp';
import './Hero.css';

const MODES = [
  { Icon: IconPressure, label: 'Pressure' },
  { Icon: IconVibration, label: 'Vibration' },
  { Icon: IconCryo, label: 'Cold' },
];

export default function Hero() {
  return (
    <section className="hero on-dark" id="top" data-theme="dark">
      <div className="hero__field" aria-hidden="true" />
      <div className="hero__grid-lines" aria-hidden="true" />

      <div className="shell hero__shell">
        <div className="hero__copy">
          <h1 className="hero__title" data-reveal>
            <span className="line">The needle still</span>
            <span className="line">goes in. The pain</span>
            <span className="line">
              <span className="serif-em">doesn&rsquo;t</span> have to.
            </span>
          </h1>

          <p className="lead hero__lead" data-reveal style={{ '--d': '80ms' }}>
            NO PAIN PAL is a handheld, non-invasive device that holds pressure,
            vibration and cold around the insertion site at the same time, so an
            injection, a vaccination, a blood draw or a cannulation lands softer
            on the patient underneath it.
          </p>

          <div className="hero__modes" data-reveal style={{ '--d': '150ms' }}>
            {MODES.map(({ Icon, label }, i) => (
              <span className="hero__mode" key={label}>
                <Icon size={19} />
                {label}
                {i < MODES.length - 1 && <em aria-hidden="true">+</em>}
              </span>
            ))}
          </div>

          <div className="hero__actions" data-reveal style={{ '--d': '220ms' }}>
            <a className="btn btn--sage" href="#mechanism">
              How the three work together
              <IconArrow size={16} />
            </a>
            <a className="btn btn--ghost" href="#protocol">
              Read the protocol
            </a>
          </div>
        </div>

        <div className="hero__stage">
          <FloatingDevice
            src={deviceFront}
            alt="NO PAIN PAL device, front view: textured black casing with the brand mark, webbing straps on each side and a blue control cap."
            depth={1.15}
            priority
          />
        </div>
      </div>

      <div className="shell hero__foot">
        <div className="hero__support" data-reveal>
          <p className="mono-tag">Supported by</p>
          <div className="hero__logos">
            <span className="plate plate--sm">
              <img src={innov8} alt="Innov8 Hub" className="hero__logo hero__logo--innov8" />
            </span>
            <span className="plate plate--sm">
              <img src={tetfund} alt="TETFund, Tertiary Education Trust Fund" className="hero__logo hero__logo--tet" />
            </span>
          </div>
        </div>

        <a className="hero__scroll" href="#problem" aria-label="Scroll to next section">
          <IconArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
