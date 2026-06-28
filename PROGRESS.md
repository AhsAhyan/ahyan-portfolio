# Ahyan Portfolio — Progress / Resume Here

## Current state (✅ done)
- **Full restyle to bento/glass** — coral + cyan Material palette, glassmorphism, Syne/Hanken/JetBrains Mono fonts, Material Symbols icons. Desktop + mobile both approved.
- **Positioning:** full-stack web developer (security framing dropped, per decision).
- **Real content filled from GitHub (AhsAhyan):**
  - Hero: "I Build Web Apps." · "Full-Stack Web Developer · React & Next.js"
  - Projects: TeamDock (→ repo, live demo is 404), Precision Details (→ live), Mall Demo (→ live)
  - Tools: React/Next, TypeScript, Supabase, PostgreSQL, Tailwind, Framer Motion, GSAP/WebGL, Vercel
  - Timeline: 2022 start → stack deep-dive → ShellHacks/TeamDock → present
  - Foundation: Self-Taught Developer / Always Learning (certs to add later)
  - Contact/Footer: github.com/AhsAhyan, linkedin.com/in/AhsanAhyan, ahsahyan@gmail.com
- Root-cause bug fixed: removed unlayered `* { padding:0 }` (killed all Tailwind v4 padding/margins). See memory: tailwind-v4-unlayered-reset.
- Typecheck passes (`npx tsc --noEmit` → 0 errors).
- **Pushed to GitHub:** https://github.com/AhsAhyan/ahyan-portfolio (public, standalone repo with its own .git inside the folder).

## File map
- `app/globals.css` — palette (@theme + :root), `.glass`/`.glass-hover`, `.material-symbols-outlined`, `.radar-line`, entrance anims. NO global `*` reset (intentional).
- `app/layout.tsx` — fonts via next/font; Material Symbols via <link>; metadata = "Full-Stack Web Developer".
- `app/page.tsx` — full-bleed container `px-6 sm:px-10 md:px-24 lg:px-40`, glow orbs.
- `components/` — Navbar, Hero, Bento (big grid; ALL editable data arrays at top), Contact, Footer.
- Dead/unused (old amber design, not imported, safe to delete): About, Projects, Skills, Ticker, LogoCloud.

## TODO — final step
1. **Deploy to Vercel** (only remaining task):
   - Best: vercel.com/new → import `ahyan-portfolio` → Deploy (auto-deploys on every push after).
   - Or CLI: user runs `npx vercel login` (interactive), then `npx vercel --prod`.
2. After deploy: paste the live URL into README.md "Live:" line.

## Later / optional
- Add a real portrait at `public/profile.jpg` (currently "AA" gradient panel) — then wire into Bento location card.
- Redeploy TeamDock so its card can link to a live demo instead of the repo.
- Add certifications to Foundation section when relevant.
- `public/resume.pdf` if a resume button is wanted.

## Dev server
`npx next dev --hostname 0.0.0.0 --port 3000` → phone at http://192.168.10.234:3000 (same WiFi).
