"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Arrow, Sparkle } from "./doodles";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full py-2.5 pr-2.5 pl-5 text-white transition-all duration-500 ${
          scrolled
            ? "bg-ink/90 shadow-[0_12px_40px_-12px_rgba(13,11,26,0.6)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <a href="#top" aria-label="The Brand Pipeline — home" className="pt-2">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group ml-2 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-[0.95rem] font-semibold text-ink transition-transform hover:-rotate-2"
          >
            Let&apos;s talk
            <Arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex flex-col bg-brand px-6 pt-5 pb-10 text-white transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold"
          >
            Close
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-16 flex flex-col gap-2">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="headline flex items-baseline gap-4 py-1 text-6xl text-lime"
            >
              <span className="font-sans text-sm font-medium tracking-normal text-white/60">
                0{i + 1}
              </span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-3 font-hand text-2xl text-white/80">
          <Sparkle className="size-5 text-lime" />
          let&apos;s get you noticed
        </div>
      </div>
    </header>
  );
}
