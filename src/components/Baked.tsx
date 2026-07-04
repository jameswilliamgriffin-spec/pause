import BakedCarousel, { type BakedItem } from "@/components/BakedCarousel";
import { RevealGroup, RevealItem } from "@/components/Reveal";

/**
 * BAKED — "Home of the Cinnabuffin." heading + approved body copy, then a
 * permanently revolving carousel (BakedCarousel).
 *
 * Copy notes: tile descriptions besides Cinnabuffin's are drafted here —
 * still draft, swap once approved.
 */
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
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-brand sm:text-lg">
            Made from scratch, by hand, every day — that&apos;s the whole
            approach. Our signature Cinnabuffin leads the way, alongside freshly
            baked cakes, brownies, cookies, traybakes, focaccia, cupcakes and
            other homemade treats. Something new to discover most days.
          </p>
        </RevealItem>
        <RevealItem className="mt-10 sm:mt-14">
          <BakedCarousel items={items} />
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
