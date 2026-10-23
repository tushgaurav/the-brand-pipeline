import { CurvedArrow, Sparkle } from "./doodles";
import { GooglyEyes } from "./googly-eyes";

export function Intro() {
  return (
    <section className="relative px-5 pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <p className="reveal mb-8 flex items-center gap-2 text-sm font-semibold tracking-wide text-ink/60 uppercase">
          <Sparkle className="size-4 text-brand" />
          Hello, we&apos;re The Brand Pipeline
        </p>

        <h2 className="reveal max-w-6xl font-display text-[clamp(2.1rem,5.2vw,4.9rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-brand [font-stretch:92%]">
          An end-to-end studio for brands that want to be{" "}
          <span className="sr-only">looked</span>
          <span aria-hidden="true" className="relative whitespace-nowrap">
            l<GooglyEyes />
            ked
          </span>{" "}
          at. Strategy, design, code and campaigns — one team, one pipeline,
          zero hand-off headaches.
        </h2>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="hidden items-start gap-1 md:flex">
            <p className="max-w-[17rem] -rotate-3 font-hand text-[1.7rem] leading-tight text-ink/70">
              (they follow you around. so will your customers.)
            </p>
            <CurvedArrow className="-mt-10 w-16 -rotate-90 text-ink/50" />
          </div>
          <p className="reveal max-w-xl text-lg leading-relaxed text-ink/70 md:text-xl">
            Most brands juggle a designer, a dev shop and a marketing agency —
            and spend half their time translating between them. We put all
            three at one table, so your brand looks, works and sells like it was
            built by one brain.{" "}
            <span className="font-semibold text-ink">Because it was.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
