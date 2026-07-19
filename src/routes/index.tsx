import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { ArrowRight, BarChart3, Briefcase, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Annie Nguyen — Data & Business Analyst" },
      { name: "description", content: "Personal portfolio of Annie Nguyen, a Business Analytics & Economics student and aspiring Data / Business Analyst." },
      { property: "og:title", content: "Annie Nguyen — Data & Business Analyst" },
      { property: "og:description", content: "Portfolio showcasing analytics projects, business analyst internships, and leadership experience." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-navy-900 text-navy-50">
        <SectionWrapper className="py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-navy-500">Data Analyst · Business Analyst</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Annie Nguyen
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-navy-50/80 md:text-xl">
              Business Analytics & Economics student at Gonzaga University. I use SQL, Python,
              Power BI, and Tableau to turn messy data into decisions that move revenue, cut
              costs, and sharpen strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-50 px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-50/90"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-50/20 bg-transparent px-5 py-2.5 text-sm font-medium text-navy-50 transition-colors hover:bg-navy-50/10"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* Highlights */}
      <SectionWrapper>
        <div className="mb-12">
          <h2 className="mb-3 text-2xl font-bold text-foreground">What I do</h2>
          <p className="text-muted-foreground">
            A quick snapshot of the work I enjoy most and the value I bring to data and business teams.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <HighlightCard
            icon={<BarChart3 className="h-5 w-5" />}
            title="Data Analysis"
            description="Clean, explore, and model data with SQL, Python, and Excel to uncover trends and opportunities."
          />
          <HighlightCard
            icon={<Briefcase className="h-5 w-5" />}
            title="Business Analysis"
            description="Translate stakeholder needs into requirements, process maps, and measurable outcomes."
          />
          <HighlightCard
            icon={<ArrowRight className="h-5 w-5" />}
            title="Visualization"
            description="Build dashboards in Tableau and Power BI that make complex data easy to act on."
          />
        </div>
      </SectionWrapper>

      {/* Recent projects preview */}
      <section className="border-t border-border bg-muted/30">
        <SectionWrapper>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">Featured Projects</h2>
              <p className="text-muted-foreground">
                A few recent projects that show how I work end-to-end.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline md:inline-flex"
            >
              See all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectPreview
              title="Marketing Campaign Response Prediction"
              description="Supervised machine learning model in Python predicting customer purchase likelihood using feature engineering and validation."
              tags={["Python", "Machine Learning", "Feature Engineering"]}
              outcome="82% prediction accuracy across 3 high-potential segments."
            />
            <ProjectPreview
              title="Sales Optimization Analysis"
              description="Built a relational sales database and analyzed holiday ticket data for an airline agency to spot route-level demand gaps."
              tags={["SQL", "ERD", "Data Modeling"]}
              outcome="Recommendations contributed to a 15% profitability increase."
            />
            <ProjectPreview
              title="Lead Scoring System"
              description="Designed a SQL-based lead scoring model on 1,000+ client records to prioritize qualified leads for the sales team."
              tags={["SQL Server", "Power BI", "Analytics"]}
              outcome="Reduced customer acquisition cost by 20%."
            />
          </div>
          <div className="mt-8 md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              See all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}

function HighlightCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-4 inline-flex rounded-md bg-primary/10 p-2 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold text-card-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function ProjectPreview({
  title,
  description,
  tags,
  outcome,
}: {
  title: string;
  description: string;
  tags: string[];
  outcome: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-auto text-sm font-medium text-primary">{outcome}</p>
    </div>
  );
}
