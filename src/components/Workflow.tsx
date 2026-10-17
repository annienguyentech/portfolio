import { MessageCircle, Database, ChartColumn, Users } from "lucide-react";
const steps = [
  { icon: MessageCircle, title: "Understand the question", description: "Listen to what the team needs and define the decision the analysis should support." },
  { icon: Database, title: "Work through the data", description: "Clean, connect, and explore the data with SQL, Python, and Excel." },
  { icon: ChartColumn, title: "Make the findings clear", description: "Build dashboards and explain the patterns in the context of the business." },
  { icon: Users, title: "Support the next step", description: "Discuss the findings, document recommendations, and learn from feedback." },
];
export function Workflow() {
  return <ol className="workflow-grid my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map(({ icon: Icon, title, description }, i) => <li key={title} className="relative rounded-2xl border border-border bg-white p-5"><div className="mb-5 flex items-center justify-between"><Icon className="h-7 w-7 text-primary" /><span className="font-mono text-2xl text-primary/35">0{i + 1}</span></div><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p></li>)}</ol>;
}
