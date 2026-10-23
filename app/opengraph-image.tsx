/* eslint-disable @next/next/no-img-element -- ImageResponse renders plain <img>; next/image does not apply here. */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ReactNode } from "react";
import { Heart, LikeBubble, Sparkle, Squiggle, Star, StarBubble, Underline } from "@/components/doodles";

export const alt = "The Brand Pipeline: we get brands noticed. Marketing, design and development studio.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0d0b1a";
const LIME = "#d4ff4f";
const BRAND = "#3a22f2";

// Literal paths, so the build only traces these files into the route.
const svgSrc = (svg: Promise<Buffer>) => svg.then((data) => `data:image/svg+xml;base64,${data.toString("base64")}`);

const [instrumentSemiBold, instrumentBold, geistMedium, caveat, logoMark, peepStanding, peepSitting] =
  await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/InstrumentSans-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/InstrumentSans-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Geist-Medium.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Caveat-SemiBold.ttf")),
    svgSrc(readFile(join(process.cwd(), "app/icon.svg"))),
    svgSrc(readFile(join(process.cwd(), "public/illustrations/peep-standing-16.svg"))),
    svgSrc(readFile(join(process.cwd(), "public/illustrations/peep-sitting-7.svg"))),
  ]);

// The hero's riso grain, sized to the card.
const grain = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`,
)}`;

// Same pipe as the hero's PipeScene, cropped to the card: centreline at y=566, nozzle at x=1070.
const PIPE_Y = 566;
const NOZZLE_X = 1070;
const FLANGES = [190, 760];
const SUPPORTS = [470, 920];

function Pipe() {
  const hatch = Array.from({ length: 36 }, (_, i) => 10 + i * 28).filter(
    (v) => !FLANGES.some((f) => Math.abs(v - f) < 22),
  );

  return (
    <svg
      width={1200}
      height={630}
      viewBox="0 0 1200 630"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      {SUPPORTS.map((cx) => (
        <rect key={cx} x={cx - 7} y={PIPE_Y + 30} width={14} height={60} fill={INK} />
      ))}

      <path
        d={`M-60 ${PIPE_Y}H${NOZZLE_X - 80}a80 80 0 0 0 80-80V404`}
        fill="none"
        stroke={INK}
        strokeWidth={66}
      />
      <path
        d={`M-60 ${PIPE_Y}H${NOZZLE_X - 80}a80 80 0 0 0 80-80V404`}
        fill="none"
        stroke={LIME}
        strokeWidth={58}
      />
      <path
        d={`M-20 ${PIPE_Y - 18}H${NOZZLE_X - 130}`}
        stroke="#f4ffd0"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray="70 16 10 16"
      />
      {hatch.map((hx) => (
        <path key={hx} d={`M${hx} ${PIPE_Y + 26}l11-11`} stroke={INK} strokeWidth={3} strokeLinecap="round" />
      ))}

      {FLANGES.map((cx) => (
        <g key={cx}>
          <rect x={cx - 12} y={PIPE_Y - 42} width={24} height={84} rx={5} fill={LIME} stroke={INK} strokeWidth={4} />
          <circle cx={cx} cy={PIPE_Y - 32} r={3} fill={INK} />
          <circle cx={cx} cy={PIPE_Y + 32} r={3} fill={INK} />
        </g>
      ))}

      {/* Vertical flange + nozzle */}
      <rect x={NOZZLE_X - 42} y={436} width={84} height={24} rx={5} fill={LIME} stroke={INK} strokeWidth={4} />
      <path
        d={`M${NOZZLE_X - 30} 408 ${NOZZLE_X + 30} 408 ${NOZZLE_X + 66} 326 ${NOZZLE_X - 66} 326Z`}
        fill={LIME}
        stroke={INK}
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path d={`M${NOZZLE_X - 20} 400 ${NOZZLE_X + 4} 346`} stroke="#f4ffd0" strokeWidth={5} strokeLinecap="round" />
      <ellipse cx={NOZZLE_X} cy={326} rx={66} ry={14} fill={INK} />

      {/* Valve */}
      <g transform={`translate(${320 - 640} 244)`}>
        <rect x={633} y={260} width={14} height={34} fill={LIME} stroke={INK} strokeWidth={4} />
        <ellipse cx={640} cy={254} rx={42} ry={12} fill="none" stroke={INK} strokeWidth={11} />
        <ellipse cx={640} cy={254} rx={42} ry={12} fill="none" stroke="#ff5678" strokeWidth={5} />
        <path d="M600 254h80M640 242v24" stroke={INK} strokeWidth={4} strokeLinecap="round" />
        <circle cx={640} cy={254} r={6} fill={INK} />
      </g>
    </svg>
  );
}

function Pop({
  children,
  left,
  top,
  rotate = 0,
}: {
  children: ReactNode;
  left: number;
  top: number;
  rotate?: number;
}) {
  return (
    <div style={{ position: "absolute", left, top, display: "flex", transform: `rotate(${rotate}deg)` }}>
      {children}
    </div>
  );
}

function Dot() {
  return <div style={{ width: 8, height: 8, margin: "0 16px", borderRadius: 4, backgroundColor: LIME }} />;
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: BRAND,
          backgroundImage: "radial-gradient(ellipse 60% 60% at 32% 38%, #5b47ff 0%, rgba(91,71,255,0) 70%)",
          fontFamily: "Geist",
          color: "#fff",
        }}
      >
        {/* Background doodles */}
        <Pop left={720} top={92}>
          <Sparkle width={26} height={26} fill="rgba(212,255,79,0.8)" />
        </Pop>
        <Pop left={1010} top={150}>
          <Sparkle width={18} height={18} fill="rgba(255,255,255,0.6)" />
        </Pop>
        <Pop left={880} top={70} rotate={12}>
          <Star width={40} height={40} stroke="rgba(255,255,255,0.3)" />
        </Pop>
        <Pop left={1040} top={70}>
          <Squiggle width={96} height={16} stroke="rgba(255,255,255,0.25)" />
        </Pop>

        {/* Standing behind the pipe, pointing at what comes out of it */}
        <img
          alt=""
          src={peepStanding}
          width={130}
          height={274}
          style={{ position: "absolute", left: 560, top: 318 }}
        />
        <Pipe />

        {/* Sitting on the pipe; drawn after it so the legs hang in front */}
        <img
          alt=""
          src={peepSitting}
          width={160}
          height={270}
          style={{ position: "absolute", left: 800, top: 371 }}
        />

        {/* What comes out of the pipeline */}
        <Pop left={930} top={252} rotate={-4}>
          <StarBubble width={110} height={57} />
        </Pop>
        <Pop left={1040} top={205} rotate={-8}>
          <LikeBubble width={70} height={63} />
        </Pop>
        <Pop left={1118} top={256} rotate={12}>
          <Star width={46} height={46} stroke="#fff" strokeWidth={3.5} />
        </Pop>
        <Pop left={1134} top={172}>
          <Heart width={36} height={36} fill="#ff5678" stroke="none" />
        </Pop>
        <Pop left={1000} top={170}>
          <Sparkle width={30} height={30} fill={LIME} />
        </Pop>

        {/* Logo */}
        <div style={{ position: "absolute", left: 64, top: 56, display: "flex", alignItems: "center" }}>
          <img alt="" src={logoMark} width={52} height={52} />
          <div
            style={{
              display: "flex",
              position: "relative",
              marginLeft: 14,
              fontFamily: "Instrument Sans",
              fontWeight: 700,
              fontSize: 31,
              letterSpacing: -1.2,
              lineHeight: 1,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -22,
                left: 0,
                fontFamily: "Caveat",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: 0,
                opacity: 0.8,
              }}
            >
              the
            </span>
            brand pipeline
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            position: "absolute",
            left: 60,
            top: 146,
            display: "flex",
            flexDirection: "column",
            fontFamily: "Instrument Sans",
            fontWeight: 600,
            fontSize: 108,
            letterSpacing: -4.8,
            lineHeight: 0.95,
            color: LIME,
          }}
        >
          <span>We get brands</span>
          <div style={{ display: "flex", position: "relative" }}>
            noticed.
            <Underline
              width={380}
              height={24}
              stroke="#fff"
              strokeWidth={4}
              style={{ position: "absolute", left: 8, bottom: -16 }}
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 64,
            top: 402,
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          Marketing
          <Dot />
          Design
          <Dot />
          Development
        </div>

        <img
          alt=""
          src={grain}
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, opacity: 0.22, mixBlendMode: "soft-light" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Sans", data: instrumentSemiBold, weight: 600, style: "normal" },
        { name: "Instrument Sans", data: instrumentBold, weight: 700, style: "normal" },
        { name: "Geist", data: geistMedium, weight: 500, style: "normal" },
        { name: "Caveat", data: caveat, weight: 600, style: "normal" },
      ],
    },
  );
}
