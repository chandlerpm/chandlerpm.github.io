---
title: "API Setup Guide"
---

:::info What this is
A developer-facing API setup guide, written during freelance work for SaaS clients — API key generation, authentication, a working request/response example, security best practices, and troubleshooting.

**Provenance:** Freelance client work (2013–2017), recreated — not literal client files.
:::

**Confluence Page (March 2015)**

## Purpose
This page provides instructions for setting up API access to the Acme Cloud Platform.
It is intended for developers and integration specialists working with Acme SaaS products.

---

## Prerequisites
- Active **Acme Cloud account** with Developer role.
- Internet access via HTTPS (port 443).
- API client such as **cURL** or **Postman**.
- Familiarity with **JSON** and **REST APIs**.

---

## Step 1 — Generate an API Key
1. Log in to the **Acme Cloud Dashboard**.
2. Navigate to: **Settings → API Access**.
3. Click **Generate New Key**.
4. Copy the generated key and store it securely.

**Note:** Keys are tied to your user account and must not be shared.

---

## Step 2 — Authentication
All requests require the API key in the `Authorization` header.

**Example (cURL):**
```bash
curl -X GET "https://api.acmecloud.com/v1/projects"   -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Step 3 — Testing Access
Verify your API key works by retrieving a list of projects:

**Request:**
```http
GET /v1/projects HTTP/1.1
Host: api.acmecloud.com
Authorization: Bearer YOUR_API_KEY
```

**Response:**
```json
[
  {
    "id": 1001,
    "name": "Website Redesign",
    "status": "active"
  }
]
```

---

## Step 4 — Security Best Practices
- Rotate API keys every **90 days**.
- Do not embed keys in public repositories (e.g., GitHub).
- Use environment variables or secure vaults for key storage.
- Immediately revoke compromised keys.

---

## Step 5 — Troubleshooting
- **401 Unauthorized:** Invalid or expired API key.
- **403 Forbidden:** Insufficient permissions. Contact your admin.
- **429 Too Many Requests:** Rate limit exceeded. Retry after cooldown.

---

## Related Links
- [Acme Cloud API Reference](https://docs.acmecloud.com/api)
- [Postman Collection (Download)](https://docs.acmecloud.com/postman)

---

© 2015 Acme Software, Inc.

---

*Source and full repository: [freelance-era on GitHub](https://github.com/chandlerpm/freelance-era).*
