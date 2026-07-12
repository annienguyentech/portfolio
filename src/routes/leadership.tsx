import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { Users, Lightbulb, Target } from "lucide-react";

export const Route = createFileRoute("/leadership")({
  component: LeadershipPage,
  head: () => ({
    meta: [
      { title: "Leadership — Alex Chen" },
      { name: "description", content: "Leadership, mentoring, and cross-functional collaboration examples from Alex Chen." },
      { property: "og:title", content: "Leadership — Alex Chen" },
      { property: "og:description", content: "Leadership, mentoring, and cross-functional collaboration examples from Alex Chen." },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
});

const leadershipExamples = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Mentoring Junior Analysts",
    description:
      "Mentored two junior analysts at Northwind Analytics, creating a structured onboarding curriculum covering SQL, Python, Tableau, and statistical fundamentals. Both analysts were promoted within 18 months.",
    outcome: "100% promotion rate for mentees within 18 months.",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Analytics Guild Founder",
    description:
      "Founded a cross-company analytics guild to share best practices, code snippets, and dashboard templates. Hosted monthly lunch-and-learns and built a shared knowledge repository.",
    outcome: "Grew to 30+ members and reduced duplicate analysis across teams.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Churn Initiative Lead",
    description:
      "Led a six-month, cross-functional initiative to reduce customer churn. Coordinated data science, marketing, customer success, and engineering to define risk scoring, intervention workflows, and success metrics.",
    outcome: "Reduced churn by 12% and generated an estimated $180K ARR in retained revenue.",
  },
];

function LeadershipPage() {
  return (
    <SectionWrapper>
      <div className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-foreground">Leadership</h1>
        <p className="max-w-2xl text-muted-foreground">
          Examples of how I lead through mentoring, building communities, and driving cross-functional outcomes.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leadershipExamples.map((example) => (
          <div
            key={example.title}
            className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6"
          >
            <div className="inline-flex w-fit rounded-md bg-primary/10 p-2 text-primary">
              {example.icon}
            </div>
            <h2 className="text-lg font-semibold text-card-foreground">
              {example.title}
            </h2>
            <p className="text-sm text-muted-foreground">{example.description}</p>
            <p className="mt-auto text-sm font-medium text-primary">{example.outcome}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-lg border border-border bg-muted/30 p-6 md:p-8">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Leadership philosophy</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          I believe the best analysts are translators: they turn ambiguity into structure, data into stories, and insights into action. My leadership style is rooted in curiosity, clarity, and empowering others to make better decisions. Whether I am mentoring a junior analyst, running a workshop, or leading a project, I focus on outcomes, not just outputs.
        </p>
      </div>
    </SectionWrapper>
  );
}
