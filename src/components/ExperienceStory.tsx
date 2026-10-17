const stories: Record<string, { image?: string; alt?: string; links: [string, string][]; files?: [string, string][]; videos?: [string, string][] }> = {
  "Zag Business + Tech": { links: [["Zag Business + Tech on LinkedIn", "https://www.linkedin.com/company/zagsbusinesstech/posts/"], ["Essenza website", "https://www.myessenza.com/"]] },
  "Gonzaga University, Center for Community Engagement": { image: "/portfolio/cce-community.webp", alt: "Gonzaga community engagement volunteers painting a mural. Photo: Gonzaga University.", links: [["Center for Community Engagement", "https://www.gonzaga.edu/student-life/community-engagement-and-service/about-cce"]] },
  "Gonzaga University, Center for Student Academic Success": { image: "/portfolio/learning-studio.webp", alt: "Learning Studio community at Gonzaga", links: [["Learning Strategies and Academic Coaching", "https://www.gonzaga.edu/academics/academic-resources/center-for-student-academic-success/learning-strategies"]], files: [["Download academic coaching workshop slides (PowerPoint)", "/portfolio/academic-coaching-workshop.pptx"]] },
  "Credential Network": { image: "/portfolio/nvl-team.webp", alt: "New Venture Lab student consulting community", links: [["Gonzaga New Venture Lab", "https://www.gonzaga.edu/school-of-business-administration/hogan-leadership-program/nvl"], ["Credential Network", "https://credentialnetwork.com/"], ["New Venture Lab on LinkedIn", "https://www.linkedin.com/company/new-venture-lab"]], files: [["Read the final consulting report (PDF)", "/portfolio/credential-network-report.pdf"]] },
  Stanza: { links: [["Stanza website", "https://stanza.legal/"]], videos: [["Immigen product demonstration", "/portfolio/stanza-immigen-demo.mp4"], ["Autobot demonstration", "/portfolio/stanza-autobot-demo.mp4"]] },
  "MSB Bank": { links: [["MSB Bank website", "https://www.msb.com.vn/"], ["MSB on LinkedIn", "https://vn.linkedin.com/company/msbcareer"]] },
};

export function ExperienceStory({ company }: { company: string }) {
  const story = stories[company];
  if (!story) return null;
  return <div className="mt-5 border-t border-border pt-5">
    <div className="flex flex-wrap gap-x-6 gap-y-3">{story.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-link text-sm">{label} ↗</a>)}</div>
    {(story.image || story.files || story.videos) && <details className="media-story mt-4 rounded-xl bg-muted/50 p-4">
      <summary className="cursor-pointer font-semibold text-primary">View photos and work samples</summary>
      <div className="mt-5 space-y-5">
        {story.image && <a href={story.image} target="_blank" rel="noopener noreferrer"><img src={story.image} alt={story.alt} loading="lazy" className="max-h-80 w-full rounded-lg object-contain bg-white" /></a>}
        {story.files?.map(([label, href]) => <a key={href} className="text-link block" href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}
        {story.videos?.map(([label, src]) => <figure key={src}><figcaption className="mb-2 font-medium">{label}</figcaption><video controls preload="none" className="max-h-96 w-full rounded-lg bg-slate-950"><source src={src} type="video/mp4" /><a href={src}>Download video</a></video></figure>)}
      </div>
    </details>}
  </div>;
}
