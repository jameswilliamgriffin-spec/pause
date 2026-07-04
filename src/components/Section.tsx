/**
 * Shared wrapper for the anchor-linked page sections (ABOUT / COFFEE / BAKED / VISIT).
 * The id matches the nav anchor links.
 */
export default function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6 ${className}`}
    >
      {children}
    </section>
  );
}
