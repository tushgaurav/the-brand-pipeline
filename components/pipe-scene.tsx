import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Heart, LikeBubble, Sparkle, Star, StarBubble } from "./doodles";

// Scene is laid out on a 1440 × 420 grid; everything is placed in % of that.
const W = 1440;
const H = 420;
const x = (v: number) => `${(v / W) * 100}%`;
const y = (v: number) => `${(v / H) * 100}%`;

const INK = "#0d0b1a";
const LIME = "#d4ff4f";

function Peep({
  src,
  left,
  top,
  width,
  intrinsic,
  className = "",
}: {
  src: string;
  left: number;
  top: number;
  width: number;
  intrinsic: [number, number];
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={intrinsic[0]}
      height={intrinsic[1]}
      priority
      className={`absolute h-auto select-none ${className}`}
      style={{ left: x(left), top: y(top), width: x(width) }}
    />
  );
}

function Pop({
  children,
  left,
  top,
  width,
  delay,
  rotate = 0,
}: {
  children: ReactNode;
  left: number;
  top: number;
  width: number;
  delay: number;
  rotate?: number;
}) {
  return (
    <div
      className="absolute animate-rise opacity-0"
      style={
        {
          left: x(left),
          top: y(top),
          width: x(width),
          animationDelay: `${delay}s`,
          "--r": `${rotate}deg`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

function Flange({ cx }: { cx: number }) {
  return (
    <g>
      <rect x={cx - 12} y={280} width={24} height={84} rx={5} fill={LIME} stroke={INK} strokeWidth={4} />
      <circle cx={cx} cy={290} r={3} fill={INK} />
      <circle cx={cx} cy={354} r={3} fill={INK} />
    </g>
  );
}

function Support({ cx }: { cx: number }) {
  return (
    <g fill={INK}>
      <rect x={cx - 7} y={352} width={14} height={60} />
      <rect x={cx - 26} y={410} width={52} height={10} rx={3} />
    </g>
  );
}

export function PipeScene() {
  const hatch = Array.from({ length: 44 }, (_, i) => 10 + i * 28).filter(
    (v) => ![120, 560, 1000].some((f) => Math.abs(v - f) < 22),
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 aspect-[1440/420] w-[215vw] min-w-[760px] md:right-auto md:left-1/2 md:w-full md:min-w-[980px] md:-translate-x-1/2"
    >
      {/* Standing behind the pipe, pointing up at the headline */}
      <Peep src="/illustrations/peep-standing-16.svg" intrinsic={[309, 652]} left={46} top={40} width={150} />

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full overflow-visible">
        {/* Tube: dark outline stroke under a lime stroke along the same centreline */}
        <path d="M-60 322H1240a80 80 0 0 0 80-80V160" fill="none" stroke={INK} strokeWidth={66} />
        <path d="M-60 322H1240a80 80 0 0 0 80-80V160" fill="none" stroke={LIME} strokeWidth={58} />

        <path
          d="M-20 304H1190"
          stroke="#f4ffd0"
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray="70 16 10 16"
        />
        <g stroke={INK} strokeWidth={3} strokeLinecap="round">
          {hatch.map((hx) => (
            <path key={hx} d={`M${hx} 348l11-11`} />
          ))}
        </g>

        {[330, 780, 1170].map((cx) => (
          <Support key={cx} cx={cx} />
        ))}
        {[120, 560, 1000].map((cx) => (
          <Flange key={cx} cx={cx} />
        ))}

        {/* Vertical flange + nozzle */}
        <rect x={1278} y={192} width={84} height={24} rx={5} fill={LIME} stroke={INK} strokeWidth={4} />
        <path
          d="M1290 164 1350 164 1386 82 1254 82Z"
          fill={LIME}
          stroke={INK}
          strokeWidth={4}
          strokeLinejoin="round"
        />
        <path d="M1300 156 1324 102" stroke="#f4ffd0" strokeWidth={5} strokeLinecap="round" />
        <ellipse cx={1320} cy={82} rx={66} ry={14} fill={INK} />
        <ellipse cx={1320} cy={82} rx={66} ry={14} fill="none" stroke={INK} strokeWidth={4} />

        {/* Valve */}
        <rect x={633} y={260} width={14} height={34} fill={LIME} stroke={INK} strokeWidth={4} />
        <ellipse cx={640} cy={254} rx={42} ry={12} fill="none" stroke={INK} strokeWidth={11} />
        <ellipse cx={640} cy={254} rx={42} ry={12} fill="none" stroke="#ff5678" strokeWidth={5} />
        <path d="M600 254h80M640 242v24" stroke={INK} strokeWidth={4} strokeLinecap="round" />
        <circle cx={640} cy={254} r={6} fill={INK} />

        {/* Buzz-o-meter */}
        <rect x={873} y={262} width={14} height={32} fill={LIME} stroke={INK} strokeWidth={4} />
        <circle cx={880} cy={228} r={36} fill="#fff" stroke={INK} strokeWidth={4} />
        <path d="M851 236a30 30 0 0 1 4-30" stroke={INK} strokeWidth={3} fill="none" strokeLinecap="round" />
        <path d="M905 206a30 30 0 0 1 4 30" stroke="#ff5678" strokeWidth={6} fill="none" strokeLinecap="round" />
        <g className="animate-wiggle" style={{ transformOrigin: "880px 228px", transformBox: "view-box" }}>
          <path d="M880 228 900 208" stroke={INK} strokeWidth={4} strokeLinecap="round" />
        </g>
        <circle cx={880} cy={228} r={5} fill={INK} />
        <text
          x={880}
          y={254}
          textAnchor="middle"
          fontSize={11}
          fontWeight={800}
          letterSpacing={1.5}
          fill={INK}
          fontFamily="var(--font-geist-sans)"
        >
          BUZZ
        </text>
      </svg>

      {/* Sitting on the pipe — drawn after the SVG so legs hang in front of it */}
      <Peep src="/illustrations/peep-sitting-6.svg" intrinsic={[365, 577]} left={228} top={122} width={176} />
      <Peep src="/illustrations/peep-sitting-7.svg" intrinsic={[367, 620]} left={1030} top={113} width={174} />

      {/* What comes out of the pipeline */}
      <Pop left={1268} top={0} width={62} delay={0} rotate={-8}>
        <LikeBubble className="w-full" />
      </Pop>
      <Pop left={1340} top={10} width={44} delay={0.9} rotate={12}>
        <Star className="w-full text-white" strokeWidth={3.5} />
      </Pop>
      <Pop left={1216} top={26} width={96} delay={1.8} rotate={-4}>
        <StarBubble className="w-full" />
      </Pop>
      <Pop left={1356} top={-10} width={34} delay={2.6} rotate={0}>
        <Heart className="w-full text-coral" fill="#ff5678" strokeWidth={0} />
      </Pop>
      <Pop left={1300} top={16} width={30} delay={3.3} rotate={0}>
        <Sparkle className="w-full text-lime" />
      </Pop>
    </div>
  );
}
