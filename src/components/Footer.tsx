import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row">
        <p>&copy; {new Date().getFullYear()} Annie Nguyen. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <Link
            to="/projects"
            className="text-muted-foreground hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className="text-muted-foreground hover:text-foreground"
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
