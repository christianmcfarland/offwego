"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) setStatus("ok");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="py-10">
        <h1 className="text-2xl font-bold">Thanks!</h1>
        <p className="mt-2">I’ll reply ASAP with availability and next steps.</p>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Request a Trip</h1>
      <p className="mt-2 text-gray-700">
        Share a few details and I’ll confirm tide-friendly times and pricing.
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
        <input name="name" required placeholder="Your name" className="border rounded-xl p-3" />
        <input name="email" type="email" required placeholder="Email" className="border rounded-xl p-3" />
        <input name="phone" required placeholder="Phone" className="border rounded-xl p-3" />
        <input name="partySize" placeholder="Party size" className="border rounded-xl p-3" />
        <input name="preferredDate" placeholder="Preferred date(s)" className="border rounded-xl p-3" />
        <select name="tripType" className="border rounded-xl p-3">
          <option>Sunset Cruise</option>
          <option>Inshore Fishing</option>
          <option>Island Hop & Swim</option>
          <option>Other</option>
        </select>
        <textarea name="notes" placeholder="Notes" className="border rounded-xl p-3" />
        <button
          disabled={status==="sending"}
          className="rounded-xl border px-5 py-3 font-medium hover:bg-white"
        >
          {status==="sending" ? "Sending..." : "Send request"}
        </button>
        {status==="error" && <p className="text-sm text-red-600">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}
