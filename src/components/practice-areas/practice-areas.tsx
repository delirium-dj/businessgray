import { component$ } from "@builder.io/qwik";
import { PRACTICE } from "../../data/content";

export const PracticeAreas = component$(() => {
  return (
    <section id="practice" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-32 md:py-48">
      <div class="reveal">
        <h2 class="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Six ways we earn the fee.
        </h2>
        <p class="mt-6 max-w-2xl leading-relaxed text-white/60">
          Every area below runs the same shape: two weeks of diagnosis, eight weeks of
          implementation shoulder to shoulder with your team, two weeks of handover. The number in
          the corner is the share of clients who rated that area 9 or 10 out of 10.
        </p>
      </div>
      <div class="reveal mt-14 flex flex-col gap-2 md:h-[440px] md:flex-row">
        {PRACTICE.map((p) => (
          <div
            key={p.label}
            tabIndex={0}
            class="group relative h-24 overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center transition-all duration-700 ease-out focus:outline-none md:h-auto md:flex-1 md:hover:flex-[4] md:focus-within:flex-[4]"
            style={`background-image:url(${p.img})`}
          >
            <div class="absolute inset-0 bg-black/60 transition-colors duration-700 group-hover:bg-black/35 group-focus-within:bg-black/35" />
            <div class="absolute inset-x-0 bottom-0 p-6">
              <p class="max-h-0 overflow-hidden text-sm leading-snug text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:opacity-100 md:max-w-xs">
                {p.description}
              </p>
              <div class="mt-3 flex items-end justify-between gap-4">
                <span class="text-sm font-bold uppercase tracking-[0.2em] text-white">
                  {p.label}
                </span>
                <span class="text-3xl font-black text-white md:text-4xl">{p.stat}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
