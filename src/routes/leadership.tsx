import { createFileRoute } from "@tanstack/react-router";
import { SectionWrapper } from "../components/SectionWrapper";
import { Users, Lightbulb, Target } from "lucide-react";

export const Route = createFileRoute("/leadership")({
  component: LeadershipPage,
  head: () => ({
    meta: [
      { title: "Leadership — Annie Nguyen" },
      { name: "description", content: "Leadership, mentoring, and community engagement experience from Annie Nguyen." },
      { property: "og:title", content: "Leadership — Annie Nguyen" },
      { property: "og:description", content: "Leadership, mentoring, and community engagement experience from Annie Nguyen." },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
});

const leadershipExamples = [
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Peer Academic Coach",
    description:
      "Center for Student Academic Success, Gonzaga University (Jan 2024 — Present). Led 8+ academic workshops and 60+ one-on-one coaching sessions to help students improve their performance and study habits.",
    outcome: "Improved study habits and course outcomes for 60+ Gonzaga students.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Head of Event Coordinator",
    description:
      "Vietnamese Student Association (Aug 2024 — May 2025). Coordinated 3+ cultural events end-to-end, managing logistics and building campus partnerships to strengthen community engagement.",
    outcome: "Delivered 3+ cultural events that strengthened campus community engagement.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Academic Excellence & Honors",
    description:
      "Awarded the Academic Excellence Scholarship at Gonzaga University and named to the President's List and Dean's List every year from 2023 through 2026 while pursuing a dual Business Analytics and Economics degree.",
    outcome: "3.7 GPA · President's List & Dean's List, 2023–2026.",
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
