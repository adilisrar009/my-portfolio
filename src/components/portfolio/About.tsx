import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable, scalable, and built to last." },
  { icon: Rocket, title: "Performance", desc: "Fast load times, smooth interactions." },
  { icon: Sparkles, title: "Pixel Precision", desc: "Designs translated 1:1, no compromises." },
  { icon: Users, title: "Collaboration", desc: "Clear communication from kickoff to launch." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-silver/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">01 — About</div>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">
              A developer<br />who cares about<br /><span className="italic text-gradient-silver">the details.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/40 px-4 py-2 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Open to opportunities</span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 space-y-6">
          <Reveal delay={1}>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I'm a front-end developer with <span className="text-gradient-silver font-medium">2+ years</span> of
              hands-on experience translating thoughtful design into intuitive, fast, and engaging user experiences.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-base text-muted-foreground leading-relaxed">
              My foundation is built on modern web technologies — HTML, CSS, Tailwind CSS, JavaScript, jQuery —
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

          {/* highlight cards */}
          <Reveal delay={4}>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
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

          {/* info grid */}
          <Reveal delay={5}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-10">
              {[
                { k: "Name", v: "Adil Israr" },
                { k: "Role", v: "Web Developer" },
                { k: "Location", v: "Chakwal, PK" },
                { k: "Email", v: "adilisrar572@gmail.com" },
              ].map((i) => (
                <div key={i.k}>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{i.k}</div>
                  <div className="mt-1 text-sm break-words">{i.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
