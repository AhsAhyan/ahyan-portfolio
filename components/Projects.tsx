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
