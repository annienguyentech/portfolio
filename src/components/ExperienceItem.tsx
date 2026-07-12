interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export function ExperienceItem({
  company,
  role,
  period,
  achievements,
}: ExperienceItemProps) {
  return (
    <div className="relative border-l border-border pl-6">
      <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
      <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-foreground">{company}</h3>
        <span className="text-xs text-muted-foreground">{period}</span>
      </div>
      <p className="mb-3 text-sm font-medium text-primary">{role}</p>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-sm text-muted-foreground">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}
