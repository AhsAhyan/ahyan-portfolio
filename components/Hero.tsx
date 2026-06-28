"use client";

export default function Hero() {
  return (
    <section id="top" className="max-w-4xl anim-fade-up anim-d0">
      <span
        className="uppercase tracking-[0.3em] text-tertiary mb-5 block"
        style={{ fontFamily: "var(--font-jetbrains-google)", fontSize: 12 }}
      >
        Full-Stack Web Developer · React &amp; Next.js
      </span>

      <h1
        className="text-on-surface mb-8 font-extrabold"
        style={{
          fontFamily: "var(--font-syne-google)",
          fontSize: "clamp(34px, 9.5vw, 88px)",
          letterSpacing: "-0.04em",
          lineHeight: 1.0,
        }}
      >
        I Build
        <br />
        <span className="text-primary italic">Web Apps.</span>
      </h1>

      <p
        className="text-on-surface-variant max-w-2xl"
        style={{ fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.6 }}
      >
        From real-time hackathon platforms to full-stack business sites — I
        design, build, and ship web applications end to end with React,
        Next.js, and TypeScript. Based in Florida.
      </p>
    </section>
  );
}
