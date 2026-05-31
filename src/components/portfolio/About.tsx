import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">01 — About</div>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">
              A developer<br />who cares about<br /><span className="italic text-gradient-silver">the details.</span>
            </h2>
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
          <Reveal delay={4}>
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
