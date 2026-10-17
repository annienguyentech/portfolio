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
    organization: "Center for Student Academic Success, Gonzaga University",
    period: "January 2024 to Present",
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
    period: "August 2024 to May 2025",
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
    title: "Comprehensive Leadership Program",
    organization: "Gonzaga University",
    period: "Minor in Leadership Studies",
    highlights: [
      "Studying leadership alongside Business Analytics, Finance, and Economics.",
      "Learning to reflect on my role in a team and support people with different perspectives.",
      "Connecting classroom learning with community and service.",
    ],
    outcome:
      "I want to use my skills in ways that support both organizations and the people around them.",
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
    description: "Turn complex information into clear responsibilities, decisions, and next steps.",
  },
  {
    title: "Focus on Outcomes",
    description:
      "Measure leadership through the progress, confidence, and results created for others.",
  },
];

const rolePhotos: Record<string, [string, string][]> = {
  "Peer Academic Coach": [
    [
      "/portfolio/case-studies/academic-support.webp",
      "Gonzaga Academic Coaching and Tutoring community",
    ],
    ["/portfolio/case-studies/academic-coaching-photo.jpg", "Academic coaching at Gonzaga"],
  ],
  "Head of Event Coordination": [
    ["/portfolio/vsa-stage.webp", "Vietnamese Student Association cultural performance"],
    ["/portfolio/vsa-event.webp", "Sharing culture through community activities"],
  ],
  "Comprehensive Leadership Program": [
    ["/portfolio/clp-community.webp", "My Gonzaga leadership community"],
    ["/portfolio/clp-friends.webp", "Learning alongside friends"],
  ],
};
function LeadershipPage() {
  return (
    <SectionWrapper>
      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-semibold">Leadership and Community Impact</h1>
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          My leadership experience centers on mentoring students, organizing cultural events, and
          learning how to serve my community through the Comprehensive Leadership Program.
        </p>
      </header>
      <div className="space-y-8">
        {leadershipExamples.map((example) => (
          <article
            key={example.title}
            className="rounded-2xl border border-border bg-white p-5 md:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-3 text-primary">{example.icon}</div>
                <h2 className="text-2xl font-semibold">{example.title}</h2>
                <p className="mt-2 font-medium text-primary">{example.organization}</p>
              </div>
              <p className="text-sm text-muted-foreground">{example.period}</p>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {rolePhotos[example.title].map(([src, caption]) => (
                <figure key={src} className="overflow-hidden rounded-xl border border-border">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={src}
                      alt={caption}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <ul className="mt-6 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
              {example.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-5 font-medium leading-relaxed text-primary">
              {example.outcome}
            </p>
            {example.title === "Head of Event Coordination" && (
              <a
                className="text-link mt-4"
                href="https://www.instagram.com/gu_vsa/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                VSA on Instagram ↗
              </a>
            )}
            {example.title === "Comprehensive Leadership Program" && (
              <a
                className="text-link mt-4"
                href="https://www.gonzaga.edu/school-of-leadership-studies/academics/comprehensive-leadership-program"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the program ↗
              </a>
            )}
          </article>
        ))}
      </div>
      <section className="mt-10 rounded-2xl bg-muted/40 p-6">
        <h2 className="mb-5 text-2xl font-semibold">Leadership philosophy</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {leadershipPrinciples.map((principle) => (
            <div key={principle.title}>
              <h3 className="font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
