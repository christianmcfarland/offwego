"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden rounded-3xl border">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg" // replace with your photo
          alt="Wrightsville Beach waterway at golden hour"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 px-8 py-20 md:px-12 md:py-28 text-white"
      >
        <p className="text-sm font-medium opacity-90">USCG Licensed • Wrightsville Beach</p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl font-extrabold leading-tight">
          Private Charters, Island Hops & Sunset Cruises
        </h1>
        <p className="mt-4 max-w-2xl text-lg opacity-90">
          Tailored trips across Masonboro, Figure Eight & Lea—bring your crew, I’ll handle the rest.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/trips"><Button size="lg">Book Now</Button></Link>
          <Link href="/contact"><Button variant="outline" size="lg">Request a Quote</Button></Link>
        </div>
      </motion.div>
    </section>
  );
}
