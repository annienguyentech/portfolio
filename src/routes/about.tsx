import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { GraduationCap, MapPin, Mail, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Annie Nguyen" },
      {
        name: "description",
        content:
          "Learn about Annie Nguyen, a Business Analytics and Economics student at Gonzaga University focused on data analytics and business analysis.",
      },
      { property: "og:title", content: "About — Annie Nguyen" },
      {
        property: "og:description",
        content:
          "Background, education, and personal story of Annie Nguyen, aspiring Data Analyst and Business Analyst.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const education = {
  school: "Gonzaga University",
  location: "Spokane, WA",
  period: "August 2023 – December 2027",
  degrees: [
    {
      title: "Bachelor of Business Administration in Business Analytics",
      type: "Major",
      highlights: [
        "Database Management",
        "Data Analytics for Business",
        "Regression Analysis",
        "Management Information Systems",
        "Problem Solving & Programming",
      ],
    },
    {
      title: "Bachelor of Science in Economics",
      type: "Major",
      highlights: [
        "Microeconomic Theory",
        "Macroeconomic Analysis",
        "Econometrics",
        "Financial Economics",
      ],
    },
  ],
  minor: {
    title: "Minor in Leadership Studies",
    type: "Minor",
    highlights: [
      "Peer Academic Coach",
      "Vietnamese Student Association leader",
      "Community engagement program volunteer",
    ],
  },
};


const quickFacts = [
  { icon: <MapPin className="h-4 w-4" />, label: "Based in Spokane, WA" },
  { icon: <Globe className="h-4 w-4" />, label: "Originally from Hanoi, Vietnam" },
  { icon: <GraduationCap className="h-4 w-4" />, label: "Graduating December 2027" },
  { icon: <Mail className="h-4 w-4" />, label: "annienguyengu@gmail.com" },
];

function AboutPage() {
  return (
    <SectionWrapper>
      <header className="mb-12">
        <p className="eyebrow mb-4">About Me</p>
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Hi, I'm Annie.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I'm a dual-degree student in Business Analytics and Economics at
          Gonzaga University, with a minor in Leadership Studies, who enjoys
          turning messy data into clear stories that help teams make better
          decisions.
        </p>

      </header>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I grew up in Hanoi, Vietnam, and moved to Spokane to study business
            analytics. Along the way I've worked across financial analysis at
            MSB Bank, business consulting at Credential Network, product and
            marketing analytics at Stanza, and community programs at Gonzaga's
            Center for Community Engagement.
          </p>
          <p>
            What ties this together is a real curiosity for how businesses
            actually work — the numbers, the people using the reports, and the
            decisions they need to make. I like sitting between technical and
            business teams, asking questions until the problem is clear, and
            then building the SQL query, Python model, or Power BI dashboard
            that answers it.
          </p>
          <p>
            Outside of school and work, I mentor other students as a Peer
            Academic Coach, help lead the Vietnamese Student Association, and
            spend a lot of time exploring the Pacific Northwest.
          </p>
        </div>

        <aside className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Quick facts
          </h2>
          <ul className="space-y-3">
            {quickFacts.map((fact) => (
              <li
                key={fact.label}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 text-sm text-card-foreground"
              >
                <span className="text-primary">{fact.icon}</span>
                {fact.label}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Education</h2>
        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                {education.school}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {education.location}
              </p>
            </div>
            <p className="shrink-0 text-sm font-medium text-muted-foreground">
              {education.period}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {education.degrees.map((degree) => (
              <div
                key={degree.title}
                className="rounded-lg border border-border bg-background p-5"
              >
                <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {degree.type}
                </span>
                <h4 className="mt-3 text-lg font-semibold text-foreground">
                  {degree.title}
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {degree.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-dashed border-border bg-background p-5">
            <span className="inline-block rounded bg-muted px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {education.minor.type}
            </span>
            <h4 className="mt-3 text-lg font-semibold text-foreground">
              {education.minor.title}
            </h4>
            <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-3">
              {education.minor.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>


      <div className="mt-14 flex flex-wrap gap-3">
        <Link to="/experience" className="btn-primary">View my experience</Link>
        <Link to="/skills" className="btn-secondary">See my skills</Link>
      </div>
    </SectionWrapper>
  );
}