import type { SVGProps } from "react";

/**
 * Thin line-art icon set (stroke = currentColor) shared by both versions.
 * Decorative — each is aria-hidden; give it color via the parent's text color.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
  ...props,
});

/* ---- Service category icons (one per group) ---- */

export const IconNails = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 3.5c-1.2 0-2 1-2 2.4V15a3 3 0 0 0 6 0V5.9c0-1.4-.8-2.4-2-2.4" />
    <path d="M7.2 8.2c1.6-1 3.9-1 5.6 0" />
    <path d="M6 20.5h12" />
  </svg>
);

export const IconBrow = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 13c2.5-3.6 6-5.4 9-5.4S18.5 9.4 21 13" />
    <path d="M5.5 10.2 4.2 8M9 8.2 8.4 5.9M15 8.2l.6-2.3M18.5 10.2 19.8 8" />
  </svg>
);

export const IconFace = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M12 6.2v.01M8.4 9.2c1-.9 2.1-.9 3 0M12.6 9.2c.9-.9 2-.9 3 0" />
    <path d="M9.4 15.2c1.4 1.3 3.8 1.3 5.2 0" />
  </svg>
);

export const IconSyringe = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m4.5 19.5 8.2-8.2" />
    <path d="m13 6.5 4.5 4.5" />
    <path d="m15.2 4.3 4.5 4.5" />
    <path d="m10.5 9 4.5 4.5" />
    <path d="m8.3 11.2 1.8 1.8M6.6 12.9l1.8 1.8" />
    <path d="m3 21 1.5-1.5" />
  </svg>
);

export const IconLaser = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2.5v4M12 10v11.5" />
    <path d="M9 6.5h6l-1.4 3.2H10.4z" />
    <path d="M5 14h.01M8 16h.01M16 16h.01M19 14h.01M6.6 19h.01M17.4 19h.01" />
  </svg>
);

export const IconLotus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4.5c1.7 1.8 2.6 3.8 2.6 6.1 0 1-.3 2-.9 3" />
    <path d="M12 4.5c-1.7 1.8-2.6 3.8-2.6 6.1 0 1 .3 2 .9 3" />
    <path d="M4 12c1.6.2 3 .8 4.2 1.9.7.7 1.2 1.5 1.6 2.5" />
    <path d="M20 12c-1.6.2-3 .8-4.2 1.9-.7.7-1.2 1.5-1.6 2.5" />
    <path d="M12 19.5c-2.6 0-5-1.1-6.9-3 2 .6 4.4.9 6.9.9s4.9-.3 6.9-.9c-1.9 1.9-4.3 3-6.9 3Z" />
  </svg>
);

export const IconBody = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 8.5c2.7-2 5.3-2 8 0s5.3 2 8 0" />
    <path d="M4 13c2.7-2 5.3-2 8 0s5.3 2 8 0" />
    <path d="M4 17.5c2.7-2 5.3-2 8 0s5.3 2 8 0" />
  </svg>
);

export const serviceIcons = [
  IconNails,
  IconBrow,
  IconFace,
  IconSyringe,
  IconLaser,
  IconLotus,
  IconBody,
];

/* ---- UI / contact icons ---- */

export const IconStar = (p: IconProps) => (
  <svg {...base({ strokeWidth: 0, fill: "currentColor", ...p })}>
    <path d="M12 2.6l2.6 5.7 6.2.7-4.6 4.2 1.3 6.1L12 16.9 6.5 19.3l1.3-6.1L3.2 9l6.2-.7z" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const IconPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21c4-4.2 6-7.6 6-10.5A6 6 0 0 0 6 10.5C6 13.4 8 16.8 12 21Z" />
    <circle cx="12" cy="10.4" r="2.2" />
  </svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M12 7.6V12l3 1.8" />
  </svg>
);

export const IconPhone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.5 4h3l1.4 3.6-2 1.4a11 11 0 0 0 4.6 4.6l1.4-2 3.6 1.4v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </svg>
);

export const IconInstagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconFacebook = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.5 8.5V6.8c0-.8.4-1.3 1.4-1.3h1.4V2.6h-2.4c-2.4 0-3.7 1.4-3.7 3.8v2.1H8.8v3.1h2.8V21h3.1v-9.4h2.4l.4-3.1z" />
  </svg>
);

export const IconGift = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.5 9.5h15V13h-15z" />
    <path d="M5.5 13v7.5h13V13" />
    <path d="M12 9.5V21" />
    <path d="M12 9.5C10.5 6.5 8 6 7 7s0 2.5 5 2.5c5 0 6-1.5 5-2.5s-3.5-.5-5 2.5Z" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.5 12.5 9 17l10.5-10.5" />
  </svg>
);

export const IconQuote = (p: IconProps) => (
  <svg {...base({ strokeWidth: 0, fill: "currentColor", ...p })}>
    <path d="M9.5 6C6.5 7.2 5 9.6 5 13.2V18h5v-5H7.6c0-2 .8-3.4 2.6-4.2zM19 6c-3 1.2-4.5 3.6-4.5 7.2V18h5v-5h-2.4c0-2 .8-3.4 2.6-4.2z" />
  </svg>
);

export const IconLeaf = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 4c0 9-5.5 13-11 13-2 0-4-.8-4-.8S5 5 20 4Z" />
    <path d="M9 15c2.5-4 5.5-6.5 8.5-8" />
  </svg>
);

export const IconMenu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
