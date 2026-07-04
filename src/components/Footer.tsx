import Image from "next/image";

/**
 * Footer — white bottom bar (contrasts with the brand-blue VISIT section
 * directly above it). Still to come per site-brief.md: multi-column blocks
 * (newsletter signup / Pause info). The playlist marquee lives above VISIT
 * (PlaylistMarquee).
 */
export default function Footer() {
  return (
    <footer className="bg-white text-brand">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-10 sm:px-6">
        <Image src="/images/pause_blue.svg" alt="pause." width={40} height={40} />
        <p className="text-sm text-brand/80">
          56 Poplar Rd, King&apos;s Heath, Birmingham B14 7AG
        </p>
      </div>
    </footer>
  );
}
