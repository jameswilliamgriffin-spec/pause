import Image from "next/image";
import Sprinkles from "@/components/Sprinkles";

/**
 * Footer — white to contrast the blue VISIT section above, faint sprinkle
 * texture, sign-off line, then three columns (brand / visit / say hello)
 * and a bottom bar with copyright + back-to-top. Copy is suggested — tweak
 * freely.
 */
function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
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
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function WavingHandIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="pause-wave-hand shrink-0"
    >
      <path d="M7.8 11.2 6.1 8.3a1.55 1.55 0 0 1 .55-2.12 1.55 1.55 0 0 1 2.12.55l1.18 2.05" />
      <path d="m10 8.9-2.2-3.82a1.55 1.55 0 0 1 .55-2.12 1.55 1.55 0 0 1 2.12.55l2.08 3.6" />
      <path d="m12.55 7.12-1.2-2.08a1.55 1.55 0 0 1 .55-2.12 1.55 1.55 0 0 1 2.12.55l2.2 3.82" />
      <path d="m16.2 7.26-.46-.8a1.55 1.55 0 0 1 .55-2.12 1.55 1.55 0 0 1 2.12.55l1.78 3.08a7.1 7.1 0 0 1-12.3 7.1l-2.35-4.08" />
      <path d="M3.8 4.4 2.5 3.1" />
      <path d="M4.8 2.6 4.4.9" />
      <path d="M2.6 6.2.9 5.8" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-white text-brand">
      {/* Faint brand texture to close the page in the packaging language */}
      <Sprinkles className="opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Sign-off */}
          <div className="order-2 sm:order-1">
            <p className="text-3xl font-medium tracking-tight sm:text-4xl">
              pause. <span className="text-brand/60">take yours.</span>
            </p>
          </div>

          {/* Say hello */}
          <div className="order-3 sm:order-2">
            <p className="pause-wave-trigger flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand/70">
              Say hello
              <WavingHandIcon />
            </p>
            <a
              href="https://www.instagram.com/pausebirmingham"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2.5 text-sm transition-opacity hover:opacity-70"
            >
              <InstagramIcon />
              @pausebirmingham
            </a>
            <a
              href="mailto:hello@pausebirmingham.co.uk"
              className="mt-3 flex items-center gap-2.5 text-sm transition-opacity hover:opacity-70"
            >
              <MailIcon />
              hello@pausebirmingham.co.uk
            </a>
          </div>

          {/* Brand */}
          <div className="order-1 sm:order-3">
            <Image
              src="/images/pause_blue.svg"
              alt="pause."
              width={44}
              height={44}
            />
            <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-brand/80">
              Speciality coffee shop &amp; scratch bakery in Kings Heath,
              Birmingham. Home of the Cinnabuffin.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-brand/15 pt-6 text-xs text-brand/60 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pause. All rights reserved.</p>
          <a
            href="#top"
            className="transition-opacity hover:opacity-70"
            aria-label="Back to the top of the page"
          >
            ↑ Back to the top
          </a>
        </div>
      </div>
    </footer>
  );
}
