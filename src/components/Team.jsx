import team from '../assets/team.webp';
import './Team.css';

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="shell team__grid">
        <div className="team__copy">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__idx">09</span> Team
          </p>
          <h2 className="team__title" data-reveal style={{ '--d': '60ms' }}>
            The team behind
            <br />
            <span className="serif-em">NO PAIN PAL.</span>
          </h2>
          <p className="lead team__lead" data-reveal style={{ '--d': '120ms' }}>
            Three people designed the device, built the prototype and put it
            through bench testing, under TETFAIR 2026.
          </p>
        </div>

        <figure className="team__figure" data-reveal style={{ '--d': '160ms' }}>
          <div className="team__frame">
            <img
              src={team}
              alt="The three members of the NO PAIN PAL team, in TETFAIR shirts."
              loading="lazy"
            />
          </div>
          <figcaption className="mono-tag">
            <span>NO PAIN PAL</span>
            <span>TETFAIR 2026</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
