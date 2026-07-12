import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { ExperienceItem } from "../components/ExperienceItem";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Experience — Alex Chen" },
      { name: "description", content: "Work experience and career history of Alex Chen, Data Analyst and Business Analyst." },
      { property: "og:title", content: "Experience — Alex Chen" },
      { property: "og:description", content: "Work experience and career history of Alex Chen, Data Analyst and Business Analyst." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
});

const experiences = [
  {
    company: "Northwind Analytics",
    role: "Senior Data Analyst",
    period: "2022 — Present",
    achievements: [
      "Led a cross-functional churn reduction initiative that decreased customer churn by 12% using Python, SQL, and logistic regression.",
      "Built automated Tableau dashboards adopted by Sales, Finance, and Customer Success, cutting manual reporting time by 90%.",
      "Mentored two junior analysts on SQL, statistical testing, and dashboard design.",
    ],
  },
  {
    company: "Pinnacle Consulting Group",
    role: "Business Analyst",
    period: "2019 — 2022",
    achievements: [
      "Elicited requirements and documented AS-IS / TO-BE processes for three enterprise clients, improving workflow efficiency by 15–25%.",
      "Created financial models and pricing analyses in Excel that informed a new SaaS pricing strategy and an 8% revenue uplift opportunity.",
      "Facilitated workshops with stakeholders across Product, Engineering, and Finance to align priorities and reduce scope creep.",
    ],
  },
  {
    company: "RetailCore Solutions",
    role: "Junior Data Analyst",
    period: "2017 — 2019",
    achievements: [
      "Maintained weekly sales and inventory reports using SQL and Excel for a 50-store retail chain.",
      "Identified slow-moving inventory trends that informed a clearance strategy and reduced excess stock by 10%.",
      "Supported A/B test design and analysis for promotional campaigns.",
    ],
  },
];

function ExperiencePage() {
  return (
    <SectionWrapper>
      <div className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-foreground">Experience</h1>
        <p className="max-w-2xl text-muted-foreground">
          My career path across data analysis, business analysis, and consulting roles.
        </p>
      </div>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} {...experience} />
        ))}
      </div>
    </SectionWrapper>
  );
}
