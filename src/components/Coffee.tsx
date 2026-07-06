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
/* Hand-drawn coffee cup (from /source coffee.svg), fills follow
   currentColor so it inverts with the theme. The steam squiggles live in
   a .pause-steam group — see the rising-steam keyframes in globals.css. */
function CoffeeCupDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 664.04 746.79"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M492.07,573.53c38.89,5.43,112,17.66,130.82,52.24,6.34,11.66,4.45,24.83-4.36,34.65-18.16,20.24-54.07,31.07-80.69,39.15-3.75,4.3-8,8.34-13.21,10.89-12.48,6.12-24.68,10.92-38.21,14.88-73.35,21.44-159.61,24.64-235.83,18.98-44.75-3.32-100.9-11.92-141.45-29.54-6.71-2.91-11.87-7.51-15.61-13.57-27.83-8.26-64.84-18.99-84.45-39.31-12.17-12.61-12.05-30.6.06-43.18,6.81-7.07,14.94-12.23,23.61-17.31,31.18-15.38,64.79-22.4,99.21-27.9-49.95-60.28-77.88-132.1-83.06-210.62-1.55-23.53-1.23-45.79,3.57-68.75,2.78-13.27,41.31-24.86,58.03-29.04,43.2-10.8,86.97-15.88,131.47-18.2,5.5-.29,10.53.68,13.98,5.02,2.09,2.63,2.75,7.29,1.34,10.44-1.14,2.54-4.96,5.84-8.9,6.08-48.81,3.06-112.25,10.24-158.11,25.53-4.51,1.51-8.05,3.38-12.2,7.07,7.51,4.87,14.55,7.6,22.76,9.98,22.66,6.57,45.13,11.25,68.94,14.06,77.73,9.18,155.68,9.71,233.65,3.14,39.13-3.3,85.99-10.11,122.49-22.45,5.85-1.98,10.99-4.7,15.89-8.82-12-7.33-23.71-10.41-36.78-13.32-38.59-8.58-77.41-12.32-116.89-14.48-6.08-.33-10.91-4.67-11.12-9.9-.23-5.66,4.7-10.76,11.06-10.92,23.44-.59,46.05,1.94,69.39,4.83,25.61,3.17,50.15,7.63,74.72,15.34,10.75,3.38,20.65,8.04,29.7,14.25,7.19,4.94,8.91,12.61,5.45,21.41,14.03,2.69,26.57,5.68,39.07,11.17,30.64,13.45,51.42,40.87,56.14,74.21,8.65,61.08-20.43,125.27-82.94,141.92-19.64,4.85-39.53,5.62-59.71,2.66-8.18,13.55-17.34,26.31-27.83,39.41ZM175.22,584.42c23.33,22.02,50.83,38.44,81.69,47.28,43.17,12.37,89.18,9.65,130.56-7.47,23.15-9.58,43.26-23.67,61.39-40.6,53.34-49.82,86.88-116.25,96.34-188.6,3.26-24.89,5.14-49.08,2.8-74.9-17.07,6.99-34.31,11.97-52.8,15.97-44.7,9.68-89.26,14.69-135.08,17.27-52.11,2.29-103.38,1.84-155.32-2.07-34.47-2.65-67.62-7.65-100.9-16.25-11.02-2.85-20.71-6.21-31.03-11.3-3.84,98.85,30.33,192.66,102.36,260.66ZM595.96,470.25c-2.33-2.04.66-6.05-.78-9.41M573.44,366.8c-4.75,49.24-15.79,98.13-40.42,142.78,13.72,1.32,26.56-.25,39.72-4.16,51.9-15.42,76.69-69.88,64.33-120.73-7.61-31.31-33.43-49.61-63.51-56.13l.39,20.98M599.95,629.74c-5.31-5.67-11.87-9.5-18.93-13.11-32.34-14.12-67.81-19.73-102.98-24.93-42.01,45.43-95.07,69.59-157.04,72.39-68.46,3.22-127.3-21.95-173.07-72.35-36.05,6.4-71.85,12.6-105,27.84-6.07,3.34-11.56,6.93-16.19,11.92-11.47,12.36,11.03,24.89,26.42,31.22,52.21,21.51,121.76,31.56,178.95,36.04,87.96,6.9,175.72,2.57,262.16-14.64,28.53-5.68,55.87-13.3,82.28-24.66,14.56-6.26,34.07-18.32,23.39-29.73ZM448.14,712.6c-80.27,10.99-196.67,8.52-277.53-.11l-55.77-8.58c25.37,8.66,51.33,13.18,78.18,17.99,80.07,11.58,160.81,12.07,240.89-.3,25.15-3.89,48.87-9.48,73.52-17.12l-59.29,8.12Z" />
      <path d="M295.78,594.36c.63,7.03-5.45,11.79-11.83,11.45-11.57-.62-22.23-2.97-33.33-6.7-36.08-12.11-67.09-34.4-90.78-64.13-12.93-16.23-23.27-33.41-30.1-52.96-1.55-4.44-2.73-10.21-.86-14.2,2.3-4.92,7.64-6.13,12.52-5.44,4.24.6,8.42,4.13,9.93,9.18,7.5,24.96,22.01,45.14,40.29,63.61,25.58,25.84,57.74,42.27,93.51,48.36,5.34.91,10.14,5.11,10.65,10.84Z" />
      <g className="pause-steam">
        <path d="M332.77,276.2c-4.33,6.67-13.66,7-19.56,2.29-6.82-5.45-11.03-13.13-13.28-21.7-7.16-27.29,4.47-51.13,19.03-74.06,13.87-21.84,28.82-43.83,7.53-65.47-3.57-3.63-5.2-8.76-3.48-12.96,1.98-4.84,7.22-7.64,13.04-6.29,3.72.86,8.18,3.67,11.04,6.67,14.05,14.78,17.52,35.18,11.46,54.71-7.66,24.67-25.4,42.81-33.4,67.36-4.03,12.36-2.94,25.63,5.15,35.65,3.05,3.78,5.67,8.85,2.46,13.8Z" />
        <path d="M303.26,153.99c-4.94-1.09-8.99-4.86-11.7-8.82-9.76-14.26-10.99-32-4.11-48,4.2-9.76,9.83-18.37,15.58-27.35,7.97-12.46,20.16-31.09,10.01-41.14l-7.48-7.41c-4.9-4.85-6.56-11.34-2.43-16.87,3.51-4.71,10.83-5.87,16.96-2.35,17.52,10.06,25.01,32.03,18.75,51.57-10.7,33.44-43.75,53.58-23.48,81.8,2.87,3.99,3.44,9.59,1.06,13.24-2.64,4.05-7.04,6.68-13.15,5.33Z" />
        <path d="M399.61,146.88c-1.36,4.16-5.46,6.78-8.28,7.15-3.98.52-8.78-.14-11.52-3.1-15.51-16.71-17.97-40.84-7.88-61.26,14.39-29.11,42.04-49.08,15.14-67.78-5.33-3.71-6.68-10.41-4.03-15.64s9.95-7.38,16.02-4.35c18.48,9.22,27.38,30.44,21.54,50.52-9.3,32-42.7,54.54-24.16,79.94,2.87,3.93,4.86,9.36,3.17,14.52Z" />
      </g>
    </svg>
  );
}

function CoffeeCupIcon() {
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
      <path d="M4 9h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9z" />
      <path d="M16 10h2a2.5 2.5 0 0 1 0 5h-2" />
      <path d="M7.5 6V4.5" />
      <path d="M11 6V4.5" />
    </svg>
  );
}

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
    /* Stand-in photo — swap for a roastery/beans shot when one exists */
    title: "The Roast",
    description:
      "Roasted in small batches, by people who take it as seriously as we do.",
    image: {
      src: "/images/coffee-latte-top.jpg",
      alt: "A latte with rosetta art from above, on a speckled table",
    },
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
            {/* Steaming cup doodle sized to the type it sits beside */}
            <CoffeeCupDoodle className="ml-[0.18em] inline-block h-[0.92em] w-auto align-[-0.08em]" />
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
              icon={<CoffeeCupIcon />}
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
