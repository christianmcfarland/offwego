import Link from "next/link";

export default function HomePage() {
  return (
    <div className="py-10">
      <section className="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border px-8 py-16 mt-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Off We Go Charters
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-700">
          Wrightsville Beach & Cape Fear adventures — private fishing, island hops, and
          sunset cruises tailored to your crew.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/contact" className="rounded-xl border px-5 py-3 font-medium hover:bg-white">
            Request a Trip
          </Link>
          <Link href="/about" className="rounded-xl px-5 py-3 font-medium underline">
            Our Story
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Popular Experiences</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Sunset Cruise (2–3 hrs)", desc: "Calm water, golden light, easy vibes." },
            { title: "Inshore Fishing (4–6 hrs)", desc: "Target seasonal species with local knowledge." },
            { title: "Island Hop & Swim (3–4 hrs)", desc: "Beaches, sandbars, and clear water days." },
          ].map((c) => (
            <Link
              key={c.title}
              href="/contact"
              className="rounded-2xl border p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
              <span className="inline-block mt-4 text-sm underline">Request this trip</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">“Off We Go Days”</h2>
        <p className="mt-2 text-gray-700">
          I flag especially great boating days based on wind, tide, and weather. Calendar is coming soon — for now, just ask in your request.
        </p>
      </section>
    </div>
  );
}
