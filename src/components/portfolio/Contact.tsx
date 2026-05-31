import { Mail, MapPin, Phone, ArrowUpRight, Link as LinkedinIcon } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:adilisrar572@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">08 — Contact</div>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Have a project<br />in mind? <span className="italic text-gradient-silver">Let's talk.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-8">
            {[
              { icon: Mail, label: "Email", value: "adilisrar572@gmail.com", href: "mailto:adilisrar572@gmail.com" },
              { icon: Phone, label: "Phone", value: "+92 312 2912494", href: "tel:+923122912494" },
              { icon: MapPin, label: "Location", value: "Chakwal, Pakistan" },
              { icon: LinkedinIcon, label: "LinkedIn", value: "adil-israr", href: "https://www.linkedin.com/in/adil-israr-a16a47327" },
            ].map((c) => (
              <Reveal key={c.label}>
                <a
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 border-b border-border pb-6 hover:border-foreground transition-colors"
                >
                  <c.icon className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{c.label}</div>
                    <div className="mt-1">{c.value}</div>
                  </div>
                  {c.href && <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />}
                </a>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-foreground text-background py-4 text-sm font-medium uppercase tracking-widest hover:scale-[1.01] transition-transform"
                >
                  Send Message
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 transition-colors"
      />
    </div>
  );
}
