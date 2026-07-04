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

export default function Footer() {
  return (
    <footer className="relative bg-white text-brand">
      {/* Faint brand texture to close the page in the packaging language */}
      <Sprinkles className="opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Sign-off */}
          <div>
            <p className="text-3xl font-medium tracking-tight sm:text-4xl">
              pause. <span className="text-brand/60">take yours.</span>
            </p>
          </div>

          {/* Say hello */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand/70">
              Say hello
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
          <div>
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
