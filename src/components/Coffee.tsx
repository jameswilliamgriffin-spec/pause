import Carousel, { type CarouselItem } from "@/components/Carousel";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import SweepButton from "@/components/SweepButton";

/**
 * COFFEE — heading + intro + link to /coffee, then the shared carousel
 * telling the bean-to-pause story in five parts. No prices (per brief).
 *
 * The Roast has no matching photo yet (needs a roastery/beans shot) and
 * renders the branded placeholder tile until one exists.
 */
const items: CarouselItem[] = [
  {
    title: "The Bean",
    description:
      "Sourced from some of the UK's best speciality roasters — Fire & Flow, Hundred House, Crankhouse, Cloud Picker, River City Roasters.",
    image: {
      src: "/images/coffee-espresso-pour.jpg",
      alt: "Fresh coffee pouring into a blue splatter cup on the machine",
    },
  },
  {
    title: "The Roast",
    description:
      "Roasted in small batches, by people who take it as seriously as we do.",
  },
  {
    title: "The Craft",
    description:
      "Behind the machine, Rory brings years of knowledge to every single cup.",
    image: {
      src: "/images/coffee-milk-pour.jpg",
      alt: "Rory pouring steamed milk into a flat white",
    },
  },
  {
    title: "The Cup",
    description:
      "Flat white, filter, or something a little different — carefully prepared, every time.",
    image: {
      src: "/images/coffee-splatter-cup.jpg",
      alt: "A finished flat white with latte art in a blue splatter cup",
    },
  },
  {
    title: "The Pause",
    description:
      "Because a good coffee deserves a moment to actually enjoy it.",
    image: {
      src: "/images/coffee-pause-cups.jpg",
      alt: "Stacks of lilac and pink pause. takeaway cups on the espresso machine",
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
          <div className="mt-8">
            <SweepButton
              href="/coffee"
              label="Our coffee in full"
              hoverLabel="Dive in"
            />
          </div>
        </RevealItem>
        <RevealItem className="mt-12 sm:mt-16">
          <Carousel items={items} />
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
