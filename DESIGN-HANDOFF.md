# Ahyan Ahsan — Portfolio Frontend (Design Handoff)

A personal portfolio for a full-stack developer with a security focus.
Dark, editorial, amber-on-near-black aesthetic.

## Stack
- **Next.js 16.2.9** (App Router)
- **React 19.2.4**
- **Tailwind CSS v4** (uses `@import "tailwindcss"` + `@theme {}`, no `tailwind.config`)
- **Framer Motion ^12** (hover states; entrance animations are pure CSS for reliability)
- **TypeScript** strict
- Google Fonts: **Bebas Neue** (display), **Cormorant Garamond** (italic accent), **Syne** (UI bold), **Space Grotesk** (body)
- Tech logos via **Simple Icons CDN**: `https://cdn.simpleicons.org/{slug}/e8a820`

## Design tokens
```
--bg:      #181410   page / section base
--surface: #201c17   navbar, ticker, contact
--card:    #242018   project cards
--border:  #332c23   hairline dividers
--text:    #f0ebe2   primary text
--muted:   #7a6e62   secondary text
--dim:     #4a4038   tertiary / labels
--amber:   #e8a820   accent (single accent color)
--a04/a10/a20: amber at 5% / 10% / 22% alpha
```

## Sections (top → bottom)
Navbar (sticky) · Hero (headline + floating logo cloud) · Ticker (scrolling tech strip) · About (headline + 2×2 stats) · Projects (3 cards) · Skills (Dev + Security columns) · Contact (headline + links) · Footer

## Layout notes for the designer
- **Entrance animations use CSS keyframes** (`.anim-fade-up` etc.), NOT Framer Motion `whileInView`. This was deliberate: `initial={{opacity:0}}` + `whileInView` left below-the-fold content invisible on mobile Safari. Keep entrance reveals in CSS.
- **Column dividers** use the `.col-border-right` class so vertical borders show on desktop (`md+`) but disappear when columns stack on mobile.
- **Responsive sizing** is done with `clamp()` rather than breakpoints wherever possible.
- Site is full-bleed (no max-width). On ultrawide it may want a cap later.
- `public/resume.pdf` is referenced by the Resume button but not yet added.
- Project content is placeholder (Project One/Two/Three).

---

## `package.json`
```json
{
  "name": "ahyan-portfolio",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "framer-motion": "^12.42.0",
    "next": "16.2.9",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.9",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

---

## `app/layout.tsx`
```tsx
import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

const syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Ahyan Ahsan — Software Engineer & Security",
  description: "Full-stack developer with a security mindset. Based in Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${syne.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
```

---

## `app/globals.css`
```css
@import "tailwindcss";

@theme {
  --color-amber: #e8a820;
  --color-bg: #181410;
  --color-surface: #201c17;
  --color-card: #242018;
  --color-border: #332c23;
  --color-site-text: #f0ebe2;
  --color-muted: #7a6e62;
  --color-dim: #4a4038;

  --font-bebas: var(--font-bebas-neue);
  --font-cormorant: var(--font-cormorant-garamond);
  --font-syne: var(--font-syne);
  --font-space: var(--font-space-grotesk);
}

:root {
  --bg: #181410;
  --surface: #201c17;
  --card: #242018;
  --border: #332c23;
  --text: #f0ebe2;
  --muted: #7a6e62;
  --dim: #4a4038;
  --amber: #e8a820;
  --a04: rgba(232, 168, 32, 0.05);
  --a10: rgba(232, 168, 32, 0.10);
  --a20: rgba(232, 168, 32, 0.22);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background: #0d0b09;
  color: var(--text);
  font-family: var(--font-space-grotesk), sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* Column dividers: visible on desktop, removed on mobile */
.col-border-right {
  border-right: 1px solid var(--border);
}
@media (max-width: 767px) {
  .col-border-right { border-right: none; }
}

.text-outline-amber       { color: transparent; -webkit-text-stroke: 1.5px var(--amber); }
.text-outline-amber-thin  { color: transparent; -webkit-text-stroke: 1px var(--amber); }

/* Mobile: replace stroke with solid amber (strokes look bad at small sizes) */
@media (max-width: 640px) {
  .text-outline-amber,
  .text-outline-amber-thin { color: var(--amber); -webkit-text-stroke: none; }
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #0d0b09; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

/* Reliable entrance animations — CSS keyframes always play on mount, no JS/scroll needed */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
}

.anim-fade-up  { animation: fadeUp  0.45s ease both; }
.anim-fade-in  { animation: fadeIn  0.4s  ease both; }
.anim-slide-in { animation: slideInLeft 0.35s ease both; }

/* Stagger delays */
.anim-d0  { animation-delay: 0ms;   }
.anim-d1  { animation-delay: 80ms;  }
.anim-d2  { animation-delay: 160ms; }
.anim-d3  { animation-delay: 240ms; }
.anim-d4  { animation-delay: 320ms; }
```

---

## `app/page.tsx`
```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden", background: "var(--bg)" }}>
      <div style={{ background: "var(--bg)", width: "100%", margin: "0 auto", overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        <Ticker />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
```

---

## `components/Navbar.tsx`
```tsx
"use client";

export default function Navbar() {
  return (
    <nav
      style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
      className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-11 py-4 anim-fade-in anim-d0"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center leading-none">
          <span style={{ fontFamily: "var(--font-cormorant-garamond)", fontStyle: "italic", fontWeight: 300, fontSize: 32, color: "var(--text)", letterSpacing: -1 }}>A</span>
          <span style={{ fontFamily: "var(--font-bebas-neue)", fontSize: 25, color: "var(--amber)", marginLeft: -2 }}>A</span>
        </div>
        <div style={{ width: 1, height: 24, background: "var(--border)" }} />
        <div className="flex flex-col">
          <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 10.5, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--text)", lineHeight: 1.3 }}>Ahyan</span>
          <span style={{ fontFamily: "var(--font-syne)", fontWeight: 400, fontSize: 10.5, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", lineHeight: 1.3 }}>Ahsan</span>
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8">
          {["About", "Projects", "Skills", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none" }}
              className="hover:text-[var(--text)] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          style={{
            fontSize: 12, fontWeight: 700, color: "#060400",
            background: "var(--amber)",
            padding: "9px 20px", borderRadius: 7,
          }}
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
}
```

---

## `components/Hero.tsx`
```tsx
"use client";
import dynamic from "next/dynamic";

const LogoCloud = dynamic(() => import("./LogoCloud"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid relative"
      style={{
        gridTemplateColumns: "1.15fr 1fr",
        background: "linear-gradient(160deg, var(--surface) 0%, #1a1510 100%)",
      }}
    >
      {/* Ghost watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span
          aria-hidden
          style={{
            fontFamily: "var(--font-bebas-neue)",
            fontSize: "clamp(100px, 18vw, 260px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(232,168,32,0.06)",
            letterSpacing: -10,
            lineHeight: 1,
            position: "absolute",
            bottom: -30,
            left: -10,
            whiteSpace: "nowrap",
          }}
        >
          AHYAN
        </span>
      </div>

      {/* Left — content */}
      <div
        className="flex flex-col justify-center relative z-10"
        style={{ padding: "clamp(40px,6vw,72px) clamp(20px,4vw,44px)" }}
      >
        <div className="anim-fade-in anim-d0">
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              background: "var(--a10)",
              border: "1px solid var(--a20)",
              color: "var(--amber)",
              fontSize: 10,
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 4,
            }}
          >
            <span
              style={{ width: 5, height: 5, background: "var(--amber)", borderRadius: "50%", display: "inline-block", flexShrink: 0 }}
              className="animate-pulse"
            />
            Open to Opportunities
          </div>
        </div>

        <h1
          className="anim-fade-up anim-d1"
          style={{
            fontFamily: "var(--font-bebas-neue)",
            fontSize: "clamp(48px, 13vw, 118px)",
            lineHeight: 0.87,
            letterSpacing: -1,
            marginBottom: "clamp(16px,3vw,28px)",
          }}
        >
          <span style={{ color: "var(--text)", display: "block" }}>SOFTWARE</span>
          <span style={{ color: "var(--text)", display: "block" }}>ENGINEER</span>
          <span className="text-outline-amber" style={{ display: "block" }}>SECURITY.</span>
        </h1>

        <p
          className="anim-fade-up anim-d2"
          style={{
            fontSize: "clamp(12px,1.4vw,13px)",
            color: "var(--muted)",
            letterSpacing: "0.3px",
            lineHeight: 1.7,
            marginBottom: "clamp(24px,4vw,36px)",
          }}
        >
          Full-stack developer · Security researcher · Florida
        </p>

        <div className="flex gap-3 flex-wrap anim-fade-up anim-d3">
          <a
            href="#projects"
            style={{
              background: "var(--amber)", color: "#060400", fontWeight: 700,
              fontSize: 13, padding: "12px 24px", borderRadius: 8,
              textDecoration: "none", display: "inline-block",
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              border: "1px solid var(--border)", color: "var(--muted)",
              fontSize: 13, padding: "12px 20px", borderRadius: 8,
              textDecoration: "none", display: "inline-block",
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right — logo cloud (desktop only). minHeight drives section height. */}
      <div
        className="hidden md:block relative"
        style={{ minHeight: 660 }}
      >
        <div className="absolute inset-0">
          <LogoCloud />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
```

---

## `components/LogoCloud.tsx`
```tsx
"use client";
import { useEffect, useRef } from "react";

const ICONS = [
  { slug: "react",       size: 56, x: 15, y: 15, op: 0.75 },
  { slug: "typescript",  size: 52, x: 58, y: 20, op: 0.70 },
  { slug: "nextdotjs",   size: 48, x: 32, y: 52, op: 0.65 },
  { slug: "kalilinux",   size: 54, x: 70, y: 55, op: 0.70 },
  { slug: "nodedotjs",   size: 38, x: 10, y: 58, op: 0.45 },
  { slug: "python",      size: 36, x: 50, y: 72, op: 0.42 },
  { slug: "wireshark",   size: 34, x: 78, y: 32, op: 0.40 },
  { slug: "docker",      size: 36, x: 22, y: 78, op: 0.38 },
  { slug: "postgresql",  size: 30, x: 64, y: 78, op: 0.32 },
  { slug: "tailwindcss", size: 26, x: 82, y: 12, op: 0.22 },
  { slug: "github",      size: 28, x: 42, y: 12, op: 0.20 },
  { slug: "linux",       size: 24, x: 80, y: 70, op: 0.18 },
  { slug: "cloudflare",  size: 26, x: 10, y: 38, op: 0.16 },
  { slug: "gnubash",     size: 22, x: 62, y: 42, op: 0.15 },
];

const AMBER = "e8a820";

export default function LogoCloud() {
  const frameRef = useRef<number>(0);
  const elRefs = useRef<HTMLDivElement[]>([]);

  const drifts = ICONS.map((_, i) => ({
    ax: 8 + (i % 4) * 2,
    ay: 6 + (i % 3) * 2,
    px: 4000 + i * 550,
    py: 3500 + i * 700,
    ph: i * 900,
  }));

  // Reveal any icons whose images were already cached (onLoad won't fire for those)
  useEffect(() => {
    elRefs.current.forEach((el, i) => {
      if (!el) return;
      const img = el.querySelector("img");
      if (img && img.complete && img.naturalWidth > 0) {
        el.style.opacity = String(ICONS[i].op);
      }
    });
  }, []);

  useEffect(() => {
    const animate = (ts: number) => {
      elRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = drifts[i];
        const ox = Math.sin(((ts + d.ph) / d.px) * Math.PI * 2) * d.ax;
        const oy = Math.cos(((ts + d.ph) / d.py) * Math.PI * 2) * d.ay;
        el.style.transform = `translate(${ox}px,${oy}px)`;
      });
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(232,168,32,0.05) 0%, transparent 100%)",
      }}
    >
      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `
            linear-gradient(to right, rgba(32,28,23,0.7) 0%, transparent 18%, transparent 82%, rgba(32,28,23,0.7) 100%),
            linear-gradient(to bottom, rgba(32,28,23,0.7) 0%, transparent 18%, transparent 82%, rgba(32,28,23,0.7) 100%)
          `,
        }}
      />
      {ICONS.map((ic, i) => (
        <div
          key={ic.slug}
          ref={(el) => { if (el) elRefs.current[i] = el; }}
          className="absolute"
          style={{
            left: `${ic.x}%`,
            top: `${ic.y}%`,
            opacity: 0,           /* hidden until image loads */
            filter: "drop-shadow(0 0 8px rgba(232,168,32,0.15))",
            transition: "opacity 0.4s ease",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://cdn.simpleicons.org/${ic.slug}/${AMBER}`}
            width={ic.size}
            height={ic.size}
            alt=""
            style={{ display: "block" }}
            onLoad={(e) => {
              const parent = (e.target as HTMLElement).parentElement!;
              parent.style.opacity = String(ic.op);
            }}
            onError={(e) => {
              (e.target as HTMLElement).parentElement!.style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  );
}
```

---

## `components/Ticker.tsx`
```tsx
"use client";

const ITEMS = [
  { slug: "react",       label: "React" },
  { slug: "typescript",  label: "TypeScript" },
  { slug: "nextdotjs",   label: "Next.js" },
  { slug: "nodedotjs",   label: "Node.js" },
  { slug: "python",      label: "Python" },
  { slug: "docker",      label: "Docker" },
  { slug: "postgresql",  label: "PostgreSQL" },
  { slug: "tailwindcss", label: "Tailwind" },
  { slug: "kalilinux",   label: "Kali Linux" },
  { slug: "wireshark",   label: "Wireshark" },
  { slug: "linux",       label: "Linux" },
  { slug: "github",      label: "GitHub" },
  { slug: "cloudflare",  label: "Cloudflare" },
  { slug: "gnubash",     label: "Bash" },
  { slug: "git",         label: "Git" },
];

const AMBER = "e8a820";

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-16"
        style={{ background: "linear-gradient(to right, var(--surface), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-16"
        style={{ background: "linear-gradient(to left, var(--surface), transparent)" }} />

      <div className="flex w-max" style={{ animation: "tickerScroll 28s linear infinite" }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-5 py-3.5 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${item.slug}/${AMBER}`}
              width={16} height={16} alt={item.label}
              style={{ opacity: 0.4 }}
              onError={(e) => { (e.target as HTMLElement).style.display = "none"; }}
            />
            <span style={{ fontSize: 11, color: "var(--dim)", letterSpacing: "1px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              {item.label}
            </span>
            {i < doubled.length - 1 && (
              <span style={{ width: 3, height: 3, background: "var(--border)", borderRadius: "50%", marginLeft: 12, flexShrink: 0, display: "inline-block" }} />
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
```

---

## `components/About.tsx`
```tsx
"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { n: 10,   suffix: "+", label: "Projects Shipped" },
  { n: 3,    suffix: "+", label: "Years Experience"  },
  { n: 5,    suffix: "+", label: "Certifications"    },
  { n: null, symbol: "∞", label: "Curiosity"         },
];

function Counter({ target, suffix, symbol }: { target: number | null; suffix?: string; symbol?: string }) {
  const [val, setVal] = useState(target ?? 0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null || started.current) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      let cur = 0; setVal(0);
      const step = () => { cur++; setVal(cur); if (cur < target) setTimeout(step, 80); };
      step();
      obs.disconnect();
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  /* ∞ renders poorly in Bebas Neue — use Space Grotesk for it */
  if (symbol) {
    return (
      <div
        ref={ref}
        style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(44px,6vw,62px)", fontWeight: 300, color: "var(--amber)", lineHeight: 1 }}
      >
        {symbol}
      </div>
    );
  }

  return (
    <div ref={ref} className="anim-fade-up" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(52px,7vw,72px)", color: "var(--amber)", lineHeight: 1, letterSpacing: -2 }}>
      {val}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="grid md:grid-cols-2">

        {/* Left: headline */}
        <div
          className="flex flex-col justify-center anim-fade-up col-border-right"
          style={{
            padding: "clamp(40px,5vw,64px) clamp(20px,4vw,44px)",
          }}
        >
          <div className="flex items-center gap-3 mb-5" style={{ fontSize: 10, color: "var(--amber)", letterSpacing: "4px", textTransform: "uppercase" }}>
            <span style={{ width: 20, height: 1, background: "var(--amber)", opacity: 0.4, display: "inline-block" }} />
            About
          </div>
          <h2 style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(48px,6vw,72px)", lineHeight: 0.88, marginBottom: 20 }}>
            <span style={{ color: "var(--text)", display: "block" }}>I BUILD</span>
            <span className="text-outline-amber-thin" style={{ display: "block" }}>{"& BREAK."}</span>
          </h2>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.9, maxWidth: 360 }}>
            Full-stack engineer with a security mindset — I build the product and know how to break it.
          </p>
        </div>

        {/* Right: stats 2×2 */}
        <div className="grid grid-cols-2">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "clamp(28px,4vw,48px) clamp(20px,3vw,40px)",
                borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                borderBottom: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <Counter target={s.n} suffix={s.suffix} symbol={s.symbol} />
              <div style={{ fontSize: 10, color: "var(--dim)", textTransform: "uppercase", letterSpacing: "2px", marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

---

## `components/Projects.tsx`
```tsx
"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    name: "Project One",
    type: "Full-Stack Web App",
    tags: [{ label: "Next.js", gold: true }, { label: "TypeScript", gold: false }],
    href: "#",
  },
  {
    num: "02",
    name: "Project Two",
    type: "Security Tool",
    tags: [{ label: "Python", gold: true }, { label: "Docker", gold: false }],
    href: "#",
  },
  {
    num: "03",
    name: "Project Three",
    type: "API / Backend",
    tags: [{ label: "Node.js", gold: false }, { label: "Postgres", gold: false }],
    href: "#",
  },
];

const DELAYS = ["anim-d0", "anim-d1", "anim-d2"];

export default function Projects() {
  return (
    <section id="projects" style={{ borderTop: "1px solid var(--border)" }}>

      {/* Header */}
      <div
        className="flex justify-between items-center"
        style={{ padding: "18px clamp(20px,4vw,44px)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-3" style={{ fontSize: 10, color: "var(--amber)", letterSpacing: "4px", textTransform: "uppercase" }}>
          <span style={{ width: 20, height: 1, background: "var(--amber)", opacity: 0.4, display: "inline-block" }} />
          Selected Work
        </div>
        <span style={{ fontSize: 11, color: "var(--muted)", cursor: "pointer" }}>
          All projects <span style={{ color: "var(--amber)" }}>→</span>
        </span>
      </div>

      {/* Cards — CSS fadeUp on mount, no whileInView opacity trap */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {PROJECTS.map((proj, i) => (
          <motion.a
            key={proj.num}
            href={proj.href}
            className={`flex flex-col group anim-fade-up ${DELAYS[i]} ${i < PROJECTS.length - 1 ? "col-border-right" : ""}`}
            style={{
              padding: "clamp(28px,4vw,52px) clamp(20px,4vw,44px)",
              background: "var(--card)",
              borderBottom: "1px solid var(--border)",
              textDecoration: "none",
            }}
            whileHover={{ backgroundColor: "#2c2620" } as never}
          >
            <div
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(44px,5vw,60px)", color: "var(--dim)", lineHeight: 1, marginBottom: 14 }}
              className="transition-colors duration-300 group-hover:text-[rgba(232,168,32,0.2)]"
            >
              {proj.num}
            </div>
            <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(17px,2vw,21px)", color: "var(--text)", marginBottom: 6, lineHeight: 1.1 }}>
              {proj.name}
            </div>
            <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "2.5px", textTransform: "uppercase", flex: 1, marginBottom: 24 }}>
              {proj.type}
            </div>
            <div className="flex justify-between items-center pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <div className="flex gap-1.5 flex-wrap">
                {proj.tags.map((t) => (
                  <span
                    key={t.label}
                    style={{
                      fontSize: 10, padding: "3px 10px", borderRadius: 4,
                      ...(t.gold
                        ? { border: "1px solid rgba(232,168,32,0.2)", color: "rgba(232,168,32,0.6)", background: "var(--a04)" }
                        : { color: "var(--dim)", background: "var(--border)" }),
                    }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--amber)", letterSpacing: "1px", textTransform: "uppercase", flexShrink: 0, marginLeft: 8 }}>
                View →
              </span>
            </div>
          </motion.a>
        ))}
      </div>

    </section>
  );
}
```

---

## `components/Skills.tsx`
```tsx
"use client";

const DEV = [
  { name: "React / Next.js", core: true  },
  { name: "TypeScript",      core: true  },
  { name: "Node.js",         core: true  },
  { name: "Python",          core: false },
  { name: "PostgreSQL",      core: false },
];

const SEC = [
  { name: "Kali Linux",        core: true  },
  { name: "Burp Suite",        core: true  },
  { name: "Wireshark",         core: true  },
  { name: "Nmap / Metasploit", core: false },
  { name: "OSINT",             core: false },
];

const ITEM_DELAYS = ["anim-d0", "anim-d1", "anim-d2", "anim-d3", "anim-d4"];

function SkillList({ items }: { items: typeof DEV }) {
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={item.name}
          className={`flex items-center justify-between group anim-slide-in ${ITEM_DELAYS[i]}`}
          style={{
            padding: "14px 0",
            borderBottom: i < items.length - 1 ? "1px solid var(--border)" : "none",
            fontSize: item.core ? 14 : 13,
            color: item.core ? "var(--text)" : "var(--muted)",
            fontWeight: item.core ? 500 : 400,
            cursor: "default",
          }}
        >
          <span className="group-hover:pl-2 transition-all duration-200">{item.name}</span>
          <span style={{
            width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
            background: item.core ? "var(--amber)" : "var(--dim)",
            boxShadow: item.core ? "0 0 6px var(--amber)" : "none",
          }} />
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="grid md:grid-cols-2" style={{ borderTop: "1px solid var(--border)" }}>
      {[{ title: "Development", items: DEV }, { title: "Security", items: SEC }].map((col, i) => (
        <div
          key={col.title}
          className={`anim-fade-in anim-d0${i === 0 ? " col-border-right" : ""}`}
          style={{
            padding: "clamp(36px,5vw,56px) clamp(20px,4vw,44px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="flex items-center gap-3 mb-7" style={{ fontSize: 10, color: "var(--amber)", letterSpacing: "4px", textTransform: "uppercase" }}>
            <span style={{ width: 20, height: 1, background: "var(--amber)", opacity: 0.4, display: "inline-block" }} />
            {col.title}
          </div>
          <SkillList items={col.items} />
        </div>
      ))}
    </section>
  );
}
```

---

## `components/Contact.tsx`
```tsx
"use client";

const LINKS = [
  { icon: "@",  label: "Email",    value: "ahsahyan@gmail.com",   href: "mailto:ahsahyan@gmail.com"   },
  { icon: "GH", label: "GitHub",   value: "github.com/ahsahyan",  href: "https://github.com/ahsahyan" },
  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/ahyan", href: "https://linkedin.com/in/ahyan" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 items-start"
      style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
    >
      {/* Left: headline */}
      <div
        className="anim-fade-up anim-d0 col-border-right"
        style={{
          padding: "clamp(40px,5vw,64px) clamp(20px,4vw,44px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center gap-3 mb-5" style={{ fontSize: 10, color: "var(--amber)", letterSpacing: "4px", textTransform: "uppercase" }}>
          <span style={{ width: 20, height: 1, background: "var(--amber)", opacity: 0.4, display: "inline-block" }} />
          Get In Touch
        </div>
        <h2 style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(56px,8vw,100px)", lineHeight: 0.87, marginBottom: 20 }}>
          <span style={{ color: "var(--text)", display: "block" }}>{"LET'S"}</span>
          <span className="text-outline-amber" style={{ display: "block" }}>TALK.</span>
        </h2>
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, maxWidth: 280 }}>
          Job, project, or just to connect — my inbox is open.
        </p>
      </div>

      {/* Right: links */}
      <div style={{ padding: "clamp(40px,5vw,64px) clamp(20px,4vw,44px)" }}>
        {LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 group anim-fade-up anim-d${i}`}
            style={{
              padding: i === 0 ? "0 0 20px" : "20px 0",
              borderBottom: i < LINKS.length - 1 ? "1px solid var(--border)" : "none",
              textDecoration: "none",
            }}
          >
            <div style={{
              width: 44, height: 44, flexShrink: 0, borderRadius: 10,
              background: "var(--a10)", border: "1px solid var(--a20)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, color: "var(--amber)", fontWeight: 700,
              fontFamily: "var(--font-syne)",
            }}>
              {link.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 9, color: "var(--dim)", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 3 }}>{link.label}</div>
              <div style={{ fontSize: 14, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{link.value}</div>
            </div>
            <span style={{ color: "var(--dim)", fontSize: 16, flexShrink: 0 }} className="group-hover:text-[var(--amber)] group-hover:translate-x-1 transition-all duration-200">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
```

---

## `components/Footer.tsx`
```tsx
export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center px-6 md:px-11 py-4"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
    >
      <span style={{ fontSize: 10, color: "var(--dim)", letterSpacing: "1px" }}>© 2026 Ahyan Ahsan</span>
      <a href="#hero" style={{ fontSize: 10, color: "var(--dim)", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>
        Back to top ↑
      </a>
    </footer>
  );
}
```
