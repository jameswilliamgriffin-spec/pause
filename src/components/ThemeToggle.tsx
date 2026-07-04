"use client";

import type { MouseEvent } from "react";
import { useState } from "react";

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

/**
 * Super-minimal invert toggle: a bordered pill with a sliding dot, drawn in
 * currentColor so it follows whatever colour its context uses. Flips
 * data-theme="inverted" on <html> (see globals.css — ink/paper swap) and
 * persists in localStorage; layout.tsx applies the stored theme pre-paint.
 *
 * Flipping is an event: a radial wipe sweeps the new theme across the page
 * from the toggle itself (View Transitions API). Browsers without support —
 * and prefers-reduced-motion users — get the instant swap instead.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [inverted, setInverted] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.dataset.theme === "inverted",
  );

  const applyTheme = (next: boolean) => {
    setInverted(next);
    if (next) {
      document.documentElement.dataset.theme = "inverted";
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem("pause-theme", next ? "inverted" : "light");
    } catch {
      /* private browsing — theme just won't persist */
    }
  };

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const next = !inverted;
    const doc = document as DocumentWithViewTransition;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!doc.startViewTransition || reduceMotion) {
      applyTheme(next);
      return;
    }

    /* Radial wipe out of the toggle: capture its centre, snapshot the old
       theme, then clip the new one in as an expanding circle. */
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(() => applyTheme(next));
    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {
        /* transition was skipped (e.g. rapid toggling) — theme still applied */
      });
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={inverted}
      aria-label="Invert site colours"
      onClick={toggle}
      className={`relative h-6 w-11 rounded-full border border-current transition-opacity hover:opacity-70 ${className}`}
    >
      <span
        className={`absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-current transition-[left] duration-[var(--pause-duration)] ease-[var(--pause-ease)] ${
          inverted ? "left-7" : "left-1"
        }`}
      />
    </button>
  );
}
