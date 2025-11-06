export default function AboutPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Our Story</h1>
      <p className="mt-4 max-w-2xl text-gray-700">
        Off We Go Charters is my way of sharing the water I love. I’m a USCG-licensed
        captain in Wrightsville Beach, running private trips for families, friends,
        and small groups. Whether it’s a mellow sunset or a fishy morning on the flats,
        I plan the day around conditions and what lights you up.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold">Boat & Safety</h2>
          <p className="mt-2 text-gray-700">
            Coast Guard safety gear on board. Capacity tailored to comfort. No glass on deck.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold">What to Bring</h2>
          <p className="mt-2 text-gray-700">
            Sunscreen, hat, water, snacks, layers. I’ll handle the rest (cooler + ice included).
          </p>
        </div>
      </div>
    </div>
  );
}
