import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  outcome: string;
  link?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  outcome,
  link,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
            aria-label={`View ${title} project`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-auto text-sm font-medium text-primary">{outcome}</p>
    </article>
  );
}
