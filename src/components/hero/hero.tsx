import { component$ } from "@builder.io/qwik";
import { FIRM, HERO_BG } from "../../data/content";

export const Hero = component$(() => {
  return (
    <section id="top" class="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          width={1920}
          height={1080}
          class="h-full w-full object-cover opacity-40 grayscale contrast-125"
        />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,8,12,0.25)_0%,rgba(8,8,12,0.92)_70%,#08080c_100%)]" />
      </div>
      <div class="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <p class="text-xs font-bold uppercase tracking-[0.35em] text-white/50">
          {FIRM.name} — operations consultancy, Berlin
        </p>
        <h1 class="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
          We fix the operations your P&amp;L is complaining about.
        </h1>
        <p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
          {FIRM.name} is a Berlin consultancy for owner-led companies between €5M and €80M in
          revenue. Twelve-week engagements, one flat fee, and a scorecard on your desk every
          Friday.
        </p>
        <div class="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            class="rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-colors duration-500 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-emerald-300"
          >
            Book a discovery call
          </a>
          <a
            href="#results"
            class="rounded-full border border-white/30 px-8 py-4 text-base font-bold text-white transition-colors duration-500 hover:border-white hover:bg-white/10"
          >
            See the numbers
          </a>
        </div>
      </div>
    </section>
  );
});
