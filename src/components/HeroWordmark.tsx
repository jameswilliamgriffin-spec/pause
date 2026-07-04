"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const WORDS = [
  "sip.",
  "brew.",
  "pour.",
  "taste.",
  "breathe.",
  "relax.",
  "rest.",
  "slow.",
  "reset.",
  "stay.",
  "smile.",
  "meet.",
  "chat.",
  "laugh.",
  "share.",
  "bake.",
  "treat.",
  "slice.",
  "fresh.",
  "listen.",
  "play.",
  "joy.",
  "peace.",
];

const LOGO_HOLD_MS = 2000;
const WORD_HOLD_MS = 3200;
const CONTROL_TRANSITION = { duration: 0.08, ease: "easeOut" } as const;
const SURFACE_TRANSITION = { duration: 0.14, ease: [0.22, 1, 0.36, 1] } as const;
const LOGO_TRANSITION = { duration: 0.28, ease: [0.22, 1, 0.36, 1] } as const;
const WORD_TRANSITION = { duration: 0.7, ease: "easeOut" } as const;
const WORD_EXIT_TRANSITION = { duration: 0.6 } as const;

function shuffledWords(previousWord?: string) {
  const words = [...WORDS];

  for (let i = words.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }

  if (previousWord && words[0] === previousWord) {
    const swapIndex = words.findIndex((word) => word !== previousWord);
    if (swapIndex > 0) [words[0], words[swapIndex]] = [words[swapIndex], words[0]];
  }

  return words;
}

function PauseIcon() {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" aria-hidden>
      <rect x="18" y="13" width="7" height="32" rx="3.5" fill="currentColor" />
      <rect x="33" y="13" width="7" height="32" rx="3.5" fill="currentColor" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" aria-hidden>
      <path
        d="M20 15.5v27l22-13.5-22-13.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}

export default function HeroWordmark() {
  const reduceMotion = useReducedMotion();
  const [showLogo, setShowLogo] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [words, setWords] = useState<string[]>(() => shuffledWords());
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [clickPulse, setClickPulse] = useState({ id: 0, inverted: false });

  const controlTransition = reduceMotion
    ? { duration: 0 }
    : CONTROL_TRANSITION;

  useEffect(() => {
    if (isPaused) return;
    const timeout = window.setTimeout(() => setShowLogo(false), LOGO_HOLD_MS);
    return () => window.clearTimeout(timeout);
  }, [isPaused]);

  useEffect(() => {
    if (showLogo || isPaused) return;

    const interval = window.setInterval(() => {
      setWordIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < words.length) return nextIndex;

        setWords((currentWords) => shuffledWords(currentWords[currentWords.length - 1]));
        return 0;
      });
    }, WORD_HOLD_MS);

    return () => window.clearInterval(interval);
  }, [isPaused, showLogo, words]);

  const currentWord = words[wordIndex];
  const isControlVisible = !showLogo && (isPaused || isHovered);

  const wordSizeClass = useMemo(() => {
    if (currentWord.length >= 10) return "text-[1.45rem] sm:text-[1.95rem]";
    if (currentWord.length >= 8) return "text-[1.65rem] sm:text-[2.3rem]";
    return "text-[2rem] sm:text-[2.8rem]";
  }, [currentWord]);

  return (
    <motion.button
      type="button"
      className="pointer-events-auto relative aspect-square w-32 appearance-none rounded-full border-0 p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-44"
      whileHover={reduceMotion || showLogo ? undefined : { scale: 1.025 }}
      whileTap={reduceMotion || showLogo ? undefined : { scale: 0.985 }}
      transition={SURFACE_TRANSITION}
      aria-label={
        isPaused
          ? "Resume hero word animation"
          : "Pause hero word animation"
      }
      aria-pressed={isPaused}
      onMouseEnter={() => {
        if (showLogo) {
          setIsLogoHovered(true);
        } else {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        setIsLogoHovered(false);
        setIsHovered(false);
      }}
      onFocus={() => {
        if (showLogo) setIsLogoHovered(true);
      }}
      onBlur={() => {
        setIsLogoHovered(false);
        setIsHovered(false);
      }}
      onClick={() => {
        if (!showLogo) {
          setIsPaused((current) => {
            const nextPaused = !current;
            if (!nextPaused) setIsHovered(false);
            setClickPulse((pulse) => ({
              id: pulse.id + 1,
              inverted: nextPaused,
            }));
            return nextPaused;
          });
        }
      }}
    >
      <motion.div
        className={`absolute inset-0 rounded-full transition-colors duration-150 ${
          showLogo
            ? "bg-transparent"
            : isControlVisible
              ? "bg-white"
              : "bg-brand"
        }`}
      />
      <AnimatePresence>
        {!reduceMotion && clickPulse.id > 0 && (
          <motion.span
            key={clickPulse.id}
            aria-hidden
            className={`absolute inset-0 rounded-full border-2 ${
              clickPulse.inverted ? "border-brand/45" : "border-white/55"
            }`}
            initial={{ opacity: 0.45, scale: 0.98 }}
            animate={{ opacity: 0, scale: 1.18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <div
        className={`absolute inset-0 flex items-center justify-center overflow-hidden rounded-full transition-colors duration-150 ${
          isControlVisible ? "text-brand" : "text-white"
        }`}
      >
        <AnimatePresence>
          {showLogo && (
            <motion.div
              key="pause-logo"
              className="absolute inset-0"
              initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                scale: isLogoHovered && !reduceMotion ? 1.035 : 1,
                transition: reduceMotion ? { duration: 0 } : LOGO_TRANSITION,
              }}
              exit={{
                opacity: 0,
                filter: "blur(2px)",
                scale: 0.98,
                transition: reduceMotion ? { duration: 0 } : LOGO_TRANSITION,
              }}
            >
              <Image
                src="/images/pause_blue.svg"
                alt=""
                width={180}
                height={180}
                priority
                className="h-auto w-full transition-[filter] duration-200 ease-[var(--pause-ease)]"
                style={{
                  filter: isLogoHovered
                    ? "drop-shadow(0 0 18px rgba(0, 0, 186, 0.28))"
                    : "drop-shadow(0 0 0 rgba(0, 0, 186, 0))",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {!showLogo && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-75 ${
              isControlVisible ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden={isControlVisible}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentWord}
                className="flex max-w-[82%] items-center justify-center text-center"
                initial={{
                  opacity: 0,
                  y: 10,
                  filter: "blur(6px)",
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  scale: 1,
                  transition: reduceMotion ? { duration: 0 } : WORD_TRANSITION,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  filter: "blur(6px)",
                  scale: 1.03,
                  transition: reduceMotion ? { duration: 0 } : WORD_EXIT_TRANSITION,
                }}
              >
                <span
                  className={`block font-normal leading-none tracking-normal ${wordSizeClass}`}
                >
                  {currentWord}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        <AnimatePresence>
          {isHovered && !isPaused && !showLogo && (
            <motion.div
              key="pause-icon"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1, transition: controlTransition }}
              exit={{ opacity: 0, scale: 0.96, transition: controlTransition }}
            >
              <PauseIcon />
            </motion.div>
          )}

          {isPaused && !showLogo && (
            <motion.div
              key="play-icon"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1, transition: controlTransition }}
              exit={{ opacity: 0, scale: 0.96, transition: controlTransition }}
            >
              <PlayIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
