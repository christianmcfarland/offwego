"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-xl">
          Off We Go Charters
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`hover:underline ${pathname === l.href ? "underline" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
