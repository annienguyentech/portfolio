import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { ProjectCard } from "../components/ProjectCard";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Alex Chen" },
      { name: "description", content: "Selected data analysis and business analysis projects by Alex Chen." },
      { property: "og:title", content: "Projects — Alex Chen" },
      { property: "og:description", content: "Selected data analysis and business analysis projects by Alex Chen." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Built and deployed a logistic regression model in Python to identify at-risk SaaS customers. Combined behavioral features, billing history, and support tickets to score risk weekly.",
    tags: ["Python", "scikit-learn", "SQL", "Pandas"],
    outcome: "Reduced churn by 12% in the pilot segment and saved an estimated $180K ARR.",
    link: "https://github.com",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Designed an interactive Tableau dashboard that tracks revenue, pipeline health, and rep-level performance. Automated data refreshes from the data warehouse.",
    tags: ["Tableau", "SQL", "dbt", "ETL"],
    outcome: "Cut monthly reporting time from 3 days to 30 minutes.",
    link: "https://github.com",
  },
  {
    title: "Pricing Strategy Analysis",
    description:
      "Analyzed historical pricing, discounting, and competitor benchmarks to inform a new tiered pricing structure for the enterprise product.",
    tags: ["Excel", "Python", "Statistics", "A/B Testing"],
    outcome: "Identified an 8% revenue uplift opportunity and informed three new pricing tiers.",
    link: "https://github.com",
  },
  {
    title: "Supply Chain Demand Forecasting",
    description:
      "Created a time-series forecasting model to predict weekly SKU demand and reduce stockouts. Integrated seasonality and promotional effects.",
    tags: ["Python", "Prophet", "Time Series", "SQL"],
    outcome: "Reduced stockouts by 15% and excess inventory by 10%.",
    link: "https://github.com",
  },
  {
    title: "Customer Segmentation",
    description:
      "Ran K-means clustering on customer transaction data to segment users by value and behavior for targeted marketing campaigns.",
    tags: ["Python", "Clustering", "Pandas", "Matplotlib"],
    outcome: "Improved campaign conversion rates by 22% in the highest-value segment.",
    link: "https://github.com",
  },
  {
    title: "Process Mapping & Automation",
    description:
      "Mapped the monthly close reporting process, identified bottlenecks, and automated manual handoffs with Excel and SQL scripts.",
    tags: ["Business Analysis", "Process Mapping", "SQL", "Excel"],
    outcome: "Reduced close reporting effort by 20 hours per month.",
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
