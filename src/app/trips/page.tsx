import { TRIPS } from "@/data/trips";
import { TripCard } from "@/components/trips/trip-card";
import Hero from "@/components/Hero"; // reuse your Home hero if you like; or remove this line

export default function TripsPage() {
  return (
    <div className="py-10 space-y-10">
      {/* Optional: hero reused on the /trips page */}
      <Hero />

      <section>
        <h2 className="text-2xl font-semibold">Popular Adventures</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRIPS.map(t => <TripCard key={t.slug} trip={t} />)}
        </div>
      </section>
    </div>
  );
}
