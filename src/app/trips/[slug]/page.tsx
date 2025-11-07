import { notFound } from "next/navigation";
import { getTripBySlug, getAllTripSlugs } from "@/data/trips";
import TripHero from "@/components/trips/trip-hero";
import { StickyBooking } from "@/components/trips/sticky-booking";
import { Button } from "@/components/ui/button";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllTripSlugs(); // [{ slug: "..." }, ...]
}

// ⬇️ Note: params is a Promise — await it
export default async function TripDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const trip = getTripBySlug(slug);
  if (!trip) return notFound();

  return (
    <div className="py-8 md:py-10">
      <TripHero trip={trip} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8">
        {/* Main content */}
        <div>
          <section className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">About this trip</h2>
            <p className="mt-2 text-muted-foreground">{trip.description}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">What’s included</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                  {trip.includes.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">What to bring</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                  {trip.bring.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Booking anchor section */}
          <section id="book" className="mt-8 rounded-2xl border p-6 scroll-mt-28">
            <h2 className="text-xl font-semibold">Book this trip</h2>
            <p className="mt-2 text-muted-foreground">
              Tell me your ideal time window and I’ll confirm tide-friendly options.
            </p>

            {/* MVP booking action: send to Contact page prefilled via querystring if you want */}
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`/contact?trip=${encodeURIComponent(trip.title)}`}>
                <Button>Request a Time</Button>
              </a>
              <a href="/policies" className="underline text-sm">Read Policies</a>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <StickyBooking trip={trip} />
      </div>
    </div>
  );
}
