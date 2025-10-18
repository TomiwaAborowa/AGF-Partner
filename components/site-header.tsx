import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/try.png"
            alt="anora logo"
            className="w-16 h-24 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          <Link
            href="/"
            className="text-lg  font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/partnership"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Partnership
          </Link>
        </nav>

        <Button asChild className="bg-yellow-500 hover:bg-yellow-600">
          <Link href="/partnership">Become a Partner</Link>
        </Button>
      </div>
    </header>
  );
}
