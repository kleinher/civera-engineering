# Civera Engineering — project handbook

The client is Franco Tocci. The site presents Civera Engineering (structural,
civil and multidisciplinary engineering practice) with 3 real projects, a
Design & Visualisation section, a contact form and legal pages, trilingual in
English, Spanish and German.

Live URL: <https://civeraeng.com> — auto-deployed from `main` on Cloudflare
Pages. Workers preview URL still lives at
<https://civera-engineering.hernan-k97.workers.dev>.

Git remote: `git@github.com:kleinher/civera-engineering.git`.

## Stack and tooling

- Astro 5 static site, TypeScript strict, MDX content collections.
- Tailwind CSS v4 via `@tailwindcss/vite`, tokens in `src/styles/global.css`.
- `@astrojs/sitemap`, `@astrojs/mdx`, `sharp` for image compression.
- Node ≥22.12.0 (`nvm use 22`). Never run scripts under Node 20.
- Dev server must be launched with `astro dev --background`; manage it with
  `astro dev stop | status | logs`. Do not spin up plain `astro dev`.
- Build with `npx astro build` (12 static routes × 3 locales + sitemap → 18
  pages, ~1s).

## Project structure

```
src/
  components/
    HomePage.astro            composition of every home section
    Header.astro / Footer.astro
    Logo.astro                text wordmark, brass accent on the "A"
    LanguageSwitcher.astro    ES/EN/DE dropdown
    Icon.astro                inline SVGs (25 names, common attrs)
    PlaceholderImage.astro    fallback SVG when a real image is missing
    LegalPage.astro           shared shell for /legal and /privacy
    ProjectDetail.astro       full project template (hero + key info +
                              overview + scope + challenge + gallery +
                              Civera scope + confidentiality + nav)
    sections/
      Hero.astro              navy hero with SVG structural grid,
                              intentionally no photograph
      Services.astro          6 items, 3-column desktop grid
      Projects.astro          reads projects collection, sorted by order
      Experience.astro
      Visualisation.astro     3 cards with click-to-lightbox images
      Process.astro
      About.astro
      Contact.astro           2 columns (form + Get in Touch),
                              posts to Formspree via fetch
  content.config.ts           Zod schema for the projects collection
  content/projects/
    c18.mdx c41.mdx c19.mdx   real projects (C18, C41, C19 Urban
                              Residences), each carries base English +
                              a `translations.es` and `translations.de`
                              block
  i18n/
    types.ts                  locales tuple, localeLabels/localeNames
    en.ts es.ts de.ts         dictionaries (source of truth is en.ts;
                              es/de import `Dictionary` type)
    index.ts                  useTranslations, getLocaleFromUrl,
                              localisePath, switchLocalePath
    project.ts                localizeProject(entry, locale) — merges
                              the base entry with the requested locale
                              overrides (subtitle, category, homeMeta,
                              excerpt, keyInfo, overview, scopeItems,
                              challenge, civeraScope, galleryCaptions
                              by index)
  layouts/
    BaseLayout.astro          HTML shell, SEO (hreflang, canonical,
                              OG, sitemap), inline script for header
                              shadow, mobile menu, language dropdown,
                              active-section highlighting via
                              IntersectionObserver and scroll reveal
  pages/
    index.astro                       EN root
    es/index.astro de/index.astro     ES / DE roots
    projects/[slug].astro             getStaticPaths from the projects
    es/projects/[slug].astro          collection with prev/next props
    de/projects/[slug].astro
    legal/index.astro privacy/index.astro
    es/legal es/privacy de/legal de/privacy
  styles/
    global.css                Tailwind entry, `@theme` design tokens,
                              base overrides, `.container-page`,
                              `.section-title`, `.btn`, `.link-cta`,
                              `.check-list`, `.reveal`
public/
  favicon.svg og-image.svg robots.txt (sitemap points to civeraeng.com)
  images/projects/{c18,c41,c19}/…jpg  project photos, ≤600KB each
  images/visualisation/…jpg           4 renders (Norway 01/02 exterior
                                       and interior, C41 model 03, C18
                                       transfer structure 04 — currently
                                       04 is unused since Technical
                                       Visualisation card was removed)
data/                                   raw sources from the client
                                        (gitignored, do not commit)
```

## Design system

Tokens live in `src/styles/global.css` under a single `@theme` block.
Anything colour-, spacing-, typography- or radius-related must reference a
token — do not hard-code hex values in components.

Palette:

- `--color-navy-950 / 900 / 800 / 700` — hero, contact background, headings.
- `--color-accent-600 / 500 / 400` — primary CTAs and accents (blue).
- `--color-sky-50` — soft info panels (confidentiality block, legal note).
- `--color-brass-500 / 400 / 300` — champagne accent (logo A, hero
  underline, project category label on the detail hero). Use sparingly, per
  the client's brief.
- `--color-ink-900 / 700 / 500` — body text.
- `--color-mute-500 / 400` — secondary text / muted labels.
- `--color-line-300 / 200 / 100`, `--color-surface-50`, `--color-white`.

Font stack: `--font-sans` starts with `"Inter"`, loaded from `rsms.me` in
`BaseLayout.astro`. Tracking tokens: `--tracking-wider` (0.08em) for CTAs,
`--tracking-widest` (0.14em) for headings/eyebrows.

Layout primitives:

- `.container-page` — max-width 1280px, side padding 1.25rem / 2rem / 2.5rem.
- `.section-title` — uppercase heading with a centred accent underline.
- `.eyebrow` — small uppercase accent label.
- `.btn` + variants `.btn-primary / -secondary / -outline / -nav`.
- `.link-cta` — bordered inline CTA with animated arrow.
- `.check-list` — bulleted list with an inline SVG check marker.
- `.reveal` — IntersectionObserver-driven fade-up; wrapped by `BaseLayout`.

Safeguard: `html, body { overflow-x: clip }` prevents any layout accident
from creating a horizontal scrollbar.

## Content model (projects)

Each project lives in `src/content/projects/<slug>.mdx`. Frontmatter is
validated by the Zod schema in `src/content.config.ts`. Structure:

- `order` (number), `slug`, `title`, `subtitle?`, `category`, `cover`,
  `heroImage`, `homeMeta?`, `excerpt`, `scope` (short array, unused on the
  detail page today).
- `keyInfo` — partial object with `name`, `type`, `location`,
  `detailedLocation`, `status`, `year`, `period`, `levels`,
  `floorDimensions`, `typicalFloorArea`, `area`, `residentialLayout`,
  `elevators`, `software`, `structural`, `foundation`.
- `overview[]`, `scopeItems[]`, `challenge[]`, `civeraScope[]` — arrays of
  paragraphs / bullets.
- `gallery[]` — each item has `category` (enum: completed, construction,
  reinforcement, model, render, drawings, foundation, details), `src`,
  `alt`, `caption?`, `feature?`. Feature images span the whole grid row and
  render 16:9 instead of 4:3.
- `translations.es` and `translations.de` — mirror the localizable fields
  (`subtitle`, `category`, `excerpt`, `homeMeta`, `keyInfo`, `overview`,
  `scopeItems`, `challenge`, `civeraScope`, `galleryCaptions`). Captions are
  matched by array index against `gallery`, so keep the arrays aligned.

Adding a new project:

1. Add optimised images under `public/images/projects/<slug>/`.
2. Create `src/content/projects/<slug>.mdx` with all three languages.
3. `getStaticPaths` in each `pages/**/projects/[slug].astro` picks it up
   automatically. Order in the home listing follows the `order` field.

## i18n

- Default locale is `en`; `prefixDefaultLocale: false` in
  `astro.config.mjs`. EN pages live under `/`, ES under `/es/`, DE under
  `/de/`.
- Every user-facing string comes from `t.*` (from `useTranslations(locale)`)
  except project content, which comes from `localizeProject(entry.data,
  locale)`. Do not hard-code copy inside components.
- `en.ts` is the type source: `export type Dictionary = typeof import('./en').default`.
  Adding a key means adding it in all three locales.
- Route helpers: `localisePath(path, locale)` builds internal links;
  `switchLocalePath(currentPath, target, current)` powers the language
  switcher.

## Home composition

`HomePage.astro` renders, in order, `Hero → Services → Projects →
Experience → Visualisation → Process → About → Contact`. Do not add another
About block inside `Contact.astro`; the client only wants one About Civera
block on the home.

## Deploy

- Auto-deploy: any push to `main` triggers Cloudflare Pages project
  `civera-engineering`. Watch it in Workers & Pages → Deployments.
- Custom domain `civeraeng.com` is delegated to Cloudflare (nameservers
  `kehlani.ns.cloudflare.com` and `patryk.ns.cloudflare.com`). Root and
  `www.civeraeng.com` are attached as Custom Domains on the Pages project.
- Email is Arsys "Correo Profesional" for `civeraeng.com`. MX and TXT/SPF
  records live in the Cloudflare DNS zone as **DNS only** (grey cloud) —
  never proxy them. `autoconfig`, `autodiscover` and `webmail` CNAMEs must
  also stay DNS only or Outlook/Thunderbird autoconfig breaks.
- If you ever need to change domains: update `astro.config.mjs` (`site`) and
  `public/robots.txt` sitemap URL in the same commit.

## Third-party integrations

- Contact form posts to `https://formspree.io/f/mjyvqwvn` (Formspree). The
  submit handler in `Contact.astro` is a `fetch` with client-side
  validation, honeypot (`bot-field`), button disabled while in flight, and
  success/error banners driven by the localised strings in `t.contact`. If
  the endpoint changes, update it in the form `action`.
- LinkedIn URL is
  `https://www.linkedin.com/company/civera-engineering`, linked from
  `Footer.astro` and the "Get in Touch" column of `Contact.astro`.
- No analytics or tracking pixels — client wants none (per brief §13). If
  adding any later, update the Privacy Policy too.

## Images

- Store project photos under `public/images/projects/<slug>/` and Design &
  Visualisation renders under `public/images/visualisation/`.
- Compress before committing. Baseline: resize to max 1920 px on the long
  edge and JPEG quality 82 with mozjpeg. Node one-liner using the already
  installed `sharp`:

  ```js
  await sharp(src)
    .resize(1920, null, { withoutEnlargement: true })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toBuffer();
  ```

  Target ≤600 KB per photo; ≤500 KB is better.
- Hero and detail hero images use `object-fit: cover`. Feature gallery
  images render 16:9; regular ones 4:3.

## Working conventions

- Never introduce a horizontal scrollbar. `html, body { overflow-x: clip }`
  is a safeguard, not a licence to place fixed-width elements wider than
  the viewport.
- Respect `prefers-reduced-motion`; the global stylesheet already disables
  animations and smooth scroll under that setting — new components must not
  add unconditional animations.
- Copy comes from the client brief (`data/…/CIVERA2.docx`) — do not invent
  extra services, projects or claims. If you translate to ES or DE and are
  unsure, keep it neutral and technical.
- `data/` is gitignored. Never commit anything from it directly.

## Deferred items (client will provide)

- Extra Norway office material (only 2 renders shipped so far — Technical
  Visualisation card was removed).
- Mechanical / Piping portfolio (mentioned in Services only, no case study
  yet).
- Formal legal data once CIVERA is registered (registration number, VAT
  ID, managing director, address). Until then the current temporary Legal
  Notice / Privacy Policy stay as they are.
- Additional social links.

## Documentation

Full Astro docs: <https://docs.astro.build>. Read the relevant guide before
touching an area:

- Routing / dynamic pages: <https://docs.astro.build/en/guides/routing/>
- Astro components: <https://docs.astro.build/en/basics/astro-components/>
- Framework components: <https://docs.astro.build/en/guides/framework-components/>
- Content collections: <https://docs.astro.build/en/guides/content-collections/>
- Styling / Tailwind: <https://docs.astro.build/en/guides/styling/>
- i18n: <https://docs.astro.build/en/guides/internationalization/>
