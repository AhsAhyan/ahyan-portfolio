"use client";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-xl border-b border-white/10">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4 w-full">
        <a
          href="#top"
          className="text-on-surface tracking-tighter text-xl md:text-2xl font-bold"
          style={{ fontFamily: "var(--font-syne-google)" }}
        >
          AHYAN<span className="text-primary">_</span>AHSAN
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-on-surface-variant hover:text-on-surface transition-transform duration-200 hover:scale-105"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="bg-primary-container text-on-primary-container px-5 md:px-6 py-2 rounded-full uppercase tracking-widest text-[11px] font-medium hover:scale-105 transition-transform duration-200 inline-block"
          style={{ fontFamily: "var(--font-jetbrains-google)" }}
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}
