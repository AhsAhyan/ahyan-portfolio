"use client";

const ITEMS = [
  { slug: "react",             label: "React" },
  { slug: "typescript",        label: "TypeScript" },
  { slug: "nextdotjs",         label: "Next.js" },
  { slug: "nodedotjs",         label: "Node.js" },
  { slug: "python",            label: "Python" },
  { slug: "docker",            label: "Docker" },
  { slug: "postgresql",        label: "PostgreSQL" },
  { slug: "tailwindcss",       label: "Tailwind" },
  { slug: "kalilinux",         label: "Kali Linux" },
  { slug: "wireshark",         label: "Wireshark" },
  { slug: "linux",             label: "Linux" },
  { slug: "github",            label: "GitHub" },
  { slug: "cloudflare",        label: "Cloudflare" },
  { slug: "gnubash",           label: "Bash" },
  { slug: "git",               label: "Git" },
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
