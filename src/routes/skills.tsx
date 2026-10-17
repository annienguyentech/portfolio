import { Workflow } from "../components/Workflow";
import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { Award } from "lucide-react";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Skills & Certifications | Annie Nguyen" },
      {
        name: "description",
        content:
          "Technical and analytical skills, tools, and certifications held by Annie Nguyen for data analyst and business analyst roles.",
      },
      { property: "og:title", content: "Skills & Certifications | Annie Nguyen" },
      {
        property: "og:description",
        content:
          "Programming, analytics, visualization, and business tools plus certifications held by Annie Nguyen.",
      },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
});

const skillGroups = [
  {
    title: "Programming & Databases",
    skills: ["SQL (window functions, CTEs, stored procedures)", "Python", "R", "HTML"],
    application: "I use SQL to integrate and query data, and Python to analyze results and support reporting. At MSB Bank, this included bringing together more than 40 datasets for loan performance analysis.",
  },
  {
    title: "Analytics & Visualization",
    application: "I build dashboards that connect performance metrics with business questions. My projects cover revenue planning, customer segmentation, store performance, and campaign response.",
    skills: [
      "Excel (VLOOKUP, PivotTables, Power Query)",
      "Tableau",
      "Power BI",
    ],
  },
  {
    title: "Business & AI Tools",
    application: "My work includes documenting requirements, communicating findings, and using AI tools to assist with coding, debugging, and research.",
    skills: [
      "Microsoft 365 (PowerPoint, Visio, Project)",
      "GitHub",
      "Copilot",
      "Codex",
      "Claude Code",
      "NotebookLM",
    ],
  },
  {
    title: "Coursework Highlights",
    application: "My studies connect analytical methods with economics, finance, and business decisions. Leadership Studies adds a focus on communication and working with people.",
    skills: [
      "Database Management",
      "Data Analytics for Business",
      "Regression Analysis",
      "MIS",
      "Problem Solving & Programming",
      "Calculus III",
    ],
  },
];

const certifications = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google / Coursera", year: "2026" },
  { name: "KPIM Data Program Certificate", issuer: "KPIM", year: "Expected December 2026" },
];

function SkillsPage() {
  return (
    <SectionWrapper>
      <header className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          Skills & Certifications
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          The technical toolkit and credentials I use for data analytics and
          business analysis work.
        </p>
      </header>

      <Workflow /><section className="mb-16">
        <h2 className="mb-6 text-xl font-semibold text-foreground">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-muted/30 p-6">
              <h3 className="mb-3 text-sm font-semibold text-primary">
                {group.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{group.application}</p>
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
      </section>

      <section>
        <h2 className="mb-6 text-xl font-semibold text-foreground">
          Certifications
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
            >
              <div className="mt-0.5 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
