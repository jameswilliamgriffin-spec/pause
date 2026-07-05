import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Our bakes — pause.",
  description:
    "The full Pause bakery story — Cinnabuffins, cakes, cookies and more, baked from scratch in Kings Heath, Birmingham.",
};

/**
 * /baked — stub destination for the "Our bakes in full" button on the
 * homepage (mirrors /coffee). Full menu/story page still to be designed.
 */
export default function BakedPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <Nav solid />
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start justify-center px-4 pt-24 sm:px-6">
        <h1 className="max-w-[12ch] text-5xl font-medium leading-[0.98] tracking-tight text-brand sm:text-6xl lg:text-7xl">
          Our bakes, in full.
        </h1>
        <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-brand sm:text-lg">
          The full counter is still proving — check back soon, or come and see
          what Farah&apos;s pulled out of the oven at 56 Poplar Rd.
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
