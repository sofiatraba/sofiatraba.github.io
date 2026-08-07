# Images

Drop files here with these exact names and they replace the dashed placeholders
automatically — no code changes needed. Any that are missing keep showing the
placeholder label (or the ghost case number), so a half-filled site still looks
intentional.

| File | Where it shows | Renders at |
| --- | --- | --- |
| `me.jpg` | Home → hero portrait | 300px tall, cropped to fill |
| `bike.jpg` | Home → "But wait, there's more" | 150px tall |
| `kite.jpg` | Home → "But wait, there's more" | 150px tall |
| `outdoors.jpg` | Home → "But wait, there's more" | 150px tall |
| `post-1.jpg` | Writing → latest post | 260px tall |
| `og.png` | Link previews on LinkedIn / Slack / social | 1200 × 630 |

Notes:

- **`me.jpg` and `og.png` matter most.** The portrait is what makes this a
  personal brand rather than a template, and `og.png` is what people see when
  your link is shared — worth making it your name + line + portrait.
- `.png` or `.webp` work too — just update the `src` in the HTML to match.
- Everything is `object-fit: cover`, so landscape crops best (portrait excepted).
  Aim for roughly 2× the display height so it stays sharp on retina screens.
- Keep each file under ~300 KB; large photos are the main thing that makes a
  static portfolio feel slow.
- Update the `alt` text in the HTML when you swap an image in — it's what
  screen readers and search engines read.
