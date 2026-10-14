// Hand-drawn SVG doodles. Strokes use currentColor, so set color in CSS.

export function Circle({ className }) {
  return (
    <svg className={className} viewBox="0 0 420 140" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path d="M40 78C38 36 140 14 230 16c96 2 176 20 178 58 2 40-96 60-206 58C92 130 20 112 26 70 30 42 80 26 120 22"
        stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function Arrow({ className, flip = false }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M8 10c30 4 62 20 84 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M74 60l20 6 2-22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Underline({ className }) {
  return (
    <svg className={className} viewBox="0 0 300 20" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path d="M4 12c60-8 130-10 200-6 34 2 64 4 92 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Star({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 4l3 16 16 4-16 4-3 16-3-16-16-4 16-4z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function Squiggle({ className }) {
  return (
    <svg className={className} viewBox="0 0 160 30" fill="none" aria-hidden="true">
      <path d="M4 18c12-14 22 10 34-2s20 12 32 0 20 12 32 0 20 10 32-2 14 6 22 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
