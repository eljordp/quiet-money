"use client";

import { useMemo, useState } from "react";

type Profile = {
  id: string;
  name: string;
  blurb: string;
  multiple: number; // SDE multiple
  margin: number; // SDE as % of revenue
  cap: number; // business price you can target per $1 of your liquid
};

const PROFILES: Profile[] = [
  {
    id: "carwash",
    name: "Car wash",
    blurb: "Express or self-serve. Local recurring traffic, real estate often included in the deal.",
    multiple: 3.0,
    margin: 0.28,
    cap: 18,
  },
  {
    id: "cpa",
    name: "CPA firm",
    blurb: "Annual recurring revenue. Sticky clients. Modernizing intake & onboarding doubles capacity.",
    multiple: 2.8,
    margin: 0.35,
    cap: 22,
  },
  {
    id: "cleaning",
    name: "Cleaning",
    blurb: "Contract-based commercial cleaning. Recurring revenue, low capital, room for SaaS-style scheduling.",
    multiple: 2.5,
    margin: 0.18,
    cap: 20,
  },
  {
    id: "pest",
    name: "Pest control",
    blurb: "Quarterly recurring contracts. Premium SDE multiples. Software & routing modernization pays.",
    multiple: 3.5,
    margin: 0.25,
    cap: 20,
  },
  {
    id: "bodyshop",
    name: "Body shop",
    blurb: "Insurance-backed revenue. Steady local demand. Operations are the lever.",
    multiple: 2.5,
    margin: 0.15,
    cap: 16,
  },
];

const TIERS = [10000, 15000, 20000, 35000, 50000, 75000, 100000];

function fmt(n: number): string {
  if (n >= 1_000_000) {
    const v = n / 1_000_000;
    return `$${v.toFixed(v >= 10 ? 1 : 2).replace(/\.0+$/, "").replace(/(\.\d)0$/, "$1")}M`;
  }
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n).toLocaleString()}`;
}

export function RunYourNumbers() {
  const [liquid, setLiquid] = useState(20000);
  const [profileId, setProfileId] = useState("carwash");

  const profile = PROFILES.find((p) => p.id === profileId)!;

  const math = useMemo(() => {
    const businessPrice = liquid * profile.cap;
    const annualSDE = businessPrice / profile.multiple;
    const annualRevenue = annualSDE / profile.margin;
    const takeHomeY3 = annualSDE * 0.45;
    const exitSDE = annualSDE * 3;
    const exitPrice = exitSDE * profile.multiple;
    const lumpSum = exitPrice * 0.6;
    return {
      businessPrice,
      annualRevenue,
      annualSDE,
      takeHomeY3,
      exitPrice,
      lumpSum,
    };
  }, [liquid, profile]);

  return (
    <section id="numbers" className="border-b border-line bg-night-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-amber">
              Run your numbers
            </p>
            <h2 className="font-serif text-4xl leading-[0.95] text-cream md:text-6xl">
              Your stack.
              <br />
              <em className="text-amber">Your exit.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream-soft md:text-base">
            Pick what you&apos;re working with and an industry you&apos;d
            operate in. We&apos;ll show you the realistic shape of the deal.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-10">
            <div>
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="liquid"
                  className="text-xs uppercase tracking-[0.25em] text-cream-soft"
                >
                  Liquid capital you have
                </label>
                <span className="numeral font-serif text-3xl font-bold text-amber md:text-4xl">
                  {fmt(liquid)}
                </span>
              </div>
              <input
                id="liquid"
                type="range"
                min={10000}
                max={100000}
                step={2500}
                value={liquid}
                onChange={(e) => setLiquid(Number(e.target.value))}
                className="mt-6 w-full accent-amber"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                {TIERS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setLiquid(t)}
                    className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-widest transition ${
                      liquid === t
                        ? "border-amber bg-amber text-night"
                        : "border-line text-cream-soft hover:border-amber hover:text-amber"
                    }`}
                  >
                    {fmt(t)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cream-soft">
                Industry
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
                {PROFILES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setProfileId(p.id)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                      profileId === p.id
                        ? "border-amber bg-amber/10 text-cream"
                        : "border-line text-cream-soft hover:border-amber/60"
                    }`}
                  >
                    <span className="block font-serif text-lg text-cream">
                      {p.name}
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-widest text-cream-soft/70">
                      {p.multiple}× SDE
                    </span>
                  </button>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-cream-soft">
                {profile.blurb}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber/30 bg-gradient-to-br from-night-3 to-night p-8 md:p-10">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-amber">
              <span>The deal you&apos;d run</span>
              <span className="shimmer inline-block h-1.5 w-1.5 rounded-full bg-amber" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
              <Cell label="Business you&apos;d buy" value={fmt(math.businessPrice)} />
              <Cell label="Annual revenue" value={fmt(math.annualRevenue)} />
              <Cell label="Annual cash flow" value={fmt(math.annualSDE)} />
              <Cell label="Your year-3 take-home" value={fmt(math.takeHomeY3)} />
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-cream-soft">
                Exit in 3 years
              </p>
              <div className="mt-4 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-cream-soft/70">
                    Sale price
                  </p>
                  <p className="numeral mt-1 font-serif text-3xl font-bold text-cream md:text-4xl">
                    {fmt(math.exitPrice)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-amber">
                    Lump sum to you
                  </p>
                  <p className="numeral mt-1 font-serif text-3xl font-bold text-amber md:text-5xl">
                    {fmt(math.lumpSum)}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#apply"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber px-6 py-4 text-sm font-semibold uppercase tracking-widest text-night transition hover:bg-amber-2"
            >
              Apply with these numbers
              <span>→</span>
            </a>

            <p className="mt-6 text-[11px] leading-relaxed text-cream-soft/70">
              Ranges are illustrative, based on typical SDE multiples and
              cash-flow margins for the industry. Real deals vary. We tell you
              what your specific numbers look like on the qualifying call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="text-[10px] uppercase tracking-[0.25em] text-cream-soft/70"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <p className="numeral mt-1 font-serif text-2xl font-bold text-cream md:text-3xl">
        {value}
      </p>
    </div>
  );
}
