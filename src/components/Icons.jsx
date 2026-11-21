/* 24px grid, 1.9 stroke, round caps. Every glyph is kept to five strokes or
   fewer so it still reads at 17px, which is where most of them are used. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  focusable: 'false',
};

const Svg = ({ size = 24, children, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>{children}</svg>
);

/* ---------- the three modalities ---------- */

export const IconPressure = (p) => (
  <Svg {...p}>
    <path d="M12 3v10" />
    <path d="m7 8.5 5 5 5-5" />
    <path d="M4.5 18.5h15" />
  </Svg>
);

export const IconVibration = (p) => (
  <Svg {...p}>
    <rect x="9" y="4" width="6" height="16" rx="3" />
    <path d="M4.8 8.6a6.5 6.5 0 0 0 0 6.8" />
    <path d="M19.2 8.6a6.5 6.5 0 0 1 0 6.8" />
  </Svg>
);

export const IconCryo = (p) => (
  <Svg {...p}>
    <path d="M12 2.5v19" />
    <path d="m8.8 5.4 3.2 3.2 3.2-3.2" />
    <path d="m8.8 18.6 3.2-3.2 3.2 3.2" />
    <path d="M20.2 7.25 3.8 16.75" />
    <path d="M3.8 7.25 20.2 16.75" />
  </Svg>
);

/* ---------- device anatomy ---------- */

export const IconNeedle = (p) => (
  <Svg {...p}>
    <path d="m18 2.5 3.5 3.5" />
    <path d="m14.2 4.3 5.5 5.5" />
    <path d="M18.2 9.6 8.4 19.4a2.3 2.3 0 0 1-3.3 0l-.5-.5a2.3 2.3 0 0 1 0-3.3L14.4 5.8" />
    <path d="m9.8 10.4 3.8 3.8" />
    <path d="M4.8 19.2 2.5 21.5" />
  </Svg>
);

export const IconStrap = (p) => (
  <Svg {...p}>
    <rect x="2.5" y="8" width="7" height="8" rx="2.2" />
    <path d="M9.5 10.4h9a2.6 2.6 0 0 1 0 5.2h-9" />
    <path d="M6 12h3.5" />
  </Svg>
);

export const IconPlate = (p) => (
  <Svg {...p}>
    <path d="m12 3 9 4.6-9 4.6-9-4.6Z" />
    <path d="m3 16.4 9 4.6 9-4.6" />
    <path d="m3 11.8 9 4.6 9-4.6" />
  </Svg>
);

export const IconLed = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3.6" />
    <path d="M12 2.6v2.6" />
    <path d="M12 18.8v2.6" />
    <path d="M2.6 12h2.6" />
    <path d="M18.8 12h2.6" />
  </Svg>
);

export const IconBattery = (p) => (
  <Svg {...p}>
    <rect x="2.5" y="7.5" width="16" height="9" rx="2.6" />
    <path d="M21.5 10.6v2.8" />
    <path d="m11.4 9.6-2.2 3h3.6l-2.2 2.8" />
  </Svg>
);

export const IconPower = (p) => (
  <Svg {...p}>
    <path d="M12 3v8.4" />
    <path d="M17.8 6.4a7.6 7.6 0 1 1-11.6 0" />
  </Svg>
);

/* ---------- process and assurance ---------- */

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 2.8 4.5 6v6c0 4.3 3.1 7.8 7.5 9.2 4.4-1.4 7.5-4.9 7.5-9.2V6Z" />
    <path d="m8.9 11.9 2.2 2.2 4.1-4.4" />
  </Svg>
);

export const IconClean = (p) => (
  <Svg {...p}>
    <path d="m10 3 1.9 5.1L17 10l-5.1 1.9L10 17l-1.9-5.1L3 10l5.1-1.9Z" />
    <path d="m18 14.5.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9Z" />
  </Svg>
);

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6.8V12l3.4 2" />
  </Svg>
);

export const IconClinician = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="7.8" r="3.9" />
    <path d="M4.4 20.6a7.6 7.6 0 0 1 15.2 0" />
  </Svg>
);

export const IconDoc = (p) => (
  <Svg {...p}>
    <path d="M13.6 2.8H7.3A2.3 2.3 0 0 0 5 5.1v13.8a2.3 2.3 0 0 0 2.3 2.3h9.4a2.3 2.3 0 0 0 2.3-2.3V8.2Z" />
    <path d="M13.6 2.8v5.4H19" />
    <path d="M8.7 13.6h6.6" />
    <path d="M8.7 17.1h4.4" />
  </Svg>
);

export const IconGate = (p) => (
  <Svg {...p}>
    <path d="M13.8 3.5v17" />
    <path d="M2.5 12h6.3" />
    <path d="m6 8.6 3.4 3.4L6 15.4" />
    <path d="M17 12h4.5" strokeDasharray="2 3.4" />
  </Svg>
);

/* ---------- UI ---------- */

export const IconArrow = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M4.5 12h14" />
    <path d="m13 6.5 5.5 5.5-5.5 5.5" />
  </Svg>
);

export const IconArrowDown = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M12 4.5v14" />
    <path d="m6.5 13 5.5 5.5L17.5 13" />
  </Svg>
);

export const IconPlus = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M12 5.2v13.6" />
    <path d="M5.2 12h13.6" />
  </Svg>
);

export const IconMenu = ({ size = 20, ...p }) => (
  <Svg size={size} strokeWidth={2} {...p}>
    <path d="M3.8 8.5h16.4" />
    <path d="M3.8 15.5h16.4" />
  </Svg>
);

export const IconClose = ({ size = 20, ...p }) => (
  <Svg size={size} strokeWidth={2} {...p}>
    <path d="m6.2 6.2 11.6 11.6" />
    <path d="M17.8 6.2 6.2 17.8" />
  </Svg>
);
