"use client";

/* ── Data — pulled from GitHub (AhsAhyan), edit freely ────────── */

const TOOLS = [
  { icon: "code", label: "REACT / NEXT" },
  { icon: "data_object", label: "TYPESCRIPT" },
  { icon: "bolt", label: "SUPABASE" },
  { icon: "database", label: "POSTGRESQL" },
  { icon: "style", label: "TAILWIND" },
  { icon: "animation", label: "FRAMER MOTION" },
  { icon: "view_in_ar", label: "GSAP / WEBGL" },
  { icon: "rocket_launch", label: "VERCEL" },
];

const PROJECTS = [
  {
    num: "01",
    name: "TeamDock",
    type: "Hackathon · Full-Stack",
    desc: "A real-time team-formation platform for hackathons — skill-based matching, live team feeds, dashboards, and secure auth. Built at ShellHacks.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    href: "https://github.com/AhsAhyan/shellhacksproject",
    cta: "Code",
  },
  {
    num: "02",
    name: "Precision Details",
    type: "Business Site · Full-Stack",
    desc: "A full-stack site with a Drizzle + Turso database, transactional email via Resend, and offline PWA support.",
    tags: ["Next.js", "Drizzle", "PWA"],
    href: "https://precision-details-three.vercel.app",
    cta: "Live",
  },
  {
    num: "03",
    name: "Mall Demo",
    type: "Interactive · Frontend",
    desc: "An animated storefront concept with WebGL visuals (OGL) and smooth GSAP + Framer Motion choreography.",
    tags: ["React", "GSAP", "WebGL"],
    href: "https://malldemo.vercel.app",
    cta: "Live",
  },
];

const TIMELINE = [
  {
    period: "2025 — PRESENT",
    role: "Full-Stack Projects",
    org: "Independent",
    desc: "Designing and shipping full-stack web apps end to end — hackathon platforms, business sites, and interactive demos with React, Next.js & Supabase.",
  },
  {
    period: "2025",
    role: "ShellHacks — TeamDock",
    org: "Hackathon",
    desc: "Built a real-time team-formation platform in a weekend with a team — Next.js, Supabase, and real-time PostgreSQL.",
  },
  {
    period: "2024 — 2025",
    role: "Deep Dive Into the Stack",
    org: "Self-Directed",
    desc: "Leveled up across the modern stack — TypeScript, Next.js, Tailwind, Drizzle, and motion with Framer Motion & GSAP.",
  },
  {
    period: "2022",
    role: "Started Coding",
    org: "The Beginning",
    desc: "Joined GitHub and wrote my first projects — and fell in love with building for the web.",
  },
];

/* ── Component ─────────────────────────────────────────────────── */

export default function Bento() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-12 gap-6 anim-fade-up anim-d1"
    >
      {/* Professional story */}
      <div className="md:col-span-8 glass glass-hover p-8 md:p-12 rounded-xl flex flex-col justify-between">
        <div>
          <h2
            className="mb-6 font-bold"
            style={{ fontFamily: "var(--font-syne-google)", fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.2 }}
          >
            Full-Stack, End to End
          </h2>
          <div className="space-y-6 text-on-surface-variant" style={{ lineHeight: 1.7 }}>
            <p>
              I build web applications from the database to the pixel — React
              and Next.js on the front, Supabase, Drizzle, and Postgres on the
              back, typed end-to-end with TypeScript.
            </p>
            <p>
              I learn by shipping: a real-time hackathon platform, a full-stack
              business site, interactive WebGL demos. Whatever a project needs,
              I figure out how to build it — and get it live.
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-3 flex-wrap">
          {["FRONTEND", "BACKEND", "TYPESCRIPT"].map((t) => (
            <span
              key={t}
              className="px-4 py-1 border border-outline rounded-full text-outline text-[12px]"
              style={{ fontFamily: "var(--font-jetbrains-google)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Location / atmospheric panel */}
      <div className="md:col-span-4 glass rounded-xl relative overflow-hidden min-h-[320px] md:min-h-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(120% 120% at 20% 0%, rgba(255,95,51,0.30) 0%, transparent 45%), radial-gradient(120% 120% at 100% 100%, rgba(47,217,244,0.18) 0%, transparent 50%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-syne-google)",
            fontSize: "clamp(120px, 16vw, 200px)",
            fontWeight: 800,
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.05em",
          }}
        >
          AA
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
        <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span
            className="text-[11px] uppercase tracking-widest text-tertiary"
            style={{ fontFamily: "var(--font-jetbrains-google)" }}
          >
            Open to work
          </span>
        </div>
        <div className="absolute bottom-8 left-8 z-20">
          <p
            className="text-[11px] text-primary mb-2 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-jetbrains-google)" }}
          >
            Currently based in
          </p>
          <p
            className="text-on-surface font-bold"
            style={{ fontFamily: "var(--font-syne-google)", fontSize: "clamp(28px, 3vw, 36px)" }}
          >
            Florida, US
          </p>
        </div>
      </div>

      {/* Radar / capability matrix */}
      <div id="skills" className="md:col-span-5 glass glass-hover p-8 md:p-10 rounded-xl overflow-hidden relative">
        <h3
          className="uppercase tracking-widest text-on-surface-variant mb-8 text-[12px]"
          style={{ fontFamily: "var(--font-jetbrains-google)" }}
        >
          Capability Matrix
        </h3>
        <div className="relative w-full aspect-square flex items-center justify-center max-w-[300px] mx-auto">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="100" y2="25" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="171.3" y2="76.8" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="144.1" y2="160.7" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="55.9" y2="160.7" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="28.7" y2="76.8" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            {/* Frontend (top), Backend (right), Database (bottom), Animation (left) */}
            <polygon
              points="100,32 165,79 130,155 60,150 42,75"
              fill="rgba(255,181,161,0.20)"
              stroke="#ffb5a1"
              strokeWidth="2"
            />
            <line className="radar-line" x1="100" y1="100" x2="100" y2="20" stroke="#2fd9f4" strokeWidth="1" />
          </svg>
          <span className="absolute top-0 text-[11px] text-primary" style={{ fontFamily: "var(--font-jetbrains-google)" }}>FRONTEND</span>
          <span className="absolute right-0 text-[11px] text-primary" style={{ fontFamily: "var(--font-jetbrains-google)" }}>BACKEND</span>
          <span className="absolute bottom-0 text-[11px] text-primary" style={{ fontFamily: "var(--font-jetbrains-google)" }}>DATABASE</span>
          <span className="absolute left-0 text-[11px] text-primary" style={{ fontFamily: "var(--font-jetbrains-google)" }}>ANIMATION</span>
        </div>
      </div>

      {/* Tools of choice */}
      <div className="md:col-span-7 glass glass-hover p-8 md:p-10 rounded-xl">
        <h3
          className="uppercase tracking-widest text-on-surface-variant mb-8 text-[12px]"
          style={{ fontFamily: "var(--font-jetbrains-google)" }}
        >
          Tools of Choice
        </h3>
        <div className="grid grid-cols-4 gap-6 md:gap-8">
          {TOOLS.map((tool) => (
            <div key={tool.label} className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-all duration-200 group-hover:scale-110">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-on-surface">{tool.icon}</span>
              </div>
              <span
                className="text-[10px] text-on-surface-variant group-hover:text-primary transition-colors text-center"
                style={{ fontFamily: "var(--font-jetbrains-google)" }}
              >
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected work header */}
      <div id="work" className="md:col-span-12 flex items-center gap-4 mt-6">
        <span
          className="uppercase tracking-[0.3em] text-tertiary text-[12px]"
          style={{ fontFamily: "var(--font-jetbrains-google)" }}
        >
          Selected Work
        </span>
        <span className="flex-1 h-px bg-white/10" />
      </div>

      {/* Project cards */}
      {PROJECTS.map((p) => (
        <a
          key={p.num}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-4 glass glass-hover p-8 rounded-xl flex flex-col group"
        >
          <div className="flex justify-between items-start mb-6">
            <span
              className="text-outline group-hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-syne-google)", fontSize: 44, fontWeight: 800, lineHeight: 1 }}
            >
              {p.num}
            </span>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              arrow_outward
            </span>
          </div>
          <h4
            className="text-on-surface mb-2 font-bold"
            style={{ fontFamily: "var(--font-syne-google)", fontSize: 22 }}
          >
            {p.name}
          </h4>
          <p
            className="text-[11px] uppercase tracking-widest text-on-surface-variant mb-4"
            style={{ fontFamily: "var(--font-jetbrains-google)" }}
          >
            {p.type}
          </p>
          <p className="text-sm text-on-surface-variant/80 flex-1 mb-6" style={{ lineHeight: 1.6 }}>
            {p.desc}
          </p>
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 border border-outline-variant rounded-full text-[10px] text-on-surface-variant"
                  style={{ fontFamily: "var(--font-jetbrains-google)" }}
                >
                  {t}
                </span>
              ))}
            </div>
            <span
              className="text-[10px] uppercase tracking-widest text-primary shrink-0"
              style={{ fontFamily: "var(--font-jetbrains-google)" }}
            >
              {p.cta} →
            </span>
          </div>
        </a>
      ))}

      {/* Experience timeline */}
      <div id="experience" className="md:col-span-12 glass p-8 md:p-12 rounded-xl mt-6">
        <h3
          className="uppercase tracking-widest text-on-surface-variant mb-12 text-[12px]"
          style={{ fontFamily: "var(--font-jetbrains-google)" }}
        >
          The Timeline
        </h3>
        <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12">
          {TIMELINE.map((item) => (
            <div key={item.period} className="flex gap-6 md:gap-8 group">
              <div
                className="text-[12px] text-tertiary pt-2 shrink-0"
                style={{ fontFamily: "var(--font-jetbrains-google)" }}
              >
                {item.period}
              </div>
              <div>
                <h4
                  className="text-on-surface mb-1 font-bold group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-syne-google)", fontSize: 22 }}
                >
                  {item.role}
                </h4>
                <p
                  className="text-[12px] text-on-surface-variant mb-3 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-jetbrains-google)" }}
                >
                  {item.org}
                </p>
                <p className="text-on-surface-variant/80 text-sm" style={{ lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education / foundation */}
      <div className="md:col-span-12 glass p-8 md:p-12 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3
            className="uppercase tracking-widest text-on-surface-variant mb-4 text-[12px]"
            style={{ fontFamily: "var(--font-jetbrains-google)" }}
          >
            Foundation
          </h3>
          <div className="flex items-center gap-5">
            <span className="material-symbols-outlined text-4xl text-primary">terminal</span>
            <div>
              <h4 className="text-on-surface font-bold" style={{ fontFamily: "var(--font-syne-google)", fontSize: 22 }}>
                Self-Taught Developer
              </h4>
              <p className="text-on-surface-variant text-sm">Building &amp; shipping since 2022</p>
            </div>
          </div>
        </div>
        <div className="h-16 w-px bg-white/10 hidden md:block" />
        <div className="flex items-center gap-5">
          <span className="material-symbols-outlined text-4xl text-tertiary">trending_up</span>
          <div>
            <h4 className="text-on-surface font-bold" style={{ fontFamily: "var(--font-syne-google)", fontSize: 22 }}>
              Always Learning
            </h4>
            <p className="text-on-surface-variant text-sm">Modern full-stack — React, Next.js &amp; databases</p>
          </div>
        </div>
      </div>
    </section>
  );
}
