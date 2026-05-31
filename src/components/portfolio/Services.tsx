import { Code2, Smartphone, ShoppingBag, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Code2,
    title: "Front-End Development",
    desc: "Hand-crafted, semantic, accessible interfaces built with HTML, CSS, Tailwind, and modern JavaScript — coded to match the design comp pixel by pixel.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Theme Development",
    desc: "Custom Liquid templates, theme customization, and conversion-focused storefronts. From bespoke sections to full theme builds.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First",
    desc: "Designs that flow effortlessly from a 320px phone to a 4K display. Tested obsessively across devices, browsers, and orientations.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Lighthouse-friendly builds — lean CSS, lazy media, smart bundling, and Core Web Vitals tuning so your site loads as good as it looks.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">03 — Services</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] max-w-3xl">
            What I bring to <span className="italic text-gradient-silver">your project.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10 h-full transition-all duration-500 hover:border-foreground/40">
                <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background border border-border group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">0{i + 1}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
