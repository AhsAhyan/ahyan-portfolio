# Ahyan Portfolio — Progress / Resume Here

## Current state (✅ done)
- **Full restyle to bento/glass** complete and approved — coral + cyan Material palette, glassmorphism, Syne/Hanken/JetBrains Mono fonts, Material Symbols icons.
- Desktop layout: **approved** ("looks perfect"). Even gutters, breathing room.
- Mobile layout: **approved** — hero scales with `clamp(34px,9.5vw,88px)`, all bento cards stack, no horizontal overflow.
- Root-cause bug fixed: removed unlayered `* { padding:0 }` reset that was killing all Tailwind v4 utility padding/margins. (See memory: tailwind-v4-unlayered-reset)

## File map
- `app/globals.css` — palette (@theme + :root), `.glass`/`.glass-hover`, `.material-symbols-outlined`, `.radar-line`, entrance anims. NO global `*` reset (intentional).
- `app/layout.tsx` — Syne + Hanken Grotesk + JetBrains Mono via next/font; Material Symbols via <link>.
- `app/page.tsx` — full-bleed container `px-6 sm:px-10 md:px-24 lg:px-40`, glow orbs.
- `components/Navbar.tsx`, `Hero.tsx`, `Bento.tsx` (the big grid: story, location, radar, tools, projects, timeline, education), `Contact.tsx`, `Footer.tsx`.
- Dead/unused (old amber design, not imported, can delete): `About.tsx`, `Projects.tsx`, `Skills.tsx`, `Ticker.tsx`, `LogoCloud.tsx`.

## TODO — pick up here tomorrow
1. **Real content** — all placeholder data is grouped at TOP of `components/Bento.tsx`:
   - `PROJECTS` (Project One/Two/Three → real projects + links)
   - `TIMELINE` (roles/dates — currently generic)
   - Education block (Computer Science / certifications — edit inline in JSX)
2. **Portrait** (optional) — Florida panel uses an "AA" gradient. To use a photo: add `public/profile.jpg`, then ask to wire it into the location card in `Bento.tsx`.
3. **Contact links** — verify github.com/ahsahyan, linkedin.com/in/ahyan are correct (in `Contact.tsx` + `Footer.tsx`).
4. **public/resume.pdf** — Navbar "Let's Talk" CTA scrolls to #contact (no resume button currently). Add resume if wanted.
5. Optional polish: radar pentagon sizing.
6. **Deploy to Vercel** when content is in.

## Dev server
`npx next dev --hostname 0.0.0.0 --port 3000` → phone at http://192.168.10.234:3000 (same WiFi).
