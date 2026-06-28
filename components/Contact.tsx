"use client";

const LINKS = [
  { icon: "mail", label: "Email", value: "ahsahyan@gmail.com", href: "mailto:ahsahyan@gmail.com" },
  { icon: "code", label: "GitHub", value: "github.com/AhsAhyan", href: "https://github.com/AhsAhyan" },
  { icon: "person", label: "LinkedIn", value: "linkedin.com/in/AhsanAhyan", href: "https://www.linkedin.com/in/AhsanAhyan" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="glass rounded-xl p-8 md:p-16 relative overflow-hidden anim-fade-up anim-d2"
    >
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 120% at 0% 0%, rgba(255,95,51,0.18) 0%, transparent 50%), radial-gradient(80% 120% at 100% 100%, rgba(47,217,244,0.12) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className="uppercase tracking-[0.4em] text-primary mb-6 text-[12px]"
            style={{ fontFamily: "var(--font-jetbrains-google)" }}
          >
            Get In Touch
          </p>
          <h2
            className="text-on-surface font-extrabold mb-4"
            style={{ fontFamily: "var(--font-syne-google)", fontSize: "clamp(48px, 7vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            Let&apos;s <span className="text-primary italic">Talk.</span>
          </h2>
          <p className="text-on-surface-variant max-w-md" style={{ lineHeight: 1.6 }}>
            Job, project, or just to connect — my inbox is open and I reply fast.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">{link.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1"
                  style={{ fontFamily: "var(--font-jetbrains-google)" }}
                >
                  {link.label}
                </div>
                <div className="text-on-surface text-sm truncate">{link.value}</div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                arrow_outward
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
