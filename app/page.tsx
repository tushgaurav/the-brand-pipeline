import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Marquee } from "@/components/marquee";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Marquee
          items={["marketing", "design", "development", "strategy", "growth"]}
          separator="—"
          className="ghost-text py-6 text-[clamp(5rem,14vw,13rem)]"
          trackClassName="animate-marquee-slow"
        />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
