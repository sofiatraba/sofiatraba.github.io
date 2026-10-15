# Judgement in the Loop

A field guide for product people on deciding where AI belongs. It lives in
its own folder with its own look, separate from the personal site. It will be
served at `sofiatraba.github.io/judgement-in-the-loop/`. Nothing on the
personal site links to it yet; add the link once a few chapters are in.

```
index.html          home: intro, how a chapter works, the chapter list
chapters/           one page per chapter, NN-slug.html
illustrations/      flat SVGs in the notebook-cover palette, plus the favicon
guide.css           tokens at the top, then home, then chapter pieces
```

## How a chapter is built

Every chapter has the same bones. Copy `chapters/07-prompt-skill-or-agent.html`
as the shell:

1. `chapter-head`: number and the question as the title
2. `plate`: the illustration, with an optional handwritten caption
3. `lede`: the situation in which the question comes up
4. three `part-tag` sections: **first, what it is** · **then, how to decide** ·
   **and, through a product lens**
5. `stays`: the green "what stays human here" note (the spine of the guide)
6. `pager` and `sources`

Then on `index.html` turn that chapter's `<div class="chapter">` into an
`<a class="chapter" href="chapters/...">` and change "still growing" to "read".

## Voice

The voice should sound warm and conversational, with medium-length sentences and British spelling.
Avoid "it's not X, it's Y" turns, lists of three by reflex, and lines that only
exist to sound clever. If a sentence wouldn't be said out loud to a friend,
say the plainer thing.

## Before anything goes public

Chapters 00 and 07 are **drafted by Claude** (marked in an HTML comment at the
top of each). Rewrite at least the opening, the ending and the yellow
**Yours to write** boxes in your own words, then delete the boxes.

Check before publishing:

- [ ] Paul David, *The Dynamo and the Computer*, AER 80(2), May 1990,
      pp. 355–361. Open the PDF and confirm the page numbers.
- [ ] The two Anthropic links in chapter 07 still resolve.
- [ ] Chapter 00's claim that factories gained output once each machine had its
      own motor and the floor could be laid out around the work matches David's
      own wording closely enough.

## Translations

The site is in English first. When the chapters have settled, add `es/` and `fr/` folders
that mirror this one, plus a small language switch in the top bar.
