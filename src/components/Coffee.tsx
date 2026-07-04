import Carousel, { type CarouselItem } from "@/components/Carousel";
import { RevealGroup, RevealItem } from "@/components/Reveal";

/**
 * COFFEE — heading + intro, then the shared carousel. No prices (per brief).
 * Copy is drafted in source/site-brief.md — not final.
 *
 * Items are ordered so the two real photos land on the large tiles;
 * Filter Coffee and Matcha get placeholder tiles until photos exist.
 */
const items: CarouselItem[] = [
  {
    title: "Flat White",
    description: "A classic, done properly.",
    image: {
      src: "/images/coffee-milk-pour.jpg",
      alt: "A barista pouring steamed milk into a flat white",
    },
  },
  {
    title: "Filter Coffee",
    description: (
      <>
        Rotating single-origin beans from our
        <br />
        featured roasters.
      </>
    ),
    image: {
      src: "/images/coffee-espresso-pour.jpg",
      alt: "Coffee pouring into a blue splatter cup on the machine",
    },
  },
  {
    title: "Seasonal Special",
    description: "Something new, worth trying.",
    image: {
      src: "/images/coffee-pause-cups.jpg",
      alt: "Stacks of lilac and pink pause. takeaway cups on the espresso machine",
    },
  },
  {
    title: "Matcha",
    description: "Smooth, earthy, and a little different.",
    image: {
      src: "/images/coffee-matcha.jpg",
      alt: "An iced matcha in a glass, layered green over milk",
    },
  },
  {
    title: "Cortado",
    description: "Small, smooth, just right.",
    image: {
      src: "/images/coffee-splatter-cup.jpg",
      alt: "A cortado with latte art in a blue splatter cup",
    },
  },
];

export default function Coffee() {
  return (
    /* Not using <Section> here — the carousel needs to bleed to the viewport edge */
    <section id="coffee" className="scroll-mt-16 py-24 sm:py-32">
      <RevealGroup>
        <RevealItem className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-[10ch] text-5xl font-medium leading-[0.98] tracking-tight text-brand sm:text-6xl lg:text-7xl">
            Coffee,
            <br />
            taken seriously.
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-brand sm:text-lg">
            We feature beans from some of the UK&apos;s best speciality roasters —
            including Fire &amp; Flow, Hundred House, Crankhouse, Cloud Picker and
            River City Roasters. Flat white, filter, or something a little
            different — every cup is carefully prepared, alongside hot chocolates,
            matcha, teas and seasonal specials.
          </p>
        </RevealItem>
        <RevealItem className="mt-12 sm:mt-16">
          <Carousel items={items} />
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
