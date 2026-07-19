import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
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
          "Explore Annie Nguyen's experience and projects in data analytics, business analysis, and business intelligence.",
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

const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Excel",
  "Tableau",
  "Machine Learning",
];

const strengths = [
  {
    icon: <Database className="h-5 w-5" />,
    title: "Data Analysis",
    description:
      "Clean, transform, query, and analyze data using SQL, Python, Excel, and statistical methods.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Business Intelligence",
    description:
      "Build clear Power BI and Excel dashboards that help teams understand performance and make decisions.",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Business Analysis",
    description:
      "Translate stakeholder needs into requirements, analytical solutions, and practical recommendations.",
  },
];

const featuredProjects = [
  {
    slug: "revenue-plan-progress-analysis",
    category: "Power BI",
    title: "Revenue Plan Progress Analysis",
    description:
      "An interactive dashboard comparing actual and planned revenue across stores, products, customers, and promotions.",
    tags: ["Power BI", "DAX", "Power Query"],
  },
  {
    slug: "sales-optimization-analysis",
    category: "SQL",
    title: "Sales Optimization Analysis",
    description:
      "A relational airline sales database used to analyze route demand, capacity utilization, and promotion performance.",
    tags: ["SQL", "ERD", "Data Modeling"],
  },
  {
    slug: "marketing-campaign-response-prediction",
    category: "Machine Learning",
    title: "Marketing Campaign Response Prediction",
    description:
      "A Python classification model that estimates customer campaign response and supports targeted marketing.",
    tags: ["Python", "Scikit-learn", "Logistic Regression"],
  },
];

const highlights = [
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
];

function Index() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <SectionWrapper className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">
                Data Analyst and Business Analyst
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                Annie Nguyen
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                Turning data into clear insights and practical business
                decisions.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I am a Business Analytics and Economics student at Gonzaga
                University with experience in data analytics, business
                consulting, financial analysis, and dashboard development. I
                use SQL, Python, Power BI, and Excel to improve reporting,
                identify opportunities, and support better decisions.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Spokane, Washington
                </span>

                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-primary" />
                  Open to analytics opportunities
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/projects" className="btn-primary">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link to="/experience" className="btn-secondary">
                  View Experience
                </Link>

                <Link to="/contact" className="btn-secondary">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-xl border border-border bg-card p-2 shadow-sm">
                <img
                  src="/profile-pic.png"
                  alt="Professional portrait of Annie Nguyen"
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      <section className="border-b border-border bg-muted/40">
        <SectionWrapper className="py-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.label}>
                <p className="text-2xl font-bold text-foreground">
                  {highlight.value}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4">About Me</p>

            <h2 className="text-3xl font-bold text-foreground">
              Analytical skills with a strong business perspective
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              My experience includes business consulting, financial analysis,
              product development, marketing analytics, and reporting. I enjoy
              working between technical and business teams to make information
              easier to understand and use.
            </p>

            <p>
              Across my internships and projects, I have developed dashboards,
              written SQL queries, analyzed large datasets, supported product
              requirements, and translated findings into practical
              recommendations.
            </p>

            <Link to="/experience" className="text-link">
              Read about my experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <section className="border-y border-border bg-muted/40">
        <SectionWrapper>
          <div className="mb-10">
            <p className="eyebrow mb-4">Core Capabilities</p>

            <h2 className="text-3xl font-bold text-foreground">
              What I bring to a team
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              A combination of technical analysis, business understanding, and
              clear communication.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
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
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Selected Work</p>

            <h2 className="text-3xl font-bold text-foreground">
              Featured Projects
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Projects covering business intelligence, database analysis, data
              visualization, and machine learning.
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

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group block h-full"
            >
              <article className="content-card flex h-full flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-card-foreground group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
                  View project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-7 md:hidden">
          <Link to="/projects" className="text-link">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      <section className="border-t border-border bg-muted/40">
        <SectionWrapper className="py-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Interested in working together?
              </h2>

              <p className="mt-2 max-w-2xl text-muted-foreground">
                I am seeking opportunities in data analytics, business
                intelligence, and business analysis.
              </p>
            </div>

            <Link to="/contact" className="btn-primary shrink-0">
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
    <article className="content-card p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-card-foreground">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
