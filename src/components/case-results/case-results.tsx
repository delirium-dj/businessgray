import { component$ } from "@builder.io/qwik";
import { CASES, PILL_IMG } from "../../data/content";

export const CaseResults = component$(() => {
  return (
    <section
      id="clients"
      class="mx-auto max-w-6xl scroll-mt-24 px-6 pb-32 md:pb-48"
    >
      <div class="grid gap-14 md:grid-cols-2">
        <div class="md:sticky md:top-24 md:self-start">
          <h2 class="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Verified twice before it counts.
          </h2>
          <p class="mt-6 max-w-md leading-relaxed text-white/60">
            A result appears here only when the client's own books confirm it at
            the closing review. Same scope, same team, same twelve weeks — the
            numbers below are quoted from signed closing reports.
          </p>
          <p class="mt-4 text-sm text-white/40">
            {CASES.length} of 41 engagements shown — the full casebook comes to
            the first call.
          </p>
          <figure class="reveal group mt-8 max-w-md overflow-hidden rounded-3xl border border-white/10">
            <div class="overflow-hidden">
              <img
                src="https://picsum.photos/seed/workshop/600/800"
                alt="Week-six review on a client shop floor"
                width={600}
                height={800}
                loading="lazy"
                class="aspect-[3/4] w-full object-cover opacity-90 grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <figcaption class="bg-white/5 px-5 py-3 text-xs leading-relaxed text-white/45">
              Week-six review at Copperline — the morning board before the Friday
              scorecard.
            </figcaption>
          </figure>
        </div>
        <div class="space-y-6">
          {CASES.map((c) => (
            <div
              key={c.client}
              class="reveal rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform duration-700 ease-out hover:scale-[1.02]"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-lg font-bold text-white">{c.client}</p>
                  <p class="mt-0.5 text-xs text-white/45">{c.trade}</p>
                </div>
                <p class="whitespace-nowrap text-3xl font-black text-white">
                  {c.metric}{" "}
                  <span class="text-sm font-bold text-white/50">
                    {c.metricLabel}
                  </span>
                </p>
              </div>
              <p class="mt-3 text-sm leading-relaxed text-white/60">
                {c.summary}
              </p>
              <div class="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  class="bar h-full rounded-full bg-gradient-to-r from-indigo-400 to-emerald-300"
                  style={`--w:${c.score}%`}
                />
              </div>
              <div class="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-white/50">
                {c.stats.map(([label, value]) => (
                  <span key={label}>
                    {label} <span class="font-bold text-white/80">{value}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
