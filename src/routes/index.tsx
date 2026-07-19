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
          "Portfolio of Annie Nguyen, a Business Analytics and Economics student specializing in SQL, Python, Power BI, Excel, machine learning, and business intelligence.",
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
      "Designed a relational airline sales database and used SQL to analyze route demand, capacity utilization, ticket activity, and promotional performance.",
    tags: ["SQL", "ERD", "Data Modeling"],
    outcome:
      "Identified underfilled routes and proposed targeted coupon strategies.",
  },
  {
    slug: "marketing-campaign-response-prediction",
    title: "Marketing Campaign Response Prediction",
    category: "Machine Learning",
    description:
      "Built a classification model using customer demographics, spending behavior, and campaign information to predict campaign response probability.",
    tags: ["Python", "Scikit-learn", "Logistic Regression"],
    outcome:
      "Created a customer-ranking process for more focused marketing outreach.",
  },
];

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
      "Develop interactive Power BI and Excel dashboards that connect performance metrics with business decisions.",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Business Analysis",
    description:
      "Translate stakeholder needs into requirements, analytical solutions, process improvements, and measurable outcomes.",
  },
];

function Index() {
  return (
    <>
      <section className="border-b border-border bg-navy-900 text-navy-50">
        <SectionWrapper className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-500">
                Data Analyst | Business Analyst
              </p>

              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                Annie Nguyen
              </h1>

              <p className="mb-5 text-xl font-medium leading-relaxed text-navy-50">
                Turning complex data into clear business decisions.
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-navy-50/80 md:text-lg">
                I am a Business Analytics and Economics student at Gonzaga
                University with experience in data analytics, business
                consulting, financial analysis, and product strategy. I use
                SQL, Python, Power BI, Excel, and machine learning to improve
                reporting, identify opportunities, and communicate actionable
                insights.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-navy-50/75">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Spokane, Washington
                </span>

                <span className="inline-flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Business Analytics and Economics
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-50 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50/90"
                >
                  View My Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/experience"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-50/25 px-5 py-2.5 text-sm font-semibold text-navy-50 transition-colors hover:bg-navy-50/10"
                >
                  <FileText className="h-4 w-4" />
                  View Experience
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-50/25 px-5 py-2.5 text-sm font-semibold text-navy-50 transition-colors hover:bg-navy-50/10"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-2xl border border-navy-50/15 bg-navy-50/5 p-3 shadow-2xl">
                <img
                  src="/profile-pic.png"
                  alt="Professional portrait of Annie Nguyen"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              About Me
            </p>

            <h2 className="text-3xl font-bold text-foreground">
              Data-driven thinking with a business perspective
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              My experience spans business consulting, financial analysis,
              product development, marketing analytics, student support, and
              community engagement. I enjoy working between technical and
              business teams to make information easier to understand and use.
            </p>

            <p className="leading-relaxed">
              Across my projects and internships, I have worked with large
              datasets, developed interactive dashboards, designed SQL
              reporting processes, supported product requirements, and
              translated analytical findings into practical recommendations.
            </p>

            <Link
              to="/experience"
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-primary hover:underline"
            >
              Explore my professional experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <section className="border-y border-border bg-muted/30">
        <SectionWrapper>
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
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
              <article
                key={strength.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-5 inline-flex rounded-md bg-primary/10 p-2.5 text-primary">
                  {strength.icon}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                  {strength.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {strength.description}
                </p>
              </article>
            ))}
          </div>
        </SectionWrapper>
      </section>

      <SectionWrapper>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Selected Work
            </p>

            <h2 className="mb-3 text-3xl font-bold text-foreground">
              Featured Projects
            </h2>

            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Selected projects demonstrating my work in business intelligence,
              database analysis, data visualization, and machine learning.
            </p>
          </div>

          <Link
            to="/projects"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline md:inline-flex"
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
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 border-t border-border pt-4 text-sm font-medium leading-relaxed text-primary">
                  {project.outcome}
                </p>

                <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  View project details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      <section className="border-t border-border bg-navy-900 text-navy-50">
        <SectionWrapper className="py-14 md:py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Interested in working together?
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-navy-50/75">
                I am interested in opportunities where I can apply analytics,
                business intelligence, and problem-solving skills to meaningful
                business challenges.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-navy-50 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50/90"
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
