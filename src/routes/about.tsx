import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { GraduationCap, MapPin, Mail, Heart, Cpu, Crown, Compass } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Annie Nguyen" },
      {
        name: "description",
        content:
          "Learn about Annie Nguyen, a Business Analytics, Finance, and Economics student at Gonzaga University focused on data analytics and business analysis.",
      },
      { property: "og:title", content: "About | Annie Nguyen" },
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
  period: "August 2023 to May 2028",
  degrees: [
    {
      title: "Bachelor of Business Administration in Business Analytics & Finance",
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
      "Vietnamese Student Association Leader",
      "Community Engagement Program Volunteer",
    ],
  },
};

const quickFacts = [
  { icon: <MapPin className="h-4 w-4" />, label: "Based in Spokane, WA" },
  {
    icon: <GraduationCap className="h-4 w-4" />,
    label: "Graduating May 2028",
  },
  { icon: <Mail className="h-4 w-4" />, label: "annienguyengu@gmail.com" },
];

function AboutPage() {
  return (
    <SectionWrapper>
      <header className="mb-12">
        <p className="eyebrow mb-4">About Me</p>

        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Hi, I'm Annie.</h1>

        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I study Business Analytics, Finance, and Economics at Gonzaga University, with a minor in
          Leadership Studies. I enjoy turning messy data into clear stories that help teams make
          better decisions.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p>
            I chose to study Business Analytics alongside Finance and Economics to strengthen my
            analytical thinking and problem solving skills. I enjoy understanding both the numbers
            and the people affected by a decision.
          </p>

          <p>
            What ties this together is my curiosity about how businesses actually work: the numbers,
            the people using the reports, and the decisions they need to make. I enjoy working
            between technical and business teams, asking questions until the problem is clear, then
            building the SQL query, Python model, or Power BI dashboard that answers it.
          </p>

          <p>
            Outside of school and work, I mentor students as a Peer Academic Coach, help lead the
            Vietnamese Student Association, and volunteer with Gonzaga's Center for Community
            Engagement.
          </p>
        </div>

        <aside className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Quick Facts
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

      <section className="mt-10 grid gap-5 sm:grid-cols-2" aria-label="Personal photos of Annie">
        <figure className="aspect-[4/5] overflow-hidden rounded-2xl">
          <img
            src="/portfolio/case-studies/annie-outdoors.webp"
            alt="Annie outdoors"
            className="h-full w-full object-cover object-[50%_35%]"
            loading="lazy"
          />
        </figure>
        <figure className="aspect-[4/5] overflow-hidden rounded-2xl">
          <img
            src="/portfolio/case-studies/annie-evening.webp"
            alt="Annie at an evening event"
            className="h-full w-full object-cover object-[50%_35%]"
            loading="lazy"
          />
        </figure>
      </section>
      <section
        id="about-me"
        aria-labelledby="about-me-heading"
        className="personal-section mt-16 scroll-mt-24 pt-12"
      >
        <div>
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow mb-4">A little more about me</p>
            <h2 id="about-me-heading" className="text-3xl font-bold text-foreground">
              Beyond the spreadsheets
            </h2>
            <p className="mt-3 text-muted-foreground">A few things you won’t find on my resume.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: <Heart />,
                label: "Off the clock",
                title: "Cooking and community",
                description:
                  "I love cooking and being around people. Sharing a meal, listening, and helping someone feel welcome are small ways I care for my community.",
              },
              {
                icon: <Cpu />,
                label: "Following along",
                title: "What’s new in AI?",
                description:
                  "I read about AI and technology to keep up with new tools. My view is simple: AI should help people work more efficiently and leave more room for thoughtful work.",
              },
              {
                icon: <Crown />,
                label: "A familiar challenge",
                title: "Chess, since childhood",
                description:
                  "I grew up playing chess with my dad. I still play with friends and on my phone, and I attend chess club every week.",
              },
              {
                icon: <Compass />,
                label: "A fun fact",
                title: "10 cities. About a month.",
                description:
                  "I once visited ten cities in the United States in about a month. I enjoy seeing how each place has its own pace and personality.",
              },
            ].map((detail) => (
              <article key={detail.title} className="personal-note h-full p-6 md:p-8">
                <div className="mb-4 text-primary">{detail.icon}</div>
                <p className="text-sm font-medium text-primary">{detail.label}</p>
                <h3 className="mt-3 text-lg font-semibold text-card-foreground">{detail.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {detail.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Education</h2>
        <figure className="mb-6 overflow-hidden rounded-2xl">
          <img
            src="/portfolio/gonzaga-campus.webp"
            alt="Gonzaga University campus"
            className="max-h-80 w-full object-cover"
            loading="lazy"
          />
          <figcaption className="mt-2 text-sm text-muted-foreground">
            Gonzaga University ·{" "}
            <a
              href="https://www.gonzaga.edu/about/our-campus-location"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Campus photography
            </a>
          </figcaption>
        </figure>

        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                {education.school}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">{education.location}</p>
            </div>

            <p className="shrink-0 text-sm font-medium text-muted-foreground">{education.period}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {education.degrees.map((degree) => (
              <div key={degree.title} className="rounded-lg border border-border bg-background p-5">
                <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {degree.type}
                </span>

                <h4 className="mt-3 text-lg font-semibold text-foreground">{degree.title}</h4>

                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {degree.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-border bg-background p-5">
            <img
              src="/portfolio/clp-program.webp"
              alt="Gonzaga Comprehensive Leadership Program students taking part in global learning"
              className="mb-5 max-h-64 w-full rounded-xl object-cover"
              loading="lazy"
            />
            <a
              href="https://www.gonzaga.edu/school-of-leadership-studies/academics/comprehensive-leadership-program"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mb-4"
            >
              Comprehensive Leadership Program ↗
            </a>
            <span className="inline-block rounded bg-muted px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {education.minor.type}
            </span>

            <h4 className="mt-3 text-lg font-semibold text-foreground">{education.minor.title}</h4>

            <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-3">
              {education.minor.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="mt-10" aria-labelledby="recognition-heading">
        <h2 id="recognition-heading" className="mb-4 text-2xl font-bold text-foreground">
          Academic recognition
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground">Academic Excellence Scholarship</h3>
            <p className="mt-2 text-sm text-muted-foreground">Gonzaga University</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground">President’s List and Dean’s List</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Academic honors during 2023 to 2026. Current GPA: 3.7.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link to="/experience" className="btn-primary">
          View My Experience
        </Link>

        <Link to="/skills" className="btn-secondary">
          See My Skills
        </Link>
      </div>
    </SectionWrapper>
  );
}
