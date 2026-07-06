"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/#about", label: "about." },
  { href: "/#coffee", label: "coffee." },
  { href: "/#baked", label: "baked." },
  { href: "/#visit", label: "visit." },
];

export default function Nav({ solid = false }: { solid?: boolean }) {
  /* Transparent over the hero; white bar + blue branding once scrolled.
     Pages without a dark hero (e.g. /coffee) pass solid to skip the
     transparent state entirely. */
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrolled = solid || hasScrolled;

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = scrolled ? "text-brand" : "pause-hero-nav";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav
        className={`relative mx-auto flex max-w-6xl items-center justify-between px-4 transition-[height] duration-500 ease-out sm:px-6 ${
          scrolled ? "h-16" : "h-20 sm:h-24"
        }`}
      >
        <Link
          href="/#top"
          aria-label="Pause — back to top"
          className="group flex items-center"
        >
          {/* Hover: the roundel tilts and crossfades into a pause symbol */}
          <span
            className={`relative grid aspect-square shrink-0 place-items-center overflow-hidden rounded-full transition-[width,transform] duration-500 ease-out will-change-transform group-hover:-rotate-12 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 ${
              scrolled ? "w-11" : "w-16 sm:w-20"
            }`}
          >
            <Image
              src={scrolled ? "/images/pause_blue.svg" : "/images/pause_white.svg"}
              alt="pause."
              fill
              sizes={scrolled ? "44px" : "(min-width: 640px) 80px, 64px"}
              className={`object-contain transition-opacity duration-[var(--pause-duration)] ease-[var(--pause-ease)] will-change-opacity group-hover:opacity-0 motion-reduce:transition-none ${
                scrolled ? "" : "pause-hero-nav-logo"
              }`}
              preload
            />
            {/* Bars sized to the band the "pause." wordmark occupies in the
                roundel (~21% of the circle) so the swap feels like-for-like */}
            <span
              aria-hidden
              className={`absolute inset-0 flex items-center justify-center gap-[7%] rounded-full opacity-0 transition-opacity duration-[var(--pause-duration)] ease-[var(--pause-ease)] will-change-opacity group-hover:opacity-100 motion-reduce:transition-none ${
                scrolled ? "bg-brand text-white" : "pause-hero-nav-pause"
              }`}
            >
              <span className="h-[22%] w-[5.5%] rounded-full bg-current" />
              <span className="h-[22%] w-[5.5%] rounded-full bg-current" />
            </span>
          </span>
        </Link>
        {/* Mobile: links centred in the space between logo and actions (a
            viewport-centred absolute ul collides with the icons at ~375px);
            desktop: pushed right beside the actions via ml-auto */}
        <ul className="flex flex-1 items-center justify-center gap-3 px-2 sm:flex-none sm:justify-start sm:gap-10 sm:px-0 sm:ml-auto sm:mr-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-[11px] font-medium tracking-[0.12em] transition-opacity after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-[var(--pause-duration)] after:ease-[var(--pause-ease)] hover:opacity-70 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none sm:text-sm sm:tracking-[0.2em] ${linkColor}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={`flex items-center gap-4 sm:gap-5 ${linkColor}`}>
          <a
            href="https://www.instagram.com/pausebirmingham"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pause on Instagram"
            className="block opacity-80 transition-opacity hover:opacity-100"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden
            >
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
