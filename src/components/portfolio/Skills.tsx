import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3 / SCSS", level: 92 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "jQuery", level: 85 },
  { name: "Shopify / Liquid", level: 82 },
  { name: "Responsive Design", level: 96 },
  { name: "Git & GitHub", level: 80 },
];

const stack = ["HTML", "CSS", "Tailwind", "JS", "jQuery", "Shopify", "Liquid", "Git", "Figma", "SEO", "React", "VS Code"];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">02 — Skills</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] max-w-3xl">
            The toolkit I reach for <span className="italic text-gradient-silver">every day.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {skills.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.5}>
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground tabular-nums">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-[3px] w-full overflow-hidden bg-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                      className="h-full bg-gradient-to-r from-foreground via-silver to-foreground/70"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 content-start">
            {stack.map((t, i) => (
              <Reveal key={t} delay={i * 0.3}>
                <div className="group aspect-square flex items-center justify-center rounded-2xl border border-border bg-background hover:bg-foreground hover:text-background transition-all duration-500 cursor-default">
                  <span className="text-xs font-medium uppercase tracking-wider">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
