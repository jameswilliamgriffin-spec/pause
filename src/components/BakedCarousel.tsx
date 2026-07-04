"use client";

import type { PointerEvent } from "react";
import { useRef, useState } from "react";

export type BakedItem = {
  title: string;
  description?: string;
  image: { src: string; alt: string };
};

/**
 * BAKED carousel — a permanently revolving strip (same pure-CSS marquee
 * technique as the playlist: content rendered twice, translateX 50% loop).
 * All images share one fixed height and keep their natural widths, with a
 * small white gap between them. Hover (or tap on touch) reveals the item
 * name + description over the brand-blue overlay, plus a white dot top-right
 * (sized to match the nav logo, 44px).
 *
 * Plain <img> (not next/image) because widths are driven by each image's
 * natural aspect ratio via h-full w-auto.
 */
export default function BakedCarousel({ items }: { items: BakedItem[] }) {
  /* Tap-to-reveal for touch devices, where hover doesn't exist. */
  const [active, setActive] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({
    pointerId: 0,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });
  const doubled = [...items, ...items];

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: scrollerRef.current.scrollLeft,
      moved: false,
    };
    scrollerRef.current.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current) return;
    const delta = event.clientX - dragState.current.startX;
    if (Math.abs(delta) > 6) dragState.current.moved = true;
    scrollerRef.current.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    if (scrollerRef.current.hasPointerCapture(event.pointerId)) {
      scrollerRef.current.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={(event) => {
        if (isDragging) endDrag(event);
      }}
      className={`overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        isDragging ? "cursor-grabbing select-none" : "cursor-grab"
      }`}
      style={{ touchAction: "pan-y" }}
    >
      <ul
        className="flex w-max items-stretch gap-2 will-change-transform"
        style={{
          animation: "pause-marquee-rtl 60s linear infinite",
          animationPlayState: isDragging ? "paused" : "running",
        }}
      >
        {doubled.map((item, i) => {
          const revealed = active === i;
          return (
            <li
              key={`${item.title}-${i}`}
              aria-hidden={i >= items.length}
              className="h-80 shrink-0 sm:h-[520px]"
            >
              <button
                type="button"
                onClick={() => {
                  if (dragState.current.moved) return;
                  setActive(revealed ? null : i);
                }}
                aria-pressed={revealed}
                aria-label={item.title}
                className="group relative block h-full overflow-hidden text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="h-full w-auto max-w-none object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Blue overlay — site-wide brand duotone treatment */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-brand/20 mix-blend-multiply"
                />
                {/* Reveal overlay */}
                <span
                  className={`absolute inset-0 flex flex-col justify-end bg-brand/80 p-4 transition-opacity duration-300 ${
                    revealed
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {/* White dot, sized to match the nav roundel */}
                  <span
                    aria-hidden
                    className="absolute right-3 top-3 size-11 rounded-full bg-white"
                  />
                  <span
                    className={`block transition-transform duration-300 ${
                      revealed
                        ? "translate-y-0"
                        : "translate-y-3 group-hover:translate-y-0"
                    }`}
                  >
                    <span className="block text-base font-medium text-white sm:text-lg">
                      {item.title}
                    </span>
                    {item.description && (
                      <span className="mt-1 block text-xs leading-relaxed text-white/85 sm:text-sm">
                        {item.description}
                      </span>
                    )}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
