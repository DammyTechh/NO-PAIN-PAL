import './SiteDiagram.css';

/* A plan view of the insertion site: the needle in the middle, the three
   stimulation fields laid over each other the way the device delivers them. */
export default function SiteDiagram({ active }) {
  const spokes = Array.from({ length: 12 }, (_, i) => i * 30);
  const studs = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5);

  return (
    <svg
      className="sd"
      viewBox="0 0 420 420"
      role="img"
      aria-label="Plan view of the needle site with pressure, vibration and cold fields applied around it"
      data-active={active}
    >
      <defs>
        <radialGradient id="sd-core" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#AFB861" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#AFB861" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* --- cold field --- */}
      <g className="sd__layer sd__cold">
        {spokes.map((a) => (
          <g key={a} transform={`rotate(${a} 210 210)`}>
            <path d="M210 52v31" />
            <path d="M203.5 63h13" />
          </g>
        ))}
        <circle className="sd__ring" cx="210" cy="210" r="160" strokeDasharray="3 9" />
      </g>

      {/* --- vibration field --- */}
      <g className="sd__layer sd__vib">
        <circle className="sd__wave" cx="210" cy="210" r="104" />
        <circle className="sd__wave sd__wave--2" cx="210" cy="210" r="104" />
        <circle className="sd__wave sd__wave--3" cx="210" cy="210" r="104" />
        <circle className="sd__ring" cx="210" cy="210" r="128" strokeDasharray="1 7" />
      </g>

      {/* --- pressure field --- */}
      <g className="sd__layer sd__press">
        {studs.map((a) => (
          <g key={a} transform={`rotate(${a} 210 210)`}>
            <path className="sd__arrow" d="M210 128v26" />
            <path className="sd__arrow" d="m204 147 6 7 6-7" />
            <circle className="sd__stud" cx="210" cy="166" r="4.2" />
          </g>
        ))}
        <circle className="sd__ring" cx="210" cy="210" r="58" />
      </g>

      {/* --- the site itself --- */}
      <g className="sd__site">
        <circle cx="210" cy="210" r="46" fill="url(#sd-core)" />
        <circle className="sd__guide" cx="210" cy="210" r="25" />
        <path className="sd__cross" d="M210 196v28M196 210h28" />
        <circle className="sd__pin" cx="210" cy="210" r="3.4" />
      </g>
    </svg>
  );
}
