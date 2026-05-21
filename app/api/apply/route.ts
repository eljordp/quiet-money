import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const REQUIRED = ["name", "email", "phone", "location", "liquid", "income", "timeline", "why"] as const;

type ApplyPayload = Partial<Record<(typeof REQUIRED)[number] | "industry" | "company", string>>;

export async function POST(req: Request) {
  let body: ApplyPayload;
  try {
    body = (await req.json()) as ApplyPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED.filter((k) => !body[k]?.toString().trim());
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const to = process.env.APPLY_TO_EMAIL || "eljordp@gmail.com";
  const from = process.env.APPLY_FROM_EMAIL || "Quiet Money <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  const lines = [
    `New Quiet Money application`,
    ``,
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Phone: ${body.phone}`,
    `Location: ${body.location}`,
    `Liquid capital: ${body.liquid}`,
    `Income source: ${body.income}`,
    `Timeline: ${body.timeline}`,
    `Industry interest: ${body.industry || "(none)"}`,
    ``,
    `Why now:`,
    `${body.why}`,
  ];
  const text = lines.join("\n");

  if (!apiKey) {
    console.log("[quiet-money] APPLICATION (no RESEND_API_KEY set):\n" + text);
    return NextResponse.json({ ok: true, note: "logged-only" });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Quiet Money — ${body.name} (${body.liquid})`,
      text,
      replyTo: body.email,
    });
    if (error) {
      console.error("[quiet-money] resend error", error);
      return NextResponse.json(
        { error: "Could not send email" },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quiet-money] send failure", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
