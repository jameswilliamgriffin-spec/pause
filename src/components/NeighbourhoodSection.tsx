"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SweepButton from "@/components/SweepButton";

const EASE = [0.22, 1, 0.36, 1] as const;

const bodyLines = [
  "Pop in for your morning coffee, meet friends over fresh bakes, or make yourself comfortable for a little longer than you planned.",
  "We&apos;re proud to call Kings Heath home&mdash;and even happier to be part of your routine.",
];

export default function NeighbourhoodSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-46, 46],
  );
  /* Circle drifts counter to the image for a little depth */
  const circleY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [56, -56],
  );
  const circleX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [18, -18],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip bg-white py-28 sm:py-32 lg:py-40"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-18rem] top-1/2 lg:right-[-22rem]"
        style={{ x: circleX, y: circleY }}
      >
        <div className="size-[34rem] -translate-y-1/2 rounded-full bg-brand opacity-[0.08] sm:size-[42rem] lg:size-[50rem]" />
      </motion.div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
        >
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.24em] text-brand/55"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.58, ease: EASE },
              },
            }}
          >
            Neighbourhood
          </motion.p>

          <motion.h2
            className="mt-5 max-w-[10ch] text-5xl font-medium leading-[0.98] tracking-tight text-brand sm:text-6xl lg:text-7xl"
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.78, ease: EASE },
              },
            }}
          >
            A little piece of Kings Heath.
          </motion.h2>

          <div className="mt-8 max-w-[64ch] space-y-4 text-[1.0625rem] leading-relaxed text-brand/80 sm:text-lg">
            {bodyLines.map((line) => (
              <motion.p
                key={line}
                dangerouslySetInnerHTML={{ __html: line }}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.66, ease: EASE },
                  },
                }}
              />
            ))}
          </div>

          <motion.div
            className="mt-8"
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.66, ease: EASE },
              },
            }}
          >
            {/* ABOUT lives on the homepage anchor — repoint if it ever
                becomes its own page */}
            <SweepButton
              href="/#about"
              label="More about Pause"
              hoverLabel="Our story"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative aspect-[1545/1345] overflow-hidden bg-brand/5 lg:-mr-20 xl:-mr-28"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, scale: 0.98, y: 18, filter: "blur(4px)" }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.9, ease: EASE, delay: 0.18 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="absolute inset-x-0 -inset-y-16"
            style={{ y: imageY }}
          >
            <Image
              src="/images/e5242952-d019-4215-b82c-6240b3b2d18d.jpg"
              alt="A calm Pause moment in Kings Heath"
              fill
              sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 55vw, 100vw"
              className="object-contain"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-brand/20 mix-blend-multiply"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
