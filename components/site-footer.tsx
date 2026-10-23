import Image from "next/image";
import { Logo } from "./logo";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.linkedin.com/", label: "LinkedIn" },
  { href: "https://www.behance.net/", label: "Behance" },
  { href: "https://x.com/", label: "X / Twitter" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 px-5 pt-16 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-white/60">
            Marketing, design and development for brands that want to be
            noticed — end to end, under one roof.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-4 text-sm font-semibold tracking-wide text-white/40 uppercase">Explore</p>
          <ul className="space-y-2">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-lg text-white/80 transition-colors hover:text-lime">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-4 text-sm font-semibold tracking-wide text-white/40 uppercase">Follow along</p>
          <ul className="space-y-2">
            {socials.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white/80 transition-colors hover:text-lime"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div aria-hidden="true" className="overflow-hidden px-3 pt-28">
        <p className="headline relative mx-auto w-fit text-[18.5vw] leading-[0.8] whitespace-nowrap text-brand select-none">
          brand pipeline
          {/* Sized in em so they stay perched on the letters at any width */}
          <Image
            src="/illustrations/peep-sitting-1.svg"
            alt=""
            width={346}
            height={510}
            className="absolute right-[1.05em] bottom-[0.56em] w-[0.42em] invert"
          />
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-8 text-sm text-white/50 sm:flex-row">
        <p>© 2026 The Brand Pipeline. All rights reserved.</p>
        <p className="font-hand text-lg text-white/60">hand-drawn, not generated.</p>
      </div>
    </footer>
  );
}
