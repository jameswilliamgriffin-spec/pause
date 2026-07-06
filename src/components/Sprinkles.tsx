/**
 * The packaging sprinkle pattern (see /inspiration/branding.png) as a
 * reusable texture layer. Implemented as a CSS mask filled with the theme
 * ink variable, so it renders brand blue on paper and flips to white when
 * the site is inverted. Control strength/placement via className
 * (e.g. "opacity-[0.06]").
 *
 * VisitSection keeps its own white inline version (it sits on photography,
 * which doesn't invert).
 */
const sprinkleMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg stroke='%23fff' stroke-width='4' stroke-linecap='round'%3E%3Cline x1='20' y1='12' x2='30' y2='22'/%3E%3Cline x1='70' y1='8' x2='60' y2='20'/%3E%3Cline x1='120' y1='18' x2='132' y2='10'/%3E%3Cline x1='12' y1='60' x2='12' y2='74'/%3E%3Cline x1='48' y1='52' x2='60' y2='44'/%3E%3Cline x1='95' y1='55' x2='105' y2='67'/%3E%3Cline x1='140' y1='60' x2='150' y2='50'/%3E%3Cline x1='30' y1='100' x2='42' y2='96'/%3E%3Cline x1='80' y1='92' x2='80' y2='106'/%3E%3Cline x1='118' y1='100' x2='130' y2='110'/%3E%3Cline x1='20' y1='140' x2='32' y2='132'/%3E%3Cline x1='65' y1='132' x2='55' y2='144'/%3E%3Cline x1='105' y1='140' x2='117' y2='146'/%3E%3Cline x1='145' y1='128' x2='145' y2='142'/%3E%3C/g%3E%3C/svg%3E")`;

export default function Sprinkles({
  className = "",
  color = "var(--pause-ink)",
  drift = false,
}: {
  className?: string;
  /* Fixed colour for layers over photography, which doesn't invert
     with the theme (e.g. "#fff" on the hero) */
  color?: string;
  /* Slow diagonal drift (see .pause-sprinkle-drift in globals.css).
     The layer is oversized by one 240px tile so the loop is seamless;
     the parent needs overflow-hidden. */
  drift?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${
        drift ? "-inset-60 pause-sprinkle-drift" : "inset-0"
      } ${className}`}
      style={{
        backgroundColor: color,
        maskImage: sprinkleMask,
        maskSize: "240px 240px",
        WebkitMaskImage: sprinkleMask,
        WebkitMaskSize: "240px 240px",
      }}
    />
  );
}
