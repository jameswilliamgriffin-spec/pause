"use client";

import { useEffect } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, summary';

export default function CustomCursor() {
  useEffect(() => {
    const canUseCursor = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canUseCursor || reducedMotion) return;

    const root = document.documentElement;
    const cursor = document.createElement("div");
    cursor.className = "pause-cursor";
    root.classList.add("has-pause-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (event: PointerEvent) => {
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      const target = event.target;
      const isInteractive =
        target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR));
      cursor.dataset.active = String(isInteractive);
    };

    const hideCursor = () => {
      cursor.dataset.hidden = "true";
    };

    const showCursor = () => {
      cursor.dataset.hidden = "false";
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerleave", hideCursor);
    window.addEventListener("pointerenter", showCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("pointerenter", showCursor);
      cursor.remove();
      root.classList.remove("has-pause-cursor");
    };
  }, []);

  return null;
}
