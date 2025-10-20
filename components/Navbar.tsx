"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={classNames(
        "px-3 py-2 rounded-md text-sm font-medium",
        pathname === href
          ? "bg-foreground text-background"
          : "text-foreground/80 hover:text-foreground hover:bg-foreground/10"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-foreground/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span className="text-foreground">Ilan</span>
          <span className="text-foreground/60">.dev</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {navItem("/", "Accueil")}
          {navItem("/projects", "Projets")}
          {navItem("/about", "À propos")}
          {navItem("/contact", "Contact")}
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Menu"
            className="p-2 rounded hover:bg-foreground/10"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden border-t border-foreground/10">
          <div className="px-4 py-2 flex flex-col gap-1">
            {navItem("/", "Accueil")}
            {navItem("/projects", "Projets")}
            {navItem("/about", "À propos")}
            {navItem("/contact", "Contact")}
          </div>
        </div>
      )}
    </header>
  );
}


