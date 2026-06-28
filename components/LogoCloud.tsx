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
