import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { Award } from "lucide-react";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Skills & Certifications — Annie Nguyen" },
      {
        name: "description",
        content:
          "Technical and analytical skills, tools, and certifications held by Annie Nguyen for data analyst and business analyst roles.",
      },
      { property: "og:title", content: "Skills & Certifications — Annie Nguyen" },
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
    skills: ["SQL", "Python", "R", "HTML"],
  },
  {
    title: "Analytics & Visualization",
    skills: [
      "Excel (VLOOKUP, PivotTables, Power Query)",
      "Tableau",
      "Power BI",
    ],
  },
  {
    title: "Business & AI Tools",
    skills: [
      "Microsoft 365 (PowerPoint, Visio, Project)",
      "GitHub",
      "Copilot",
      "NotebookLM",
    ],
  },
  {
    title: "Coursework Highlights",
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
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    year: "In progress",
  },
  {
    name: "Microsoft Power BI Data Analyst (PL-300)",
    issuer: "Microsoft",
    year: "In progress",
  },
  {
    name: "SQL for Data Science",
    issuer: "UC Davis / Coursera",
    year: "2024",
  },
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

      <section className="mb-16">
        <h2 className="mb-6 text-xl font-semibold text-foreground">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-semibold text-primary">
                {group.title}
              </h3>
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