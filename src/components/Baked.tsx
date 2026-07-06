import BakedCarousel, { type BakedItem } from "@/components/BakedCarousel";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import SweepButton from "@/components/SweepButton";

/**
 * BAKED — "Home of the Cinnabuffin." heading + approved body copy, then a
 * permanently revolving carousel (BakedCarousel).
 *
 * Copy notes: tile descriptions besides Cinnabuffin's are drafted here —
 * still draft, swap once approved.
 */
function MuffinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Domed top with overhang, pleated case below */}
      <path d="M4.5 12.5a3.5 3.5 0 0 1-.9-4.9 3.6 3.6 0 0 1 3-1.5 5.6 5.6 0 0 1 10.8 0 3.6 3.6 0 0 1 3 1.5 3.5 3.5 0 0 1-.9 4.9z" />
      <path d="m5.6 12.5 1.6 7h9.6l1.6-7" />
      <path d="m9.8 13 .6 6.5" />
      <path d="m14.2 13-.6 6.5" />
    </svg>
  );
}

const items: BakedItem[] = [
  {
    title: "Cinnabuffin",
    description: "Our signature bake. Start here.",
    image: {
      src: "/images/baked-cinnabuffin.jpg",
      alt: "Freshly iced Cinnabuffins on the counter",
    },
  },
  {
    title: "Choux Buns",
    description: "Crackled, filled, and never around for long.",
    image: {
      src: "/images/baked-choux-blue.jpg",
      alt: "A chocolate choux bun on a blue table outside the shop",
    },
  },
  {
    title: "Savoury Bakes",
    description: "Mushroom danishes, focaccia, and friends.",
    image: {
      src: "/images/baked-danish.jpg",
      alt: "A flaky mushroom danish, up close",
    },
  },
  {
    title: "Basque Cheesecake",
    description: "Burnt on purpose. Soft in the middle.",
    image: {
      src: "/images/baked-cheesecake.jpg",
      alt: "A slice of burnt Basque cheesecake in the sun",
    },
  },
  {
    title: "Cookies",
    description: "Choc chip, sprinkles — usually both.",
    image: {
      src: "/images/baked-cookie-blue.jpg",
      alt: "A sprinkle cookie on a plate against a blue background",
    },
  },
  {
    title: "Loaf Cakes",
    description: "Blueberry, almond — whatever's in season.",
    image: {
      src: "/images/baked-loaf-berry.jpg",
      alt: "A slice of berry loaf cake with cream and toasted almonds",
    },
  },
];

export default function Baked() {
  return (
    <section id="baked" className="scroll-mt-16 overflow-x-clip py-20 sm:py-24">
      <RevealGroup>
        <RevealItem className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-[12ch] text-5xl font-medium leading-[0.98] tracking-tight text-brand sm:text-6xl lg:text-7xl">
            Home of the
            <br />
            Cinnabuffin.
            {/* Muffin doodle sized to the type it sits beside (kept in its
                own pink — it's the bake, not the brand ink) */}
            <img
              src="/images/muffin-doodle.svg"
              alt=""
              aria-hidden
              className="pause-muffin-sway ml-[0.18em] inline-block h-[0.9em] w-auto align-[-0.08em]"
            />
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-brand sm:text-lg">
            Made from scratch, by hand, every day — that&apos;s the whole
            approach. Our signature Cinnabuffin leads the way, alongside freshly
            baked cakes, brownies, cookies, traybakes, focaccia, cupcakes and
            other homemade treats. Something new to discover most days.
          </p>
          <div className="mt-8">
            <SweepButton
              href="/baked"
              label="Our bakes in full"
              hoverLabel="Take a bite"
              icon={<MuffinIcon />}
            />
          </div>
        </RevealItem>
        <RevealItem className="mt-10 sm:mt-14">
          <BakedCarousel items={items} />
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
