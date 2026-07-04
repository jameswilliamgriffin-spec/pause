import { RevealGroup, RevealItem } from "@/components/Reveal";
import Section from "@/components/Section";

/**
 * ABOUT — sits directly below the hero. Blue pull-quote statement, then the
 * co-owners line in smaller copy, also brand blue. Copy drafted in
 * source/site-brief.md — not final.
 */
const statement =
  "Pause is a speciality coffee shop on Poplar Road in Kings Heath, built around a simple idea — slow down. Whether it's a quiet coffee or a catch-up with friends, it's a place to breathe for a moment.";

const owners =
  "Behind the counter are co-owners Rory and Farah — Rory's knowledge and passion for coffee shine through in every cup, while Farah's baking has become the reason regulars keep coming back.";

export default function About() {
  return (
    <Section id="about" className="py-20 sm:py-28">
      <RevealGroup className="mx-auto flex max-w-3xl flex-col gap-10 text-center sm:gap-12">
        <RevealItem>
          <p className="text-balance text-3xl font-medium leading-tight tracking-tight text-brand sm:text-4xl">
            {statement}
          </p>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto max-w-2xl text-balance text-[1.0625rem] leading-relaxed text-brand sm:text-lg">
            {owners}
          </p>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}
