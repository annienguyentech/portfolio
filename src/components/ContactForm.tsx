import { useState } from "react";
import type { FormEvent } from "react";
import { Mail } from "lucide-react";
export function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") || "").trim();
    const email = String(values.get("email") || "").trim();
    const subject = String(values.get("subject") || "Portfolio inquiry").trim();
    const message = String(values.get("message") || "").trim();
    window.location.href = `mailto:annienguyengu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello Annie,\n\n${message}\n\n${name}\n${email}`)}`;
    setPrepared(true);
  }
  return <form onSubmit={prepareEmail} className="contact-form rounded-2xl border border-border bg-white p-6 md:p-8">
    <Mail className="mb-4 h-8 w-8 text-primary" /><h2 className="text-xl font-semibold">Contact Annie</h2>
    <p className="mb-6 mt-2 text-sm text-muted-foreground">Share a role, project, or question. This form opens your email app with a draft for you to review and send.</p>
    <div className="grid gap-4 sm:grid-cols-2"><label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={200} /></label></div>
    <label className="mt-4 block">Subject<input name="subject" required maxLength={150} placeholder="Role or project inquiry" /></label>
    <label className="mt-4 block">Message<textarea name="message" required maxLength={2500} rows={5} /></label>
    <button type="submit" className="btn-primary mt-5">Prepare email <Mail className="h-4 w-4" /></button>
    {prepared && <p role="status" className="mt-4 text-sm text-muted-foreground">Your email draft has been requested. If your email app did not open, please email annienguyengu@gmail.com directly. Your message has not been sent by this website.</p>}
  </form>;
}
