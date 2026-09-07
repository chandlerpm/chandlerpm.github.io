---
title: "Feature Specification: Project Creation"
description: "Full development specification for the Project Creation flow in Sylva, a personal project-management SaaS application."
sidebar_label: Project Creation
---

:::info About this document
This is a feature specification I wrote for **Sylva**, a project-management web app I'm building as a personal project (in the vein of Teamwork.com or Asana). It covers *Project Creation* — the flow a user goes through to start a new project, from entry points and form fields through validation, permissions, the REST API, and the underlying data model.

I'm including the **Implementation Notes** at the end deliberately. They document the real, dated differences between what this spec called for and what actually shipped — the kind of reconciliation that keeps a spec trustworthy as a reference *after* the code exists, instead of a wish list nobody updates.

**Provenance:** Self-directed personal project — no client, no company.
:::

## Overview

Project creation is the primary entry point for organizing work in the workspace. A user with project-creation permissions starts a new project either from scratch or from a template, defines its identity and dates, assigns an owner and initial team, and sets its visibility. The flow is a single multi-section modal (or full page, for direct links) that walks the user through every required and optional input before the project is committed to the workspace.

Every workspace also has one project, "General Office," created automatically during workspace setup and tied to the workspace's auto-created "own company" client. It behaves like any other project — a home for internal or admin work not tied to a client engagement — and can be renamed, archived, or deleted like any other project.

## Entry points

| Location | Control | Notes |
|---|---|---|
| Global header | "+ New" → "Project" | Available on every page |
| Sidebar | "+ New Project" at the bottom of the project list | Visible to users with project-creation permission |
| All-projects dashboard | "New Project" button (top right) | Also shown as the empty-state CTA when no projects exist |
| Template browser | "Use this template" | Pre-selects the template and opens the creation flow |

Users without project-creation permission don't see any of these controls.

## Choosing a starting point

A modal opens with two large, clickable cards:

- **Start from scratch** — a blank project with no pre-built task structure.
- **Use a template** — apply a built-in or workspace-saved template.

The cards are keyboard-accessible (Tab between them, Enter or Space to select), and selecting one advances the modal to the project details form.

**Start from scratch** proceeds directly to the details form below, with every field empty or at its default. **Use a template** replaces the card view with a template browser; once the user previews a template and confirms it, the details form opens with the template name shown at the top ("Using template: [Template Name]") and options to change or remove it before submitting.

Opening the creation modal doesn't change the page URL, to avoid cluttering browser history with incomplete flows — unless the user navigates directly to `/projects/new`, in which case the modal opens as a full page and the URL persists for the duration of the flow.

## Project details

The form is a single scrollable section, all fields visible at once. Required fields carry a red asterisk next to the label.

**Project name** — required text input, 100-character max, with a character counter that appears at 20 characters remaining. Names aren't enforced as unique; an identical existing name triggers a soft warning rather than a block. Leading and trailing whitespace is trimmed on save. The name surfaces throughout the app: sidebar, dashboard cards, browser tab title, task breadcrumbs, notification subjects, and report headings.

**Description** — optional rich text, capped at 2,000 characters of plain-text equivalent, with a live counter. Supports bold, italic, underline, strikethrough, H2/H3 headings, ordered and unordered lists, links, inline code, and horizontal rules; deliberately excludes images, tables, and nested lists to keep descriptions lightweight. It appears on the project dashboard and settings page, and exports as plain text in reports; it isn't part of full-text search in this release.

**Client** — required single-select dropdown. Every project must belong to exactly one client, listed alphabetically among active clients, with an "+ Add new client" option pinned to the top for inline creation. The selected client becomes a filter/grouping dimension throughout reporting and portfolio views.

**Color** — optional swatch grid of 16 curated colors (chosen for distinctiveness at small sizes and WCAG AA contrast against white text), plus a custom hex input accepting 3- or 6-digit formats. Defaults to the next unused color in the palette. It shows up as the sidebar dot, the project card's left border accent, Gantt task-bar fill when grouped by project, chart series color, and the notification email accent strip.

**Icon** — optional icon picker (120 SVG glyphs across nine categories, with search) plus a custom SVG/PNG upload path (200 KB / 512×512 px max, sanitized server-side). Defaults to a generic folder icon. Appears in the sidebar, dashboard card, project header, and — if a custom icon is set — as the browser favicon while inside that project.

## Start and end dates

Both **Start Date** and **End Date** are optional date pickers, stored in UTC and displayed in the user's timezone, respecting their configured first-day-of-week and date-format preferences. If End Date is before Start Date, an inline error blocks submission: "End date must be on or after the start date." Past dates are allowed for both fields without warning.

With no dates set, the Gantt view falls back to the earliest task start date and latest task due date, and finally to the current week if no tasks have dates either.

Both dates remain editable after creation, from Project Settings → General. Pulling the end date earlier than a task's due date warns the user that affected tasks will show as overdue, but doesn't shift task dates automatically — that's a separate bulk-update action. Date changes land in the project's activity feed rather than the permission audit log.

## Owner and team members

**Project owner** — a required single-user selector, defaulting to the creating user. The owner gets Project Admin-level access regardless of their workspace role, is the default recipient of project-level alerts (overdue milestones, escalated timesheets, status changes), and is named as the inviter in membership emails. Only Administrators and the current owner can reassign ownership, and a project must always have exactly one — removing the owner requires reassigning it in the same action.

**Team members** — an optional multi-select that searches people and departments together, grouped into two result sections. Adding a department prompts a confirmation ("Add all 12 active members of Engineering to this project?") before bulk-adding everyone in it. Selected members appear as removable chips, and an "Advanced" toggle exposes a per-member role override (No Override, Project Admin, Read Only, Billing Only) for cases where the workspace default isn't right. Every added member gets an immediate notification with the project name, owner, dates, and a direct link.

The distinction that matters operationally: the owner always has Project Admin access, receives every overdue notification automatically, can manage membership, and can delete the project (permissions allowing); a team member's access follows their workspace role unless explicitly overridden, and they're notified about overdue items only for things they're already watching.

## Privacy

Privacy is a required radio selection between three options, each shown as a card with an icon and one-sentence description:

- **Public** — visible to and joinable by every workspace member; appears in the dashboard, sidebar, and search for everyone.
- **Team-only** *(default)* — visible only to explicitly added members; invisible to everyone else, including in search.
- **Private** — visible only to the owner and workspace Administrators; the member selector is disabled entirely, since no one else can be added.

Changing privacy after creation carries different weight depending on direction. Loosening from Team-only to Public happens silently and immediately. Tightening from Public to Team-only shows a confirmation naming how many passive viewers will lose access. Moving to Private — from either other setting — requires an explicit confirmation checkbox, since it's the one change members can't undo for themselves by re-adding a project.

Enforcement is entirely server-side: every request that touches project data resolves the requester's access before returning anything, and an unauthorized request gets a 404 rather than a 403, so a project's existence isn't confirmed to someone who can't see it. The client never receives data it isn't authorized to display, and guessing a project URL behaves identically to a nonexistent one.

## API specification

**Create project**

```
POST /api/v1/projects
Content-Type: application/json
Authorization: Sanctum session cookie
```

```json
{
  "name": "Q3 Website Redesign",
  "description": "Full redesign of the marketing website for Q3 launch.",
  "color": "#1A56DB",
  "iconId": "icon_brush",
  "startDate": "2026-07-01",
  "endDate": "2026-09-30",
  "ownerId": "usr_abc123",
  "memberIds": ["usr_def456", "usr_ghi789"],
  "memberOverrides": [
    { "userId": "usr_def456", "projectOverride": "project_admin" }
  ],
  "privacy": "team_only",
  "templateId": "tmpl_xyz001"
}
```

**201 Created**

```json
{
  "status": "success",
  "data": {
    "projectId": "proj_001",
    "name": "Q3 Website Redesign",
    "color": "#1A56DB",
    "iconUrl": "https://cdn.sylva/icons/icon_brush.svg",
    "startDate": "2026-07-01",
    "endDate": "2026-09-30",
    "status": "active",
    "privacy": "team_only",
    "ownerId": "usr_abc123",
    "memberCount": 3,
    "templateApplied": "tmpl_xyz001",
    "createdAt": "2026-06-02T10:00:00Z",
    "projectUrl": "/projects/proj_001"
  }
}
```

| HTTP status | Error code | Message |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Field-level errors array |
| 400 | `INVALID_DATE_RANGE` | "End date must be on or after the start date." |
| 403 | `INSUFFICIENT_PERMISSIONS` | "You do not have permission to create projects." |
| 404 | `OWNER_NOT_FOUND` | "The specified project owner was not found in this workspace." |
| 404 | `TEMPLATE_NOT_FOUND` | "The specified template was not found." |
| 422 | `MEMBER_NOT_IN_WORKSPACE` | "One or more specified members are not in this workspace." |

When a `templateId` is supplied, the project record is created and the 201 returned immediately; the template's task lists, tasks, and milestones are applied asynchronously in a background job. The project shows an "Applying template…" state in the header until the job completes (success notification) or fails (the project is kept, without template content, and the user is told why).

## Data model

**`projects`**

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `workspaceId` | UUID | FK → workspaces.id |
| `name` | VARCHAR(100) | |
| `description` | TEXT | Sanitized HTML |
| `color` | VARCHAR(7) | Hex code |
| `iconId` | VARCHAR(50) | Built-in icon reference; null if custom |
| `customIconUrl` | VARCHAR(500) | Null if using a built-in icon |
| `startDate` / `endDate` | DATE | Both nullable |
| `ownerId` | UUID | FK → users.id; non-nullable |
| `privacy` | ENUM | `public`, `team_only`, `private` |
| `status` | ENUM | `active`, `on_hold`, `completed`, `archived` |
| `templateId` | UUID | Nullable |
| `templateAppliedAt` | TIMESTAMP | Nullable, UTC |
| `createdBy`, `createdAt`, `updatedAt`, `archivedAt`, `completedAt` | | Standard audit fields |

**`project_members`** (join table)

| Field | Type | Notes |
|---|---|---|
| `projectId` | UUID | FK → projects.id |
| `userId` | UUID | FK → users.id |
| `projectOverride` | ENUM | `no_override`, `project_admin`, `project_member`, `read_only`, `billing_only` |
| `addedBy`, `addedAt` | | |
| `isOwner` | BOOLEAN | True only for the owner's row |

Composite primary key on (`projectId`, `userId`). A Public project has no member rows for passive viewers — only explicitly added members get one.

## After creation

On a successful 201, the modal closes and the user lands on the project's default view (List, unless the workspace has configured a different default), with a "Project created" success toast linking straight to it. If dismissed with unsaved data, the modal asks for confirmation before discarding — there's no autosaved draft.

## Security

- The endpoint checks project-creation permission before processing any other field.
- `ownerId` is validated server-side: only Administrators can name someone other than themselves as owner; anyone else creating a project is set as owner regardless of what's passed.
- Name and description are HTML-encoded on output and passed through a server-side allowlist sanitizer to prevent stored XSS.
- Custom icon SVGs go through the same sanitization as other user-uploaded SVGs in the app.

## Accessibility

- The Scratch/Template selector is a proper radio group (`role="radio"`) with keyboard navigation.
- The modal uses `role="dialog"`, `aria-modal="true"`, and a labeled heading; focus is trapped inside it, lands on the first interactive element on open, and returns to the triggering button on close.
- Every field has an explicit `<label>` association; errors are linked via `aria-describedby` with `aria-invalid="true"` on the affected field.
- The color grid and icon picker follow the same accessible patterns used elsewhere in the app (keyboard navigation, per-swatch `aria-label`, focus-trapped popovers).
- Date pickers accept typed keyboard input as an alternative to the calendar widget.

## Analytics

| Event | Trigger | Properties |
|---|---|---|
| `project_creation_started` | Modal opened | `entryPoint` |
| `project_creation_mode_selected` | Scratch or template chosen | `mode` |
| `template_selected` | Template chosen in browser | `templateId`, `templateName`, `isBuiltIn` |
| `project_creation_submitted` | Create clicked | `hasDescription`, `hasColor`, `hasIcon`, `hasStartDate`, `hasEndDate`, `memberCount`, `privacy`, `usingTemplate` |
| `project_creation_succeeded` | 201 received | `projectId`, `privacy`, `memberCount` |
| `project_creation_failed` | Non-201 received | `errorCode` |
| `project_creation_discarded` | Modal dismissed with unsaved data | `fieldsCompleted` |

---

## Implementation notes

Written after the feature shipped, reconciling this spec against what was actually built:

- **Template path deferred.** The "Use a template" option is visible but disabled in this release — it depends on the template browser, which shipped in a later phase. `templateId` and `templateAppliedAt` weren't added to the `projects` table until that phase landed.
- **Client field resolved late.** The client picker described above (active clients, alphabetical, inline "+ Add new client") was implemented once the client-record model existed. `client_id` is foreign-key constrained and required at the application layer; the database column itself stayed nullable, since changing its type would have required a schema-migration library that wasn't already in the project.
- **Icon library scoped down.** Rather than the full 120-icon library, the shipped version uses a small curated set of about eight icons — functionally identical (still just an `iconId` string reference), just less content investment for a v1.
- **Member search simplified.** The combined people-and-departments type-ahead was built as a plain select populated from the existing user-directory endpoint, rather than a dedicated search-as-you-type widget. Department bulk-add became its own "Add by department" button with a separate picker, instead of appearing inline in the same dropdown as individual results.
- **IDs are integers, not UUIDs.** Consistent with the rest of the schema, `projects` and `project_members` use auto-incrementing integer primary keys.
- **Post-creation redirect is a placeholder.** The user lands on a minimal project page showing the fields returned by the create response — not yet the full List view described elsewhere, which was built in a later phase. It exists to give the redirect somewhere real to land and to make privacy enforcement verifiable end to end.

None of these change what the user experiences at creation time; they're the kind of judgment calls that get made under real constraints — an existing schema, a phased build order, a library that wasn't worth adding for one migration — and that a spec should catch up to, so it stays a reliable reference instead of a historical artifact.
