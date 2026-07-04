"use client";

import { useState } from "react";

/**
 * Super-minimal invert toggle: a bordered pill with a sliding dot, drawn in
 * currentColor so it follows whatever colour its context uses. Flips
 * data-theme="inverted" on <html> (see globals.css — ink/paper swap) and
 * persists in localStorage; layout.tsx applies the stored theme pre-paint.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [inverted, setInverted] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.dataset.theme === "inverted",
  );

  const toggle = () => {
    const next = !inverted;
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
