# Client Dashboard — Web & Mobile Reporting Portal

## Overview

A customer-facing portal, available on **web and mobile**, that gives Monbusiness clients a clear, real-time view of the advertising the agency runs for them. Clients log in and immediately see how their budget is performing — no jargon, no digging.

Built as a **standalone** FastAPI + React application (zero shared code with the internal tooling) so it can be deployed and scaled independently.

---

## What clients see

- **Performance overview** — conversions, calls received, detailed calls, leads and cost per conversion at a glance.
- **Revenue generated** — turnover attributed to qualified leads and won calls.
- **Spend tracking** — 30-day spend against budget, with campaign status and last-optimization date.
- **Multi-channel reporting** — unified Google Ads and Meta Ads performance, with interactive charts.
- **Light & dark themes** for comfortable reading on any device.

---

## Architecture

- **Backend** — FastAPI (Python), raw `psycopg2` on a shared Railway PostgreSQL instance.
- **Frontend** — React 18 + Vite, Recharts for data visualization, fully responsive (tested 375px → 1440px).
- **Authentication** — passwordless **magic links**: email → one-time token → httpOnly JWT cookie session.
- **Data sources** — Google Ads API and Meta Ads Marketing API (OAuth + system-user flows).
- **Payments** — Stripe integration for subscription context.
- **Observability** — structured logging (structlog) and Sentry error tracking.

---

## My role

I built the portal end-to-end — authentication, the reporting API, the multi-channel data pipelines and the responsive React frontend — delivering a polished, self-service experience that clients can trust to reflect their real campaign performance.

> Client-facing production system — repository is private.
