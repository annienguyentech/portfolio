import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { caseExhibits, extraProjects, codeNotes } from "../data/caseStudies";
import code from "../data/projectCode.json";
import { CostcoModel } from "./CostcoModel";
import imageDimensions from "../data/imageDimensions.json";

type Project = {
  title: string;
  category: string;
  summary: string;
  challenge: string;
  tools: string[];
  results: string[];
};
export function CaseStudy({ slug, project }: { slug: string; project?: Project }) {
  const entry = project || extraProjects[slug as keyof typeof extraProjects];
  if (!entry || slug === "online-course-completion-analysis")
    return (
      <SectionWrapper>
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Link to="/projects" className="text-link mt-5">
          Browse projects
        </Link>
      </SectionWrapper>
    );
  const exhibits = caseExhibits[slug] || [];
  const snippet = code[slug as keyof typeof code];
  const repository = !extraProjects[slug as keyof typeof extraProjects]
    ? `https://github.com/annienguyentech/${slug}`
    : undefined;
  return (
    <SectionWrapper className="case-study">
      <Link to="/projects" className="text-link mb-6">
        <ArrowLeft className="h-4 w-4" />
        All projects
      </Link>
      <header className="mb-8">
        <p className="eyebrow mb-3">{entry.category}</p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
          {entry.title}
        </h1>
      </header>
      <div className="mb-10 grid gap-5 md:grid-cols-[1.4fr_1fr]">
        <section className="rounded-2xl border border-border p-6">
          <h2 className="text-xl font-semibold">Project overview</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{entry.summary}</p>
          <h2 className="mt-6 text-xl font-semibold">Context</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{entry.challenge}</p>
        </section>
        <aside className="rounded-2xl bg-muted/60 p-6">
          <h2 className="text-xl font-semibold">Tools and methods</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tools.map((tool) => (
              <span className="tag" key={tool}>
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            The work and analysis are presented below, with findings and recommendations alongside
            each section.
          </p>
        </aside>
      </div>
      {slug === "revenue-plan-progress-analysis" && (
        <nav aria-label="Dashboard pages" className="case-page-nav mb-8 flex flex-wrap gap-3">
          {exhibits.map((e, i) => (
            <a key={e.title} href={`#exhibit-${i + 1}`} className="btn-secondary">
              {e.title}
            </a>
          ))}
        </nav>
      )}
      <div className="space-y-12">
        {exhibits.map((exhibit, i) => (
          <section key={exhibit.title} id={`exhibit-${i + 1}`} className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-medium text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-semibold">{exhibit.title}</h2>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-border bg-white">
              <img
                src={exhibit.image}
                alt={exhibit.alt}
                width={imageDimensions[exhibit.image as keyof typeof imageDimensions]?.[0]}
                height={imageDimensions[exhibit.image as keyof typeof imageDimensions]?.[1]}
                className="h-auto w-full object-contain"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <figcaption className="border-t border-border px-5 py-3 text-sm text-muted-foreground">
                {exhibit.title}
              </figcaption>
            </figure>
            <div className="mt-5 rounded-xl bg-muted/50 p-5 md:p-6">
              <h3 className="mb-3 font-semibold">Findings and recommendations</h3>
              <ul className="list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
                {exhibit.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
      {slug === "costco-financial-modeling" && (
        <div className="mt-10">
          <CostcoModel />
        </div>
      )}
      {snippet && (
        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-semibold">A look at the code</h2>
          <p className="mb-4 text-muted-foreground">An excerpt from the project’s source code.</p>
          <pre
            className="max-h-[32rem] overflow-auto rounded-xl bg-[#10223b] p-5 text-sm leading-relaxed text-slate-100"
            tabIndex={0}
          >
            <code>{snippet}</code>
          </pre>
          <div className="mt-5 rounded-xl bg-muted/50 p-5">
            <h3 className="mb-3 font-semibold">Findings and recommendations</h3>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {codeNotes[slug]?.map(note => <li key={note}>{note}</li>)}
            </ul>
          </div>
        </section>
      )}
      <section className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 md:p-8">
        <h2 className="mb-4 text-2xl font-semibold">Conclusion</h2>
        <p className="leading-relaxed text-muted-foreground">{entry.results.join(" ")}</p>
        {repository && (
          <a href={repository} target="_blank" rel="noopener noreferrer" className="text-link mt-5">
            Review detailed code on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </section>
    </SectionWrapper>
  );
}
