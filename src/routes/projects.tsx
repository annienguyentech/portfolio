import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { ProjectCard } from "../components/ProjectCard";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Annie Nguyen" },
      { name: "description", content: "Selected data analysis and business analysis projects by Annie Nguyen." },
      { property: "og:title", content: "Projects — Annie Nguyen" },
      { property: "og:description", content: "Selected data analysis and business analysis projects by Annie Nguyen." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const projects = [
  {
    title: "Marketing Campaign Response Prediction",
    description:
      "Developed a supervised machine learning model in Python to predict customer purchase likelihood, using feature engineering and model validation techniques. Analyzed campaign response patterns to identify high-potential customer segments.",
    tags: ["Python", "Machine Learning", "Feature Engineering", "Segmentation"],
    outcome: "Achieved 82% accuracy and surfaced 3 high-potential customer segments for targeted marketing.",
    link: "https://github.com",
  },
  {
    title: "Sales Optimization Analysis",
    description:
      "Built a relational sales database for an airline agency by cleaning transaction data and designing an entity relationship diagram (ERD). Analyzed 10+ holiday ticket sales datasets with SQL to identify route-level demand and capacity gaps.",
    tags: ["SQL", "ERD", "Data Modeling", "Reporting"],
    outcome: "Recommended targeted coupons for underfilled routes, contributing to a 15% increase in profitability.",
    link: "https://github.com",
  },
  {
    title: "KPI Dashboard for SEO Investment",
    description:
      "Constructed an interactive KPI dashboard in Power BI and Python for the finance team at Credential Network, tracking profit margin and ROI metrics to inform SEO tool investment decisions.",
    tags: ["Power BI", "Python", "KPI", "Finance"],
    outcome: "Informed investment decisions that contributed to a 10% increase in monthly revenue.",
    link: "https://github.com",
  },
  {
    title: "Lead Scoring System",
    description:
      "Built a lead scoring system on 1,000+ client records stored in SQL Server to help the sales team prioritize qualified leads and improve conversion-rate calculation accuracy.",
    tags: ["SQL Server", "Analytics", "Sales Ops"],
    outcome: "Reduced customer acquisition cost by 20%.",
    link: "https://github.com",
  },
  {
    title: "Marketing Performance Dashboard",
    description:
      "Interpreted and visualized 30+ Excel datasets in Power BI and Python at Stanza to monitor monthly marketing spend and lead generation rate, supporting social media campaign investment decisions.",
    tags: ["Power BI", "Python", "Excel", "Marketing Analytics"],
    outcome: "Enabled data-driven social media investment across 4 sprint cycles.",
    link: "https://github.com",
  },
  {
    title: "Loan Performance Reporting Automation",
    description:
      "Optimized business loan performance reporting at MSB Bank by designing SQL queries to integrate 40+ datasets and building Excel dashboards that tracked loan utilization across 100,000+ credit users.",
    tags: ["SQL", "Excel", "Banking", "Reporting"],
    outcome: "Cut manual reporting effort by 30%.",
    link: "https://github.com",
  },
];

function ProjectsPage() {
  return (
    <SectionWrapper>
      <div className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-foreground">Projects</h1>
        <p className="max-w-2xl text-muted-foreground">
          A selection of data analysis and business analysis projects. Each one includes the tools I used, the approach I took, and a measurable outcome.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
