import { component$, useSignal } from "@builder.io/qwik";
import { FIRM } from "../../data/content";

const LINKS = [
  { href: "#results", label: "Results" },
  { href: "#practice", label: "Practice" },
  { href: "#clients", label: "Clients" },
];

export const Header = component$(() => {
  const open = useSignal(false);
  return (
    <nav aria-label="Primary" class="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div class="flex flex-col items-center gap-2">
        <div class="flex items-center gap-4 rounded-full border border-white/10 bg-black/50 py-3 pl-6 pr-3 backdrop-blur-xl sm:gap-6">
          <a href="#top" class="text-base font-black tracking-tight text-white">
            {FIRM.name}
          </a>
          <div class="hidden items-center gap-5 text-sm font-bold text-white/60 sm:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} class="transition-colors duration-300 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-expanded={open.value}
            aria-label={open.value ? "Close menu" : "Open menu"}
            onClick$={() => {
              open.value = !open.value;
            }}
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-white/40 sm:hidden"
          >
            {open.value ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            )}
          </button>
          <a
            href="#contact"
            onClick$={() => {
              open.value = false;
            }}
            class="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-black transition-colors duration-500 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-emerald-300"
          >
            Book a call
          </a>
        </div>
        {open.value && (
          <div class="flex w-64 flex-col gap-1 rounded-3xl border border-white/10 bg-black/70 p-2 backdrop-blur-xl sm:hidden">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick$={() => {
                  open.value = false;
                }}
                class="rounded-full px-4 py-2.5 text-center text-sm font-bold text-white/70 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
});
