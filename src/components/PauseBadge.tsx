/**
 * Circular rotating text badge — "take a pause. in your day" spinning slowly
 * around the pause icon. Hovering pauses the rotation (same joke as the hero
 * wordmark control). Pure CSS animation; honours prefers-reduced-motion via
 * the .pause-badge-ring rules in globals.css.
 */
export default function PauseBadge() {
  return (
    <div className="group relative size-48 sm:size-56" aria-hidden>
      {/* Rotating ring text */}
      <svg viewBox="0 0 200 200" className="pause-badge-ring size-full">
        <defs>
          <path
            id="pause-badge-circle"
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>
        <text
          className="fill-brand"
          style={{ fontSize: "13.5px", letterSpacing: "0.16em" }}
        >
          <textPath href="#pause-badge-circle" textLength="500">
            take a pause. in your day • take a pause. in your day •
          </textPath>
        </text>
      </svg>
      {/* Static centre: pause bars */}
      <div className="absolute inset-0 flex items-center justify-center text-brand transition-transform duration-[var(--pause-duration)] ease-[var(--pause-ease)] group-hover:scale-110">
        <svg width="44" height="44" viewBox="0 0 58 58">
          <rect x="18" y="13" width="7" height="32" rx="3.5" fill="currentColor" />
          <rect x="33" y="13" width="7" height="32" rx="3.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
