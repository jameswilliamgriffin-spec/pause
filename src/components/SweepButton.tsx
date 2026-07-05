import Link from "next/link";

/**
 * Shared fill-sweep button (styles: .playlist-btn rules in globals.css —
 * originally built for the playlist, now used site-wide). The brand-blue
 * fill sweeps up with a skewed edge on hover while hoverLabel rises into
 * place. Renders a Next <Link> for internal hrefs, <a target="_blank"> for
 * external ones.
 */
export default function SweepButton({
  href,
  label,
  hoverLabel,
  external = false,
}: {
  href: string;
  label: string;
  hoverLabel: string;
  external?: boolean;
}) {
  const className =
    "playlist-btn inline-block border border-brand/50 px-6 py-3 text-xs font-medium tracking-[0.2em] text-brand";
  const content = (
    <>
      <span className="playlist-btn-label">{label}</span>
      <span className="playlist-btn-hover">{hoverLabel}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
