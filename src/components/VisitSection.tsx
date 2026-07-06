/**
 * VISIT — full-width looping GIF background with a heavy brand-blue duotone:
 * the footage is desaturated, then a solid brand-blue multiply layer maps it
 * into blue/black so the whole section reads as brand colour (per brief).
 * Address + hours are layered bottom-left/right like the Santa Monica
 * reference in /inspiration — kept off-centre so the footage stays visible.
 *
 * Plain <img> rather than next/image: the Image optimizer re-encodes animated
 * GIFs and can strip the animation.
 */
const hours = [
  ["Mon-Fri", "8am-4pm"],
  ["Sat & Sun", "9am-3pm"],
] as const;

/*
 * Sprinkle pattern from the packaging (see /inspiration/branding.png):
 * short white rounded strokes scattered at varied angles, tiled as an
 * inline SVG so it needs no asset request.
 */
const sprinkles = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg stroke='%23fff' stroke-width='4' stroke-linecap='round'%3E%3Cline x1='20' y1='12' x2='30' y2='22'/%3E%3Cline x1='70' y1='8' x2='60' y2='20'/%3E%3Cline x1='120' y1='18' x2='132' y2='10'/%3E%3Cline x1='12' y1='60' x2='12' y2='74'/%3E%3Cline x1='48' y1='52' x2='60' y2='44'/%3E%3Cline x1='95' y1='55' x2='105' y2='67'/%3E%3Cline x1='140' y1='60' x2='150' y2='50'/%3E%3Cline x1='30' y1='100' x2='42' y2='96'/%3E%3Cline x1='80' y1='92' x2='80' y2='106'/%3E%3Cline x1='118' y1='100' x2='130' y2='110'/%3E%3Cline x1='20' y1='140' x2='32' y2='132'/%3E%3Cline x1='65' y1='132' x2='55' y2='144'/%3E%3Cline x1='105' y1='140' x2='117' y2='146'/%3E%3Cline x1='145' y1='128' x2='145' y2='142'/%3E%3C/g%3E%3C/svg%3E")`;

export default function VisitSection() {
  return (
    <section
      id="visit"
      className="relative flex min-h-[64svh] scroll-mt-16 overflow-hidden [--pause-ink:#0000ba] [--pause-paper:#ffffff]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/visit-bg.gif"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover grayscale brightness-110"
      />
      {/* Brand duotone tint: multiply maps the footage to blue/black, the
          screen layer lifts the shadows back toward blue so it stays legible */}
      <div aria-hidden className="absolute inset-0 bg-brand mix-blend-multiply" />
      <div aria-hidden className="absolute inset-0 bg-brand/35 mix-blend-screen" />
      {/* Packaging sprinkle pattern, kept faint so the footage + text lead */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: sprinkles, backgroundSize: "240px 240px" }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-between gap-12 px-4 py-14 sm:px-6 sm:py-16">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-white/80">
            VISIT US IN
          </p>
          <h2 className="mt-2 text-4xl font-medium tracking-tight text-white sm:text-4xl">
            Kings Heath
          </h2>
        </div>

        <div className="flex flex-col gap-12 sm:flex-row sm:justify-end">
          <div className="shrink-0 space-y-8 text-white">
            <div>
              <p className="text-[1.0625rem] leading-relaxed sm:text-lg">
                56 Poplar Rd, King&apos;s Heath,
                <br />
                Birmingham B14 7AG
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pause%2C+56+Poplar+Rd%2C+King%27s+Heath%2C+Birmingham+B14+7AG"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[1.0625rem] underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-lg"
              >
                Open in Google Maps
              </a>
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-white/80">
                HOURS
              </p>
              <ul className="mt-3 space-y-1 text-[1.0625rem] sm:text-lg">
                {hours.map(([days, times]) => (
                  <li key={days} className="flex gap-6">
                    <span className="w-20">{days}</span>
                    <span>{times}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
