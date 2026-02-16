import { promises as fs } from "node:fs";
import path from "node:path";
import Image from "next/image";
import GalleryCollage, { type GalleryPhoto } from "@/components/GalleryCollage";

function toTitleCase(input: string) {
  return input
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function filenameToAlt(filename: string) {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  const readable = toTitleCase(nameWithoutExt.replace(/[-_]+/g, " "));
  return `${readable} redfish charter photo`;
}

async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const imagesDir = path.join(process.cwd(), "public", "images");
  const entries = await fs.readdir(imagesDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => /\.(jpg|jpeg|png|webp|avif)$/i.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }))
    .map((name) => ({
      src: `/images/${name}`,
      alt: filenameToAlt(name),
    }));
}

export default async function HomePage() {
  const photos = await getGalleryPhotos();

  return (
    <div className="py-10 md:py-14">
      <section className="bg-card p-6 md:p-10 text-center">
        <div className="mt-1 mx-auto max-w-xl">
          <Image
            src="/og.png"
            alt="Off We Go Charters logo"
            width={1200}
            height={630}
            priority
            className="h-auto w-full"
          />
        </div>
        <p className="mt-4 mx-auto max-w-3xl text-base md:text-lg text-muted-foreground">
          Low-friction, low-pressure redfish charters. We keep it relaxed, focus on quality time on the water, and adapt the plan based on real conditions.
        </p>
      </section>

      <GalleryCollage photos={photos} />

      {/*
      <section id="story" className="mt-14 border border-border bg-card p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">The Name Story</h2>
        <p className="mt-3 text-muted-foreground">
          Add your story here about how the name "Off We Go" came to life and what it means to you. This section should feel personal and simple, not over-produced.
        </p>
      </section>
      */}

      <section id="operate" className="mt-10 border border-border bg-card p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">How We Operate</h2>
        <p className="mt-3 text-muted-foreground">
          Before each trip I check tides and weather, watch what the live bait is doing, and pre-catch bait so we are ready to fish right away. We usually run a 3-4 hour minimum so there is enough time for travel and to fish multiple proven redfish spots depending on action.
        </p>
        <p className="mt-3 text-muted-foreground">
          I am not a certified guide, but I know local patterns, a few reliable tricks, and spots that have produced redfish repeatedly.
        </p>
        <p className="mt-3 text-muted-foreground">
          Pricing is currently $65/hour.
        </p>
      </section>

      <section id="contact" className="mt-10 border border-border bg-card p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 text-muted-foreground">Reach out directly and we can plan a date.</p>
        <div className="mt-5 space-y-2 text-sm">
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+19103523368" className="underline underline-offset-4">(910) 352-3368</a>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:christianmcfarland@gmail.com" className="underline underline-offset-4">christianmcfarland@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
