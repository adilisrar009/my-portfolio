import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.30_0_0/0.4),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">07 — Philosophy</div>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-8 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15]">
            <span className="text-muted-foreground">"</span>
            Great websites aren't <span className="italic text-gradient-silver">decorated</span> —
            they're <span className="italic text-gradient-silver">engineered</span> to feel inevitable.
            Every spacing decision, every micro-interaction, every line of Liquid is in service
            of the user crossing one threshold: <span className="text-foreground">trust</span>.
            <span className="text-muted-foreground">"</span>
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-10 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            <span className="h-px w-10 bg-border" />
            Adil Israr
            <span className="h-px w-10 bg-border" />
          </div>
        </Reveal>

        <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">
          {[
            { t: "Clarity", d: "I write code that the next developer can read at 2am without coffee. Naming, structure, comments — they matter." },
            { t: "Craft", d: "Pixel perfection isn't a slogan, it's a baseline. If the design has 24px of padding, my build has 24px of padding." },
            { t: "Conversion", d: "Pretty doesn't pay rent. Every section, hero, and CTA I ship is engineered to move users toward the goal." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i + 3}>
              <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6">
                <div className="font-display text-2xl">{v.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
