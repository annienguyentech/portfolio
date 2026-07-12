import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Alex Chen" },
      { name: "description", content: "Contact Alex Chen for data analyst and business analyst opportunities." },
      { property: "og:title", content: "Contact — Alex Chen" },
      { property: "og:description", content: "Contact Alex Chen for data analyst and business analyst opportunities." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const skillGroups = [
  {
    title: "Data Analysis",
    skills: ["SQL", "Python", "Pandas", "NumPy", "Statistical Testing", "A/B Testing"],
  },
  {
    title: "Visualization",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Excel Charts", "Dashboard Design"],
  },
  {
    title: "Business Analysis",
    skills: ["Requirements Gathering", "Process Mapping", "Stakeholder Management", "User Stories", "Jira", "Confluence"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "dbt", "Snowflake", "BigQuery", "Excel", "Google Sheets", "Jupyter"],
  },
];

const contactLinks = [
  {
    icon: <Mail className="h-4 w-4" />,
    label: "Email",
    value: "alex.chen@example.com",
    href: "mailto:alex.chen@example.com",
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn",
    value: "linkedin.com/in/alexchen",
    href: "https://linkedin.com/in/alexchen",
  },
  {
    icon: <Github className="h-4 w-4" />,
    label: "GitHub",
    value: "github.com/alexchen",
    href: "https://github.com/alexchen",
  },
];

function ContactPage() {
  return (
    <SectionWrapper>
      <div className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-foreground">Skills & Contact</h1>
        <p className="max-w-2xl text-muted-foreground">
          My toolkit and how to reach me. I am open to Data Analyst, Business Analyst, and hybrid analytics roles.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Skills */}
        <div>
          <h2 className="mb-6 text-xl font-semibold text-foreground">Skills</h2>
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm font-semibold text-primary">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="mb-6 text-xl font-semibold text-foreground">Get in touch</h2>
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <div className="text-primary">{link.icon}</div>
                <div>
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium text-card-foreground">{link.value}</p>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
              <div className="text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-card-foreground">San Francisco, CA (Open to remote)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-muted/30 p-6">
            <h3 className="mb-2 text-sm font-semibold text-foreground">Availability</h3>
            <p className="text-sm text-muted-foreground">
              I am currently open to full-time Data Analyst and Business Analyst roles, as well as freelance analytics projects. I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
