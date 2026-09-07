---
title: "SOP Library: Shipyard CI/CD"
---

:::info What this is
Standard operating procedures written for "Shipyard," a fictional CI/CD and
deployment automation platform — a template, an incident-response
procedure, a release-process procedure, and an offboarding procedure,
demonstrating a consistent SOP structure (metadata, purpose, scope,
prerequisites, numbered procedure, verification, escalation, changelog)
applied across genuinely different situations.

**Provenance:** Self-directed, no client — written to demonstrate SOP
authoring for a docs-as-code, engineering-team audience.
:::

## SOP Template

| Field | Value |
|---|---|
| **SOP ID** | SOP-000 |
| **Version** | 1.0 |
| **Owner** | [Name, Role] |
| **Last Reviewed** | YYYY-MM |
| **Next Review** | YYYY-MM |
| **Status** | Draft / Active / Deprecated |

---

### Purpose

*What this SOP is for and why it exists. 2–3 sentences.*

---

### Scope

*Who this SOP applies to. What systems, teams, or situations it covers. What it explicitly does NOT cover.*

---

### Prerequisites

*What must be true or in place before this procedure begins. Include access requirements, tools, or prior steps.*

- [ ] Prerequisite 1
- [ ] Prerequisite 2

---

### Procedure

#### Step 1 — [Step Name]

*Description of what to do and why.*

**Action:** [Specific action]
**Expected outcome:** [What should happen]

---

#### Step 2 — [Step Name]

*Description of what to do and why.*

**Action:** [Specific action]
**Expected outcome:** [What should happen]

---

### Verification

*How to confirm the procedure was completed successfully.*

---

### Escalation

*Who to contact if something goes wrong or falls outside the scope of this SOP.*

| Situation | Contact |
|---|---|
| [Situation 1] | [Name / Role / Channel] |
| [Situation 2] | [Name / Role / Channel] |

---

### Related Documents

- [Related SOP or doc title]

---

### Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | YYYY-MM-DD | [Name] | Initial version |

---

## SOP: P1/P2 Incident Response

| Field | Value |
|---|---|
| **SOP ID** | SOP-OPS-001 |
| **Version** | 2.1 |
| **Owner** | Director of Engineering |
| **Last Reviewed** | 2025-01 |
| **Next Review** | 2025-07 |
| **Status** | Active |

---

### Purpose

This SOP defines the standard response procedure for Priority 1 (P1) and Priority 2 (P2) incidents affecting Shipyard's production environment. It ensures consistent, coordinated, and documented responses that minimize customer impact and support post-incident review.

---

### Scope

**Applies to:** All engineering, DevOps, and on-call personnel.
**Covers:** Production incidents classified as P1 (critical, service down or severely degraded) or P2 (major feature impaired, significant customer impact).
**Does not cover:** P3/P4 incidents, staging environment issues, or scheduled maintenance windows.

---

### Incident Severity Definitions

| Severity | Definition | Response Time |
|---|---|---|
| **P1** | Full outage or data loss affecting all or most customers | 15 minutes |
| **P2** | Major feature unavailable or severely degraded for a significant customer subset | 30 minutes |
| **P3** | Minor feature impaired, workaround available | Next business day |
| **P4** | Cosmetic issue, no functional impact | Scheduled sprint |

---

### Prerequisites

- [ ] Access to the `#incidents` Slack channel
- [ ] Access to the Shipyard on-call rotation schedule (PagerDuty)
- [ ] Access to production monitoring dashboards (Datadog)
- [ ] Incident Commander role assigned (see Step 2)

---

### Procedure

#### Step 1 — Detect & Declare

An incident may be detected via automated alert, customer report, or internal discovery.

**Action:** Post in `#incidents` Slack channel: `🚨 INCIDENT DECLARED — [P1/P2] — [brief description] — [time]`
**Expected outcome:** Team is notified. Incident thread begins.

---

#### Step 2 — Assign Incident Commander (IC)

The first responder on call assumes the IC role unless they hand off to a more senior engineer.

**Action:** IC posts in the incident thread: `IC: [Name]`
**Expected outcome:** Single point of coordination is established.

---

#### Step 3 — Assess & Communicate

**Action:** IC assesses scope, posts an initial customer-facing status update to the Shipyard Status Page within 15 minutes of declaration.
**Expected outcome:** Customers are informed. Internal stakeholders (CTO, Support lead) are notified via direct message.

Status update template:
```
We are aware of an issue affecting [feature/service]. Our team is actively investigating.
We will provide an update by [time]. We apologize for the inconvenience.
```

---

#### Step 4 — Investigate & Mitigate

**Action:** Engineering team investigates root cause. IC coordinates parallel workstreams as needed.
**Expected outcome:** A mitigation (not necessarily a full fix) is identified and applied to restore service.

Update the incident thread every 30 minutes with status, even if there is no new information.

---

#### Step 5 — Resolve & Communicate

**Action:** Once service is restored, IC posts resolution in `#incidents` and updates the Status Page.
**Expected outcome:** All affected parties are informed. Incident is marked resolved.

Resolution update template:
```
This incident has been resolved as of [time]. [Brief description of fix].
We are conducting a post-incident review and will share findings with affected customers.
```

---

#### Step 6 — Post-Incident Review (PIR)

**Action:** IC schedules a PIR within 48 hours of resolution. PIR document is created in Notion using the PIR template.
**Expected outcome:** Root cause, timeline, and action items are documented. PIR is shared with Engineering and Leadership.

---

### Verification

- Service metrics return to normal thresholds in Datadog
- Status Page shows all systems operational
- PIR document is complete and linked in the incident Slack thread

---

### Escalation

| Situation | Contact |
|---|---|
| IC unavailable | Secondary on-call (PagerDuty rotation) |
| Data loss or breach suspected | CTO + Legal immediately |
| Incident exceeds 2 hours unresolved | VP Engineering |

---

### Related Documents

- [SOP: Release Process](#sop-software-release-process)
- Post-Incident Review Template (Notion — internal link)
- Shipyard Status Page Admin Guide (internal)

---

### Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 2023-03-10 | J. Chandler | Initial version |
| 2.0 | 2024-06-01 | J. Chandler | Added P2 procedures, updated escalation contacts |
| 2.1 | 2025-01-15 | J. Chandler | Updated status update templates, review cadence |

---

## SOP: Software Release Process

| Field | Value |
|---|---|
| **SOP ID** | SOP-ENG-002 |
| **Version** | 1.3 |
| **Owner** | Release Manager |
| **Last Reviewed** | 2025-01 |
| **Next Review** | 2025-07 |
| **Status** | Active |

---

### Purpose

This SOP defines the standard process for releasing new versions of Shipyard to production. It ensures releases are predictable, well-communicated, and reversible in the event of a critical issue.

---

### Scope

**Applies to:** Engineering, QA, and Release Management.
**Covers:** All scheduled production releases (major, minor, and patch).
**Does not cover:** Hotfixes (see SOP-ENG-003), internal tooling releases, or staging deployments.

---

### Release Types

| Type | Version Format | Cadence |
|---|---|---|
| **Major** | X.0.0 | Quarterly |
| **Minor** | X.Y.0 | Bi-weekly |
| **Patch** | X.Y.Z | As needed |

---

### Prerequisites

- [ ] All work for the release is merged to the `release` branch
- [ ] QA sign-off received in the release tracking ticket
- [ ] Release notes drafted and reviewed (see Step 2)
- [ ] Rollback plan documented in the release ticket
- [ ] Release scheduled in the team calendar and communicated to Support

---

### Procedure

#### Step 1 — Create Release Branch

**Action:** Create a release branch from `main` using the format `release/vX.Y.Z`.
**Expected outcome:** Release branch exists and is frozen for new feature work. Only bug fixes may be merged at this stage.

---

#### Step 2 — Draft Release Notes

**Action:** Release Manager drafts release notes using the standard template (see `docs/release-notes-template.md`). Engineering leads review for accuracy.

Release notes must include:
- New features (with brief user-facing description)
- Bug fixes (with ticket references)
- Deprecations or breaking changes (clearly flagged)
- Known issues

**Expected outcome:** Release notes reviewed and approved by Engineering lead and Product Manager.

---

#### Step 3 — QA Sign-Off

**Action:** QA runs the full regression suite against the release branch. All P1/P2 bugs must be resolved before sign-off. P3/P4 bugs may be deferred with documented approval.
**Expected outcome:** QA lead posts sign-off comment in the release tracking ticket.

---

#### Step 4 — Deploy to Staging

**Action:** Deploy the release branch to the staging environment. Run smoke tests.
**Expected outcome:** All smoke tests pass. Staging environment reflects the upcoming production state.

---

#### Step 5 — Production Deployment

**Action:** Release Manager initiates production deployment via Shipyard's CI/CD pipeline during the approved maintenance window (Tuesdays and Thursdays, 10:00–12:00 PM ET).
**Expected outcome:** Deployment completes without errors. Automated health checks pass.

> **Note:** If deployment fails or health checks do not pass within 15 minutes, initiate rollback immediately (see Rollback Procedure below).

---

#### Step 6 — Post-Deployment Verification

**Action:** Engineering on-call monitors error rates, latency, and key metrics in Datadog for 30 minutes post-deployment.
**Expected outcome:** All metrics within normal thresholds. No spike in support tickets.

---

#### Step 7 — Communicate & Publish

**Action:** Release Manager publishes release notes to the Shipyard changelog. Support team is notified. Status Page updated if applicable.
**Expected outcome:** Customers and internal stakeholders are informed of the new release.

---

### Rollback Procedure

If a critical issue is identified post-deployment:

1. Release Manager declares a rollback in `#releases` Slack channel
2. Engineering triggers rollback via CI/CD pipeline (previous stable build)
3. Notify Support team immediately
4. Open a P1 incident ticket and follow [SOP-OPS-001: Incident Response](#sop-p1p2-incident-response)

---

### Verification

- Version number in production matches the intended release
- Release notes are published to the changelog
- Datadog metrics stable 30 minutes post-deployment
- No new P1/P2 tickets opened within 1 hour of release

---

### Escalation

| Situation | Contact |
|---|---|
| Deployment pipeline failure | DevOps on-call |
| QA sign-off blocked by unresolved P1 bug | Engineering Director |
| Release needs to be postponed | Release Manager + Product Manager |

---

### Related Documents

- [SOP: Incident Response](#sop-p1p2-incident-response)
- Release Notes Template (`docs/release-notes-template.md` — internal)
- Shipyard CI/CD Pipeline Guide (internal)

---

### Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 2023-05-01 | J. Chandler | Initial version |
| 1.1 | 2023-11-14 | J. Chandler | Added rollback procedure |
| 1.2 | 2024-04-02 | J. Chandler | Updated deployment window, added staging step |
| 1.3 | 2025-01-15 | J. Chandler | Minor clarifications, updated contacts |

---

## SOP: Employee Offboarding

| Field | Value |
|---|---|
| **SOP ID** | SOP-HR-001 |
| **Version** | 1.2 |
| **Owner** | HR Operations |
| **Last Reviewed** | 2025-01 |
| **Next Review** | 2025-07 |
| **Status** | Active |

---

### Purpose

This SOP ensures that employee departures from Shipyard are handled consistently, securely, and respectfully — protecting company data, maintaining continuity, and treating departing employees with professionalism.

---

### Scope

**Applies to:** HR Operations, IT, Engineering Leads, and direct managers.
**Covers:** Voluntary resignations, involuntary terminations, and end-of-contract departures.
**Does not cover:** Contractor offboarding (see HR-002), temporary leave or sabbaticals.

---

### Prerequisites

- [ ] Departure confirmed and last day established
- [ ] HR has notified IT and the employee's manager
- [ ] Offboarding ticket created in Jira (template: `HR-OFFBOARD`)

---

### Procedure

#### Step 1 — Knowledge Transfer (Manager)

**Timeline:** Begin at least 5 business days before last day.

**Action:** Manager works with departing employee to document:
- Current project status and open items
- Key contacts and relationships
- Access credentials or shared accounts (to be transferred, not stored personally)
- Any institutional knowledge not yet documented

**Expected outcome:** Knowledge transfer document completed and stored in the team's Notion workspace.

---

#### Step 2 — Access Revocation Planning (IT)

**Timeline:** Prepare 2 business days before last day. Execute on last day.

**Action:** IT prepares a revocation checklist for all systems the employee has access to. Standard systems include:

| System | Action |
|---|---|
| Google Workspace | Disable account, transfer Drive files to manager |
| GitHub | Remove from org, transfer any personal repos if applicable |
| AWS / Cloud | Revoke IAM credentials and access keys |
| Jira / Notion / Confluence | Deactivate account |
| Slack | Deactivate account |
| PagerDuty | Remove from on-call rotations |
| Password manager (1Password) | Remove from vault access |
| VPN | Revoke credentials |

**Expected outcome:** All access revoked within 2 hours of last day end time.

---

#### Step 3 — Equipment Return (IT + Manager)

**Timeline:** Last day.

**Action:** Manager confirms return of all company equipment (laptop, monitor, peripherals, access badges). IT wipes and re-images returned devices.
**Expected outcome:** Equipment returned and logged in IT asset tracker.

---

#### Step 4 — Final Payroll & Benefits (HR)

**Timeline:** Completed by last day or per local legal requirements.

**Action:** HR confirms:
- Final paycheck processed (including any accrued PTO payout per company policy)
- Benefits termination date communicated to employee
- COBRA/continuation coverage information provided where applicable

**Expected outcome:** Employee has received all required final compensation and benefits information.

---

#### Step 5 — Exit Interview (HR)

**Timeline:** Last week of employment (voluntary departures only).

**Action:** HR conducts a 30-minute exit interview. Notes are stored confidentially in the HR system and used only for aggregate trend analysis.
**Expected outcome:** Exit interview completed and documented.

---

#### Step 6 — Close Offboarding Ticket (HR)

**Action:** HR verifies all checklist items are complete and closes the Jira offboarding ticket.
**Expected outcome:** Offboarding ticket marked Done. Departure logged in HRIS.

---

### Verification

- All system access confirmed revoked in IT access log
- Knowledge transfer document stored in team Notion workspace
- Final payroll processed
- Offboarding Jira ticket closed

---

### Escalation

| Situation | Contact |
|---|---|
| Employee becomes uncooperative or access needs emergency revocation | HR Director + IT immediately |
| Legal concerns (NDA, IP, data) | Legal counsel |
| Equipment not returned | HR Director + Office Manager |

---

### Related Documents

- SOP: Contractor Offboarding (SOP-HR-002 — internal)
- IT Access Revocation Checklist (Jira template: `HR-OFFBOARD`)
- Employee Handbook — Separation section (internal)

---

### Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 2023-02-15 | J. Chandler | Initial version |
| 1.1 | 2024-01-10 | J. Chandler | Added cloud access revocation steps, updated benefits section |
| 1.2 | 2025-01-15 | J. Chandler | Updated system list, clarified voluntary vs. involuntary scope |

---

*Source and full repository: [sop-library on GitHub](https://github.com/chandlerpm/sop-library).*
