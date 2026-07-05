import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Our coffee — pause.",
  description:
    "The full Pause coffee story — roasters, brews and seasonal specials. Kings Heath, Birmingham.",
};

/**
 * /coffee — stub destination for the "Our coffee in full" button on the
 * homepage. Full menu/story page still to be designed.
 */
export default function CoffeePage() {
  return (
    <main className="flex min-h-svh flex-col">
      <Nav solid />
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start justify-center px-4 pt-24 sm:px-6">
        <h1 className="max-w-[12ch] text-5xl font-medium leading-[0.98] tracking-tight text-brand sm:text-6xl lg:text-7xl">
          Our coffee, in full.
        </h1>
        <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-brand sm:text-lg">
          The full menu and coffee story are brewing — check back soon, or come
          and taste it in person at 56 Poplar Rd.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-[1.0625rem] text-brand underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-lg"
        >
          ← Back to the homepage
        </Link>
      </section>
    </main>
  );
}
