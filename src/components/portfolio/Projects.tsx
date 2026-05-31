import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import prolon from "@/assets/project-prolon.jpg";
import lnutra from "@/assets/project-lnutra.jpg";
import moxie from "@/assets/project-moxielash.jpg";

const projects = [
  {
    n: "01",
    title: "ProlonLife",
    tag: "Wellness · E-commerce",
    img: prolon,
    url: "https://prolonlife.com",
    desc: "Premium Shopify storefront for Prolon's patented 5-day fasting nutrition program. Built science-driven content blocks, an interactive quiz funnel for product matching, animated cellular-renewal sections, and a conversion-optimized PDP for the longevity program — all wrapped in a calm, editorial aesthetic.",
    stack: ["Shopify", "Liquid", "Tailwind", "JS"],
  },
  {
    n: "02",
    title: "L-Nutra Health",
    tag: "Health Tech · Clinical",
    img: lnutra,
    url: "https://l-nutrahealth.com",
    desc: "Clinical metabolic-health platform offering online coaching for Type 2 diabetes, hypertension, PCOS and other chronic conditions. Implemented condition-specific landing pages, HSA/FSA-eligible enrollment flows, free-discovery-call CTAs, and trust-building sections with calm medical-grade UX.",
    stack: ["Shopify", "Liquid", "JS", "Responsive"],
  },
  {
    n: "03",
    title: "MoxieLash",
    tag: "Beauty · D2C",
    img: moxie,
    url: "https://moxielash.com",
    desc: "Bold, glamorous Shopify storefront for the world's first glueless magnetic false-lash brand. Worked on promo announcement bars, collection grids for lash clusters & magnetic kits, animated press-feature carousels, and a fast, mobile-first PDP optimized for impulse purchase.",
    stack: ["Shopify", "Liquid", "CSS", "jQuery"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">05 — Selected Work</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] max-w-3xl">
            Real projects, <span className="italic text-gradient-silver">real impact.</span>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-28">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className={`group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${i % 2 ? "" : ""}`}
              >
                <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                    <img
                      src={p.img}
                      alt={`${p.title} project cover`}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="h-auto w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-5 left-5 rounded-full border border-foreground/30 bg-background/50 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
                      Live Site
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                  <div className="font-display text-7xl text-muted-foreground/30">{p.n}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{p.tag}</div>
                  <h3 className="mt-2 font-display text-4xl md:text-5xl flex items-center gap-3">
                    {p.title}
                    <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-foreground" />
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-border bg-card px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
