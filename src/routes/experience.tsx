import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      {
        title: "Professional Experience | Annie Nguyen",
      },
      {
        name: "description",
        content:
          "Professional experience of Annie Nguyen across data analytics, business analysis, consulting, financial analysis, and community engagement.",
      },
      {
        property: "og:title",
        content: "Professional Experience | Annie Nguyen",
      },
      {
        property: "og:description",
        content:
          "Explore Annie Nguyen's professional experience in data analytics, business analysis, consulting, banking, and community engagement.",
      },
      {
        property: "og:url",
        content: "/experience",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/experience",
      },
    ],
  }),
});

interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "KPIM",
    location: "Remote",
    role: "Data Analytics Intern",
    period: "January 2027 - March 2027",
    achievements: [
      "Incoming Data Analytics Intern.",
    ],
  },
  {
    company: "Auspify Technologies",
    location: "Remote",
    role: "Data Analysis Intern",
    period: "June 2026 - August 2026",
    achievements: [
      "Incoming Data Analysis Intern.",
    ],
  },
  {
    company: "Gonzaga University, Center for Community Engagement",
    location: "Spokane, WA",
    role: "Administrative Assistant",
    period: "August 2025 - Present",
    achievements: [
      "Managed volunteer program tracking by monitoring an internal database system and maintaining current records for 100+ student volunteers and staff across 10+ projects.",
      "Supported communication through email, phone outreach, and cross-team collaboration, ensuring timely delivery of program requirements and completion of deadlines.",
    ],
  },
  {
    company: "Gonzaga University, Center for Student Academic Success",
    location: "Spokane, WA",
    role: "Peer Academic Coach",
    period: "January 2024 - Present",
    achievements: [
      "Coached 60+ students through one-on-one sessions, providing tailored strategies for time management, note-taking, and exam preparation to improve academic performance and confidence.",
      "Designed and led 8+ academic skills workshops attended by 100+ students, covering procrastination management and active study methods while receiving 95% positive feedback.",
      "Reached 200+ students through classroom and residence hall outreach focused on test anxiety and effective study habits, contributing to a 15% increase in academic engagement and a 10% reduction in course withdrawal requests.",
    ],
  },
  {
    company: "Credential Network",
    location: "Spokane, WA",
    role: "Business Consultant",
    period: "September 2025 - December 2025",
    achievements: [
      "Collaborated with the finance team to identify key performance indicators and develop an interactive KPI dashboard using Power BI and Python, reducing manual reporting time by more than 50%.",
      "Built a lead scoring system using data from 1,000+ clients stored in SQL Server, improving the accuracy of conversion rate and customer acquisition cost calculations by 20%.",
    ],
  },
  {
    company: "Stanza",
    location: "Menlo Park, CA",
    role: "Business Analyst Intern",
    period: "June 2025 - August 2025",
    achievements: [
      "Led the end-to-end development of a new AI drafting feature by interviewing 100+ potential clients and collaborating with the software engineering team, producing requirements documentation that reduced development rework by 30%.",
      "Designed a reporting dashboard by interpreting and visualizing 30+ Excel datasets using Power BI and Python to monitor monthly marketing spending and lead generation rates, supporting social media campaign investment decisions.",
      "Conducted pricing validation through competitor benchmarking and insights from 200+ users, helping guide a strategic pricing update for the premium subscription tier.",
    ],
  },
  {
    company: "MSB Bank",
    location: "Hanoi, Vietnam",
    role: "Financial Analyst Intern",
    period: "May 2024 - August 2024",
    achievements: [
      "Optimized business loan performance reporting by designing SQL queries to integrate 40+ datasets and building Excel dashboards that tracked loan utilization, reducing manual reporting effort by 30% across 100,000+ credit users.",
      "Analyzed credit trends among Vietnamese SMEs valued from $1 million to $20 million by monitoring overdue and bad-debt expenses, identifying lending gaps, and assessing policy changes, supporting a partnership with the OPEC Fund to expand financing for 500,000 SMEs in Vietnam.",
    ],
  },
  {
    company: "Petrolimex",
    location: "Haiphong, Vietnam",
    role: "Business Development Intern",
    period: "December 2023 - January 2024",
    achievements: [
      "Researched rural fuel consumption patterns and tested alternative sales models, providing insights from 500 households that informed infrastructure investment and market entry decisions.",
      "Partnered with the accounting team to evaluate revenue streams and operational cost drivers for downstream projects, improving margin forecast accuracy and informing an updated pricing strategy.",
    ],
  },
];

function ExperiencePage() {
  return (
    <SectionWrapper>
      <header className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          Professional Experience
        </h1>

        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          Explore my professional experience applying data analytics, business
          intelligence, financial analysis, and consulting skills to solve
          business problems, improve reporting processes, and support
          data-driven decisions.
        </p>
      </header>

      <div className="space-y-12">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="border-b border-border pb-10 last:border-b-0"
          >
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {experience.role}
                </h2>

                <p className="mt-1 font-medium text-primary">
                  {experience.company} | {experience.location}
                </p>
              </div>

              <p className="shrink-0 text-sm font-medium text-muted-foreground">
                {experience.period}
              </p>
            </div>

            <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-primary">
              {experience.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="pl-1 leading-relaxed"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
