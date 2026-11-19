# AlejandroSnap — Roblox portfolio

A static portfolio built with Next.js 16, React, TypeScript, and CSS Modules. The design uses a light surface, a burnt orange accent, and real project imagery.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000/portafolio-roblox/ (the base path is required).

```sh
npm run build
```

The production build checks TypeScript and exports the complete site to `out/`. The existing GitHub Actions workflow publishes that directory to GitHub Pages when changes reach `main`.

## Content and structure

- `data/work.ts`: project descriptions, previews, media, technologies, and contributions.
- `data/experience.ts`: the three service offerings.
- `data/navigation.ts`: section navigation.
- `data/socials.ts` and `lib/constants.ts`: contact links, identity, origin, and deployment base path.
- `lib/work.ts`: selected projects and contribution labels.
- `app/globals.css`: shared colors, typography, spacing, buttons, and accessibility styles.
- `components/`: page sections, the responsive navigation, and footer.
- `app/work/[slug]/`: statically generated project pages with per-project metadata.

To feature a project, set `featuredRank` to its desired position (1, 2, or 3). The `featured` flag can fill remaining places. Every project, including featured work, appears in the filterable collection. Set `category` to `game` or `system` to control its filter independently of its project/commission/collaboration `kind`. Optional `role`, `scope`, and `status` fields describe your contribution and the project's current state.

## Images and media

Optimized WebP previews live alongside their original PNGs in `public/img/work/`. Add optimized previews when adding projects and include the configured base path in asset URLs, following the existing entries. Keep gallery images nonempty; a project cover is used as a fallback.

Videos show the local cover first. YouTube's privacy-enhanced player is loaded only after the visitor selects Play. The Manrope variable font is self-hosted through Fontsource, so builds and visitors do not need Google Fonts.

## Navigation and accessibility

Section links use native anchors with the configured deployment base path. Project-to-project links use Next.js navigation. The site includes a keyboard skip link, visible focus states, a mobile navigation disclosure, reduced-motion support, and live feedback for project filters and copying the Discord username.

The site has no backend or contact form. Discord usernames are copied locally; visitors send their messages in Discord.
