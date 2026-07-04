"use client";

import Image from "next/image";
import type { PointerEvent, ReactNode } from "react";
import { useRef, useState } from "react";

export type CarouselItem = {
  title: string;
  description: ReactNode;
  /** Omit while photography is pending — renders a branded placeholder tile. */
  image?: { src: string; alt: string };
};

/**
 * Horizontally scrollable carousel with alternating large/small tiles
 * (rhythm per /inspiration/carousel.png). Scroll-snap handles swipe; the
 * circular arrow on each tile scrolls to the next one (wraps to the first).
 * Shared by COFFEE and BAKED.
 *
 * The edge padding formula keeps the first tile aligned with the max-w-6xl
 * (72rem) content column while letting tiles bleed to the viewport edge so
 * the next one peeks in. It's an inline style because Tailwind can't compile
 * interpolated arbitrary values.
 */
const edgePad = "max(1rem, calc((100vw - 72rem) / 2 + 1.5rem))";

export default function Carousel({ items }: { items: CarouselItem[] }) {
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const tileRefs = useRef<(HTMLLIElement | null)[]>([]);
  const dragState = useRef({
    pointerId: 0,
    startX: 0,
    scrollLeft: 0,
    isPointerDown: false,
    moved: false,
  });
  const [isDragging, setIsDragging] = useState(false);

  const scrollToNext = (index: number) => {
    tileRefs.current[(index + 1) % items.length]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const onPointerDown = (event: PointerEvent<HTMLUListElement>) => {
    if (!scrollerRef.current) return;
    if (event.target instanceof Element && event.target.closest("button")) return;

    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: scrollerRef.current.scrollLeft,
      isPointerDown: true,
      moved: false,
    };
    scrollerRef.current.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLUListElement>) => {
    if (!dragState.current.isPointerDown || !scrollerRef.current) return;

    const delta = event.clientX - dragState.current.startX;
    if (Math.abs(delta) > 5) dragState.current.moved = true;
    scrollerRef.current.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const endDrag = (event: PointerEvent<HTMLUListElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (scroller.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }

    if (dragState.current.moved) {
      const nearestTile = tileRefs.current.reduce<HTMLLIElement | null>(
        (nearest, tile) => {
          if (!tile) return nearest;
          if (!nearest) return tile;

          const tileDistance = Math.abs(tile.offsetLeft - scroller.scrollLeft);
          const nearestDistance = Math.abs(
            nearest.offsetLeft - scroller.scrollLeft,
          );

          return tileDistance < nearestDistance ? tile : nearest;
        },
        null,
      );

      nearestTile?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }

    dragState.current.isPointerDown = false;
    window.setTimeout(() => setIsDragging(false), 320);
  };

  return (
    <ul
      ref={scrollerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={(event) => {
        if (dragState.current.isPointerDown) endDrag(event);
      }}
      className={`flex snap-x snap-mandatory items-start gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-8 ${
        isDragging
          ? "cursor-grabbing !snap-none select-none"
          : "cursor-grab scroll-smooth"
      }`}
      style={{
        paddingLeft: edgePad,
        paddingRight: edgePad,
        scrollPaddingLeft: edgePad,
        scrollBehavior: isDragging ? "auto" : "smooth",
        touchAction: "pan-y",
      }}
    >
      {items.map((item, i) => {
        const large = i % 2 === 0;
        return (
          <li
            key={item.title}
            ref={(el) => {
              tileRefs.current[i] = el;
            }}
            className={`group shrink-0 snap-start ${
              large ? "w-[78vw] sm:w-[30rem]" : "w-[64vw] sm:w-[21rem]"
            }`}
          >
            <div
              className={`relative overflow-hidden bg-brand/5 ${
                large ? "aspect-[4/5]" : "aspect-[4/3]"
              }`}
            >
              {item.image ? (
                <>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 640px) 30rem, 80vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  {/* Blue overlay — site-wide brand duotone treatment */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-brand/20 mix-blend-multiply"
                  />
                </>
              ) : (
                /* Placeholder until a matching photo is available */
                <div className="flex h-full items-center justify-center">
                  <Image
                    src="/images/pause_blue.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="opacity-25"
                  />
                </div>
              )}
              <button
                type="button"
                onClick={() => scrollToNext(i)}
                aria-label="Next item"
                className={`absolute right-3 top-3 flex size-10 items-center justify-center rounded-full text-lg backdrop-blur-sm transition ${
                  item.image
                    ? "bg-white/25 text-white hover:bg-white/40"
                    : "bg-brand/10 text-brand hover:bg-brand/20"
                }`}
              >
                <span aria-hidden>→</span>
              </button>
            </div>
            <h3 className="mt-4 text-lg font-medium text-brand">{item.title}</h3>
            <p className="mt-1 max-w-[36ch] text-sm leading-relaxed text-brand sm:text-base">
              {item.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
