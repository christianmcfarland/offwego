export type Trip = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  fromPrice: number;        // USD
  durationLabel: string;    // "3 Hours"
  capacityLabel: string;    // "Up to 6 people"
  images: string[];         // paths under /public/images/...
  includes: string[];       // bullets
  bring: string[];          // bullets
};

export const TRIPS: Trip[] = [
  {
    slug: "half-day-private",
    title: "Half Day Private Charter",
    blurb: "Explore scenic hotspots, sandbars and islands—your day, your way.",
    description:
      "A flexible three-hour private charter tailored to your crew. We’ll check the tides and wind to choose the best route—sandbars, islands, and calm water cruising.",
    fromPrice: 595,
    durationLabel: "3 Hours",
    capacityLabel: "Up to 6 people",
    images: ["/images/halfday.jpg", "/images/halfday-2.jpg", "/images/halfday-3.jpg"],
    includes: ["USCG-licensed captain", "Cooler + ice", "All required safety gear"],
    bring: ["Sunscreen & hat", "Water/snacks", "Towel & a light layer"],
  },
  {
    slug: "coastal-cruise",
    title: "2 Hour Coastal Cruise",
    blurb: "Relaxing cruise through the ICW—perfect for families and couples.",
    description:
      "A mellow cruise through the Intracoastal Waterway with scenic stops and photo ops. Great for first-timers and families.",
    fromPrice: 495,
    durationLabel: "2 Hours",
    capacityLabel: "Up to 6 people",
    images: ["/images/coastal.jpg", "/images/coastal-2.jpg", "/images/coastal-3.jpg"],
    includes: ["USCG-licensed captain", "Cooler + ice", "Bluetooth music"],
    bring: ["Sunscreen & hat", "Water/drinks", "Camera"],
  },
  {
    slug: "sunset",
    title: "Private Sunset Cruise",
    blurb: "Golden hour views, chill tunes, optional island stop.",
    description:
      "Chase golden hour and settle into a signature Wrightsville Beach sunset. We’ll time the route for the best light and smoothest water.",
    fromPrice: 495,
    durationLabel: "2 Hours",
    capacityLabel: "Up to 6 people",
    images: ["/images/sunset.jpg", "/images/sunset-2.jpg", "/images/sunset-3.jpg"],
    includes: ["USCG-licensed captain", "Cooler + ice", "Blankets on cool evenings"],
    bring: ["Light layer", "Drinks/snacks", "Sunglasses"],
  },
];

export function getTripBySlug(slug: string) {
  return TRIPS.find(t => t.slug === slug);
}

export function getAllTripSlugs() {
  return TRIPS.map(t => ({ slug: t.slug }));
}

export function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}
