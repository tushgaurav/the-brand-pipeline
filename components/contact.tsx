import Image from "next/image";
import { ContactForm } from "./contact-form";
import { DashedTrail, PaperPlane, Sparkle, Star } from "./doodles";
import { Marquee } from "./marquee";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-white">
      {/* Two crossing tapes straddle the edge between the cream page and the dark footer */}
      <div aria-hidden="true" className="relative h-44 bg-[linear-gradient(to_bottom,var(--color-paper)_50%,var(--color-ink)_50%)] md:h-56">
        <Marquee
          items={["Marketing", "Design", "Development", "Strategy", "Websites", "Campaigns"]}
          separator={<Sparkle className="size-[0.7em]" />}
          className="absolute top-1/2 -right-10 -left-10 -translate-y-1/2 rotate-[3deg] bg-brand py-3 font-display text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl"
          trackClassName="animate-marquee-slow [animation-direction:reverse]"
        />
        <Marquee
          items={Array(3).fill("Let's get you noticed")}
          separator={<Star className="size-[0.8em]" strokeWidth={3.5} />}
          className="absolute top-1/2 -right-10 -left-10 -translate-y-1/2 -rotate-[2.5deg] bg-lime py-4 headline text-4xl text-ink shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] md:text-6xl"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_58%,rgba(58,34,242,0.6),transparent_72%)]"
      />

      <div className="relative mx-auto max-w-3xl px-4 pt-16 pb-28 md:pt-24 md:pb-36">
        {/* Doodles around the card */}
        <Image
          src="/illustrations/doodle-levitate.svg"
          alt=""
          width={1024}
          height={768}
          className="absolute top-36 right-[68%] hidden w-[30rem] max-w-none -scale-x-100 rotate-[8deg] lg:block"
        />
        <Sparkle aria-hidden className="absolute top-24 -left-24 hidden size-6 animate-bob text-lavender lg:block" />
        <div aria-hidden="true" className="absolute top-28 left-[96%] hidden w-64 text-lavender/80 lg:block">
          <PaperPlane className="ml-36 w-20 rotate-6" strokeWidth={2} />
          <DashedTrail className="-mt-2 w-44 -scale-x-100 rotate-[160deg]" strokeWidth={2} />
          <PaperPlane className="mt-10 ml-10 w-14 -rotate-12" strokeWidth={2} />
          <DashedTrail className="mt-2 ml-4 w-36" strokeWidth={2} />
        </div>
        <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-lavender/70">
          <PaperPlane className="w-16 rotate-[20deg]" strokeWidth={2} />
        </div>

        <div className="relative z-10 rounded-[2rem] bg-paper p-6 text-ink shadow-[0_40px_120px_-30px_rgba(58,34,242,0.65)] sm:p-10 md:p-14">
          <h2 className="headline text-[clamp(3.4rem,8vw,5.5rem)]">Let&apos;s talk.</h2>
          <p className="mt-4 mb-10 max-w-md text-lg text-ink/70">
            Tell us about your brand and where you want it to go. We&apos;ll take
            it from there.
          </p>
          <ContactForm />
        </div>

        <p className="relative z-10 mt-8 text-center text-white/70">
          Prefer email?{" "}
          <a
            href="mailto:hello@thebrandpipeline.com"
            className="font-semibold text-lime underline decoration-lime/40 underline-offset-4 hover:decoration-lime"
          >
            hello@thebrandpipeline.com
          </a>
        </p>
      </div>
    </section>
  );
}
