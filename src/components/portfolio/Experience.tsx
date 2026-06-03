import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const jobs = [
  {
    period: "Feb 2026 — Present",
    company: "Self-Employed",
    role: "Freelance Front-End & Shopify Developer",
    location: "Remote · Chakwal, PK",
    desc: "Partnering directly with founders, agencies, and brands to design and ship high-converting Shopify stores and bespoke front-end experiences. Handling everything end-to-end — discovery, build, optimisation, and launch.",
    tags: ["Shopify", "Liquid", "Tailwind", "Performance"],
    current: true,
  },
  {
    period: "Aug 2025 — Jan 2026",
    company: "Conversion Kings",
    role: "Shopify Developer",
    location: "Hybrid",
    desc: "Developed and customised Shopify themes, implemented Liquid templates, optimised store performance, and built responsive, conversion-focused eCommerce experiences aligned with client business goals.",
    tags: ["Shopify", "Liquid", "CRO", "Responsive"],
  },
  {
    period: "Feb 2025 — Jul 2025",
    company: "Infinity Creatives",
    role: "Front-End Developer",
    location: "On-site",
    desc: "Built responsive web interfaces using HTML, CSS, JavaScript, and Tailwind CSS while collaborating closely with designers to ship user-friendly, visually polished layouts on tight deadlines.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-card/30 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 -right-20 h-[360px] w-[360px] rounded-full bg-silver/[0.04] blur-[120px]" />
        <div className="absolute bottom-10 -left-20 h-[320px] w-[320px] rounded-full bg-foreground/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">04 — Experience</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] max-w-3xl">
                Where I've been <span className="italic text-gradient-silver">building.</span>
              </h2>
            </div>
            <div className="text-sm text-muted-foreground max-w-sm">
              A short, focused journey — from agency floors to shipping work independently for brands worldwide.
            </div>
          </div>
        </Reveal>

        <div className="mt-16 space-y-5">
          {jobs.map((j, i) => (
            <Reveal key={j.company} delay={i}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-foreground via-foreground/40 to-transparent" />

                <div className="relative grid md:grid-cols-12 gap-6 md:gap-10 p-7 md:p-9">
                  {/* meta column */}
                  <div className="md:col-span-4 space-y-4">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{j.period}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-display text-3xl md:text-4xl leading-tight">{j.company}</h3>
                        {j.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
                            </span>
                            Current
                          </span>
                        )}
                      </div>
                      <div className="mt-2 text-sm text-gradient-silver italic">{j.role}</div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{j.location}</span>
                    </div>
                  </div>

                  {/* description column */}
                  <div className="md:col-span-8 md:border-l md:border-border md:pl-10 space-y-5">
                    <p className="text-base text-muted-foreground leading-relaxed">{j.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {j.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-background/40 px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-5 right-6 font-display text-5xl md:text-6xl text-foreground/[0.06] tabular-nums select-none">
                    0{jobs.length - i}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
