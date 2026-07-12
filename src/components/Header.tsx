import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/leadership", label: "Leadership" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="text-sm font-bold tracking-tight text-foreground hover:text-primary"
        >
          Alex Chen
        </Link>
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
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <nav className="flex items-center gap-4 text-sm md:hidden">
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          activeProps={{ className: "font-bold text-foreground" }}
          inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
        >
          {link.label.slice(0, 3)}
        </Link>
      ))}
    </nav>
  );
}
