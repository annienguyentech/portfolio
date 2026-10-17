import { ArrowRight, Database, FileChartColumn, Workflow } from "lucide-react";
const base = "/portfolio/case-studies/";
const visuals: Record<string, [string, string]> = {
  "Zag Business + Tech": [
    `${base}essenza.webp`,
    "Essenza product photography from the company website",
  ],
  "Gonzaga University, Center for Community Engagement": [
    "/portfolio/cce-community.webp",
    "Community engagement at Gonzaga University",
  ],
  "Gonzaga University, Center for Student Academic Success": [
    `${base}academic-support.webp`,
    "Gonzaga Academic Coaching and Tutoring community",
  ],
  "Credential Network": [
    "/portfolio/nvl-team.webp",
    "Gonzaga New Venture Lab consulting community",
  ],
  Stanza: [`${base}stanza-website.png`, "Stanza company website preview"],
  "MSB Bank": [`${base}msb-official.jpg`, "MSB photography from the company website"],
};
const links: Record<string, [string, string][]> = {
  "Zag Business + Tech": [["Essenza website", "https://www.myessenza.com/"]],
  "Gonzaga University, Center for Community Engagement": [
    [
      "Center for Community Engagement",
      "https://www.gonzaga.edu/student-life/community-engagement-and-service/about-cce",
    ],
  ],
  "Gonzaga University, Center for Student Academic Success": [
    [
      "Academic Coaching and Tutoring",
      "https://www.gonzaga.edu/academics/academic-resources/center-for-student-academic-success/learning-strategies",
    ],
  ],
  "Credential Network": [
    ["Credential Network", "https://credentialnetwork.com/"],
    [
      "Gonzaga New Venture Lab",
      "https://www.gonzaga.edu/school-of-business-administration/hogan-leadership-program/nvl",
    ],
  ],
  Stanza: [["Stanza website", "https://stanza.legal/"]],
  "MSB Bank": [["MSB Bank website", "https://www.msb.com.vn/"]],
};
export function ExperienceHero({ company }: { company: string }) {
  const visual = visuals[company];
  return visual ? (
    <figure className="mb-6 overflow-hidden rounded-xl border border-border bg-muted/30">
      <img
        src={visual[0]}
        alt={visual[1]}
        className="h-auto max-h-[25rem] w-full object-contain"
        loading="lazy"
      />
      <figcaption className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
        {visual[1]}
      </figcaption>
    </figure>
  ) : null;
}
export function ExperienceMedia({ company }: { company: string }) {
  return (
    <div className="mt-5 border-t border-border pt-5">
      <div className="flex flex-wrap gap-5">
        {links[company]?.map(([label, href]) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm"
          >
            {label} ↗
          </a>
        ))}
      </div>
      <section className="experience-media-box mt-5" aria-label={`${company} work`}>
        <h3 className="mb-4 font-semibold">
          {company === "Credential Network"
            ? "Consulting report"
            : company.includes("Academic Success")
              ? "Academic coaching workshop"
              : company === "Stanza"
                ? "Product demonstrations"
                : "My work"}
        </h3>
        {company === "Credential Network" && (
          <div
            className="work-document-scroll"
            role="region"
            aria-label="Consulting report"
            tabIndex={0}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <figure key={i}>
                <img
                  src={`${base}credential-${i + 1}.webp`}
                  alt={`Credential Network consulting report page ${i + 1}`}
                  className="h-auto w-full border-b border-border"
                  loading="lazy"
                />
                <figcaption className="px-4 py-2 text-xs text-muted-foreground">
                  Page {i + 1} of 20
                </figcaption>
              </figure>
            ))}
          </div>
        )}
        {company.includes("Academic Success") && (
          <iframe
            src={`${base}coaching-workshop.html`}
            title="Academic coaching workshop slides"
            className="h-[36rem] w-full rounded-xl border border-border bg-white"
            loading="lazy"
          />
        )}
        {company === "Stanza" && (
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Immigen demonstration", "stanza-immigen-demo.mp4"],
              ["Autobot demonstration", "stanza-autobot-demo.mp4"],
            ].map(([title, file]) => (
              <figure key={file}>
                <video
                  controls
                  preload="metadata"
                  className="aspect-video w-full rounded-xl bg-slate-950"
                >
                  <source src={`/portfolio/${file}#t=0.1`} type="video/mp4" />
                </video>
                <figcaption className="mt-3 text-sm font-medium">{title}</figcaption>
              </figure>
            ))}
          </div>
        )}
        {company === "Zag Business + Tech" && (
          <>
            <p className="mb-4 text-sm text-muted-foreground">
              Designing, testing, and implementing Smartsheet automation workflows for Essenza.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Design the workflow", "Test the workflow", "Implement in Smartsheet"].map(
                (step, i) => (
                  <div key={step} className="rounded-xl border border-border bg-white p-5">
                    <Workflow className="mb-3 h-6 w-6 text-primary" />
                    <p className="text-xs text-primary">0{i + 1}</p>
                    <h4 className="mt-2 text-sm font-semibold">{step}</h4>
                  </div>
                ),
              )}
            </div>
          </>
        )}
        {company.includes("Community Engagement") && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-5">
              <h4 className="font-semibold">Program coordination</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Maintained records for more than 100 volunteers and staff across more than 10
                projects.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5">
              <h4 className="font-semibold">Community communication</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Supported email, phone outreach, and coordination across program teams.
              </p>
            </div>
          </div>
        )}
        {company === "MSB Bank" && (
          <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-xl bg-white p-5">
              <Database className="mb-3 h-7 w-7 text-primary" />
              <h4 className="font-semibold">SQL data integration</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                40+ datasets brought together for loan performance reporting.
              </p>
            </div>
            <ArrowRight className="mx-auto h-6 w-6 text-primary" />
            <div className="rounded-xl bg-white p-5">
              <FileChartColumn className="mb-3 h-7 w-7 text-primary" />
              <h4 className="font-semibold">Excel reporting</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Dashboards tracking loan utilization and supporting financial analysis.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
