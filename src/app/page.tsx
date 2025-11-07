import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import Hero from "@/components/Hero";

export default function HomePage() {
  const experiences = [
    { title: "Sunset Cruise (2–3 hrs)", desc: "Calm water, golden light, easy vibes." },
    { title: "Inshore Fishing (4–6 hrs)", desc: "Target seasonal species with local knowledge." },
    { title: "Island Hop & Swim (3–4 hrs)", desc: "Beaches, sandbars, and clear water days." },
  ];

  return (
    <div className="py-10">
      <Hero />

      {/* Experiences */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Popular Experiences</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((x, i) => (
            <FadeIn key={x.title} delay={i * 0.06}>
              <Link href="/contact" className="block focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl">
                <Card className="transition hover:shadow-md">
                  <CardHeader>
                    <CardTitle>{x.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{x.desc}</p>
                    <span className="mt-4 inline-block text-sm underline">Request this trip</span>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Great Days teaser */}
      <FadeIn>
        <section className="mt-14 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">“Off We Go Days”</h2>
          <p className="mt-2 text-muted-foreground">
            I flag especially great boating days based on wind, tide, and weather. Calendar is coming soon — for now, just ask in your request.
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
