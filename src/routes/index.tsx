import { Workflow } from "../components/Workflow";
import type { ReactNode } from "react";
import { CompanyLogo, companyBrandStyle } from "../components/CompanyLogo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { ArrowRight, BriefcaseBusiness, Database, LineChart, Mail, MapPin } from "lucide-react";

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
          "Portfolio of Annie Nguyen, a Business Analytics, Finance, and Economics student with a minor in Leadership Studies, specializing in SQL, Python, Power BI, Excel, machine learning, and business intelligence.",
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

const skills = ["SQL", "Python", "Power BI", "Excel", "Tableau", "Machine Learning"];

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
    slug: "xmas-gift-analysis",
    category: "SQL",
    title: "Xmas Gift Analysis",
    previewImage: "/portfolio/case-studies/xmas-season-results.svg",
    previewAlt: "Christmas sales results by season, redrawn from the project dataset",
    description: "Exploring seasonal sales, customer behavior, and shopping patterns through SQL.",
    tags: ["SQL Server", "Business Analysis"],
  },
  {
    slug: "revenue-plan-progress-analysis",
    category: "Power BI",
    title: "Revenue Plan Progress Analysis",
    previewImage: "/portfolio/revenue.webp",
    previewAlt: "Revenue plan dashboard with actual revenue and performance by store",
    description:
      "An interactive view of revenue performance, targets, and the drivers behind the results.",
    tags: ["Power BI", "DAX", "Power Query"],
  },
  {
    slug: "customer-behavior-and-segmentation-analysis",
    category: "Customer Analytics",
    title: "Customer Behavior and Segmentation Analysis",
    previewImage: "/portfolio/customers.webp",
    previewAlt: "Customer analysis dashboard with customer groups and purchasing patterns",
    description:
      "A dashboard exploring customer groups and purchasing behavior to support more focused business decisions.",
    tags: ["Customer Segmentation", "Dashboard Design"],
  },
  {
    slug: "kpim-mart-sales-excel-dashboard",
    category: "Excel",
    title: "KPIM Mart Sales Excel Dashboard",
    previewImage: "/portfolio/excel.webp",
    previewAlt: "Excel sales dashboard with revenue trends and product performance",
    description:
      "Sales, profit, and store performance brought together in an interactive Excel dashboard.",
    tags: ["Excel", "Power Query", "PivotTables"],
  },
];

function Index() {
  return (
    <>
      <section className="home-intro bg-background">
        <SectionWrapper className="py-8 md:py-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Data Analyst and Business Analyst</p>

              <h1 className="home-greeting text-foreground">Annie Nguyen</h1>

              <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                A Gonzaga student exploring the connections between data, business, and people.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I study Business Analytics, Finance, and Economics at Gonzaga University, with a
                minor in Leadership Studies. I’m interested in the stories behind the numbers and
                how they help people make better decisions.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Through projects and internships in business consulting, business analytics, and
                financial analysis, I’m learning to connect technical work with real business
                questions. On this website, you’ll find what I’ve been working on, what I’m
                learning, and a little about the person behind the projects.
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

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/projects" className="btn-primary">
                  Explore my projects
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link to="/about" className="btn-secondary">
                  About me
                </Link>

                <Link to="/contact" className="btn-secondary">
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </div>
            </div>

            <figure className="portrait-frame portrait-full mx-auto w-full max-w-sm">
              <img
                src="/portfolio/annie-portrait.png"
                alt="Portrait of Annie Nguyen"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </figure>
          </div>
        </SectionWrapper>
      </section>

      <SectionWrapper>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <Link to="/experience" className="text-link">
            View experience <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              company: "Credential Network",
              role: "Business Consultant Intern",
              detail:
                "Built a KPI dashboard with Power BI and Python, and a SQL Server lead scoring system using data from more than 1,000 clients.",
            },
            {
              company: "Stanza",
              role: "Business Analyst Intern",
              detail:
                "Conducted more than 100 client interviews for an AI drafting feature and built reporting for marketing spending and lead generation.",
            },
            {
              company: "MSB Bank",
              role: "Financial Analyst Intern",
              detail:
                "Integrated more than 40 datasets with SQL and built Excel reporting for loan utilization across more than 100,000 credit users.",
            },
          ].map((experience) => (
            <article
              key={experience.company}
              className="company-experience p-5"
              style={companyBrandStyle(experience.company)}
            >
              <CompanyLogo company={experience.company} />
              <h3 className="company-name mt-4 font-semibold">{experience.company}</h3>
              <p className="mt-1 text-sm font-medium text-foreground">{experience.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {experience.detail}
              </p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <section className="skills-section border-y border-border bg-muted/40">
        <SectionWrapper>
          <div className="mb-10">
            <p className="eyebrow mb-4">How I work</p>

            <h2 className="text-3xl font-bold text-foreground">Where I add value</h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              I like making complicated information easier to understand, whether I’m exploring data
              or talking through a business question.
            </p>
          </div>

          <Workflow />
          <div className="mb-10 flex flex-wrap items-center gap-2" aria-label="Tools I work with">
            <span className="mr-2 text-sm text-muted-foreground">Tools I work with</span>
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
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

            <h2 className="text-3xl font-bold text-foreground">A few things I’ve worked on</h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Projects covering business intelligence, database analysis, data visualization, and
              machine learning.
            </p>
          </div>

          <Link to="/projects" className="text-link hidden shrink-0 md:inline-flex">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group block h-full"
            >
              <article className="content-card flex h-full flex-col p-6">
                {project.previewImage && (
                  <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl border-b border-border bg-white">
                    <img
                      src={project.previewImage}
                      alt={project.previewAlt}
                      className="aspect-[4/3] w-full object-contain"
                      width="963"
                      height="885"
                      loading="lazy"
                    />
                  </div>
                )}
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
              <h2 className="text-2xl font-bold text-foreground">Opportunities in analytics</h2>

              <p className="mt-2 max-w-2xl text-muted-foreground">
                I am looking for opportunities in data analytics, business analytics, and financial
                analytics. Thank you for considering my work. Please contact me at
                annienguyengu@gmail.com.
              </p>
            </div>

            <Link to="/contact" className="btn-primary shrink-0">
              <Mail className="h-4 w-4" />
              Contact
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
    <article className="capability-note rounded-2xl border border-border bg-white p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
