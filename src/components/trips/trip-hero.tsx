"use client";
import Image from "next/image";
import { useState } from "react";
import { Trip, formatUSD } from "@/data/trips";

export default function TripHero({ trip }: { trip: Trip }) {
  const [active, setActive] = useState(0);
  const images = trip.images.length ? trip.images : ["/images/placeholder.jpg"];

  return (
    <section className="rounded-3xl border overflow-hidden">
      {/* main image */}
      <div className="relative h-72 md:h-96">
        <Image
          src={images[active]}
          alt={trip.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-white px-6 py-8 md:px-10 md:py-12">
          <p className="text-sm opacity-90">{trip.durationLabel} • {trip.capacityLabel}</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">{trip.title}</h1>
          <p className="mt-2 text-lg opacity-90">{trip.blurb}</p>
          <p className="mt-3 font-semibold">from {formatUSD(trip.fromPrice)}</p>
        </div>
      </div>

      {/* thumbs */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-2 p-3 bg-card">
          {images.slice(0, 6).map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`relative h-20 rounded-lg overflow-hidden border ${active === i ? "ring-2 ring-[hsl(var(--ring))]" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
