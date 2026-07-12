import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/leadership", label: "Leadership" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="text-sm font-bold tracking-tight text-foreground hover:text-primary"
        >
          Alex Chen
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "font-bold text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "font-semibold text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="py-3 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
