# UseKit — LLM Context File

> This file is a quick-reference for AI assistants working on this project.
> Update this file after every significant change.

**Last updated:** 2026-02-19

---

## Project Overview
- **Name:** UseKit
- **URL:** usekit.live
- **Purpose:** A hub/portal site that showcases and links to a collection of personal productivity tools.
- **Tagline:** "One platform, limitless possibilities."
- **Framework:** VitePress v2 (alpha 16)

## Structure
```
usekit/
├── .vitepress/
│   ├── cache/deps/            # VitePress build cache (auto-generated)
│   └── config.mts             # Site config — nav: Home, Blog
├── blog/
│   ├── index.md               # Blog listing page (auto-lists posts)
│   ├── posts.data.js          # Data loader — auto-discovers posts
│   └── posts/
│       └── hello-world.md     # Sample post (add more .md files here!)
├── docs/
│   └── .vitepress/cache/deps/ # Build cache (auto-generated)
├── images/
│   └── flowfocus-preview.png
├── node_modules/
├── api-examples.md            # Default VitePress example (hidden from nav)
├── index.md                   # Homepage — hero + tool cards
├── LICENSE
├── llm.md                     # This file — LLM context
├── markdown-examples.md       # Default VitePress example (hidden from nav)
├── package-lock.json
├── package.json               # Only dep: vitepress
└── README.md
```

## Live Tools
| Tool       | URL                          | Status | Description                                  |
|------------|------------------------------|--------|----------------------------------------------|
| FlowFocus  | https://flowfocus.usekit.live | LIVE   | Deep work timer & ambient soundscape generator |

## Homepage (`index.md`)
- Hero section with "Get Access" CTA → links to `/docs`
- Below hero: tool cards (currently only FlowFocus) styled with dark cards, LIVE badge, preview image

## Blog System
- Posts go in `blog/posts/` as `.md` files with frontmatter: `title`, `date`, `description`, `cover` (optional image path)
- `blog/posts.data.js` auto-discovers and sorts posts by date (newest first)
- `blog/index.md` renders a Klavis AI-style 3-column card grid with cover images, title, date, description
- Cards show a gradient fallback if no cover image is specified

## Config (`.vitepress/config.mts`)
- Nav: Home, Blog
- Sidebar: Blog section (posts auto-listed on index page)
- Social links: still points to VitePress GitHub (needs updating)
- Examples pages still exist but are hidden from nav

## Known TODOs
- [ ] Update social link to project's own GitHub
- [ ] Add content to `/docs` or update the CTA link
- [ ] Add more tool cards as new tools go live
- [ ] Delete example pages when no longer needed

## Dev Commands
- `npm run docs:dev` — Start dev server
- `npm run docs:build` — Build for production
- `npm run docs:preview` — Preview production build

---

## Changelog
- **2026-02-20:** Added blog system — `blog/` directory with auto-listing via `createContentLoader`. Hidden Examples from nav. Sample post created.
- **2026-02-19:** File created. Project has FlowFocus as the only live tool. Default VitePress example pages still present.
