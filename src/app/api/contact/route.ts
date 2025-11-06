import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // TODO: replace with email or CRM integration.
  console.log("New trip request:", data);
  // Basic honeypot (optional): if data["company"] exists, drop as spam.
  return NextResponse.json({ ok: true });
}
