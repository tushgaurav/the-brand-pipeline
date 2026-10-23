import Image from "next/image";
import { Sparkle, Squiggle } from "./doodles";

const reasons = [
  {
    title: "One team, start to finish",
    text: "No relay race between agencies. Strategists, designers, developers and marketers work side by side on your brand.",
    peep: "/illustrations/peep-52.svg",
    blob: "bg-lime",
  },
  {
    title: "Made to be noticed",
    text: "Pretty isn't the goal. Everything we make has a job: grab attention, earn trust and get people to act.",
    peep: "/illustrations/peep-60.svg",
    blob: "bg-brand",
  },
  {
    title: "Straight talk, no fluff",
    text: "Clear scopes, honest timelines and reports in plain English. If something isn't working, you'll hear it from us first.",
    peep: "/illustrations/peep-71.svg",
    blob: "bg-coral",
  },
  {
    title: "Here for the long run",
    text: "Launch day is the starting line. We stick around to test, tweak and grow what we built together.",
    peep: "/illustrations/peep-90.svg",
    blob: "bg-lime",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="px-5 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal mb-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-ink/60 uppercase">
            <Sparkle className="size-4 text-brand" />
            Why us
          </p>
          <h2 className="reveal headline text-[clamp(2.8rem,6.5vw,6rem)] text-ink">
            Why brands plug into{" "}
            <span className="relative inline-block text-brand">
              the pipeline
              <Squiggle className="absolute -bottom-[0.32em] left-0 w-full text-coral" strokeWidth={3} />
            </span>
          </h2>
        </div>

        <div className="mt-36 grid gap-x-6 gap-y-32 sm:grid-cols-2 lg:mt-44 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <article
              key={r.title}
              className="reveal-pop relative rounded-[2rem] border border-ink/10 bg-white px-7 pt-32 pb-8 shadow-[0_20px_50px_-30px_rgba(13,11,26,0.35)]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Rounded-bottom clip lets the head pop out of the circle */}
              <div className="absolute -top-28 left-1/2 h-52 w-40 -translate-x-1/2 overflow-hidden rounded-b-full">
                <div className={`absolute inset-x-0 bottom-0 aspect-square rounded-full ${r.blob}`} />
                <Image
                  src={r.peep}
                  alt=""
                  width={240}
                  height={324}
                  className="absolute -bottom-7 left-1/2 h-auto w-[108%] max-w-none -translate-x-1/2"
                />
              </div>
              <h3 className="font-display text-2xl leading-tight font-bold tracking-[-0.03em]">
                {r.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/70">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
