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
