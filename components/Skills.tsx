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
