import Image from "next/image";

/**
 * "pause. PLAYLIST" marquee — its own section above VISIT: blue on white.
 * Three infinitely looping lines of song titles (outer lines drift left→right,
 * middle right→left, pure CSS keyframes — see globals.css). Hovering a title
 * bounces its album artwork in just above the text. Rows never pause — a
 * hover-pause here made the loop look broken.
 *
 * PLACEHOLDER CONTENT — swap when the real Pause playlist is confirmed:
 * - Song titles below are stand-ins (the intended playlist list never reached
 *   me — paste it and I'll swap these).
 * - Artwork = generated abstract covers in /public/images/albums/.
 * - SPOTIFY_URL is a dummy link.
 */
const SPOTIFY_URL = "https://open.spotify.com/playlist/REPLACE_WITH_PAUSE_PLAYLIST";

const rows: { titles: string[]; direction: "ltr" | "rtl"; duration: number }[] = [
  {
    direction: "ltr",
    duration: 70,
    titles: [
      "CARIBOU",
      "JAMIE XX",
      "FOUR TET",
      "KHRUANGBIN",
      "BONOBO",
      "MARIBOU STATE",
      "FLOATING POINTS",
      "MOUNT KIMBIE",
      "BARRY CAN'T SWIM",
      "BICEP",
      "OVERMONO",
      "TOURIST",
      "ROSS FROM FRIENDS",
      "JOY ORBISON",
    ],
  },
  {
    direction: "rtl",
    duration: 85,
    titles: [
      "DJ SEINFELD",
      "VEGYN",
      "TSHA",
      "ROMY",
      "TYCHO",
      "BIBIO",
      "GOLD PANDA",
      "NICOLAS JAAR",
      "MODERAT",
      "ALFA MIST",
      "YUSSEF DAYES",
      "KOKOROKO",
      "BADBADNOTGOOD",
      "EZRA COLLECTIVE",
    ],
  },
  {
    direction: "ltr",
    duration: 78,
    titles: [
      "TOM MISCH",
      "JORDAN RAKEI",
      "SAULT",
      "MEN I TRUST",
      "BEACH HOUSE",
      "THE XX",
      "THE SMITHS",
      "LCD SOUNDSYSTEM",
      "TALKING HEADS",
      "LITTLE SIMZ",
      "LOYLE CARNER",
      "NUJABES",
      "BON IVER",
      "NICK DRAKE",
      "JOSÉ GONZÁLEZ",
    ],
  },
];

function MarqueeRow({
  titles,
  direction,
  duration,
  rowIndex,
}: {
  titles: string[];
  direction: "ltr" | "rtl";
  duration: number;
  rowIndex: number;
}) {
  /* Content rendered twice for the seamless 50% loop — duplicates are
     hidden from assistive tech. */
  const doubled = [...titles, ...titles];
  return (
    <div className="overflow-x-clip">
      <ul
        className="flex w-max items-center will-change-transform"
        style={{
          animation: `pause-marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((title, i) => {
          const albumNo = ((rowIndex * 6 + (i % titles.length)) % 16) + 1;
          return (
            <li
              key={`${title}-${i}`}
              aria-hidden={i >= titles.length}
              className="group relative shrink-0 px-3 sm:px-4"
            >
              <span className="whitespace-nowrap font-serif text-xl italic leading-snug text-brand sm:text-3xl">
                {title},
              </span>
              {/* Generated placeholder cover — bounces in above the title */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/albums/album-${albumNo}.svg`}
                alt=""
                width={112}
                height={112}
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 size-20 opacity-0 shadow-xl group-hover:animate-bounce-in sm:size-24"
                style={{ transform: "translate(-50%, 14px) scale(0.5)" }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function PlaylistMarquee() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="flex items-center justify-center gap-3">
        <span className="group relative size-11">
          <Image
            src="/images/pause_blue.svg"
            alt="pause."
            width={44}
            height={44}
            className="absolute inset-0 transition-opacity duration-[var(--pause-duration)] ease-[var(--pause-ease)] group-hover:opacity-0"
          />
          <Image
            src="/images/pause_white.svg"
            alt=""
            width={44}
            height={44}
            className="absolute inset-0 opacity-0 transition-opacity duration-[var(--pause-duration)] ease-[var(--pause-ease)] group-hover:opacity-100"
          />
        </span>
        <p className="text-3xl font-bold uppercase tracking-tight text-brand sm:text-4xl">
          Playlist
        </p>
      </div>

      <div className="mt-8 space-y-2 sm:mt-10 sm:space-y-3">
        {rows.map((row, i) => (
          <MarqueeRow key={i} {...row} rowIndex={i} />
        ))}
      </div>

      <div className="mt-8 text-center sm:mt-10">
        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-brand/50 px-6 py-3 text-xs font-medium tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
        >
          LISTEN TO PLAYLIST
        </a>
      </div>
    </section>
  );
}
