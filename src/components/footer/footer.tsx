import { component$ } from "@builder.io/qwik";
import { FIRM } from "../../data/content";

export const Footer = component$(() => {
  return (
    <footer class="border-t border-white/10">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-white/40">
        <span class="font-black text-white/70">{FIRM.name}</span>
        <span>
          © 2026 {FIRM.legal} · {FIRM.street}, {FIRM.city}
        </span>
        <a
          href={`mailto:${FIRM.email}`}
          class="transition-colors duration-300 hover:text-white"
        >
          {FIRM.email}
        </a>
      </div>
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 pb-8 text-xs text-white/25">
        <span>Operations consultancy for owner-led companies</span>
        <span>Impressum · Datenschutz</span>
      </div>
    </footer>
  );
});
