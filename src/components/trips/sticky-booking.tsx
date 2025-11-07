"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatUSD, Trip } from "@/data/trips";
import { Button } from "@/components/ui/button";

export function StickyBooking({ trip }: { trip: Trip }) {
  // show the mobile bar after user scrolls a bit
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop sidebar (shown in layout on md+) */}
      <aside className="hidden md:block sticky top-24 rounded-2xl border p-5 bg-card text-card-foreground">
        <div className="text-2xl font-bold">{formatUSD(trip.fromPrice)}</div>
        <p className="text-sm text-muted-foreground mt-1">Base price • {trip.durationLabel}</p>
        <div className="mt-4 space-y-2 text-sm">
          <div>• {trip.capacityLabel}</div>
          <div>• Flexible route by conditions</div>
          <div>• Easy reschedule for weather</div>
        </div>
        <div className="mt-5 flex gap-2">
          <a href="#book"><Button className="w-full">Book Now</Button></a>
          <Link href="/contact"><Button variant="outline" className="w-full">Ask a Question</Button></Link>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">No card charged until confirmed (MVP copy; adjust later).</p>
      </aside>

      {/* Mobile bottom bar */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 transition translate-y-${show ? "0" : "[100%]"}`}
        role="region"
        aria-label="Booking actions"
      >
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="rounded-2xl border bg-card/95 backdrop-blur p-4 shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold leading-none">{formatUSD(trip.fromPrice)}</div>
                <div className="text-xs text-muted-foreground mt-1">{trip.durationLabel}</div>
              </div>
              <a href="#book">
                <Button>Book Now</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
