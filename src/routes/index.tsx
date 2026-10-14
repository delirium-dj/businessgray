import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { MOTION_CSS } from "../data/content";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { ResultsBento } from "../components/results-bento/results-bento";
import { ClientMarquee } from "../components/client-marquee/client-marquee";
import { PracticeAreas } from "../components/practice-areas/practice-areas";
import { CaseResults } from "../components/case-results/case-results";
import { ProofFigures } from "../components/proof-figures/proof-figures";
import { ContactCta } from "../components/contact-cta/contact-cta";
import { Footer } from "../components/footer/footer";

export default component$(() => {
  useVisibleTask$(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  return (
    <main class="w-full max-w-full overflow-x-hidden bg-[#08080c] [font-family:'Satoshi',ui-sans-serif,system-ui,sans-serif] text-white">
      <style dangerouslySetInnerHTML={MOTION_CSS} />
      <Header />
      <Hero />
      <ResultsBento />
      <ClientMarquee />
      <PracticeAreas />
      <CaseResults />
      <ProofFigures />
      <ContactCta />
      <Footer />
    </main>
  );
});

export const head: DocumentHead = {
  title: "BusinessGray — operations consultancy, Berlin",
  meta: [
    {
      name: "description",
      content:
        "BusinessGray is a Berlin operations consultancy for owner-led companies (€5M–€80M revenue). Twelve-week engagements, flat fee, 96% client retention.",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap",
    },
  ],
};
