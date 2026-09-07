---
title: "Release Notes"
---

:::info What this is
Release notes for a fictionalized product version, written during freelance work for SaaS clients — new features, improvements, fixes, deprecations, known issues, and upgrade notes, in the structure a SaaS company would publish to its customers.

**Provenance:** Freelance client work (2013–2017), recreated.
:::

**May 2017**

## Overview
Version 2.5 of the Acme Cloud Platform introduces new security features, performance improvements, and bug fixes.
This release is recommended for all enterprise customers.

---

## New Features

### Multi-Factor Authentication (MFA)
- Users can now enable MFA for enhanced account security.
- Supported methods: SMS codes, authenticator apps (Google Authenticator, Authy).
- MFA can be enforced organization-wide by administrators.

### Bulk Data Export
- Added ability to export large datasets in CSV and XLSX formats.
- Supports up to **500,000 records per export job**.
- Exports delivered via secure download link valid for 48 hours.

---

## Improvements
- Optimized dashboard performance for organizations with **100,000+ records**.
- Improved caching of frequently accessed project and task data.
- Updated UI components for better cross-browser compatibility.

---

## Fixes
- Corrected issue with email delivery delays in Outlook integration.
- Fixed alignment inconsistencies in the Settings page for Safari users.
- Resolved bug causing duplicate task notifications under certain conditions.

---

## Deprecations
- Deprecated legacy `GET /reports/weekly` endpoint. Customers should migrate to `/reports?interval=weekly`.
- Ended support for Internet Explorer 10. Minimum supported version is now **IE11**.

---

## Known Issues
- Data exports larger than **250,000 records** may take more than 10 minutes to generate.
- MFA enrollment emails may be delayed by up to 5 minutes during high-traffic periods.

---

## Upgrade Notes
- Administrators should update user onboarding guides to include MFA enrollment.
- Customers using the deprecated endpoint should update integrations before **v2.6 release**.

---

© 2017 Acme Software, Inc.

---

*Source and full repository: [freelance-era on GitHub](https://github.com/chandlerpm/freelance-era).*
