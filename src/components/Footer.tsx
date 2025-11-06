export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Off We Go Charters · Wrightsville Beach, NC</p>
          <div className="flex gap-6">
            <a href="/policies" className="hover:underline">Policies</a>
            <a href="tel:+19103523368" className="hover:underline">Call/Text: (910) 352-3368</a>
            <a href="mailto:christianmcfarland@gmail.com" className="hover:underline">Email</a>
          </div>
        </div>
        <p className="mt-3 text-xs">USCG-licensed captain. Safety first. No bananas on board 😉</p>
      </div>
    </footer>
  );
}
