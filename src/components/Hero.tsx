import Image from "next/image";
import HeroWordmark from "@/components/HeroWordmark";

export default function Hero() {
  return (
    <>
      <section id="top" className="group/hero relative h-[86svh] w-full overflow-hidden">
        {/* Back: hero photo */}
        <Image
          src="/images/hero-latte-blue-table.jpg"
          alt="A flat white with latte art on a blue table at Pause"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        {/* Blue overlay — site-wide brand duotone treatment (see site-brief.md) */}
        <div aria-hidden className="absolute inset-0 bg-brand/20 mix-blend-multiply" />
        {/* Top: rotating wordmark */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <HeroWordmark />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <p className="mx-auto max-w-6xl px-4 pb-8 text-xl font-medium leading-snug tracking-tight text-[#fff] sm:px-6 sm:pb-10 sm:text-xl">
            Speciality coffee shop
            <br />
            &amp; scratch bakery
          </p>
        </div>
      </section>
      {/* Scroll cue in the white gap below the hero */}
      <div className="flex justify-center py-5">
        <a
          href="#about"
          aria-label="Scroll down to read about Pause"
          className="animate-bounce text-2xl text-brand"
        >
          <span aria-hidden>↓</span>
        </a>
      </div>
    </>
  );
}
