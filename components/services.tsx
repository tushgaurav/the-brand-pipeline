import Image from "next/image";
import { Arrow, Sparkle } from "./doodles";

const services = [
  {
    id: "marketing",
    name: "Marketing",
    pitch: "Get in front of the right people — then give them a reason to stay.",
    items: [
      "Brand strategy & positioning",
      "Social media & content",
      "Performance ads",
      "SEO & content marketing",
      "Email & CRM",
      "Influencer & creator campaigns",
    ],
    doodle: "/illustrations/doodle-selfie.svg",
    note: "say hi to the internet",
    theme: {
      card: "bg-brand text-white",
      title: "text-lime",
      muted: "text-white/75",
      rule: "border-white/20",
      chip: "bg-lime text-ink",
      cta: "bg-lime text-ink",
    },
  },
  {
    id: "design",
    name: "Design",
    pitch: "Identities and interfaces people remember — and actually enjoy using.",
    items: [
      "Brand identity & logo",
      "Visual systems & guidelines",
      "UI / UX design",
      "Packaging & print",
      "Motion & social creative",
      "Pitch decks & presentations",
    ],
    doodle: "/illustrations/doodle-unboxing.svg",
    note: "unboxing-worthy, every time",
    theme: {
      card: "bg-lime text-ink",
      title: "text-brand",
      muted: "text-ink/70",
      rule: "border-ink/15",
      chip: "bg-ink text-lime",
      cta: "bg-brand text-white",
    },
  },
  {
    id: "development",
    name: "Development",
    pitch: "Fast, accessible websites and stores built to convert — and easy for you to run.",
    items: [
      "Marketing websites",
      "E-commerce & Shopify",
      "Web apps & dashboards",
      "Landing pages that convert",
      "CMS & integrations",
      "Care, hosting & support",
    ],
    doodle: "/illustrations/doodle-coffee.svg",
    note: "fuelled by an honest amount of coffee",
    theme: {
      card: "bg-ink text-paper",
      title: "text-lime",
      muted: "text-paper/70",
      rule: "border-paper/15",
      chip: "bg-lime text-ink",
      cta: "bg-lime text-ink",
    },
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-3 pt-10 pb-24 sm:px-5 md:pb-36">
      <div className="mx-auto max-w-7xl px-2 sm:px-0">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <h2 className="reveal headline max-w-3xl text-[clamp(3rem,7.5vw,7rem)] text-ink">
            Three crafts.
            <br />
            <span className="text-brand">One pipeline.</span>
          </h2>
          <p className="reveal max-w-sm text-lg leading-relaxed text-ink/70">
            Pick one, or plug into the whole thing. Either way you get one team
            that actually talks to each other.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-[12vh]">
          {services.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`grid overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:sticky lg:min-h-[34rem] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:rounded-[3rem] lg:p-14 ${s.theme.card}`}
              style={{ top: `calc(6.5rem + ${i * 1.75}rem)` }}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <span className={`rounded-full px-3 py-1 ${s.theme.chip}`}>0{i + 1}</span>
                  <span className={s.theme.muted}>What we do</span>
                </div>
                <h3 className={`headline mt-6 text-[clamp(3.2rem,7vw,6.5rem)] ${s.theme.title}`}>
                  {s.name}
                </h3>
                <p className="mt-5 max-w-md text-xl leading-snug font-medium md:text-2xl">
                  {s.pitch}
                </p>
                <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2.5 border-t py-3 text-[0.98rem] ${s.theme.rule}`}
                    >
                      <Sparkle className="size-3 shrink-0 opacity-70" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`group mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-transform hover:-rotate-2 lg:mt-auto ${s.theme.cta}`}
                >
                  Talk {s.name.toLowerCase()}
                  <Arrow className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center lg:mt-0">
                <Image
                  src={s.doodle}
                  alt=""
                  width={1024}
                  height={768}
                  className="h-auto w-full max-w-[34rem] scale-110 lg:scale-115"
                />
                <p className={`mt-4 self-end rotate-[-4deg] font-hand text-2xl md:text-[1.7rem] ${s.theme.muted}`}>
                  ↳ {s.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
