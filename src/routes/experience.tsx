import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { ExperienceItem } from "../components/ExperienceItem";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Experience — Annie Nguyen" },
      { name: "description", content: "Work experience and internships of Annie Nguyen across business consulting, product analytics, and banking." },
      { property: "og:title", content: "Experience — Annie Nguyen" },
      { property: "og:description", content: "Work experience and internships of Annie Nguyen across business consulting, product analytics, and banking." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
});

const experiences = [
  {
    company: "Credential Network — Spokane, WA",
    role: "Business Consultant",
    period: "Sep 2025 — Dec 2025",
    achievements: [
      "Constructed an interactive KPI dashboard in Power BI and Python that tracked profit margin and ROI for the finance team, informing SEO tool investment decisions that contributed to a 10% increase in monthly revenue.",
      "Built a lead scoring system on 1,000+ client records in SQL Server to manage qualified leads, improving conversion-rate calculation accuracy and reducing customer acquisition cost by 20%.",
    ],
  },
  {
    company: "Stanza — Menlo Park, CA",
    role: "Business Analyst Intern",
    period: "Jun 2025 — Aug 2025",
    achievements: [
      "Led end-to-end development of a new AI-drafting feature by conducting 100+ client interviews and translating findings into product requirement documents, reducing engineering rework by 30% across 4 sprint cycles.",
      "Built a marketing performance dashboard by interpreting and visualizing 30+ Excel datasets in Power BI and Python to monitor marketing spend and lead generation rate, supporting social media campaign investment decisions.",
    ],
  },
  {
    company: "MSB Bank — Hanoi, Vietnam",
    role: "Financial Analyst Intern",
    period: "May 2024 — Aug 2024",
    achievements: [
      "Optimized business loan performance reporting by designing SQL queries to integrate 40+ datasets and building Excel dashboards tracking loan utilization, cutting manual reporting effort by 30% across 100,000+ credit users.",
      "Analyzed credit trends of Vietnamese SMEs (valued $1M–$20M) by monitoring overdue and bad-debt expenses, identifying lending gaps, and assessing policy changes — supporting a partnership with the OPEC Fund to expand financing for 500,000 SMEs in Vietnam.",
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
