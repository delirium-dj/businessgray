import { component$ } from "@builder.io/qwik";
import { PROOF, PROOF_FOOTNOTE } from "../../data/content";

export const ProofFigures = component$(() => {
  return (
    <section class="mx-auto max-w-6xl px-6 pb-32 md:pb-48">
      <div class="reveal">
        <h2 class="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Numbers our clients signed off.
        </h2>
      </div>
      <div class="mt-14">
        {PROOF.map((item, i) => (
          <div key={item.metric} class="sticky mb-6" style={`top:${96 + i * 28}px`}>
            <div class="rounded-3xl border border-white/10 bg-[#101018] p-8 shadow-2xl shadow-black/50">
              <div class="flex flex-wrap items-baseline justify-between gap-4">
                <h3 class="text-2xl font-black tracking-tight text-white">{item.metric}</h3>
                <p class="bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-4xl font-black text-transparent">
                  {item.value}
                </p>
              </div>
              <p class="mt-3 text-sm leading-relaxed text-white/60">{item.note}</p>
              <p class="mt-1 text-sm text-white/40">Confirmed by {item.cited}</p>
            </div>
          </div>
        ))}
        <p class="reveal mt-8 max-w-3xl text-xs leading-relaxed text-white/35">{PROOF_FOOTNOTE}</p>
      </div>
    </section>
  );
});
