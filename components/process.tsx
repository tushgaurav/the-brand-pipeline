import type { CSSProperties } from "react";
import Image from "next/image";
import { Burst } from "./doodles";

const steps = [
  {
    title: "Discover",
    text: "We dig into your brand, audience and competitors until we know exactly what makes you worth noticing.",
    tags: ["Research", "Audits", "Strategy"],
    says: "so… who are we talking to?",
    peep: { src: "/illustrations/peep-standing-17.svg", w: 309, h: 617 },
  },
  {
    title: "Design",
    text: "Identity, visuals and UX that turn heads. Shaped with you, not presented at you.",
    tags: ["Identity", "UI / UX", "Content"],
    says: "what if it looked like this?",
    peep: { src: "/illustrations/peep-standing-22.svg", w: 321, h: 691 },
  },
  {
    title: "Build",
    text: "Fast, accessible websites, stores and apps. Engineered to convert and easy for your team to run.",
    tags: ["Websites", "E-commerce", "Apps"],
    says: "shipped. and it's quick.",
    peep: { src: "/illustrations/peep-standing-14.svg", w: 256, h: 687 },
  },
  {
    title: "Amplify",
    text: "Campaigns, social, SEO and ads that put you in front of the right people. Then we measure and turn it up.",
    tags: ["Campaigns", "Social", "Growth"],
    says: "okay, now everyone's talking.",
    peep: { src: "/illustrations/peep-standing-23.svg", w: 321, h: 699 },
  },
];

const pipe = "h-8 border-y-[3px] border-ink";
const flange = "absolute -top-2.5 -left-2.5 hidden h-12 w-5 rounded-md border-[3px] border-ink bg-lime lg:block";

function Sheen() {
  return <div className="pipe-flow absolute inset-x-0 top-1.5 h-1" />;
}

/* An empty stretch of pipe that fills with lime as you scroll (see .flow-fill). */
function PipeSegment({ fillClassName = "flow-fill", className = "" }: { fillClassName?: string; className?: string }) {
  return (
    <div aria-hidden="true" className={`relative bg-brand-deep ${pipe} ${className}`}>
      <div className="absolute inset-0 overflow-clip">
        {/* Overshoots the segment so its rounded front is clipped away once full */}
        <div className={`relative h-full w-[calc(100%+2rem)] rounded-r-full bg-lime ${fillClassName}`}>
          <Sheen />
        </div>
      </div>
      <div className={flange} />
    </div>
  );
}

/*
 * Below lg the stages stack, so a riser down the left feeds each one in turn.
 * Each stage's riser runs from its junction to the next one, so the joins hide
 * under the junction boxes (see .flow-drop).
 */
function Riser({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flow-riser absolute -bottom-[23.5rem] left-0 w-8 overflow-clip border-x-[3px] border-ink bg-brand-deep lg:hidden ${className}`}
    >
      <div className="flow-drop relative h-[calc(100%+2rem)] w-full rounded-b-full bg-lime">
        <div className="pipe-flow-down absolute inset-y-0 left-1.5 w-1" />
      </div>
    </div>
  );
}

/* Where the brand goes in, at the top of the riser. */
function Funnel() {
  return (
    <svg
      viewBox="0 0 64 44"
      aria-hidden="true"
      className="absolute bottom-full -left-4 w-16 overflow-visible lg:hidden"
    >
      <path d="M2 8H62L48 42.5H16Z" className="fill-lime stroke-ink" strokeWidth={3} strokeLinejoin="round" />
      <ellipse cx={32} cy={8} rx={30} ry={6} className="fill-ink" />
      <path d="M15 17 21 34" className="stroke-[#f4ffd0]" strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
}

export function Process() {
  return (
    <section id="process" className="grain relative overflow-x-clip bg-brand py-24 text-white md:py-36">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row md:items-end">
        <h2 className="reveal headline text-[clamp(3rem,7.5vw,7rem)] text-lime">
          How the
          <br />
          pipeline flows
        </h2>
        <p className="reveal max-w-sm text-lg leading-relaxed text-white/75">
          Four stages, one crew. Your brand goes in one end and comes out
          the other sharper, louder and impossible to scroll past.
        </p>
      </div>

      <div className="flow-track relative z-10 mt-16 md:mt-24">
        <div className="flow-stage">
          <div className="mx-auto w-full max-w-7xl px-5">
            {/* Unpadded, so the edge pipes meet the stages exactly */}
            <div className="relative">
              {/* Pipe runs off both edges of the screen on wide layouts */}
              <div aria-hidden="true" className={`absolute top-[19rem] right-full hidden w-[50vw] bg-lime lg:block ${pipe}`}>
                <Sheen />
              </div>
              <div className="absolute top-[19rem] left-full z-10 hidden w-[50vw] lg:block">
                <PipeSegment fillClassName="flow-exit" />
              </div>

              <ol className="grid gap-14 lg:grid-cols-4 lg:gap-0">
                {steps.map((step, i) => (
                  <li
                    key={step.title}
                    className="flow-step relative flex flex-col pl-12 lg:pl-0"
                    style={{ "--i": i } as CSSProperties}
                  >
                    {i === 0 && <Funnel />}
                    {i < steps.length - 1 && <Riser className={i === 0 ? "top-0" : "top-[20rem]"} />}

                    <div className="relative h-[19rem]">
                      {/* Clipped at the pipe so people climb out of it */}
                      <div className="absolute inset-x-0 top-0 -bottom-1 flex items-end justify-center overflow-clip">
                        <Image
                          src={step.peep.src}
                          alt=""
                          width={step.peep.w}
                          height={step.peep.h}
                          className="flow-peep h-[13.5rem] w-auto"
                        />
                      </div>
                      <div className="flow-bubble absolute top-0 right-0 z-10 w-max max-w-[12.5rem] rounded-2xl rounded-bl-sm border-[3px] border-ink bg-white px-4 py-2 font-hand text-[1.35rem] leading-tight text-ink shadow-[4px_4px_0_#0d0b1a] sm:right-auto sm:left-[46%]">
                        {step.says}
                      </div>
                    </div>

                    {/* Below lg it branches off the riser and runs off the right edge */}
                    <PipeSegment className="-mr-5 -ml-4 lg:mx-0" />
                    <div
                      aria-hidden="true"
                      className="absolute top-[18.5rem] -left-2 size-12 rounded-lg border-[3px] border-ink bg-lime lg:hidden"
                    />

                    <div className="flow-text max-w-xl pt-8 lg:max-w-none lg:pr-8 lg:pl-6">
                      <h3 className="font-display text-3xl font-bold tracking-[-0.03em] md:text-4xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-white/75">{step.text}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <li key={tag} className="rounded-full border border-white/25 px-3 py-1 text-sm text-white/85">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal relative z-10 mt-20 flex items-center justify-center gap-3 px-5 text-center font-hand text-3xl text-white/85">
        <Burst className="size-8 shrink-0 text-lime" />
        and then we do it all again, bigger.
        <Burst className="size-8 shrink-0 -scale-x-100 text-lime" />
      </div>
    </section>
  );
}
