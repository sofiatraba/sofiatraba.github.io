# Sofia Traba — personal site & portfolio

A static site, grown out of the Claude Design concept *Sofia Portfolio Site*.
The palettes in `themes.css` come from the companion exploration doc
*Sofia Portfolio*. No build step, no dependencies, no framework.

```
index.html           home: hero, portrait, TL;DR, directory (Career + Lab)
career.html          the five turns + the path graphic
portfolio.html       The Lab — all projects, one uniform shelf
cases/              one page per project (essays from Obsidian)
apps/               one gallery page per app: screenshots, cards, and
                     self-contained snapshots (apps/snapshots/) of real output
writing.html         posts — PARKED: on disk but unlinked until real posts exist
work-with-me.html    PARKED like writing.html — unlinked until she wants inbound
styles.css           tokens at the top, then layout, then components
themes.css           ARCHIVE of explored palettes — not linked by any page
main.js              image placeholders, legacy-link redirect, year
favicon.svg          the "S" mark, white on Klein blue
images/              your photos — see images/README.md
```

Each section is a **real page with its own URL, title, and description** —
shareable, indexable, and ready for per-page OG images later. Old
`#/career`-style links from the one-pager era redirect automatically.

## Running it locally

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321.

## Editing

**Text** — open the page and type. It's ordinary HTML in reading order.
Everything you still need to write is marked `Placeholder —` (search for it);
facts already filled in (dates, employers, languages, links) came from your CV.

Hard-refresh after a change (⌘⇧R) — browsers cache CSS aggressively.

**Adding modules** — repeatable blocks are marked `<!-- MODULE: ... -->`.
Copy the block, paste it next to itself, change the words:

| Module | Page | What to copy |
| --- | --- | --- |
| Career turn | career.html | one `<li class="step">` |
| Project card | portfolio.html | one `<article class="case-card">` |
| Fact card row | work-with-me.html, index.html | one `dt`/`dd` pair |
| Workshop topic | work-with-me.html | one chip `<li>` |
| Post row | writing.html | one `<a class="post-row">` |
| Image slot | anywhere | one `<figure class="slot">` |

Every grid reflows on its own, so adding a card never needs a CSS change.

**The career path** takes care of itself: copy a `<li class="step">` and it
alternates sides; the curve behind the cards is one stretched SVG that re-fits
however many turns there are. `step--turn` gives one card the vermilion pivot label,
`step--now` is the filled end card. Below 700px the curve becomes a vertical
rail with a dot per turn.

**Adding a page** — copy any of the five HTML files, change `<title>`, the
meta description, the content, and move `aria-current="page"` to the right nav
link. Add the same nav link to the other pages.

**Case-study pages (when you write them)** — create `cases/slug.html` (copy an
existing page as the shell), then link it from the card. Same for posts:
`posts/slug.html`, linked from `writing.html`. That's what makes each one
individually shareable on LinkedIn.

## Design decisions (made — don't reopen casually)

**Palette: white + Klein ultramarine, vermilion turn.** Pure white ground
(`#ffffff`), near-black text, `#1c40c9` as the only accent — links, climbs,
buttons, the "now" card. The single exception is the career pivot year, in vermilion
`#d03c18` — one warm mark on the path. Rationale: a neutral ground
can't date, flatters real photography, reads best for long-form writing, and
dodges both the AI-navy and studio-beige clichés. All combinations pass AA.

**Type: Newsreader 300 (display) · Instrument Sans (body) · DM Mono (labels).**
Each family has one job; don't add a fourth or swap one without swapping the
identity.

Every explored alternative lives in `themes.css` (not linked from any page).
To try one again temporarily: re-add the `<link>` and set
`<html data-palette="...">`.

## Still to write (all marked `Placeholder —` in the files)

- Home: hero lede (drafted — make it yours) and the four directory one-liners
- Career: the intro story (the fill-in-the-blanks lede) and the five turn bodies
- The Lab: all five cases have real text now
- Repo links: filled — wattsthegap, injurymeter, Fondo on github.com/sofiatraba
- App screenshots: refresh by re-copying from the repos (LazyFood/docs/portfolio,
  wattsthegap/docs, injurymeter/report_template.html) — they are snapshots, not live
- Writing: parked until real posts exist — re-add the nav link on every page and
  uncomment the directory row in index.html, then paste the Substack URL
  (search writing.html for TODO)
- Images: all four photos in (converted to web-size jpg); og.png still missing

## Publishing

Any static host works, since there's nothing to build.

**Netlify** — fastest. Drag this folder onto
[app.netlify.com/drop](https://app.netlify.com/drop).

**GitHub Pages** — free, deploys on push:

```bash
git init && git add -A && git commit -m "Portfolio site"
```

Create a repo on GitHub, push, then Settings → Pages → source `main` / root.

**Vercel / Cloudflare Pages** — import the repo, no build command, output = root.

A custom domain (sofiatraba.com or similar, ~€12/year) is worth it for a site
whose job is being the URL under your name.
