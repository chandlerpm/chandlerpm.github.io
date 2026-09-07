---
title: "Project Sharing & Version Control Concepts"
---

:::info What this is
Onboarding material adapted from an internal training deck, written to
introduce a design team with no prior version-control background to
Vectorworks' Project Sharing Server — a checkout/commit workflow that is,
in effect, source control. This is a conceptual explainer: it translates
an unfamiliar workflow (checkout, commit, working files vs. server files)
into language a non-technical audience already understands, using a
library-checkout analogy instead of source-control jargon.

**Provenance:** Frank Shirley Architects, de-identified — the firm name
and server address shown have been replaced with placeholders.
:::

# Project Sharing & Version Control Concepts

*Adapted from an internal training deck, written for a design team with no prior version-control experience.*

Vectorworks Project Sharing Server: from one server-based project file to individual working files on each person's computer.

---

## Some New Things to Note

- **Project file** — lives on the server. Users never touch it directly. `.vwxp` extension. Don't rename it after creation, or you lose sync.
- **Working file** — lives on your computer. `.vwxw` extension. This is what you actually open and edit.
- We no longer use plain `.vwx` files.

---

## How to Open a Project for the First Time

![Icon representing creating a new project file](/img/project-sharing-workflow/new-project-file-icon.png)

1. File menu → **Open Server-based Project File**.
2. URL: `http://cad-server.example.local:22001`
3. Browse to the project → CAD/Vectorworks folder → highlight the `.vwp` file → **OK**.

![Open Server-based Project File dialog showing the project folder tree](/img/project-sharing-workflow/open-server-based-project-dialog.png)

4. A working file is created automatically. Save it to `C:\Projects` on your computer.

![Windows Explorer view of a working file saved locally](/img/project-sharing-workflow/working-file-explorer-view.png)

---

## How to Subsequently Work on a File

Same as always — you're just working in `C:\Projects` on your own computer now. No more server-based files for daily CAD.

Backups land in `C:\Projects\VW Backups`, per your Vectorworks settings.

![Vectorworks Preferences dialog showing the autosave/backup location setting](/img/project-sharing-workflow/vectorworks-preferences-autosave.png)

---

## Checkout & Release
### *aka the first big change to our workflow*

The Project Sharing Server tracks who's got what part of a file using **checkout and release**.

> Think of it like a library. Check a book out, and the library knows who has it. Return it, and it's released to the shelf for someone else.

![Illustration of the checkout/release concept as a library checkout desk](/img/project-sharing-workflow/library-checkout-illustration.png)

---

## Save and Commit
### *aka the other big change to your workflow*

- **Save** → updates your working file only.
- **Save and Commit** → merges your changes into the shared project file, along with everyone else's.

![Commit dialog with a comment field](/img/project-sharing-workflow/commit-dialog.png)

![File menu with Save and Commit highlighted](/img/project-sharing-workflow/file-menu-save-and-commit.png)

---

## Checking Out Objects, Layers, or Whatever You Need

**To check out a specific object:**

- Select it → **Modify > Check Out**, or right-click → **Check Out**.
- Blocked? An alert tells you if it's checked out to someone else, or out of date in your working file.

![Vectorworks window showing a working file with checked-out objects](/img/project-sharing-workflow/checking-out-objects-window.png)

**Other ways in:**

- Just start editing — Vectorworks prompts you to check out automatically.
- Right-click a viewport/layer/class in the Navigation tab → Checkout/Release.
- Add a comment on the Checkout dialog noting why, then **OK**.

### Release

- Easiest way: **File | Save and Commit**, with "Automatically release checked out layers and objects" checked.
- Or: **Modify | Release**, or right-click a layer → Release.

---

## Custom Checking Out and Releasing, Based on Criteria

**Tools > Custom Checkout** or **Tools > Custom Release** →

1. Set your criteria — the dialog shows how many objects match.
2. Symbols as criteria? Use the Select Symbol dialog to narrow it down.
3. Then:
   - **Custom Checkout** → click Check Out.
   - **Custom Release** → click Release, then choose Commit or Discard.

---

## Updating Your File
### *"When Others Commit"*

A new button appears at the top of your View bar:

![Icons showing whether the working file is out of date or up to date](/img/project-sharing-workflow/working-file-status-icons.png)

> **Tip:** Add a Refresh menu item to File through the Workspace editor.

**Rules:**

- One working file per project, per person. Never duplicate — Vectorworks will crash and the project file can corrupt.
- Save updates *your computer only* — not the server.
- Release what you're working on when done.
- Save and Commit: when sharing edits, closing your file, and/or end of day.

---

## Things to Remember

![Things to Remember note card](/img/project-sharing-workflow/things-to-remember.png)

- Server file (`.vwxp`) — never edited directly, never renamed.
- Working file (`.vwxw`) — what you actually open and edit, every time.
- **Save** = local only. **Save and Commit** = shared with the team.
- Check out before you edit; release (or auto-release on commit) when you're done.
- One working file per person, per project — never duplicate it.

---

*Adapted from an internal training deck; server addresses and file paths have been replaced with placeholders. See the companion [Vectorworks Technical Guide](../reference-procedural/vectorworks-technical-guide.md). Source, git history, and de-identification notes: [vectorworks-cad-docs on GitHub](https://github.com/chandlerpm/vectorworks-cad-docs).*
