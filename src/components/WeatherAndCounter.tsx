"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type WeatherState =
  | "sun"
  | "rain"
  | "cloudy"
  | "snow"
  | "windy"
  | "fog"
  | "storm";

const WEATHER_STATES: WeatherState[] = [
  "sun",
  "rain",
  "cloudy",
  "snow",
  "windy",
  "fog",
  "storm",
];

/* Lowercase "pause." matches the brand wordmark */
const weatherCopy: Record<WeatherState, string> = {
  sun: "pause. for sunshine",
  rain: "pause. for a rainy day",
  cloudy: "pause. for the clouds",
  snow: "pause. for snow",
  windy: "pause. out of the wind",
  fog: "pause. till it clears",
  storm: "pause. until it passes",
};

/** Above this wind speed a calm/cloudy day reads as "windy" instead. */
const WINDY_THRESHOLD_KMH = 30;

/**
 * Map Open-Meteo's current conditions to a state. Precipitation and storms
 * win over wind; wind only overrides calm/cloudy skies.
 */
function stateFromConditions(code: number, windKmh: number): WeatherState {
  if (code >= 95) return "storm";
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "snow";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "rain";
  if (code === 45 || code === 48) return "fog";
  if (windKmh >= WINDY_THRESHOLD_KMH) return "windy";
  if (code === 0 || code === 1) return "sun";
  return "cloudy";
}

/* Minimal brand-blue line icons for the counter rows */
function CoffeeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 9h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M16 10h2a2.5 2.5 0 0 1 0 5h-2" />
      <path d="M8 5.5v1M12 5.5v1" />
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 6.5 5 19h16z" />
      <circle cx="14.5" cy="4" r="1.5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z" />
    </svg>
  );
}

/*
 * Pause Counter numbers are illustrative/static placeholders — NOT live data.
 * Wiring them to a real source is an open item in source/site-brief.md.
 */
const stats = [
  { label: "Coffees served this week", value: 487, Icon: CoffeeIcon },
  { label: "Sweet treats", value: 132, Icon: CakeIcon },
  {
    label: "People who stayed longer than planned",
    value: "Unknown",
    Icon: HeartIcon,
  },
];

function WeatherAnimation({ state }: { state: WeatherState }) {
  if (state === "sun") {
    /* Soft pulsing circle */
    return (
      <div className="flex h-24 items-center">
        <div
          className="size-20 rounded-full bg-brand"
          style={{ animation: "pause-pulse 3s ease-in-out infinite" }}
        />
      </div>
    );
  }
  if (state === "rain") {
    /*
     * Clouds (same treatment as the cloudy state, minus the sun) with rain
     * beneath — drops fall and hold, stems fade before landing, splat rings
     * scale out at the floor. Randomisation is seeded per index so server
     * and client render the same markup.
     */
    const drops = Array.from({ length: 9 }, (_, i) => {
      const r1 = ((i * 37) % 97) / 97;
      const r2 = ((i * 53) % 89) / 89;
      return {
        left: 5 + i * 7 + r1 * 4,
        delay: r1 * 0.9,
        duration: 0.6 + r2 * 0.4,
      };
    });
    return (
      <div className="relative h-36 w-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/weather-clouds.svg"
          alt=""
          className="absolute left-0 top-0 z-10 w-32"
          style={{ animation: "pause-drift 7s ease-in-out infinite" }}
        />
        {drops.map(({ left, delay, duration }, i) => (
          <span
            key={i}
            className="absolute top-[58%] w-[10px]"
            style={{
              left: `${left}%`,
              animation: `pause-drop ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <span
              className="block h-3.5 w-[1.5px]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,186,0), rgba(0,0,186,0.75))",
                animation: `pause-stem ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
            <span
              className="block h-1.5 w-[10px] rounded-[50%] border-t-2 border-dotted border-brand/60"
              style={{
                animation: `pause-splat ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          </span>
        ))}
      </div>
    );
  }
  if (state === "snow") {
    /* Slow-falling dots with a sideways sway */
    return (
      <div className="flex h-20 items-center gap-5 overflow-hidden">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="size-2 rounded-full bg-brand"
            style={{
              animation: "pause-snow 2.6s linear infinite",
              animationDelay: `${i * 0.45}s`,
            }}
          />
        ))}
      </div>
    );
  }
  if (state === "windy") {
    /* Horizontal streaks sweeping across */
    return (
      <div className="flex h-20 flex-col justify-center gap-3 overflow-hidden">
        {[
          { width: "4rem", duration: 1.9, delay: 0 },
          { width: "2.5rem", duration: 1.6, delay: 0.5 },
          { width: "3.25rem", duration: 2.1, delay: 0.9 },
        ].map((streak, i) => (
          <span
            key={i}
            className="h-[3px] rounded-full bg-brand"
            style={{
              width: streak.width,
              animation: `pause-wind ${streak.duration}s ease-in-out infinite`,
              animationDelay: `${streak.delay}s`,
            }}
          />
        ))}
      </div>
    );
  }
  if (state === "fog") {
    /* Wide soft bars, slowly drifting and breathing */
    return (
      <div className="flex h-20 flex-col justify-center gap-2">
        {[
          { width: "6rem", opacity: "bg-brand/40", duration: 9 },
          { width: "7.5rem", opacity: "bg-brand/25", duration: 12 },
          { width: "5rem", opacity: "bg-brand/30", duration: 10 },
        ].map((bar, i) => (
          <span
            key={i}
            className={`h-2 rounded-full ${bar.opacity} ${i === 1 ? "ml-4" : ""}`}
            style={{
              width: bar.width,
              animation: `pause-drift ${bar.duration}s ease-in-out infinite ${
                i % 2 ? "reverse" : ""
              }`,
            }}
          />
        ))}
      </div>
    );
  }
  if (state === "storm") {
    /* Rain dashes plus an occasional double-flash bolt */
    return (
      <div className="flex h-20 items-center gap-4 overflow-hidden">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="h-4 w-[3px] rounded-full bg-brand"
            style={{
              animation: "pause-fall 1.3s linear infinite",
              animationDelay: `${i * 0.22}s`,
            }}
          />
        ))}
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-2 text-brand"
          style={{ animation: "pause-flash 3.4s linear infinite" }}
          aria-hidden
        >
          <path d="M13 2 5 13.5h5L9.5 22 18 10h-5.5z" />
        </svg>
      </div>
    );
  }
  /* Cloudy: brand clouds SVG with the blue "sun" dot bobbing behind it */
  return (
    <div className="relative h-24 w-44">
      {/* top-0 anchors the crown, so growing the dot expands it down behind
          the clouds rather than higher above them */}
      <span
        className="absolute right-5 top-0 size-18 rounded-full bg-brand"
        style={{ animation: "pause-bob 3.2s ease-in-out infinite" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/weather-clouds.svg"
        alt=""
        className="absolute bottom-0 left-0 w-36"
        style={{ animation: "pause-drift 7s ease-in-out infinite" }}
      />
    </div>
  );
}

function CountUpNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let frameId = 0;
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, prefersReducedMotion, value]);

  const renderedValue = prefersReducedMotion ? value : displayValue;

  return <span ref={ref}>{renderedValue.toLocaleString("en-GB")}</span>;
}

export default function WeatherAndCounter() {
  /* Default to the neutral state until (or unless) the fetch resolves. */
  const [state, setState] = useState<WeatherState>(() => {
    if (typeof window === "undefined") return "cloudy";
    const override = new URLSearchParams(window.location.search).get("weather");
    if (WEATHER_STATES.includes(override as WeatherState)) {
      return override as WeatherState;
    }
    return "cloudy";
  });
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    /* Preview override: ?weather=sun|rain|cloudy|snow|windy|fog|storm */
    const override = new URLSearchParams(window.location.search).get("weather");
    const hasOverride = WEATHER_STATES.includes(override as WeatherState);

    /* Open-Meteo, free + keyless. Coordinates: Kings Heath, Birmingham. */
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.4368&longitude=-1.8923&current=weather_code,temperature_2m,wind_speed_10m",
    )
      .then((res) => res.json())
      .then((data) => {
        const code = data?.current?.weather_code;
        const wind = data?.current?.wind_speed_10m;
        if (typeof code === "number" && !hasOverride)
          setState(stateFromConditions(code, typeof wind === "number" ? wind : 0));
        const temp = data?.current?.temperature_2m;
        if (typeof temp === "number") setTemperature(temp);
      })
      .catch(() => {
        /* Keep the neutral "Pause, either way." state on failure. */
      });
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Weather widget */}
        <div className="flex flex-col justify-between gap-10 border border-brand/15 p-8 sm:p-10">
          <p className="text-sm font-medium tracking-[0.2em] text-brand/60">
            BIRMINGHAM, RIGHT NOW
            {temperature !== null && (
              <span className="text-brand"> — {Math.round(temperature)}°C</span>
            )}
          </p>
          <WeatherAnimation state={state} />
          <p className="text-3xl font-medium tracking-tight text-brand sm:text-3xl">
            {weatherCopy[state]}
          </p>
        </div>

        {/* Pause Counter — placeholder numbers, see comment above */}
        <div className="border border-brand/15 p-8 sm:p-10">
          <h2 className="text-2xl font-medium text-brand sm:text-2xl">
            Pause Counter
          </h2>
          <ul className="mt-8 space-y-5">
            {stats.map(({ label, value, Icon }) => (
              <li
                key={label}
                className="flex items-center justify-between gap-6 border-b border-brand/10 pb-4 last:border-b-0"
              >
                <span className="flex items-center gap-3 text-[1.0625rem] text-brand/80 sm:text-lg">
                  <span className="shrink-0 text-brand">
                    <Icon />
                  </span>
                  {label}
                </span>
                <span className="shrink-0 text-[1.0625rem] font-medium text-brand sm:text-lg">
                  {typeof value === "number" ? (
                    <CountUpNumber value={value} />
                  ) : (
                    value
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
