"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

const tilePattern = [
  "col-span-12 sm:col-span-8 row-span-2",
  "col-span-12 sm:col-span-4 row-span-2",
  "col-span-12 sm:col-span-4 row-span-2",
  "col-span-12 sm:col-span-4 row-span-1",
  "col-span-12 sm:col-span-4 row-span-1",
  "col-span-12 sm:col-span-6 row-span-1",
  "col-span-12 sm:col-span-3 row-span-1",
  "col-span-12 sm:col-span-3 row-span-1",
];

export default function GalleryCollage({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  if (photos.length === 0) {
    return (
      <section id="gallery" className="mt-14 border border-border bg-card p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
        <p className="mt-2 text-sm text-muted-foreground">Add images to `public/images` and they will appear here automatically.</p>
      </section>
    );
  }

  return (
    <>
      <section id="gallery" className="mt-14">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
          <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">Tap to enlarge</p>
        </div>

        <div className="grid grid-cols-12 auto-rows-[120px] sm:auto-rows-[140px] gap-3">
          {photos.map((photo, index) => {
            const className = tilePattern[index % tilePattern.length];
            return (
              <button
                key={photo.src}
                type="button"
                className={`${className} group relative overflow-hidden border border-border bg-muted text-left`}
                onClick={() => setActive(photo)}
                aria-label={`Open image: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </button>
            );
          })}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 border border-white/40 bg-black/40 px-3 py-1 text-sm text-white hover:bg-black/60"
          >
            Close
          </button>

          <div className="relative mx-auto h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
