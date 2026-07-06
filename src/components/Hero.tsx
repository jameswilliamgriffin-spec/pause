import Image from "next/image";
import HeroWordmark from "@/components/HeroWordmark";
import Sprinkles from "@/components/Sprinkles";

export default function Hero() {
  return (
    <>
      <section id="top" className="group/hero relative h-[86svh] w-full overflow-hidden">
        {/* Back: hero photo */}
        <Image
          src="/images/e5242952-d019-4215-b82c-6240b3b2d18d.jpg"
          alt="The Pause shopfront with its blue awnings on a sunny day in Kings Heath"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_90%]"
        />
        {/* Blue overlay — site-wide brand duotone treatment (see site-brief.md) */}
        <div aria-hidden className="absolute inset-0 bg-brand/20 mix-blend-multiply" />
        {/* Top scrim: the shopfront photo has a pale sky, so the white nav
            needs a little contrast behind it */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-brand/50 to-transparent sm:h-44"
        />
        {/* Packaging sprinkles drifting gently across the photo; fixed white
            because photography doesn't invert with the theme */}
        <Sprinkles color="#fff" drift className="opacity-[0.12]" />
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
