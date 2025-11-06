import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

// OPTIONAL: keep Node runtime for predictable behavior
// export const runtime = "nodejs";

function sanitize(s: unknown) {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, 1000);
}

// naive in-memory limiter (OK for MVP; not durable across serverless instances)
const hits = new Map<string, number[]>();
function rateLimit(ip: string, max = 3, windowMs = 60_000) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= max;
}

function getClientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

export async function POST(req: Request) {
  const ip = getClientIp(req);

  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json();

  // Honeypot: if bots fill this hidden field, silently "succeed"
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

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
