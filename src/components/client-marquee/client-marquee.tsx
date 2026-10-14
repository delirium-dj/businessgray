import { component$ } from "@builder.io/qwik";
import { CLIENTS } from "../../data/content";

export const ClientMarquee = component$(() => {
  return (
    <section aria-label="Client names" class="border-y border-white/10 py-10">
      <div class="overflow-hidden">
        <div class="marquee-track flex w-max items-center gap-16 px-8">
          {[...CLIENTS, ...CLIENTS].map((label, i) => (
            <span
              key={`${label}-${i}`}
              class="whitespace-nowrap text-4xl font-black tracking-tight text-white/15 md:text-6xl"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
});
