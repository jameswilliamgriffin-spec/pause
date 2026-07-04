import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-brand">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-10 sm:px-6">
        <Image
          src="/images/pause_blue.svg"
          alt="pause."
          width={40}
          height={40}
        />

        <div className="space-y-2 text-sm leading-relaxed text-brand/80">
          <p>56 Poplar Rd, King&apos;s Heath, Birmingham B14 7AG</p>
          <p>Mon-Fri 8am-4pm · Sat &amp; Sun 9am-3pm</p>
        </div>
      </div>
    </footer>
  );
}
