# Handoff: the AI field guide for product people

This note carries a cloud session (15 October 2026) over to a local session that can read Sofia's Obsidian vault. Read it fully before doing anything. Until Sofia says otherwise, it's the source of truth for what has been decided.

---

## 1. Paste this into the new session to start

> I'm continuing a project from another Claude session. Read `HANDOFF.md` first (I'll paste it or point you to it). Then look through my vault for notes that relate to AI, product management, teaching AI, judgement, handovers, or my After the Algorithm Substack. Tell me what you found and how it changes the draft syllabus in the handoff. Don't build anything and don't write chapters yet. The next step is the full syllabus across all three tiers.

---

## 2. Working agreements (important)

- **Don't build or publish anything until Sofia asks.** The cloud session built a prototype site before she'd asked for one, and she called that out. Discuss first and build when she says so.
- **Claude drafts and Sofia edits in her own voice.** Drafts should already sound as close to her as possible (see section 8). She'll rewrite anyway, but a draft that sounds like AI wastes her time.
- **Netlight material is inspiration only.** It's a private project. Never copy text, structure word for word, or internal details (internal LLM gateways, NL-Chat, internal tools) from the Netlight syllabus.
- **Publish the pattern, never the client.** Nothing that points to Douglas or any other client.
- Keep replies short and direct. Sofia doesn't need hand-holding or preambles.

---

## 3. Where this came from

Sofia handwrote a short notebook document called **"Human AI"**. Here's what it says, transcribed:

**The questions it opens with:** Is throwing AI at everything the solution? Is doomsday as close as we think? Is being anti-AI the solution?

**Her stance:** AI has changed the tech world and the wider world very quickly, and people compare it to the industrial revolution, which raises the question of what we can learn from the past and whether that can reassure people. The answer doesn't lie in ignoring AI or in using it for everything. Moderation is key, or more exactly *judgement*. She wrote "judgement in the loop" and highlighted it. This only works if we make a conscious effort to understand what *must*, *should* and *can* remain human. "In the era of AI, what to build is what's only left. But how should we know? We need to understand AI for that."

**"AI basics for everyone": her original ten topics**
1. LLMs: what they are, how they work, strengths, vulnerabilities (intro to large language models)
2. Configs and commands
3. Prompt engineering vs context engineering (how would this work for specific tasks, custom agents)
4. Tools
5. Risks
6. Skills (when is it enough to have a skill?) — side note: a `.claude` folder per project holding skills, agents, settings and so on, and "how to call this agent"
7. MCPs (custom vs not custom)
8. Orchestrators (with a question mark) — prompt vs skill vs agent
9. AI agents (one agent vs multiple agents)
10. Where is AI used well? Ethics? What should stay human?

**"Product × AI" page:** discovery and problem definition · strategy and prioritisation · delivery and execution · outcomes and measurement · stakeholders and change.

**Format notes:** Website? Blog? Which format? Lots of beautiful, minimalistic illustrations. It must be clear what we're trying to do. English / Spanish / French. The goal is to stay "somewhat neutral" in the space and bring people together and forward. What name?

**The cover** of the document is a flat illustration: a checked green and dusty-blue vase with terracotta and mustard flowers, on a cream wall over a terracotta floor, with a green band down the left edge.

**Netlight context (inspiration only):** Netlight runs an internal "Product × AI Enablement Series" of hands-on challenges in sections: Getting Started (tool setup), Claude Code 101 (prompting, markdown, first skill, skills vs agents), Working with git, Context Engineering & Agentic Knowledge Bases (ad-hoc workflow → small team → shared knowledge base across teams), Connecting your agent to the world (CLI vs API vs MCP), and From Single Agent to Orchestra (agent anatomy, specialist agent, pipelines with a human checkpoint, routing). Each challenge has a clear goal and a way to know you've finished it. It teaches the **how**. Sofia's guide should cover the **whether and when**.

---

## 4. What's been decided

**The core idea.** Netlight's syllabus and most online material teach how to use AI tools. Sofia's notes keep asking *whether* and *when*: when is a skill enough, custom or off-the-shelf MCP, one agent or many, what stays human. That judgement layer is the gap, and the guide fills it. Competing with technical tutorials makes no sense.

**Reader.** PMs and product owners in *normal* companies (retail, banks, manufacturing, not AI startups) who are being told to "do something with AI" and don't come from engineering. Their pain points:
- They can't judge proposals from engineers or vendors.
- The vocabulary (agents, MCP, skills, context) moves faster than they can follow.
- They're unsure how much of their own work to hand over.

Sofia knows this reader from client work and was this reader not long ago.

**Working purpose (draft):** a guide that helps product people work with AI, and decide about AI, without giving up the judgement that makes them good at their job.

**Three tiers, by how much is at stake (Sofia likes this):**
1. **Your own work.** Using AI for PRDs, interview synthesis, stakeholder updates. Mistakes affect you.
2. **Your team.** Shared skills, a common knowledge base, team workflows. Others depend on your setup.
3. **Your product.** Deciding what AI does for your users: scoping, evaluation and quality, trust, cost. Mistakes reach customers. This is the advanced tier and also the Tech/AI PM job Sofia is moving toward.

**What stays human** (her topic 10) runs through every tier. It's the spine of the guide, not just a final chapter.

**Language.** English first, Spanish and French later.

**Scope.** Sofia wants to **write the whole syllabus** rather than launch with only a couple of chapters. Whether to publish all at once or in stages can be decided later.

**Discovery.** Sofia has messaged the Product community at Netlight to ask about their AI pain points. That runs in parallel and shouldn't block the work. Fold the answers in when they arrive.

**Interaction.** Sofia doesn't want homework-style exercises, but she does want people to interact with the guide somehow. Current proposal, not yet confirmed: a **decision moment** in each chapter. A short, realistic scenario ("your lead wants an agent for the weekly report"), the reader picks an option, then sees how the chapter reasons about it and why the other options might be right in a different situation.

---

## 5. Draft syllabus (tier 1 only so far, to be extended)

Each chapter teaches one concept through a real PM task the reader already does.

| # | Concept | Learned through |
|---|---|---|
| 1 | What an LLM is, and where it fails | Summarising twenty user interviews, and catching the invented quote |
| 2 | Prompt vs context | Writing a PRD with and without the product's background |
| 3 | Setting up a workspace (configs, project memory) | Giving AI a permanent brief about your product |
| 4 | Skills | The stakeholder update written every Friday |
| 5 | Tools and MCP | Pulling Jira tickets and Slack threads into release notes |
| 6 | Agents | Preparing a competitor scan |
| 7 | Several agents and a human checkpoint | A small discovery pipeline from interviews to opportunities |
| 8 | Risks | Confidential data, invented facts, trusting it too much |
| 9 | What stays human | Pulling it together |

Tier 2 (team) and tier 3 (product) still need outlining. The Product × AI page (discovery, strategy, delivery, outcomes, stakeholders) is the natural skeleton for tier 3. Netlight's context engineering material (small team → shared knowledge base across teams) is good inspiration for tier 2.

An earlier, rejected structure gave every chapter three parts: "What it is / How to decide / Through a product lens", plus a "What stays human here" box. It isn't rejected as such, but it isn't confirmed either. Revisit it once the syllabus exists.

---

## 6. What was tried and rejected

- **A prototype website** in `judgement-in-the-loop/` on the branch `claude/hopeful-mayer-2ln9zo` of `sofiatraba/sofiatraba.github.io`: a homepage, chapter 00 "Neither hype nor doom", chapter 07 "Prompt, skill or agent?", flat botanical SVG illustrations, cream/terracotta/green palette. Sofia's verdict: **the language is extremely AI and the design feels extremely AI.** It's parked, not deleted, and design comes later. Don't reuse its text.
- **Names Sofia rejected:** "Human AI" (too generic), "Judgement in the Loop" (a variation on "human in the loop", not innovative enough), "The Handover" / "Handover Notes" / "What We Keep" (she doesn't like them). **The name is parked until the content exists.** If she says what put her off, note it here.
- **Merging the guide with her After the Algorithm Substack:** no. They're separate things. A link between them is fine, but there's no shared brand.
- **Putting it under "the Lab"** on her personal site: she wasn't convinced. Where it lives is still open.

---

## 7. Still open

1. The full syllabus for tiers 2 and 3, and a review of tier 1 against the vault notes.
2. Whether the per-chapter structure stays as above.
3. The interaction format (decision moments, or something else).
4. The name.
5. Where it lives: its own repo/URL, a section of sofiatraba.github.io, or something else.
6. Design: later, and it must not look like the rejected prototype.
7. What success means for Sofia, for example being invited to speak, people sharing it without being asked, or helping a move into a Tech/AI PM role.

**Possibly useful from her Substack thinking** (from the After the Algorithm essay instructions; check that she wants these reused here): the point of view that the danger is the *small handover*, where judgement slides to the machine out of convenience and nobody decides it. Some friction is the thinking. Named ideas: *load-bearing friction*, *shipped and adopted are different states*, *nobody has written the Tuesday*.

---

## 8. Voice rules for every draft

What Sofia asked for: clear and easy, the least AI-sounding possible, warm, human, almost conversational. It shouldn't be verbose, and it shouldn't be a string of short punchy sentences either. It needs a good flow.

Avoid:
- "It's not X, it's Y", "not this, but that", and any variant of that contrast move
- Lists of three by reflex, and parallel triplets ("with A you…, with B you…, with C you…")
- Lines that only exist to sound clever, and an aphorism at the end of every paragraph
- Rhetorical questions that are answered straight away
- Em-dash pile-ups
- "Here's the thing", "let's be clear", "in a world where", "it's worth noting", "the truth is", "at the end of the day", "game-changer"
- Invented anecdotes, feelings or quotes in the first person. Where Sofia's own story belongs, leave a marked slot `[SOFIA: …]` saying what goes there.

Prefer British spelling, plain words, concrete product examples, and a sentence Sofia would say out loud to a friend. If a sentence fails that test, write the plainer one.

---

## 9. About Sofia, briefly

She's a product manager at Netlight, on a client engagement co-driving a collaboration-tooling product domain. Before that she spent about three years as a software developer and about four as a project engineer in automotive. She builds with AI most days, runs her own agents and skills, teaches others, and loves the tools. She never wants to come across as anti-AI. She's aiming for a Tech/AI PM role, and this guide should help her show that. Her languages are Spanish, Galician, English, French, German and Italian. The `pm-advisor` skill, if it's available locally, has more context.
