import { component$ } from "@builder.io/qwik";
import { FIRM, HERO_BG } from "../../data/content";

export const ContactCta = component$(() => {
  return (
    <section id="contact" class="relative scroll-mt-24 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          class="h-full w-full object-cover opacity-25 grayscale contrast-125"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,8,12,0.4)_0%,#08080c_85%)]" />
      </div>
      <div class="reveal relative z-10 mx-auto max-w-4xl px-6 py-32 text-center md:py-48">
        <h2 class="text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Bring last quarter's P&amp;L. We'll do the rest in thirty minutes.
        </h2>
        <p class="mx-auto mt-6 max-w-2xl leading-relaxed text-white/60">
          On the call we tell you whether a twelve-week engagement pays for itself — and say no
          when it doesn't. No deck, no retainer talk. {FIRM.replyTime}
        </p>
        <div class="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${FIRM.email}?subject=Discovery%20call`}
            class="rounded-full bg-white px-10 py-4 text-base font-bold text-black transition-colors duration-500 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-emerald-300"
          >
            Book a discovery call
          </a>
          <a
            href="#clients"
            class="rounded-full border border-white/30 px-10 py-4 text-base font-bold text-white transition-colors duration-500 hover:border-white hover:bg-white/10"
          >
            See client results
          </a>
        </div>
      </div>
    </section>
  );
});
