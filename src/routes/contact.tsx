import { ContactForm } from "../components/ContactForm";
import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | Annie Nguyen" },
      {
        name: "description",
        content: "Contact Annie Nguyen for data analyst and business analyst opportunities.",
      },
      { property: "og:title", content: "Contact | Annie Nguyen" },
      {
        property: "og:description",
        content: "Contact Annie Nguyen for data analyst and business analyst opportunities.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const contactLinks = [
  {
    icon: <Mail className="h-4 w-4" />,
    label: "Email",
    value: "annienguyengu@gmail.com",
    href: "mailto:annienguyengu@gmail.com",
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn",
    value: "linkedin.com/in/minh-thu-annie-nguyen",
    href: "https://www.linkedin.com/in/minh-thu-annie-nguyen/",
  },
  {
    icon: <Github className="h-4 w-4" />,
    label: "GitHub",
    value: "github.com/annienguyentech",
    href: "https://github.com/annienguyentech",
  },
];

function ContactPage() {
  return (
    <SectionWrapper>
      <header className="mb-8 max-w-3xl">
        <p className="eyebrow mb-3">Contact</p>
        <h1 className="text-3xl font-semibold md:text-4xl">Opportunities in analytics</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          I am looking for opportunities in data analytics, business analytics, and financial
          analytics. Thank you for taking the time to review my portfolio.
        </p>
      </header>
      <div className="grid items-start gap-6 md:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
          <h2 className="text-xl font-semibold">Contact details</h2>
          <p className="mb-6 mt-2 text-sm leading-relaxed text-muted-foreground">
            Please reach out by email with information about the role or project.
          </p>
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-white p-4 hover:border-primary"
              >
                <span className="mt-1 text-primary">{link.icon}</span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{link.label}</span>
                  <span className="mt-1 block break-words text-sm font-medium">{link.value}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 border-t border-border pt-5">
            <h3 className="flex items-center gap-2 font-medium">
              <MapPin className="h-4 w-4 text-primary" />
              Spokane, Washington
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Open to relocation and remote opportunities. Expected graduation: May 2028.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Data analytics", "Business analytics", "Financial analytics"].map((area) => (
              <span className="tag" key={area}>
                {area}
              </span>
            ))}
          </div>
        </aside>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
