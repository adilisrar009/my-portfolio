## Portfolio for Adil Israr — Plan

A fully responsive, animation-rich grey-themed portfolio built as a single TanStack Start route (`/`) with smooth scroll-triggered reveals, a loading screen, and a stylish animated hero photo frame.

### Visual direction
- **Theme**: Monochrome grey — deep charcoal background (`#111`/`#1a1a1a`), light grey text, soft white accents, subtle silver gradient highlights.
- **Typography**: Display serif/condensed sans pairing (e.g. `Instrument Serif` headings + `Inter` body) for an editorial, premium feel.
- **Motion library**: `framer-motion` for scroll reveals + `lenis` for buttery smooth scrolling.
- **Loading screen**: Full-screen loader showing "ADIL ISRAR" with progress bar and fade-out on mount.
- **Hero photo frame**: Not a plain square. Asymmetric layered frame — rotating dashed ring, animated gradient border, glowing blob behind, floating decorative shapes (dots, lines, sparkle), photo masked into a hexagon/blob shape with subtle parallax tilt on mouse move. Continuous slow rotation on outer ring.

### Sections (10 total, no testimonials)
1. **Loader / Intro animation** (pre-mount overlay)
2. **Sticky Navbar** with smooth-scroll anchors + resume download
3. **Hero** — name, role "Web Developer", tagline, CTA buttons, stylish animated photo frame, scroll indicator
4. **About Me** — rich bio from CV, animated stats (2+ yrs experience, projects shipped, technologies)
5. **Skills & Tech Stack** — HTML, CSS, Tailwind, JavaScript, jQuery, Shopify/Liquid — animated progress bars + icon grid
6. **Services** — What I do (Frontend Development, Shopify Theme Development, Responsive Design, Performance Optimization) — card grid with hover effects
7. **Work Experience** — Timeline (Conversion Kings, Infinity Creatives) with vertical animated line
8. **Featured Projects** — 3 project cards with real generated posters + descriptions:
   - **ProlonLife** — Wellness/longevity e-commerce. 5-day fasting nutrition program brand. Shopify storefront with science-backed content blocks, quiz funnel, product bundles.
   - **L-Nutra Health** — Clinical metabolic health program site. Online coaching, HSA/FSA flows, condition-focused landing pages for Type 2 Diabetes, hypertension, PCOS, etc.
   - **MoxieLash** — Beauty e-commerce for glueless magnetic false lashes. Bold Shopify store with promo banners, collections, press features.
   - Each card: generated cover poster, role, stack chips, "Visit Live" link.
9. **Education** — University of Chakwal + Royal College, animated cards
10. **Rich Text / Philosophy section** — Long-form editorial block: development approach, values, quote pull-out
11. **Contact** — Form (name/email/message, mailto wired), contact details, social links (LinkedIn, email, phone), location
12. **Footer** — Name mark, nav links, languages, copyright

### Animations
- Lenis smooth scroll site-wide
- Section reveals: fade + slide up on intersection
- Hero: text stagger, frame rotation, floating decor, mouse parallax
- Skills: bar fill on scroll
- Timeline: line draws as you scroll
- Project cards: hover scale + image zoom
- Loading screen on first mount with progress

### Technical
- Single route `src/routes/index.tsx` orchestrating sections from `src/components/portfolio/*`
- Tokens defined in `src/styles.css` (oklch greys, accent silver, gradient, shadow)
- Profile photo copied to `src/assets/adil.png`
- 3 project posters generated via `imagegen` (premium for typography) saved under `src/assets/`
- Resume PDF copied to `public/Adil_Resume.pdf` for download
- `head()` set with proper SEO title/description/OG tags
- Install: `framer-motion`, `lenis`, `lucide-react` (already present likely)

### Files to create/modify
- `src/routes/index.tsx` (replace placeholder)
- `src/components/portfolio/Loader.tsx`
- `src/components/portfolio/Navbar.tsx`
- `src/components/portfolio/Hero.tsx` (with animated frame)
- `src/components/portfolio/About.tsx`
- `src/components/portfolio/Skills.tsx`
- `src/components/portfolio/Services.tsx`
- `src/components/portfolio/Experience.tsx`
- `src/components/portfolio/Projects.tsx`
- `src/components/portfolio/Education.tsx`
- `src/components/portfolio/Philosophy.tsx` (rich text)
- `src/components/portfolio/Contact.tsx`
- `src/components/portfolio/Footer.tsx`
- `src/hooks/use-lenis.ts`
- `src/styles.css` (grey theme tokens)
- Assets: `src/assets/adil.png`, `src/assets/project-prolon.jpg`, `src/assets/project-lnutra.jpg`, `src/assets/project-moxielash.jpg`, `public/Adil_Resume.pdf`
