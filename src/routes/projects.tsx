import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      {
        title: "Data Analytics Projects | Annie Nguyen",
      },
      {
        name: "description",
        content:
          "Explore data analytics, business intelligence, SQL, Excel, Power BI, and machine learning projects by Annie Nguyen.",
      },
      {
        property: "og:title",
        content: "Data Analytics Projects | Annie Nguyen",
      },
      {
        property: "og:description",
        content:
          "Explore data analytics, business intelligence, SQL, Excel, Power BI, and machine learning projects by Annie Nguyen.",
      },
      {
        property: "og:url",
        content: "/projects",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/projects",
      },
    ],
  }),
});

const projects = [
  {
    slug: "revenue-plan-progress-analysis",
    title: "Revenue Plan Progress Analysis",
    category: "Business Intelligence",
    description:
      "Developed an interactive Power BI dashboard to compare actual revenue with planned revenue, evaluate year-over-year growth, and identify performance patterns across stores, products, customers, and promotions.",
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    outcome:
      "Created four analytical pages covering company, store, product, and customer performance.",
  },
  {
    slug: "kpim-mart-sales-excel-dashboard",
    title: "KPIM Mart Sales Excel Dashboard",
    category: "Excel Analytics",
    description:
      "Built an interactive Excel dashboard to analyze revenue, gross profit, revenue targets, customer segments, product categories, and store performance using structured sales data.",
    tags: ["Excel", "Power Query", "PivotTables", "Dashboard Design"],
    outcome:
      "Analyzed 58,414 transactions across 29 stores, 353 products, and 18,484 customers.",
  },
  {
    slug: "online-course-completion-analysis",
    title: "Online Course Completion Analysis",
    category: "Descriptive Analytics",
    description:
      "Analyzed online learning data to understand how course difficulty, module length, learner age, and education level relate to course-completion behavior.",
    tags: [
      "Descriptive Analytics",
      "Data Visualization",
      "Education Analytics",
      "Business Insights",
    ],
    outcome:
      "Identified learner and course characteristics associated with stronger completion outcomes.",
  },
  {
    slug: "sales-optimization-analysis",
    title: "Sales Optimization Analysis",
    category: "SQL and Database Analysis",
    description:
      "Designed a relational airline sales database, cleaned holiday ticket-sales data, and used SQL to examine route demand, available capacity, customer activity, and coupon performance.",
    tags: ["SQL", "ERD", "Data Modeling", "Business Analysis"],
    outcome:
      "Identified underfilled routes and proposed targeted coupon strategies with a 15% profitability opportunity.",
  },
  {
    slug: "marketing-campaign-response-prediction",
    title: "Marketing Campaign Response Prediction",
    category: "Machine Learning",
    description:
      "Built a balanced logistic regression model using customer demographics, spending behavior, and campaign information to estimate campaign-response probability.",
    tags: ["Python", "Pandas", "Scikit-learn", "Logistic Regression"],
    outcome:
      "Created a baseline model that identifies potential responders and ranks customers for targeted outreach.",
  },
];

function ProjectsPage() {
  return (
    <SectionWrapper>
      <header className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          Analytics Projects
        </h1>

        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          Explore projects demonstrating how I use data preparation, analysis,
          visualization, database design, and machine learning to answer
          business questions and communicate actionable insights.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="group block h-full"
          >
            <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {project.category}
              </p>

              <h2 className="text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 border-t border-border pt-4 text-sm font-medium leading-relaxed text-primary">
                {project.outcome}
              </p>

              <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                View project details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
