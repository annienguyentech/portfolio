import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  FileText,
  LineChart,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Annie Nguyen | Data Analyst & Business Analyst",
      },
      {
        name: "description",
        content:
          "Portfolio of Annie Nguyen, a Business Analytics and Economics student with experience in SQL, Python, Power BI, Excel, machine learning, and business intelligence.",
      },
      {
        property: "og:title",
        content: "Annie Nguyen | Data Analyst & Business Analyst",
      },
      {
        property: "og:description",
        content:
          "Explore Annie Nguyen's experience and projects in data analytics, business analysis, business intelligence, and machine learning.",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],
  }),
});

const strengths = [
  {
    icon: <Database className="h-5 w-5" />,
    title: "Data Analysis",
    description:
      "Clean, transform, query, and analyze structured data using SQL, Python, Excel, and statistical techniques.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Business Intelligence",
    description:
      "Build interactive Power BI and Excel dashboards that connect performance metrics with business decisions.",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Business Analysis",
    description:
      "Translate stakeholder needs into clear requirements, analytical solutions, process improvements, and recommendations.",
  },
];

const featuredProjects = [
  {
    slug: "revenue-plan-progress-analysis",
    title: "Revenue Plan Progress Analysis",
    category: "Business Intelligence",
    description:
      "Developed an interactive Power BI dashboard to compare actual and planned revenue across stores, products, customers, and promotions.",
    tags: ["Power BI", "DAX", "Power Query"],
    outcome:
      "Created four analytical pages for monitoring revenue performance and plan completion.",
  },
  {
    slug: "sales-optimization-analysis",
    title: "Sales Optimization Analysis",
    category: "SQL and Database Analysis",
    description:
      "Designed a relational airline sales database and used SQL to examine route demand, capacity utilization, ticket activity, and promotion performance.",
    tags: ["SQL", "ERD", "Data Modeling"],
    outcome:
      "Identified underfilled routes and proposed targeted coupon strategies.",
  },
  {
    slug: "marketing-campaign-response-prediction",
    title: "Marketing Campaign Response Prediction",
    category: "Machine Learning",
    description:
      "Built a classification model using customer demographics, spending behavior, and campaign data to predict customer response probability.",
    tags: ["Python", "Scikit-learn", "Logistic Regression"],
    outcome:
      "Created a customer-ranking process for more focused marketing outreach.",
  },
];

const statistics = [
  {
    value: "40+",
    label: "Datasets integrated",
  },
  {
    value: "100K+",
    label: "Credit users analyzed",
  },
  {
    value: "50%+",
    label: "Reporting time reduced",
  },
  {
    value: "1,000+",
    label: "Client records analyzed",
  },
];

function Index() {
  return (
    <>
      <section className="hero-surface border-b border-border">
        <SectionWrapper className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Data Analyst | Business Analyst
              </div>

              <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                Annie Nguyen
              </h1>

              <p className="mb-5 max-w-2xl text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                Turning complex data into clear business decisions.
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I am a Business Analytics and Economics student at Gonzaga
                University with experience in data analytics, business
                consulting, financial analysis, product development, and
                dashboard design. I use SQL, Python, Power BI, and Excel to
                improve reporting, identify opportunities, and communicate
                actionable insights.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Spokane, Washington
                </span>

                <span className="inline-flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  Business Analytics and Economics
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  View My Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link to="/experience" className="btn-secondary">
                  <FileText className="h-4 w-4" />
                  View Experience
                </Link>

                <Link to="/contact" className="btn-secondary">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/15 to-accent/50 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white p-3 shadow-2xl">
                  <img
                    src="/profile-pic.png"
                    alt="Professional portrait of Annie Nguyen"
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                </div>

                <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-xl border border-border bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
                  <p className="text-sm font-bold text-foreground">
                    Open to Data and Business Analyst Opportunities
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Analytics, business intelligence, and reporting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
              About Me
            </p>

            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Analytical thinking with a business perspective
            </h2>
          </div>

          <div className="space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              My experience spans business consulting, financial analysis,
              product development, marketing analytics, student support, and
              community engagement. I enjoy working between technical and
              business teams to make information easier to understand and use.
            </p>

            <p className="leading-relaxed">
              Across my internships and projects, I have developed dashboards,
              written SQL reporting processes, analyzed large datasets,
              supported product requirements, and translated findings into
              practical recommendations.
            </p>

            <Link to="/experience" className="text-link">
              Explore my professional experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <section className="border-y border-border bg-white">
        <SectionWrapper className="py-12">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {statistics.map((statistic) => (
              <div
                key={statistic.label}
                className="rounded-xl border border-border bg-muted/30 p-5 text-center"
              >
                <p className="text-3xl font-extrabold text-primary">
                  {statistic.value}
                </p>

                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      <section className="bg-muted/30">
        <SectionWrapper>
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
              Core Capabilities
            </p>

            <h2 className="mb-3 text-3xl font-bold text-foreground">
              How I create value
            </h2>

            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              I combine analytical tools, business understanding, and clear
              communication to help teams move from raw information to informed
              action.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((strength) => (
              <StrengthCard
                key={strength.title}
                icon={strength.icon}
                title={strength.title}
                description={strength.description}
              />
            ))}
          </div>
        </SectionWrapper>
      </section>

      <SectionWrapper>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
              Selected Work
            </p>

            <h2 className="mb-3 text-3xl font-bold text-foreground">
              Featured Projects
            </h2>

            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Selected projects demonstrating my work in business intelligence,
              SQL, data visualization, database analysis, and machine learning.
            </p>
          </div>

          <Link
            to="/projects"
            className="text-link hidden shrink-0 md:inline-flex"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group block h-full"
            >
              <article className="portfolio-card flex h-full flex-col p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-card-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="result-box mt-5">
                  {project.outcome}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-primary">
                  View project details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link to="/projects" className="text-link">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      <section className="border-t border-border bg-navy-900 text-white">
        <SectionWrapper className="py-14 md:py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-200">
                Let us connect
              </p>

              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Interested in working together?
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-white/75">
                I am seeking opportunities where I can apply analytics,
                business intelligence, and problem-solving skills to meaningful
                business challenges.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}

function StrengthCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="portfolio-card p-6">
      <div className="icon-box mb-5">
        {icon}
      </div>

      <h3 className="mb-3 text-lg font-bold text-card-foreground">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
