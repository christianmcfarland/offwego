import Link from "next/link";

const links = [
  { href: "/#gallery", label: "Gallery" },
  // { href: "/#story", label: "Story" },
  { href: "/#operate", label: "How We Operate" },
  { href: "/#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold tracking-tight text-xl">
          Off We Go
        </Link>

        <ul className="flex flex-wrap gap-4 text-xs md:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
