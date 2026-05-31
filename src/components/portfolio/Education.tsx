import { GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";

const edu = [
  {
    period: "2021 — 2025",
    school: "University of Chakwal",
    degree: "Bachelor of Science in Computer Science",
    desc: "Core CS coursework — algorithms, data structures, software engineering — paired with self-driven web development projects throughout the program.",
  },
  {
    period: "2019 — 2021",
    school: "Royal College of Sciences Chakwal",
    degree: "Intermediate in Computer Science",
    desc: "Foundational programming, mathematics, and computer fundamentals that set the stage for a career in software.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">06 — Education</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] max-w-3xl">
            Foundation in <span className="italic text-gradient-silver">computer science.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {edu.map((e, i) => (
            <Reveal key={e.school} delay={i}>
              <div className="group relative h-full rounded-3xl border border-border bg-background p-8 md:p-10 overflow-hidden">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full border border-border opacity-50 group-hover:rotate-45 transition-transform duration-700" />
                <GraduationCap className="h-8 w-8 text-foreground" />
                <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">{e.period}</div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">{e.school}</h3>
                <div className="mt-1 italic text-gradient-silver">{e.degree}</div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
