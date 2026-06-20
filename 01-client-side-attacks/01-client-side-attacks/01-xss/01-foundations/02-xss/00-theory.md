# XSS — Core Theory

## Definition
XSS occurs when attacker-controlled input is executed in a user's browser context.

---

## Root Cause

No strict separation between:
- Data
- HTML structure
- JavaScript execution

---

## Why It Exists

Developers assume:
- input is harmless text
- output rendering is safe by default

Browsers do not validate intent.

---

## Core Condition

XSS exists when:

> Input reaches a browser execution context without proper encoding or sanitization.

---

## Mental Model

Input → Context → Sink → Execution

If all four align → exploit possible.
<img width="1024" height="1536" alt="ChatGPT Image Jun 20, 2026, 06_31_19 PM" src="https://github.com/user-attachments/assets/cbafa695-ffb1-48b4-8415-5309b9141b41" />
