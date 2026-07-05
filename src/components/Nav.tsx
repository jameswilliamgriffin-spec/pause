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

  const linkColor = scrolled ? "text-brand" : "text-[#fff]";

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
          className="flex items-center"
        >
          <Image
            src={scrolled ? "/images/pause_blue.svg" : "/images/pause_white.svg"}
            alt="pause."
            width={44}
            height={44}
            className={`h-auto transition-[width] duration-500 ease-out ${
              scrolled ? "w-11" : "w-16 sm:w-20"
            }`}
            priority
          />
        </Link>
        {/* Mobile: links centred in the bar (absolute); desktop: pushed right
            beside the actions via ml-auto */}
        <ul className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 sm:static sm:ml-auto sm:mr-10 sm:translate-x-0 sm:translate-y-0 sm:gap-10">
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
