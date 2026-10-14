import { component$ } from "@builder.io/qwik";
import { HERO_BG } from "../../data/content";

export const ResultsBento = component$(() => {
  return (
    <section id="results" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-32 md:py-48">
      <div class="reveal">
        <h2 class="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
          One firm, forty-one engagements, zero hand-waving.
        </h2>
      </div>
      <div class="mt-14 grid grid-flow-dense grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div class="reveal group relative col-span-1 row-span-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2">
          <div class="absolute inset-0 opacity-20 transition-transform duration-700 ease-out group-hover:scale-105">
            <img src={HERO_BG} alt="" class="h-full w-full object-cover grayscale contrast-125" loading="lazy" />
          </div>
          <div class="relative flex h-full flex-col justify-between">
            <p class="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Client retention</p>
            <p class="bg-gradient-to-br from-white via-white to-indigo-300 bg-clip-text text-[7rem] font-black leading-none text-transparent md:text-[11rem]">
              96%
            </p>
            <p class="max-w-xs text-sm leading-relaxed text-white/55">
              Of clients sign a second engagement within twelve months. Flat fee, Friday
              scorecards — retention is the whole pitch.
            </p>
          </div>
        </div>
        <div class="reveal rounded-3xl border border-white/10 bg-white/5 p-8 sm:col-span-2">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Engagements</p>
          <p class="mt-4 text-5xl font-black tracking-tight md:text-6xl">12 wk</p>
          <p class="mt-2 text-sm text-white/55">
            Fixed scope, agreed in week zero — the scorecard lands every Friday, whether the news
            is good or not.
          </p>
        </div>
        <div class="reveal rounded-3xl border border-white/10 bg-white/5 p-8">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Pricing</p>
          <p class="mt-4 text-4xl font-black tracking-tight">€8k /mo</p>
          <p class="mt-2 text-sm text-white/55">
            Flat monthly fee for the whole team on your account. No hourly billing, no change
            orders, pause with two weeks' notice.
          </p>
        </div>
        <div class="reveal rounded-3xl border border-white/10 bg-white/5 p-8">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Scope</p>
          <p class="mt-4 text-2xl font-bold leading-snug tracking-tight">Ops, hiring &amp; cash-flow</p>
          <p class="mt-2 text-sm text-white/55">The three places margin usually leaks.</p>
        </div>
        <div class="reveal rounded-3xl border border-white/10 bg-white/5 p-8 sm:col-span-2 lg:col-span-4">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Verdict</p>
          <p class="mt-4 max-w-4xl text-xl leading-relaxed text-white/80 md:text-2xl">
            Strongest in <strong class="font-bold text-white">turnaround operations</strong> and{" "}
            <strong class="font-bold text-white">cash-flow triage</strong>; our newest offer,{" "}
            <strong class="font-bold text-white">AI pilots</strong>, is sold only as metered
            experiments. Every figure on this page comes from signed closing reports, 2023–2026,
            and the 2025 client survey (n=31).
          </p>
        </div>
      </div>
    </section>
  );
});
