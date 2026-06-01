export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="font-display text-[clamp(4rem,18vw,16rem)] leading-none text-center text-gradient-silver select-none">
          ADIL ISRAR
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <div>© {new Date().getFullYear()} — Adil Israr.</div>
          <div className="flex items-center gap-6">
            <span>Urdu</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span>English</span>
          </div>
          <a href="#hero" className="hover:text-foreground transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
