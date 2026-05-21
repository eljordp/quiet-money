"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "err";

const liquidOptions = [
  "$10K — $20K",
  "$20K — $50K",
  "$50K — $100K",
  "$100K — $250K",
  "$250K+",
];

const timelineOptions = [
  "Ready now",
  "Within 3 months",
  "Within 6 months",
  "Just exploring",
];

const incomeOptions = [
  "W-2 / Salary",
  "Self-employed / Business owner",
  "Mix of both",
  "Between roles",
];

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("err");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-amber/40 bg-night-2 p-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-amber">In motion</p>
        <h3 className="mt-4 font-serif text-4xl text-cream">Got it.</h3>
        <p className="mt-4 text-base leading-relaxed text-cream-soft md:text-lg">
          We&apos;ll be in touch within 48 hours. If you&apos;re a fit, we
          schedule the intro call this week.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" required />
        <Field
          label="City / State"
          name="location"
          placeholder="Atlanta, GA"
          required
        />
      </div>

      <Select label="Liquid capital available" name="liquid" options={liquidOptions} required />
      <Select label="Current income source" name="income" options={incomeOptions} required />
      <Select label="Timeline" name="timeline" options={timelineOptions} required />

      <Textarea
        label="Industry interest"
        name="industry"
        placeholder="Any industry you already know or want to operate in? (Optional)"
      />

      <Textarea
        label="Why now"
        name="why"
        placeholder="What's driving this? Be honest."
        required
      />

      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-amber px-10 py-4 text-sm font-semibold uppercase tracking-widest text-night transition hover:bg-amber-2 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Submit application"}
        </button>
        {status === "err" && (
          <p className="mt-4 text-sm text-blood">{errorMsg}</p>
        )}
        <p className="mt-6 text-xs leading-relaxed text-cream-soft/70">
          By submitting, you agree to be contacted by Stack about this
          opportunity. We don&apos;t share your information.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-cream-soft/80">
        {label}
        {required && " *"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-line bg-transparent py-3 font-serif text-xl text-cream placeholder-cream-soft/40 focus:border-amber focus:outline-none"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-cream-soft/80">
        {label}
        {required && " *"}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full border-b border-line bg-night py-3 font-serif text-xl text-cream focus:border-amber focus:outline-none"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-night text-cream">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-cream-soft/80">
        {label}
        {required && " *"}
      </span>
      <textarea
        name={name}
        rows={3}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-line bg-transparent py-3 text-base text-cream placeholder-cream-soft/40 focus:border-amber focus:outline-none"
      />
    </label>
  );
}
