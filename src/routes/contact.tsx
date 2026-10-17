import { ContactForm } from "../components/ContactForm";
import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | Annie Nguyen" },
      { name: "description", content: "Contact Annie Nguyen for data analyst and business analyst opportunities." },
      { property: "og:title", content: "Contact | Annie Nguyen" },
      { property: "og:description", content: "Contact Annie Nguyen for data analyst and business analyst opportunities." },
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
      <div className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-foreground">Contact</h1>
        <p className="max-w-2xl text-muted-foreground">
          I am looking for opportunities in data analytics, business analytics, and financial analytics. The easiest way to reach me is by email.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">{["Data analytics", "Business analytics", "Financial analytics"].map((area) => <span key={area} className="tag">{area}</span>)}</div><div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-xl font-semibold text-foreground">Get in touch</h2>
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex min-w-0 items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <div className="text-primary">{link.icon}</div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="break-words text-sm font-medium text-card-foreground">{link.value}</p>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
              <div className="text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-card-foreground">Spokane, WA (Open to relocation & remote)</p>
              </div>
            </div>
          </div>
        </div>

        <div><ContactForm />
          <div className="mt-5 rounded-lg bg-muted/30 p-6">
            <h3 className="mb-2 text-sm font-semibold text-foreground">Availability</h3>
            <p className="text-sm text-muted-foreground">
              I study Business Analytics, Finance, and Economics at Gonzaga University, with a minor in Leadership Studies. I graduate in May 2028 and am interested in Data Analyst and Business Analyst opportunities.
            </p>
          </div>
          <section className="mt-5 rounded-lg border border-border bg-card p-5" aria-labelledby="contact-topics">
            <h2 id="contact-topics" className="text-base font-semibold text-foreground">What we can talk about</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Internships and opportunities in analytics, consulting, or financial analysis.</li>
              <li>SQL, Python, Power BI, or Excel projects and the business questions behind them.</li>
              <li>New developments in AI, student experiences, or a shared interest in cooking and travel.</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">If you’re reaching out about a role or project, include a little context and a link so I can learn more.</p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
