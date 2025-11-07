import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trip, formatUSD } from "@/data/trips";

export function TripCard({ trip }: { trip: Trip }) {
  const img = trip.images[0] ?? "/images/placeholder.jpg";
  return (
    <Card className="overflow-hidden hover:shadow-md transition">
      <div className="relative h-44">
        <Image src={img} alt={trip.title} fill className="object-cover" />
      </div>

      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>{trip.title}</CardTitle>
          <Badge>Customer Favorite</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{trip.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <Badge className="bg-card border text-card-foreground">from {formatUSD(trip.fromPrice)}</Badge>
          <Badge className="bg-card border text-card-foreground">{trip.durationLabel}</Badge>
          <Badge className="bg-card border text-card-foreground">{trip.capacityLabel}</Badge>
        </div>
        <div className="mt-5 flex gap-3">
          <Link href={`/trips/${trip.slug}`} className="underline text-sm">Learn More</Link>
          <Link href={`/trips/${trip.slug}#book`} className="underline text-sm">Book Now</Link>
        </div>
      </CardContent>
    </Card>
  );
}
