import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

const LinkedinIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
);
const GithubIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/></svg>
);
import adilImg from "@/assets/adil.png";


export function Hero() {

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      {/* ambient bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-foreground/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-silver/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 md:py-20 lg:grid-cols-12">
        {/* LEFT */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            Available for Freelance
          </motion.div>

          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight">
            {["Building", "Brands", "That", "Convert."].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mr-3 inline-block"
              >
                {i === 1 ? <span className="text-gradient-silver italic">{word}</span> : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            I'm <span className="text-foreground">Adil Israr</span> — a front-end &amp;
            Shopify developer from Pakistan, building responsive,
            conversion-focused interfaces with clean code and obsessive attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:scale-[1.02]"
            >
              <span className="relative z-10">View My Work</span>
              <ArrowDown className="relative z-10 h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-card transition-all"
            >
              Let's Talk
            </a>
            <div className="ml-2 flex items-center gap-3">
              <a href="https://www.linkedin.com/in/adil-israr-a16a47327" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><LinkedinIcon className="h-5 w-5" /></a>
              <a href="mailto:adilisrar572@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="h-5 w-5" /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><GithubIcon className="h-5 w-5" /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-16 grid grid-cols-3 max-w-md gap-6"
          >
            {[
              { v: "2+", l: "Years Exp." },
              { v: "20+", l: "Projects" },
              { v: "100%", l: "Responsive" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl text-gradient-silver">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — stylish animated frame */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[380px] w-[300px] md:h-[520px] md:w-[420px]"
          >
            {/* glowing blob */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-silver/30 via-foreground/10 to-transparent blur-3xl rounded-full" />

            {/* rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] border border-dashed border-foreground/20"
            />
            {/* counter ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-[55%_45%_60%_40%/45%_55%_45%_55%] border border-foreground/30"
            />

            {/* animated gradient border morphing shape */}
            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                  "30% 60% 70% 40%/50% 60% 30% 60%",
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                ],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-foreground/40 via-silver/20 to-background p-[2px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
            >
              <motion.div
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                    "30% 60% 70% 40%/50% 60% 30% 60%",
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                  ],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full overflow-hidden bg-graphite"
              >
                <img
                  src={adilImg}
                  alt="Adil Israr — Web Developer"
                  className="h-full w-full object-cover grayscale-[15%] contrast-[1.05]"
                />
              </motion.div>
            </motion.div>

            {/* floating decor */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-card border border-border backdrop-blur"
            >
              <Sparkles className="h-6 w-6 text-foreground" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card/80 backdrop-blur px-4 py-3"
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Based In</div>
              <div className="font-display text-lg">Chakwal, PK</div>
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 right-2 h-24 w-24 rounded-full border border-foreground/10 flex items-center justify-center"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                {"• Web Developer • Shopify ".repeat(1)}
              </span>
            </motion.div>
            {/* corner dots */}
            <div className="absolute -top-2 left-1/2 h-2 w-2 rounded-full bg-foreground animate-pulse" />
            <div className="absolute top-1/2 -right-3 h-2 w-2 rounded-full bg-silver animate-pulse" />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
