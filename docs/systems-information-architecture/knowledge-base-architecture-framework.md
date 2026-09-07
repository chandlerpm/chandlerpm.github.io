---
title: "Knowledge Base Architecture Framework"
---

:::info What this is
A four-part knowledge-base architecture framework — structural design
principles, taxonomy and tagging standards, a content lifecycle policy,
and a governance policy. Written to demonstrate systems-level
documentation thinking: how a knowledge base should be organized, named,
maintained, and governed, independent of any single product.

**Provenance:** Self-directed, no client.
:::

## KB Architecture Overview

**Last updated:** 2025-01 · **Owner:** Documentation Systems Lead

---

### Purpose

This document defines the structural design of the organization's knowledge base — how content is organized, what sections exist, and the principles guiding those decisions.

---

### Design Principles

#### 1. User-Centered Structure
Content is organized around user needs and tasks, not internal org charts or product architecture. A user looking for "how to reset my password" should not need to know which team owns authentication.

#### 2. Single Source of Truth
Each piece of information lives in exactly one place. Cross-linking is encouraged; duplication is not. Duplicate content creates maintenance burden and erodes trust.

#### 3. Progressive Disclosure
Content is layered — overviews first, detail on demand. Every section has an entry point that serves a first-time reader, with links to deeper content for those who need it.

#### 4. Findability Over Completeness
A KB that contains everything but is impossible to navigate is useless. Structure and navigation are treated as first-class concerns, not afterthoughts.

---

### Top-Level Structure

The knowledge base is organized into five top-level sections:

```
Knowledge Base
├── Getting Started
│   ├── Product Overview
│   ├── Account Setup
│   └── Quick Start Guides
├── How-To Guides
│   ├── [Feature Area 1]
│   ├── [Feature Area 2]
│   └── [Feature Area N]
├── Reference
│   ├── API Documentation
│   ├── Glossary
│   └── Configuration Reference
├── Troubleshooting
│   ├── Common Issues
│   ├── Error Messages
│   └── Known Issues & Workarounds
└── Release Notes
    ├── Current Release
    └── Archive
```

---

### Section Definitions

#### Getting Started
First-contact content for new users and evaluators. Prioritizes speed to value over comprehensiveness. Articles here should be short, visual where possible, and task-oriented.

**Goal:** Get a new user to their first successful outcome in under 15 minutes.

#### How-To Guides
Task-based documentation organized by feature area. Each article answers the question "How do I [specific task]?" Articles should be self-contained, with links to Reference content where deeper context is needed.

**Goal:** Help an existing user accomplish a specific task.

#### Reference
Comprehensive, precise, technical documentation. Users come here to look something up, not to learn. Content should be complete, accurate, and consistently formatted.

**Goal:** Answer "What exactly does [this thing] do/mean/accept?"

#### Troubleshooting
Symptom-first documentation. Organized around what the user sees (error messages, unexpected behavior) rather than what caused it. Each article should lead to a resolution or a clear escalation path.

**Goal:** Help a user resolve an issue as quickly as possible.

#### Release Notes
Chronological record of product changes. See the [Content Lifecycle](#content-lifecycle) document for the release notes publication process.

---

### Navigation Design

- **Search** is the primary navigation path for most users. All article titles and metadata must be written with search in mind.
- **Breadcrumbs** appear on every article, showing the full path from the top-level section.
- **Related articles** appear at the bottom of every article, surfacing 3–5 contextually relevant links.
- **Section landing pages** provide a curated index of the most commonly accessed articles in each section, rather than an exhaustive list.

---

### Related Documents

- [Taxonomy & Tagging Standards](#taxonomy-tagging-standards)
- [Content Lifecycle](#content-lifecycle)
- [Governance Policy](#governance-policy)

---

## Taxonomy & Tagging Standards

**Last updated:** 2025-01 · **Owner:** Documentation Systems Lead

---

### Purpose

This document defines the category hierarchy, tagging system, and naming conventions for the knowledge base. Consistent taxonomy is what makes content findable at scale.

---

### Category Hierarchy

Categories follow a two-level hierarchy: **Section → Topic.**

A third level (subtopic) may be used sparingly for high-volume sections, but deep nesting is discouraged — it creates navigation friction and indicates a content strategy problem, not a taxonomy solution.

#### Example Hierarchy

```
How-To Guides (Section)
└── User Management (Topic)
    ├── Inviting team members
    ├── Changing user roles
    ├── Removing users
    └── Managing SSO
```

#### Rules

- Every article belongs to exactly one Section/Topic combination
- Topics should contain a minimum of 3 articles; if fewer exist, consider merging the topic or expanding coverage
- Topic names are noun phrases (e.g., "User Management"), not verbs or questions
- Section names never change without a documented migration plan

---

### Tagging Standards

Tags supplement the category hierarchy by enabling cross-cutting discovery. They are not a substitute for good structure.

#### Tag Types

| Tag Type | Purpose | Example |
|---|---|---|
| **Feature** | Links content to a specific product feature | `feature:billing`, `feature:api` |
| **Audience** | Identifies the intended reader | `audience:admin`, `audience:developer` |
| **Content type** | Describes the format of the article | `type:tutorial`, `type:reference` |
| **Platform** | Indicates platform-specific content | `platform:web`, `platform:mobile` |

#### Tagging Rules

- Every article must have at least one **Feature** tag and one **Content type** tag
- **Audience** tags are required for articles written for a specific role (admin, developer, end user)
- Maximum 6 tags per article — if more are needed, the article may be trying to cover too much
- Tags use lowercase with colons as namespace separators (`feature:billing`, not `Feature: Billing` or `billing`)
- New tags must be approved by the Documentation Systems Lead before use — ad hoc tags create taxonomy drift

#### Approved Tag List

Maintained in the KB admin panel under **Settings → Tags**. Do not create tags not on the approved list.

---

### Naming Conventions

#### Article Titles

- Use sentence case: "How to invite team members" not "How To Invite Team Members"
- Start How-To articles with a verb: "Configure SSO," "Add a billing contact," "Reset your password"
- Start Reference articles with the subject: "Billing settings reference," "API rate limits"
- Start Troubleshooting articles with the symptom: "Error: 'User not found'," "Dashboard not loading"
- Maximum 60 characters for search display optimization

#### URLs / Slugs

- Lowercase, hyphen-separated, no special characters
- Match the article title where possible: "how-to-invite-team-members"
- Never change a published URL without setting up a redirect

#### File Names (for docs-as-code workflows)

- Format: `[section]-[topic]-[title].md`
- Example: `how-to-user-management-invite-team-members.md`
- Use hyphens, not underscores or spaces

---

### Glossary Standards

The Glossary lives in the Reference section and defines all product-specific terminology used across the KB.

- Every term used in a specialized way must have a Glossary entry
- First use of a Glossary term in any article should link to its Glossary entry
- Glossary entries follow the format: **Term** — definition in plain language, 1–3 sentences

---

### Related Documents

- [KB Architecture Overview](#kb-architecture-overview)
- [Content Lifecycle](#content-lifecycle)
- [Governance Policy](#governance-policy)

---

---

## Content Lifecycle

**Last updated:** 2025-01 · **Owner:** Documentation Systems Lead

---

### Purpose

This document defines how knowledge base content is created, reviewed, maintained, and retired. A content lifecycle policy ensures the KB stays accurate, trustworthy, and free of outdated information.

---

### Lifecycle Stages

```
Proposed → In Progress → In Review → Published → Needs Review → Deprecated
```

| Stage | Description |
|---|---|
| **Proposed** | Content gap identified; article stub created with owner assigned |
| **In Progress** | Author is actively drafting |
| **In Review** | Draft complete; undergoing SME and editorial review |
| **Published** | Live and visible to users |
| **Needs Review** | Published article has reached its review date or been flagged |
| **Deprecated** | No longer accurate; removed from navigation, redirected or deleted |

---

### Creating New Content

#### Step 1 — Identify the Gap
Content needs are identified through:
- Support ticket analysis (recurring questions with no KB answer)
- Product release notes (new features requiring documentation)
- User feedback on existing articles
- Team requests

#### Step 2 — Create a Stub
Before writing, create a stub article with:
- Title (following naming conventions)
- Assigned owner
- Target publish date
- Section/topic classification
- Tags

#### Step 3 — Draft
Author writes the article following the [style guide](#style-standards) and [article template](#article-template).

#### Step 4 — Review
All new articles go through two review stages:

| Review Type | Reviewer | Focus |
|---|---|---|
| **SME Review** | Subject matter expert | Technical accuracy |
| **Editorial Review** | Documentation Systems Lead | Style, structure, taxonomy |

#### Step 5 — Publish
Once both reviews are approved, the author publishes the article and updates its status to **Published**.

---

### Review Cadence

All published articles have a review date. Default review cadences:

| Content Type | Review Cadence |
|---|---|
| Getting Started / Onboarding | Every 6 months |
| How-To Guides | Every 6 months |
| Reference | Every 3 months or with each major release |
| Troubleshooting | Every 6 months |
| Release Notes | No review required (historical record) |

When an article reaches its review date, it is automatically flagged as **Needs Review** in the KB admin panel and assigned to its owner.

---

### Maintaining Existing Content

#### Minor Updates
Factual corrections, link fixes, and minor wording changes may be made directly by the article owner without a full review cycle. Changes should be noted in the article's changelog.

#### Major Updates
Structural changes, procedure changes, or updates affecting accuracy require an SME review before republishing.

#### Product Release Updates
The Documentation Systems Lead maintains a release notes checklist tied to each product release. All articles affected by a release are identified and updated before or on the release date.

---

### Deprecation

An article should be deprecated when:
- The feature or process it describes no longer exists
- It has been superseded by a more current article
- It cannot be brought up to date (e.g., the SME has left and knowledge is unavailable)

#### Deprecation Process

1. Owner flags article as **Deprecated**
2. Set up a redirect to the most relevant current article (or to the section landing page if no direct replacement exists)
3. Remove the article from all navigation and section indexes
4. Retain the article in archive for 90 days before permanent deletion

> **Never delete a published article without first setting up a redirect.** Broken links erode user trust and affect search indexing.

---

### Article Template

```markdown
## [Article Title]

**Last updated:** YYYY-MM · **Owner:** [Name or Role] · **Reading time:** ~X minutes

---

### Overview
[1–2 sentence summary of what this article covers and who it's for]

---

### [Main Section]

[Content]

---

### Related Articles
- [Article title](./link)
- [Article title](./link)
```

---

### Style Standards

- Write in second person ("you") for instructional content
- Use active voice
- Keep sentences under 25 words where possible
- Use numbered lists for sequential steps, bullet lists for non-sequential items
- Include a screenshot or diagram for any UI-based procedure with more than 3 steps
- Every article must have a "Last updated" date visible to users

---

### Related Documents

- [KB Architecture Overview](#kb-architecture-overview)
- [Taxonomy & Tagging Standards](#taxonomy-tagging-standards)
- [Governance Policy](#governance-policy)

---

## Governance Policy

**Last updated:** 2025-01 · **Owner:** Documentation Systems Lead · **Version:** 1.0

---

### Purpose

This policy defines the ownership model, roles, quality standards, and editorial guidelines that govern the knowledge base. Good governance makes a KB trustworthy — and a trustworthy KB gets used.

---

### Governance Principles

1. **Every article has one owner.** Shared ownership means no ownership. If multiple teams contribute to an article, one team is designated the owner.
2. **The Documentation Systems Lead is the final decision-maker** on structure, taxonomy, and editorial standards. Content accuracy decisions belong to SMEs.
3. **Process should be as light as possible** while still ensuring quality. Bureaucracy that slows contribution kills the KB.
4. **Users are the ultimate judges.** Feedback mechanisms and usage data inform governance decisions more than internal opinion.

---

### Roles & Responsibilities

#### Documentation Systems Lead
- Owns the overall architecture, taxonomy, and governance framework
- Conducts editorial review on all new articles
- Manages the approved tag list and category hierarchy
- Monitors KB health metrics and reports quarterly
- Resolves disputes about structure, taxonomy, or standards

#### Content Owners
- One assigned owner per article (individual, not team)
- Responsible for accuracy, timeliness, and review cadence compliance
- Initiates SME review when content changes
- Responds to user feedback on their articles within 5 business days

#### Subject Matter Experts (SMEs)
- Provide technical accuracy review on articles in their domain
- Available for consultation during content creation
- Notified of articles in their domain that are flagged for review

#### Contributors
- Anyone may propose new content or flag inaccuracies
- Contributors without owner status submit changes via pull request (docs-as-code) or via the feedback form
- Contributions go through normal review before publishing

---

### Quality Standards

All published articles must meet the following standards before going live:

#### Accuracy
- [ ] All procedures have been tested and verified by the SME
- [ ] Screenshots and examples reflect the current product state
- [ ] No references to deprecated features without clear notation

#### Completeness
- [ ] Article covers its stated scope fully
- [ ] Related articles are linked
- [ ] Prerequisites are stated where applicable

#### Clarity
- [ ] Written in plain language appropriate for the target audience
- [ ] No unexplained jargon or acronyms (or all terms are linked to Glossary)
- [ ] Steps are numbered and actionable

#### Metadata
- [ ] Owner assigned
- [ ] Review date set
- [ ] Section/topic classification correct
- [ ] Tags applied per [Taxonomy & Tagging Standards](#taxonomy-tagging-standards)

---

### Editorial Guidelines

#### Voice & Tone
- **Second person** ("you") for instructional content; third person for reference content
- **Active voice** throughout
- **Direct and plain** — write for clarity, not to impress
- **Neutral and professional** — not casual, not robotic

#### Formatting
- Use headers (H2, H3) to break up content — never skip levels
- Use numbered lists for sequential steps
- Use bullet lists for non-sequential items (maximum 7 bullets before considering a table or restructure)
- Use tables for comparative or reference information
- Bold key terms and UI elements (e.g., click **Save**)
- Use code formatting for all code snippets, commands, and system values

#### What Not to Do
- Don't write marketing copy in the KB — users are here to solve problems, not be sold to
- Don't bury the lead — state what the article does in the first two sentences
- Don't use "simply," "just," "easy," or "obviously" — these words are condescending when a user is stuck
- Don't publish incomplete articles — a stub with a "coming soon" message is worse than no article

---

### Feedback & Continuous Improvement

Every article includes a feedback mechanism ("Was this article helpful?"). Feedback is reviewed monthly by the Documentation Systems Lead.

#### Feedback Response Protocol

| Feedback Type | Response Time | Action |
|---|---|---|
| Article flagged as inaccurate | 2 business days | Owner investigates and updates or escalates to SME |
| Article flagged as incomplete | 5 business days | Owner reviews and expands or creates linked article |
| Article rated unhelpful (no comment) | Monthly review | Owner reviews usage data and considers rewrite |
| Suggestion submitted | 10 business days | Owner acknowledges and determines if action is needed |

---

### KB Health Metrics

The Documentation Systems Lead reports quarterly on:

- Total articles by status (Published, Needs Review, Deprecated)
- % of articles with overdue reviews
- Average feedback rating by section
- Top 10 articles by page views
- Top 10 search queries with no results (content gap indicator)
- Articles flagged for inaccuracy in the quarter

---

### Policy Review

This governance policy is reviewed annually by the Documentation Systems Lead and updated as the KB evolves.

---

### Related Documents

- [KB Architecture Overview](#kb-architecture-overview)
- [Taxonomy & Tagging Standards](#taxonomy-tagging-standards)
- [Content Lifecycle](#content-lifecycle)

---

*Source and full repository: [knowledge-base-architecture on GitHub](https://github.com/chandlerpm/knowledge-base-architecture).*
