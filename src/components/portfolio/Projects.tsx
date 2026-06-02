import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import prolon from "@/assets/project-prolon.jpg";
import lnutra from "@/assets/project-lnutra.jpg";
import moxie from "@/assets/project-moxielash.jpg";
import yoga from "@/assets/project-yoga.png.asset.json";
import travels from "@/assets/project-travels.png.asset.json";
import crafti from "@/assets/project-crafti.png.asset.json";
import feane from "@/assets/project-feane.png.asset.json";
import coffee from "@/assets/project-coffee.png.asset.json";
import studio from "@/assets/project-studio.png.asset.json";
import wedding from "@/assets/project-wedding.png.asset.json";

const brandProjects = [
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

const personalProjects = [
  { n: "04", title: "Yogalax", tag: "Wellness · Landing", img: yoga.url, url: "https://adil-yoga-production.vercel.app/", desc: "A serene yoga studio landing page with class schedules and free-trial CTA." },
  { n: "05", title: "TraveLand", tag: "Travel · Booking", img: travels.url, url: "https://adil-travels.vercel.app/", desc: "Cinematic travel agency site with destination packages, gallery and booking funnel." },
  { n: "06", title: "Crafti", tag: "Lifestyle · Catalog", img: crafti.url, url: "https://adil-crafti-project.vercel.app/", desc: "Editorial showcase for a handmade goods studio with a refined, warm catalog layout." },
  { n: "07", title: "Feane", tag: "Food · Restaurant", img: feane.url, url: "https://adil-feane.vercel.app/", desc: "Dark, appetite-driven restaurant site with menu, online ordering and table booking." },
  { n: "08", title: "Cafe Aroma", tag: "Hospitality · Cafe", img: coffee.url, url: "https://adil-coffee.vercel.app/", desc: "Warm, atmospheric cafe landing page with menu highlights and visit-us CTA." },
  { n: "09", title: "Interior Studio", tag: "Architecture · Studio", img: studio.url, url: "https://adil-studio.vercel.app/", desc: "Award-style interior design studio site with portfolio grid and process timeline." },
  { n: "10", title: "Wedding Day", tag: "Event · Invitation", img: wedding.url, url: "https://adil-wedding-manager.vercel.app/", desc: "Elegant wedding invitation site with story, gallery, event details and RSVP form." },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">05 — Selected Work</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] max-w-3xl">
            Real projects, <span className="italic text-gradient-silver">real impact.</span>
          </h2>
        </Reveal>

        {/* BRAND PROJECTS */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Brand Projects</div>
              <div className="h-px flex-1 bg-border" />
              <div className="text-[11px] tabular-nums text-muted-foreground">01 — 03</div>
            </div>
          </Reveal>

          <div className="space-y-28">
            {brandProjects.map((p, i) => (
              <Reveal key={p.title}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
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

        {/* PERSONAL PROJECTS */}
        <div className="mt-40">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Personal Projects</div>
              <div className="h-px flex-1 bg-border" />
              <div className="text-[11px] tabular-nums text-muted-foreground">04 — 10</div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <p className="max-w-2xl text-muted-foreground leading-relaxed mb-12">
              A curated set of self-initiated builds — landing pages, storefronts and template explorations
              I shipped to sharpen craft, typography and motion.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((p) => (
              <Reveal key={p.title}>
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.title} preview`}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-[1.4s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    <div className="absolute top-4 left-4 rounded-full border border-foreground/20 bg-background/50 backdrop-blur px-2.5 py-1 text-[9px] uppercase tracking-[0.3em] text-foreground/80">
                      {p.n}
                    </div>
                    <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-background/50 backdrop-blur transition-all group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{p.tag}</div>
                    <h3 className="mt-2 font-display text-2xl leading-tight">{p.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.desc}</p>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
