export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20 py-16 w-full gap-10">
        <div>
          <div
            className="text-on-surface mb-3 text-2xl font-bold"
            style={{ fontFamily: "var(--font-syne-google)" }}
          >
            AHYAN<span className="text-primary">_</span>AHSAN
          </div>
          <p
            className="text-[11px] uppercase tracking-widest text-on-surface-variant max-w-xs"
            style={{ fontFamily: "var(--font-jetbrains-google)" }}
          >
            © 2026 Ahyan Ahsan. Built with precision.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span
              className="text-[11px] text-primary uppercase tracking-widest"
              style={{ fontFamily: "var(--font-jetbrains-google)" }}
            >
              Connect
            </span>
            <a className="text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="https://github.com/AhsAhyan" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="https://www.linkedin.com/in/AhsanAhyan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="mailto:ahsahyan@gmail.com">Email</a>
          </div>
          <div className="flex flex-col gap-3">
            <span
              className="text-[11px] text-primary uppercase tracking-widest"
              style={{ fontFamily: "var(--font-jetbrains-google)" }}
            >
              Navigate
            </span>
            <a className="text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="#work">Work</a>
            <a className="text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="#skills">Skills</a>
            <a className="text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="#top">Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
