import { Arrow, CurvedArrow, Sparkle, Squiggle, Star, Underline } from "./doodles";
import { PipeScene } from "./pipe-scene";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-brand text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_38%,#5b47ff_0%,transparent_70%)]"
      />

      {/* Background doodles */}
      <Sparkle aria-hidden className="absolute top-[18%] left-[9%] size-6 animate-bob text-lime/80" />
      <Sparkle aria-hidden className="absolute top-[30%] right-[11%] size-4 animate-bob text-white/60 [animation-delay:-2s]" />
      <Star aria-hidden className="absolute top-[14%] right-[22%] hidden size-9 animate-bob text-white/30 [--r:12deg] md:block" />
      <Squiggle aria-hidden className="absolute top-[44%] left-[6%] hidden w-24 text-white/25 lg:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 pt-32 pb-[56vw] text-center sm:pb-[46vw] md:pt-36 md:pb-[19vw]">
        <h1 className="headline text-[clamp(3.6rem,10.5vw,10.5rem)] text-lime">
          We get brands{" "}
          <span className="relative inline-block whitespace-nowrap">
            noticed.
            <Underline className="absolute -bottom-[0.12em] left-[2%] h-[0.22em] w-[94%] text-white" strokeWidth={4} />
          </span>
        </h1>

        <p className="mt-9 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
          Strategy, marketing, design and development — flowing through one
          pipeline, from first idea to full-blown buzz.
        </p>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-base font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(212,255,79,0.6)] transition-transform hover:-translate-y-0.5 hover:-rotate-1"
          >
            Start a project
            <Arrow className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            See how it flows
          </a>

          <div className="pointer-events-none absolute right-full bottom-1/2 mr-3 hidden items-start lg:flex">
            <span className="-rotate-6 font-hand text-2xl whitespace-nowrap text-white/85">
              psst… it starts here
            </span>
            <CurvedArrow className="mt-5 -ml-2 w-14 text-white/85" />
          </div>
        </div>
      </div>

      <PipeScene />
    </section>
  );
}
