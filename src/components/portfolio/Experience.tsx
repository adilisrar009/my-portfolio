import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const jobs = [
  {
    period: "Aug 2025 — Jan 2026",
    company: "Conversion Kings",
    role: "Internee Shopify Developer",
    desc: "Developing and customizing Shopify themes, implementing Liquid templates, optimizing store performance, and building responsive, conversion-focused eCommerce experiences aligned with client business goals.",
  },
  {
    period: "Feb 2025 — Jul 2025",
    company: "Infinity Creatives",
    role: "Junior Front-End Developer",
    desc: "Built responsive web interfaces using HTML, CSS, JavaScript, and Tailwind CSS for six months while collaborating closely with designers to ship user-friendly, visually polished layouts on tight deadlines.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">04 — Experience</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] max-w-3xl">
            Where I've been <span className="italic text-gradient-silver">building.</span>
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-foreground via-foreground/40 to-transparent"
          />
          <div className="space-y-16">
            {jobs.map((j, i) => (
              <Reveal key={j.company} delay={i}>
                <div className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-start ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className="absolute left-2 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-foreground ring-8 ring-background" />
                  <div className={`md:text-right ${i % 2 ? "md:text-left md:pl-12" : "md:pr-12"}`}>
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{j.period}</div>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl">{j.company}</h3>
                    <div className="mt-1 text-sm text-gradient-silver italic">{j.role}</div>
                  </div>
                  <div className={`mt-4 md:mt-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <p className="text-muted-foreground leading-relaxed text-justify">{j.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
