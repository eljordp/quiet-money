import { ApplyForm } from "./apply-form";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Thesis />
      <HowItWorks />
      <Industries />
      <ExampleDeal />
      <WhoThisIsFor />
      <Apply />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-xl tracking-tight text-ink">
          Quiet Money
        </a>
        <nav className="hidden gap-8 text-sm text-ink-soft md:flex">
          <a href="#thesis" className="hover:text-blood">
            Thesis
          </a>
          <a href="#how" className="hover:text-blood">
            How
          </a>
          <a href="#example" className="hover:text-blood">
            Example
          </a>
          <a href="#who" className="hover:text-blood">
            Who it&apos;s for
          </a>
        </nav>
        <a
          href="#apply"
          className="rounded-full border border-ink bg-ink px-5 py-2 text-xs uppercase tracking-widest text-bone transition hover:bg-blood hover:border-blood"
        >
          Apply
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-28 md:py-40">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-mute">
          By invitation
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
          Own a business
          <br />
          no one&apos;s bragging about.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
          The quietest path to real wealth in America is the same one boomers
          walked for forty years. Buy a boring, cash-flowing business. Run it.
          Sell it. We help operators do exactly that, without writing a check
          for the whole thing.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#apply"
            className="rounded-full bg-ink px-8 py-4 text-sm uppercase tracking-widest text-bone transition hover:bg-blood"
          >
            See if you qualify
          </a>
          <a
            href="#thesis"
            className="text-sm uppercase tracking-widest text-ink-soft underline-offset-8 hover:underline"
          >
            Read the thesis
          </a>
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section id="thesis" className="border-b border-line bg-bone-deep">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-mute">
          The thesis
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Ten thousand boomers
          <br />
          retire every day.
        </h2>
        <div className="mt-10 grid gap-10 text-base leading-relaxed text-ink-soft md:grid-cols-2 md:text-lg">
          <p>
            Most of them own a business. A car wash. An accounting practice. A
            cleaning company that&apos;s done $600K a year for twenty years.
            They built it. They&apos;re ready to step out. Their kids
            don&apos;t want it.
          </p>
          <p>
            That business has to go somewhere. Most owners would rather sell to
            a person than a private equity roll-up. The right buyer can step
            in, modernize what the founder never bothered to, and 3 to 5x the
            revenue in a few years.
          </p>
          <p>
            You don&apos;t need to be rich. You need enough liquid to start the
            engine. Business credit, seller financing, and outside capital fund
            the actual purchase. Your savings stay where they are.
          </p>
          <p>
            That&apos;s the play. Real ownership of a real business, bought
            with structured capital, scaled with modern tools, exited inside
            five years.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Qualify",
      body: "A short call. Liquid, credit, timeline, the kind of operator you actually want to be. If you're a fit we move. If not, we'll tell you.",
    },
    {
      n: "02",
      title: "Position",
      body: "We get your file in shape for serious business funding. Personal credit cleaned where needed, corporate structure set up to qualify for real leverage.",
    },
    {
      n: "03",
      title: "Source",
      body: "Our acquisitions team scouts your market for boring, profitable businesses with clean financials. Negotiations and financing handled end to end.",
    },
    {
      n: "04",
      title: "Operate",
      body: "You take the keys. We help you modernize what the seller didn't. Better systems, better marketing, better margins. Real numbers, not theory.",
    },
    {
      n: "05",
      title: "Exit",
      body: "Run for two to five years. Service the debt, scale the revenue, then sell into a multiple. The lump sum funds whatever's next.",
    },
  ];
  return (
    <section id="how" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-mute">
          How it works
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Five steps. Built in.
        </h2>
        <ol className="mt-16 divide-y divide-line border-y border-line">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid gap-6 py-10 md:grid-cols-[120px_220px_1fr] md:items-baseline md:gap-12"
            >
              <span className="font-serif text-3xl text-blood">{s.n}</span>
              <h3 className="font-serif text-2xl text-ink">{s.title}</h3>
              <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Industries() {
  const list = [
    "Accounting & CPA firms",
    "Car washes",
    "Commercial cleaning",
    "Insurance brokerages",
    "Body shops",
    "Pest control",
    "Document storage & shredding",
    "Tent rental",
    "Sign making",
    "Auto dealers",
    "Meal prep operations",
    "Independent gyms",
  ];
  return (
    <section className="border-b border-line bg-bone-deep">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-mute">
          What you&apos;d be buying
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Unsexy. Profitable.
          <br />
          Older than you.
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          These are the industries we&apos;ve seen work. Simple operations.
          Recurring revenue. Existing staff. Owners who never modernized
          because they never had to. That&apos;s your edge.
        </p>
        <ul className="mt-12 grid gap-x-12 gap-y-4 font-serif text-2xl text-ink md:grid-cols-2 md:text-3xl">
          {list.map((i) => (
            <li key={i} className="border-b border-line pb-3">
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ExampleDeal() {
  const rows: [string, string][] = [
    ["Asking price", "$400,000"],
    ["Annual cash flow", "$125,000"],
    ["Annual revenue", "$500,000"],
    ["Down from your capital", "~$20,000"],
    ["Business funding used", "$200,000"],
    ["Seller / outside financing", "$200,000"],
  ];
  return (
    <section id="example" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-mute">
          Example deal
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          $20K in.
          <br />
          $800K out.
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Illustrative, not a promise. A typical structure on a small services
          business we&apos;d look at. The math is the math.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="border border-line bg-bone p-8">
            <h3 className="font-serif text-2xl text-ink">The buy</h3>
            <dl className="mt-6 divide-y divide-line">
              {rows.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between py-3 text-sm"
                >
                  <dt className="text-mute">{k}</dt>
                  <dd className="font-serif text-xl text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border border-line bg-ink p-8 text-bone">
            <h3 className="font-serif text-2xl">The exit</h3>
            <p className="mt-6 text-sm leading-relaxed text-bone/80">
              Run the business for two to three years. Service the debt out of
              cash flow. Modernize operations. Triple revenue from $500K to
              $1.5M.
            </p>
            <dl className="mt-8 divide-y divide-bone/15">
              <div className="flex items-baseline justify-between py-3 text-sm">
                <dt className="text-bone/70">New valuation</dt>
                <dd className="font-serif text-xl">$1,200,000</dd>
              </div>
              <div className="flex items-baseline justify-between py-3 text-sm">
                <dt className="text-bone/70">Remaining debt</dt>
                <dd className="font-serif text-xl">~$400,000</dd>
              </div>
              <div className="flex items-baseline justify-between py-3 text-sm">
                <dt className="text-bone/70">Lump sum to you</dt>
                <dd className="font-serif text-2xl text-bone">~$800,000</dd>
              </div>
            </dl>
            <p className="mt-8 border-t border-bone/15 pt-6 text-xs uppercase tracking-widest text-bone/60">
              Rinse. Repeat. Stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  const fits = [
    "You have $20K or more sitting liquid",
    "You earn stable income (W-2 or your own business)",
    "You're tired of trading hours for money",
    "You're willing to operate, not chase passive",
    "You can be patient for two to five years",
  ];
  const notFits = [
    "You want guaranteed returns by next quarter",
    "You won't put any of your own money in",
    "You're looking for a side hustle",
    "You won't take a phone call to get started",
  ];
  return (
    <section id="who" className="border-b border-line bg-bone-deep">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-mute">
          Who this is for
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          We&apos;re picky.
          <br />
          You should be too.
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl text-ink">A fit</h3>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
              {fits.map((f) => (
                <li key={f} className="flex gap-4 border-b border-line pb-4">
                  <span className="font-serif text-blood">+</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-ink">Not a fit</h3>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-mute md:text-lg">
              {notFits.map((f) => (
                <li key={f} className="flex gap-4 border-b border-line pb-4">
                  <span className="font-serif">&mdash;</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section id="apply" className="border-b border-line">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-mute">
          Apply
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Five minutes.
          <br />
          We&apos;ll be in touch this week.
        </h2>
        <p className="mt-8 text-base leading-relaxed text-ink-soft md:text-lg">
          Be honest on the numbers. Soft tire-kickers get filtered out, real
          operators get a phone call. We work with a small number of people at
          a time.
        </p>
        <div className="mt-12">
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-serif text-2xl">Quiet Money</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/70">
              We connect qualified operators with an established acquisitions
              group. Sourcing, financing, and consulting are handled by our
              partner firm. Apply only if you&apos;re ready to do the work.
            </p>
          </div>
          <div className="text-sm text-bone/70">
            <p className="text-xs uppercase tracking-[0.3em] text-bone/50">
              Disclosure
            </p>
            <p className="mt-3 leading-relaxed">
              Quiet Money is an introduction service. We are not a lender,
              broker-dealer, or fiduciary. All financing decisions, business
              valuations, and acquisitions are independently advised and
              executed. Past results don&apos;t guarantee future returns.
              Nothing here is investment advice.
            </p>
          </div>
        </div>
        <div className="mt-16 border-t border-bone/15 pt-6 text-xs uppercase tracking-[0.3em] text-bone/40">
          © {new Date().getFullYear()} Quiet Money
        </div>
      </div>
    </footer>
  );
}
