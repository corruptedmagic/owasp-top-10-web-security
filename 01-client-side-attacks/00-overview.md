# Client-Side Attacks (Overview)

## Definition
Client-side attacks target vulnerabilities executed inside the browser rather than the server.

---

## Core Idea

The browser is a trusted execution environment for:
- HTML
- JavaScript
- DOM manipulation

If attacker-controlled input reaches this environment → execution happens on the client.

---

## Why This Class Exists

Modern apps rely heavily on:
- JavaScript frameworks
- dynamic rendering
- client-side state management

This increases attack surface inside the browser.

---

## Core Risk

If browser execution is influenced by attacker input:
→ user session becomes exploitable

---

## Key Insight

Client-side security is about:
> controlling how data becomes execution inside the browser
