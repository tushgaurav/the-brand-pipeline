import type { CSSProperties, SVGProps } from "react";

type DoodleProps = SVGProps<SVGSVGElement>;

function Doodle({ children, strokeWidth = 2.5, ...props }: DoodleProps) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Sparkle(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M12 1.5c.6 5.6 2.6 8.6 9.5 10.3-6.6 1.3-8.6 4.4-9.6 10.7-.9-6.3-3.2-9.4-9.4-10.6 6.4-1.6 8.8-4.6 9.5-10.4Z" />
    </Doodle>
  );
}

export function Star(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 40 40" {...props}>
      <path d="M20.5 3.5 24.6 15.2 36.5 15.4 27.3 23.1 30.6 35 20.2 28.2 9.6 35.2 12.6 23.6 3.4 16 15.4 14.6 19.6 4.6" />
    </Doodle>
  );
}

export function Heart(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 32 32" {...props}>
      <path d="M16 27.5C9 22.4 3.5 17.6 3.8 11.4 4 7.4 7.1 4.6 10.6 4.8c2.6.1 4.3 1.8 5.4 3.9 1.2-2.2 3.1-3.9 5.8-3.9 3.6.1 6.3 3 6.3 6.8-.1 6.4-5.8 11-12 15.9Z" />
    </Doodle>
  );
}

export function Squiggle(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 120 20" {...props}>
      <path d="M2 12c8-10 14-10 20 0s12 10 20 0 14-10 20 0 12 10 20 0 14-10 20 0 10 8 16 2" />
    </Doodle>
  );
}

export function Underline(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 300 32" preserveAspectRatio="none" {...props}>
      <path pathLength={1} className="draw-in" d="M5 19C70 11 170 7 295 12" />
      <path
        pathLength={1}
        className="draw-in"
        style={{ "--delay": "1.1s" } as CSSProperties}
        d="M42 27c55-6 130-8 215-5"
      />
    </Doodle>
  );
}

export function CurvedArrow(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 100 80" {...props}>
      <path d="M6 10c10 38 40 58 80 56" />
      <path d="M72 53l14 13-15 9" />
    </Doodle>
  );
}

export function PaperPlane(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 64 64" {...props}>
      <path d="M4 30 60 6 46 56 29 39Z" />
      <path d="M60 6 29 39" />
      <path d="m29 39-2 14 10-8" />
    </Doodle>
  );
}

export function DashedTrail(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 160 120" strokeDasharray="3 9" {...props}>
      <path d="M4 116c20-6 44-22 40-46-3-18-24-20-24-6 0 18 40 20 64 6 22-13 40-34 52-62" />
    </Doodle>
  );
}

export function LikeBubble({ className, ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 58" aria-hidden="true" className={className} {...props}>
      <path
        d="M11 4h42a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H31l-12 11 2-11H11a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8Z"
        fill="#fff"
        stroke="#0d0b1a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M32 33c-5-3.6-9-7-8.8-11.3.1-2.8 2.3-4.8 4.8-4.7 1.9.1 3.1 1.3 3.9 2.8.9-1.6 2.3-2.8 4.2-2.8 2.6.1 4.6 2.2 4.6 4.9-.1 4.6-4.2 7.9-8.7 11.1Z"
        fill="#ff5678"
        stroke="#0d0b1a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarBubble({ className, ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 96 50" aria-hidden="true" className={className} {...props}>
      <path
        d="M10 3h76a7 7 0 0 1 7 7v20a7 7 0 0 1-7 7H58l-10 10-3-10H10a7 7 0 0 1-7-7V10a7 7 0 0 1 7-7Z"
        fill="#0d0b1a"
      />
      {[18, 33, 48, 63, 78].map((x) => (
        <path
          key={x}
          transform={`translate(${x - 7} 13)`}
          d="M7 0l2 4.6 5 .5-3.8 3.3 1.1 5L7 10.8 2.7 13.4l1.1-5L0 5.1l5-.5Z"
          fill="#d4ff4f"
        />
      ))}
    </svg>
  );
}

export function Burst(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 40 40" {...props}>
      <path d="M20 3v8M20 29v8M3 20h8M29 20h8M8 8l5 5M27 27l5 5M32 8l-5 5M13 27l-5 5" />
    </Doodle>
  );
}

export function Arrow(props: DoodleProps) {
  return (
    <Doodle viewBox="0 0 24 24" {...props}>
      <path d="M4 12.5c5-.3 10-.6 15.5-.5" />
      <path d="m13.5 6 6 6.2-6 5.8" />
    </Doodle>
  );
}
