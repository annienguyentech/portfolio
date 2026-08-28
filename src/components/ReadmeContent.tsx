import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type ReadmeContentProps = {
  markdown: string;
  repo: string;
  branch?: string;
};

const isAbsolute = (url: string) => /^(https?:)?\/\//i.test(url) || url.startsWith("data:");

export function ReadmeContent({ markdown, repo, branch = "main" }: ReadmeContentProps) {
  const resolve = (url: string, kind: "raw" | "blob") => {
    if (!url || isAbsolute(url) || url.startsWith("#")) return url;

    const clean = url.replace(/^\.\//, "").replace(/^\//, "");
    const encoded = clean
      .split("/")
      .map((part) => encodeURIComponent(decodeURIComponent(part)))
      .join("/");

    return kind === "raw"
      ? `https://raw.githubusercontent.com/annienguyentech/${repo}/${branch}/${encoded}`
      : `https://github.com/annienguyentech/${repo}/blob/${branch}/${encoded}`;
  };

  return (
    <div className="readme space-y-5 text-muted-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h2 className="mt-10 border-b border-border pb-3 text-2xl font-bold text-foreground">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h2 className="mt-10 border-b border-border pb-2 text-xl font-bold text-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 text-lg font-semibold text-foreground">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-6 font-semibold text-foreground">{children}</h4>
          ),
          p: ({ children }) => <p className="leading-relaxed">{children}</p>,
          a: ({ href, children }) => (
            <a
              href={resolve(href ?? "", "blob")}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc space-y-2 pl-6">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal space-y-2 pl-6">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary/40 bg-muted/40 px-4 py-2 italic">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-8 border-border" />,
          table: ({ children }) => (
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted/60">{children}</thead>,
          th: ({ children }) => (
            <th className="border-b border-border px-4 py-2 text-left font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border px-4 py-2 align-top">{children}</td>
          ),
          img: ({ src, alt }) => {
            const url = resolve(typeof src === "string" ? src : "", "raw");
            const isBadge = url.includes("img.shields.io");

            if (isBadge) {
              return <img src={url} alt={alt ?? ""} className="inline-block h-5 align-middle" />;
            }

            return (
              <a href={url} target="_blank" rel="noreferrer" className="block">
                <img
                  src={url}
                  alt={alt ?? ""}
                  loading="lazy"
                  className="my-4 w-full rounded-lg border border-border bg-card"
                />
              </a>
            );
          },
          code: ({ className, children, ...props }) => {
            const inline = !String(className ?? "").includes("language-");

            if (inline) {
              return (
                <code
                  className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code className="block text-sm leading-relaxed text-foreground" {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-4 overflow-x-auto rounded-lg border border-border bg-muted/50 p-4">
              {children}
            </pre>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
