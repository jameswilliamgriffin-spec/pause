import Image from "next/image";
import Sprinkles from "@/components/Sprinkles";

export default function Footer() {
  return (
    <footer className="relative bg-white text-brand">
      {/* Faint brand texture to close the page in the packaging language */}
      <Sprinkles className="opacity-[0.07]" />
      <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-4 py-10 sm:px-6">
        <Image
          src="/images/pause_blue.svg"
          alt="pause."
          width={40}
          height={40}
        />

        <div className="space-y-0.5 text-sm leading-snug text-brand/80">
          <p>56 Poplar Rd, King&apos;s Heath, Birmingham B14 7AG</p>
          <p>Mon-Fri 8am-4pm · Sat &amp; Sun 9am-3pm</p>
        </div>
      </div>
    </footer>
  );
}
