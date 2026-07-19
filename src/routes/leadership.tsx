import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { Users, Lightbulb, Target } from "lucide-react";

export const Route = createFileRoute("/leadership")({
  component: LeadershipPage,
  head: () => ({
    meta: [
      {
        title: "Leadership | Annie Nguyen",
      },
      {
        name: "description",
        content:
          "Leadership experience of Annie Nguyen across student mentoring, event coordination, and cross-functional project management.",
      },
      {
        property: "og:title",
        content: "Leadership | Annie Nguyen",
      },
      {
        property: "og:description",
        content:
          "Explore Annie Nguyen's leadership experience in mentoring, community engagement, and collaborative project delivery.",
      },
      {
        property: "og:url",
        content: "/leadership",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/leadership",
      },
    ],
  }),
});

const leadershipExamples = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Peer Academic Coach",
    organization:
      "Center for Student Academic Success, Gonzaga University",
    period: "January 2024 - Present",
    highlights: [
      "Coached 60+ students through personalized sessions focused on time management, note-taking, exam preparation, and academic confidence.",
      "Designed and led 8+ academic skills workshops attended by more than 100 students.",
      "Reached 200+ students through classroom and residence hall outreach addressing test anxiety and effective study strategies.",
    ],
    outcome:
      "Received 95% positive workshop feedback while contributing to stronger academic engagement and student confidence.",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Head of Event Coordination",
    organization: "Vietnamese Student Association",
    period: "August 2024 - May 2025",
    highlights: [
      "Coordinated 3+ cultural events from initial planning through final delivery.",
      "Managed event logistics, scheduling, team responsibilities, and communication with campus partners.",
      "Worked with student leaders and university organizations to create inclusive cultural experiences for the campus community.",
    ],
    outcome:
      "Strengthened campus engagement and increased awareness of Vietnamese culture through collaborative events.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Cross-Functional Project Leadership",
    organization: "Credential Network and Stanza",
    period: "2025",
    highlights: [
      "Collaborated with finance, marketing, and software engineering teams to translate business needs into dashboards, analytical systems, and product requirements.",
      "Organized feedback from 100+ potential clients into clear product requirement documents for an AI drafting feature.",
      "Communicated technical findings through practical recommendations that supported business and product decisions.",
    ],
    outcome:
      "Helped reduce manual reporting time by more than 50% and product development rework by 30%.",
  },
];

const leadershipPrinciples = [
  {
    title: "Listen First",
    description:
      "Understand the people, priorities, and challenges involved before proposing a solution.",
  },
  {
    title: "Create Clarity",
    description:
      "Turn complex information into clear responsibilities, decisions, and next steps.",
  },
  {
    title: "Focus on Outcomes",
    description:
      "Measure leadership through the progress, confidence, and results created for others.",
  },
];

function LeadershipPage() {
  return (
    <SectionWrapper>
      <header className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          Leadership and Community Impact
        </h1>

        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          My leadership experience centers on mentoring students, coordinating
          collaborative initiatives, and helping cross-functional teams turn
          ideas into measurable outcomes.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {leadershipExamples.map((example) => (
          <article
            key={example.title}
            className="flex flex-col rounded-lg border border-border bg-card p-6"
          >
            <div className="mb-4 inline-flex w-fit rounded-md bg-primary/10 p-2 text-primary">
              {example.icon}
            </div>

            <h2 className="text-lg font-semibold text-card-foreground">
              {example.title}
            </h2>

            <p className="mt-1 text-sm font-medium text-primary">
              {example.organization}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {example.period}
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
              {example.highlights.map((highlight) => (
                <li key={highlight} className="pl-1">
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <p className="border-t border-border pt-4 text-sm font-medium leading-relaxed text-primary">
                {example.outcome}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-lg border border-border bg-muted/30 p-6 md:p-8">
        <div className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Leadership Philosophy
          </h2>

          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            I approach leadership as the responsibility to create clarity,
            support others, and move a team toward meaningful results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {leadershipPrinciples.map((principle) => (
            <div key={principle.title}>
              <h3 className="mb-2 font-semibold text-foreground">
                {principle.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
