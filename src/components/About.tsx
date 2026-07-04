"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import Section from "@/components/Section";
import Sprinkles from "@/components/Sprinkles";

/**
 * ABOUT — sits directly below the hero. Blue pull-quote statement, then the
 * co-owners line in smaller copy, also brand blue, over a faint parallaxing
 * sprinkle texture. Copy drafted in source/site-brief.md — not final.
 */
const statement =
  "Pause is a speciality coffee shop on Poplar Road in Kings Heath, built around a simple idea — slow down. Whether it's a quiet coffee or a catch-up with friends, it's a place to breathe for a moment.";

const owners =
  "Behind the counter are co-owners Rory and Farah — Rory's knowledge and passion for coffee shine through in every cup, while Farah's baking has become the reason regulars keep coming back.";

export default function About() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });
  const patternY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-54, 54],
  );

  return (
    <Section id="about" className="relative overflow-hidden py-20 sm:py-28">
      {/* Scroll tracker spanning the section (Section doesn't forward refs) */}
      <div ref={trackRef} aria-hidden className="pointer-events-none absolute inset-0" />
      {/* Faint brand texture behind the statement, drifting slightly on
          scroll. Overscanned vertically so the travel never exposes edges. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -inset-y-24"
        style={{ y: patternY }}
      >
        <Sprinkles className="about-sprinkles" />
      </motion.div>
      <RevealGroup className="relative mx-auto flex max-w-3xl flex-col gap-10 text-center sm:gap-12">
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
