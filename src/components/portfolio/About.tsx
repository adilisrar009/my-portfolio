import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Users, ArrowDownRight } from "lucide-react";
import { Reveal } from "./Reveal";
import portrait from "@/assets/adil-portrait.png.asset.json";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable, scalable, and built to last." },
  { icon: Rocket, title: "Performance", desc: "Fast load times, smooth interactions." },
  { icon: Sparkles, title: "Pixel Precision", desc: "Designs translated 1:1, no compromises." },
  { icon: Users, title: "Collaboration", desc: "Clear comms from kickoff to launch." },
];

const stats = [
  { k: "Years", v: "2+" },
  { k: "Projects", v: "20+" },
  { k: "Stores", v: "10+" },
  { k: "Clients", v: "15+" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-silver/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-silver/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">01 — About</div>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
                A developer who cares<br />about <span className="italic text-gradient-silver">the details.</span>
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/40 px-4 py-2 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Open to opportunities</span>
            </div>
          </div>
        </Reveal>

        {/* Main grid: portrait + narrative */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Portrait card */}
          <Reveal className="lg:col-span-5">
            <div className="relative">

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Frame */}
                <div className="relative rounded-[2rem] border border-border bg-card/40 p-3 backdrop-blur overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.06] via-transparent to-foreground/[0.03] pointer-events-none" />
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src={portrait.url}
                      alt="Adil Israr — portrait"
                      width={880}
                      height={1175}
                      loading="lazy"
                      className="h-auto w-full object-cover grayscale contrast-[1.05]"
                    />
                    {/* gradient veil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    {/* corner tag */}
                    <div className="absolute top-4 left-4 rounded-full border border-foreground/30 bg-background/50 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
                      Adil · 2026
                    </div>
                    {/* signature pill */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border bg-background/60 backdrop-blur px-4 py-3">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Front-end</div>
                        <div className="font-display text-lg leading-tight">Adil Israr</div>
                      </div>
                      <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* floating index card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card/80 backdrop-blur px-5 py-4 shadow-elegant"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Based in</div>
                  <div className="mt-1 font-display text-xl">Chakwal, PK</div>
                </motion.div>
              </motion.div>
            </div>
          </Reveal>

          {/* Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={1}>
              <p className="text-xl md:text-2xl font-display leading-snug text-foreground/95">
                I'm a front-end developer with <span className="italic text-gradient-silver">2+ years</span> of
                hands-on experience translating thoughtful design into intuitive, fast, and engaging user experiences.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-base text-muted-foreground leading-relaxed">
                My foundation is built on modern web technologies — HTML, CSS, Tailwind, JavaScript and jQuery —
                and lately I've been deep in the Shopify ecosystem building Liquid-powered, conversion-focused
                storefronts. I've shipped projects end-to-end, collaborating closely with designers, marketers,
                and clients to deliver work that's both pixel-perfect and performant.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Beyond the code, I'm a proactive problem-solver. I ask the right questions, communicate clearly,
                and I'm happiest when the brief lands exactly the way the client imagined it — and then a little better.
              </p>
            </Reveal>

            {/* stats strip */}
            <Reveal delay={4}>
              <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {stats.map((s) => (
                  <div key={s.k} className="bg-card/60 px-3 py-5 text-center backdrop-blur">
                    <div className="font-display text-3xl md:text-4xl text-gradient-silver">{s.v}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.k}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* highlights */}
            <Reveal delay={5}>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-5 backdrop-blur"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                        <h.icon className="h-4 w-4 text-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{h.title}</div>
                        <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{h.desc}</div>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 text-[10px] text-muted-foreground/40 tabular-nums">0{i + 1}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
