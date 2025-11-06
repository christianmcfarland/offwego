import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { sendContactEmail } from "@/lib/email";

function sanitize(s: unknown) {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, 1000);
}

// naive in-memory limiter (fine for MVP/serverless)
const hits = new Map<string, number[]>();
function rateLimit(ip: string, max = 3, windowMs = 60_000) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter(t => now - t < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= max;
}

export async function POST(req: Request) {
  const h = headers();
  const ip = (h.get("x-forwarded-for") || "").split(",")[0] || "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json();
  // honeypot: if bots fill this, silently “succeed”
  if (body.company) return NextResponse.json({ ok: true });

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  if (!name || !email || !phone) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  await sendContactEmail({
    name,
    email,
    phone,
    partySize: sanitize(body.partySize),
    preferredDate: sanitize(body.preferredDate),
    tripType: sanitize(body.tripType),
    notes: sanitize(body.notes),
  });

  return NextResponse.json({ ok: true });
}
