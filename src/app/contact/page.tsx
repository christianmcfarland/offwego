"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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
      setStatus(res.ok ? "ok" : "error");
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
      <p className="mt-2 text-muted-foreground">
        Share a few details and I’ll confirm tide-friendly times and pricing.
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-5 max-w-xl">
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="partySize">Party size</Label>
            <Input id="partySize" name="partySize" inputMode="numeric" />
          </div>
          <div>
            <Label htmlFor="preferredDate">Preferred date(s)</Label>
            <Input id="preferredDate" name="preferredDate" placeholder="e.g., Dec 12 morning" />
          </div>
        </div>
        <div>
          <Label htmlFor="tripType">Trip type</Label>
          <Input id="tripType" name="tripType" placeholder="Sunset / Fishing / Island Hop / Other" />
        </div>
        <div>
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" name="notes" placeholder="Anything special you want to do or see?" />
        </div>

        {/* Honeypot */}
        <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <Button isLoading={status==="sending"}>Send request</Button>
        </div>
        {status==="error" && <p className="text-sm text-red-600">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}
