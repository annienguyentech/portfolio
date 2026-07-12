import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function SectionWrapper({
  children,
  className,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-5xl px-4 py-16 md:py-24",
        className
      )}
    >
      {children}
    </Component>
  );
}
