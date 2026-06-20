# How Browsers Execute Input

## Core Idea
Browsers don’t treat input as “text”.
They treat it as **instructions depending on context**.

---

## Execution Pipeline

User Input → HTTP Response → HTML Parser → DOM → JS Engine → Render

At each step, interpretation rules change.

---

## Key Mechanism

### 1. HTML Parser
- Builds DOM tree
- Converts raw response into structure

### 2. DOM (Document Object Model)
- In-memory representation of page
- JavaScript can modify it

### 3. JS Engine
- Executes scripts in page context
- Shares access to DOM

---

## Root Problem

Browsers mix:
- Data (user input)
- Structure (HTML)
- Code (JavaScript)

If boundaries are not enforced → injection occurs.

---

## Trust Boundary Failure

Server assumes:
> input = safe data

Browser does:
> input = potential executable context

Mismatch = vulnerability class root.

---

## Key Insight

Most web vulnerabilities are not bugs in code logic.

They are:
> context misinterpretation problems inside parsers
