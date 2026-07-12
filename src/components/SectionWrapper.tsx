import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "header" | "footer";
};

export function SectionWrapper({
  children,
  className,
  as = "section",
}: SectionWrapperProps) {
  const classes = cn(
    "mx-auto w-full max-w-5xl px-4 py-16 md:py-24",
    className
  );

  if (as === "div") {
    return <div className={classes}>{children}</div>;
  }
  if (as === "header") {
    return <header className={classes}>{children}</header>;
  }
  if (as === "footer") {
    return <footer className={classes}>{children}</footer>;
  }
  return <section className={classes}>{children}</section>;
}
