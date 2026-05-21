import { ApplyForm } from "./apply-form";
import { RunYourNumbers } from "./calculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-night text-cream">
      <Nav />
      <Hero />
      <Manifesto />
      <RunYourNumbers />
      <HowItWorks />
      <Industries />
      <Proof />
      <WhoThisIsFor />
      <Apply />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-night/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-cream">
            Stack
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.35em] text-amber sm:inline">
            est. 2026
          </span>
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-cream-soft md:flex">
          <a href="#numbers" className="hover:text-amber">
            Numbers
          </a>
          <a href="#how" className="hover:text-amber">
            How
          </a>
          <a href="#own" className="hover:text-amber">
            Own
          </a>
          <a href="#who" className="hover:text-amber">
            Who
          </a>
        </nav>
        <a
          href="#apply"
          className="rounded-full bg-amber px-5 py-2 text-xs font-semibold uppercase tracking-widest text-night transition hover:bg-amber-2"
        >
          Run mine
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line grain"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <p className="rise mb-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-amber">
          <span className="shimmer inline-block h-1.5 w-1.5 rounded-full bg-amber" />
          12 seats / year
        </p>

        <h1 className="rise-2 font-serif text-[clamp(3.25rem,9vw,7.5rem)] font-black leading-[0.92] tracking-tight text-cream">
          Twenty <span className="italic text-amber">stacks</span> in.
          <br />
          Eight hundred <span className="italic text-amber">out</span>.
        </h1>

        <p className="rise-3 mt-10 max-w-2xl text-lg leading-relaxed text-cream-soft md:text-xl">
          We help operators buy boring, cash-flowing American businesses
          using funded capital. You bring the work ethic. We bring the deal,
          the money, and the exit. Three years from now you cash out and
          start the second one.
        </p>

        <div className="rise-3 mt-12 flex flex-wrap items-center gap-5">
          <a
            href="#numbers"
            className="group inline-flex items-center gap-3 rounded-full bg-amber px-8 py-4 text-sm font-semibold uppercase tracking-widest text-night transition hover:bg-amber-2"
          >
            Run my numbers
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#apply"
            className="text-sm uppercase tracking-widest text-cream-soft underline-offset-8 hover:underline"
          >
            Skip to apply
          </a>
        </div>

        <div className="mt-24 grid max-w-4xl grid-cols-3 gap-6 border-t border-line pt-10 md:gap-12">
          <Stat top="$20K" bottom="Your starting capital" />
          <Stat top="$400K" bottom="Business you'd buy" />
          <Stat top="$800K+" bottom="Your lump sum exit" />
        </div>
      </div>
    </section>
  );
}

function Stat({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div>
      <p className="numeral font-serif text-3xl font-bold tracking-tight text-amber md:text-5xl">
        {top}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream-soft">
        {bottom}
      </p>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="border-b border-line bg-night-2">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-amber">
          The play
        </p>
        <p className="font-serif text-3xl leading-[1.15] text-cream md:text-5xl">
          Ten thousand boomers retire <em className="text-amber">every</em>{" "}
          day. Each one walks away from a business that runs without them.{" "}
          <span className="text-cream-soft">
            Most of those businesses get sold for pennies, rolled up by private
            equity, or shut down.
          </span>{" "}
          That&apos;s where you come in.
        </p>
        <div className="mt-12 grid gap-8 border-t border-line pt-10 text-base leading-relaxed text-cream-soft md:grid-cols-3 md:text-lg">
          <p>
            <span className="font-serif text-amber">01.</span> They sourced the
            land. Built the routes. Hired the crew. You don&apos;t need to do
            any of that. The hard part is done.
          </p>
          <p>
            <span className="font-serif text-amber">02.</span> Business credit
            and outside capital fund the buy. Your savings stay liquid. The
            company services its own debt.
          </p>
          <p>
            <span className="font-serif text-amber">03.</span> Modernize what
            the founder didn&apos;t. 3 to 5x revenue in two years. Sell into a
            multiple. Take the lump sum.
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
      t: "Qualify",
      d: "Short call. Liquid, credit, timeline. If you&apos;re a fit we move. If not, we&apos;ll say so.",
    },
    {
      n: "02",
      t: "Position",
      d: "Personal credit cleaned. Corporate structure built. Funding lines opened in your name.",
    },
    {
      n: "03",
      t: "Source",
      d: "Acquisitions team scouts your market. Boring profitable businesses with clean books.",
    },
    {
      n: "04",
      t: "Operate",
      d: "You take the keys. We help modernize. Better systems, better marketing, better margins.",
    },
    {
      n: "05",
      t: "Exit",
      d: "Run for two to five years. Service the debt. Scale the revenue. Sell. Cash out. Repeat.",
    },
  ];
  return (
    <section id="how" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-amber">
              How it works
            </p>
            <h2 className="font-serif text-4xl leading-[0.95] text-cream md:text-6xl">
              Five steps.
              <br />
              <em className="text-amber">All</em> done with you.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream-soft md:text-base">
            We&apos;re not selling a course. Our team executes alongside you
            from first call to exit check.
          </p>
        </div>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="bg-night p-8">
              <p className="numeral font-serif text-4xl font-bold text-amber md:text-5xl">
                {s.n}
              </p>
              <h3 className="mt-6 font-serif text-2xl text-cream">{s.t}</h3>
              <p
                className="mt-3 text-sm leading-relaxed text-cream-soft"
                dangerouslySetInnerHTML={{ __html: s.d }}
              />
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
    "Document storage",
    "Tent rental",
    "Sign making",
    "Auto dealerships",
    "Meal prep operations",
    "Independent gyms",
  ];
  return (
    <section id="own" className="border-b border-line bg-night-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-amber">
          What you&apos;d own
        </p>
        <h2 className="font-serif text-4xl leading-[0.95] text-cream md:text-6xl">
          Unsexy. Profitable.
          <br />
          <em className="text-amber">Yours.</em>
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream-soft md:text-lg">
          Twelve thousand small businesses change hands every month in
          America. The ones we hunt: simple operations, recurring revenue,
          existing staff, owners who never modernized. That last part is your
          edge.
        </p>
        <ul className="mt-12 grid gap-x-12 gap-y-2 font-serif text-3xl md:grid-cols-2 md:text-4xl">
          {list.map((i) => (
            <li
              key={i}
              className="group flex items-center justify-between border-b border-line py-4 text-cream transition hover:text-amber"
            >
              <span>{i}</span>
              <span className="text-amber opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <blockquote className="font-serif text-3xl leading-[1.15] text-cream md:text-5xl">
          &ldquo;The fastest way to a seven-figure exit isn&apos;t a startup.
          It&apos;s a <em className="text-amber">boring</em> business someone
          else already built.&rdquo;
        </blockquote>
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-cream-soft">
          The thesis our acquisitions team has run for years
        </p>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  const fits = [
    "You&apos;ve got $20K or more sitting liquid",
    "You earn stable income (W-2 or self-employed)",
    "You&apos;re tired of trading hours for money",
    "You&apos;re willing to operate, not chase passive",
    "You can be patient for two to five years",
  ];
  const notFits = [
    "You want returns by next quarter",
    "You won&apos;t put any of your own money in",
    "You&apos;re looking for a side hustle",
    "You won&apos;t take a phone call to start",
  ];
  return (
    <section id="who" className="border-b border-line bg-night-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-amber">
          Who&apos;s in
        </p>
        <h2 className="font-serif text-4xl leading-[0.95] text-cream md:text-6xl">
          We&apos;re picky.
          <br />
          <em className="text-amber">You should be too.</em>
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="border border-line bg-night p-8">
            <h3 className="font-serif text-xl text-amber">A fit</h3>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-cream md:text-lg">
              {fits.map((f) => (
                <li key={f} className="flex gap-4 border-b border-line pb-4">
                  <span className="font-serif text-amber">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: f }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-night-2 p-8">
            <h3 className="font-serif text-xl text-cream-soft">Not a fit</h3>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-mute md:text-lg">
              {notFits.map((f) => (
                <li key={f} className="flex gap-4 border-b border-line pb-4">
                  <span className="font-serif">✕</span>
                  <span dangerouslySetInnerHTML={{ __html: f }} />
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
        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-amber">
          Apply
        </p>
        <h2 className="font-serif text-4xl leading-[0.95] text-cream md:text-6xl">
          Five minutes.
          <br />
          <em className="text-amber">We&apos;ll call you this week.</em>
        </h2>
        <p className="mt-8 text-base leading-relaxed text-cream-soft md:text-lg">
          Be honest on the numbers. Soft tire-kickers get filtered out, real
          operators get a phone call. We work with twelve operators a year.
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
    <footer className="bg-night-2 text-cream-soft">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-serif text-3xl text-cream">Stack</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              We connect qualified operators with an established acquisitions
              group. Sourcing, financing, and consulting handled by our
              partner firm. Apply only if you&apos;re ready to do the work.
            </p>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-cream-soft/70">
            <p>&copy; {new Date().getFullYear()} Stack</p>
            <p className="mt-2 text-mute">All rights reserved</p>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-xs leading-relaxed text-mute">
          Stack is an introduction service. We are not a lender, broker-dealer,
          or fiduciary. All financing decisions, business valuations, and
          acquisitions are independently advised and executed. Past results
          don&apos;t guarantee future returns. Nothing on this page is
          investment advice.
        </div>
      </div>
    </footer>
  );
}
