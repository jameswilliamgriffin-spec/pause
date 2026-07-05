"use client";

import Image from "next/image";
import { useState } from "react";
import SweepButton from "@/components/SweepButton";

/**
 * "pause. PLAYLIST" marquee — its own section above VISIT: blue on white.
 * Three infinitely looping lines of song titles (outer lines drift left→right,
 * middle right→left, pure CSS keyframes — see globals.css). Hovering a title
 * bounces its album artwork in just above the text. Rows never pause — a
 * hover-pause here made the loop look broken.
 *
 * Artwork: real covers live in /public/images/albums/*.jpg (400×400, from
 * /images/albumthumb), matched to artists via the covers map below. Artists
 * without a cover yet fall back to the generated abstract SVGs.
 *
 * PLACEHOLDER: SPOTIFY_URL is still a dummy link.
 */
const SPOTIFY_URL = "https://open.spotify.com/playlist/REPLACE_WITH_PAUSE_PLAYLIST";

/* Artist → cover file. Missing (no artwork supplied yet): YUSSEF DAYES,
   KOKOROKO, BADBADNOTGOOD, BEACH HOUSE — these keep placeholder tiles. */
const covers: Record<string, string> = {
  CARIBOU: "caribou.jpg",
  "JAMIE XX": "jamiexx.jpg",
  "FOUR TET": "fourtet.jpg",
  KHRUANGBIN: "khruangbin.jpg",
  BONOBO: "bonobo.jpg",
  "MARIBOU STATE": "mariboustate.jpg",
  "FLOATING POINTS": "floatingpoints.jpg",
  "MOUNT KIMBIE": "mountkimbie.jpg",
  "BARRY CAN'T SWIM": "barycantswim.jpg",
  BICEP: "bicep.jpg",
  OVERMONO: "overmono.jpg",
  TOURIST: "tourist.jpg",
  "ROSS FROM FRIENDS": "rossfromfriends.jpg",
  "JOY ORBISON": "joyorbison.jpg",
  "DJ SEINFELD": "djseinfeld.jpg",
  VEGYN: "vegyn.jpg",
  TSHA: "tsha.jpg",
  ROMY: "romy.jpg",
  TYCHO: "tycho.jpg",
  BIBIO: "bibio.jpg",
  "GOLD PANDA": "goldpanda.jpg",
  "NICOLAS JAAR": "nikolasjaar.jpg",
  MODERAT: "moderat.jpg",
  "ALFA MIST": "alphamist.jpg",
  "EZRA COLLECTIVE": "ezracollective.jpg",
  "TOM MISCH": "tommisch.jpg",
  "JORDAN RAKEI": "jordanrakei.jpg",
  SAULT: "sault.jpg",
  "MEN I TRUST": "menitrust.jpg",
  "THE XX": "thexx.jpg",
  "THE SMITHS": "thesmiths.jpg",
  "LCD SOUNDSYSTEM": "lcdsoundsystem.jpg",
  "TALKING HEADS": "talkingheads.jpg",
  "LITTLE SIMZ": "littlesimz.jpg",
  "LOYLE CARNER": "loylecarner.jpg",
  NUJABES: "nujabes.jpg",
  "BON IVER": "boniver.jpg",
  "NICK DRAKE": "nickdrake.jpg",
  "JOSÉ GONZÁLEZ": "josegonzalez.jpg",
};

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
  const [activeKey, setActiveKey] = useState<string | null>(null);
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
          const itemKey = `${title}-${i}`;
          const albumNo = ((rowIndex * 6 + (i % titles.length)) % 16) + 1;
          const cover = covers[title]
            ? `/images/albums/${covers[title]}`
            : `/images/albums/album-${albumNo}.svg`;
          return (
            <li
              key={itemKey}
              aria-hidden={i >= titles.length}
              className="group relative shrink-0 px-3 sm:px-4"
            >
              <button
                type="button"
                tabIndex={i >= titles.length ? -1 : 0}
                className="whitespace-nowrap font-serif text-xl italic leading-snug text-brand outline-none sm:text-3xl"
                onPointerDown={(event) => {
                  if (event.pointerType === "mouse") return;
                  event.preventDefault();
                  setActiveKey((current) =>
                    current === itemKey ? null : itemKey,
                  );
                }}
                onFocus={() => setActiveKey(itemKey)}
                onBlur={() => setActiveKey(null)}
              >
                {title},
              </button>
              {/* Album cover (or placeholder) — bounces in above the title */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cover}
                alt=""
                width={112}
                height={112}
                className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 size-20 opacity-0 shadow-xl group-hover:animate-bounce-in sm:size-24 ${
                  activeKey === itemKey ? "animate-bounce-in" : ""
                }`}
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
        <SweepButton
          href={SPOTIFY_URL}
          label="The pause. playlist"
          hoverLabel="Listen now"
          external
        />
      </div>
    </section>
  );
}
