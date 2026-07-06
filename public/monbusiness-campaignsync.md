# CampaignSync — Google Ads Agency Operating System

## Overview

CampaignSync is the internal operating platform I built as **Lead Full-Stack Engineer at Monbusiness**, a Google Ads agency. The goal: give every team a single interface to run their entire day — no more scattered spreadsheets, ad-hoc scripts and disconnected tools.

The platform serves the whole company across dedicated workspaces:

- **CSM** — client portfolio management, retention & churn tracking, NPS, delivery follow-up
- **Sales** — pipeline, lead hub, scorecards, analytics and electronic contract signing
- **Performance & Project Managers** — daily operations, delegation, campaign delivery
- **CEO / Admin** — cross-company analytics, billing source-of-truth and reporting

---

## What it does

- **Unified dashboards** — real-time risk prioritization (unpaid invoices, clients without meetings/contact, detractors), retention & cancellation impact, delivery quality, growth & satisfaction, and live team leaderboards.
- **Health scoring** — a composite 0–100 score per client blending delivery, meetings, anomalies and satisfaction signals.
- **Retention engine** — automated save workflows, dunning and cancellation cleanup.
- **Embedded AI assistant** — a Claude-powered assistant integrated directly into the CSM and Sales drawers to summarize context and draft actions.

---

## Architecture

- **Backend** — FastAPI, with ~18 Python services (APIs, cron workers, sync jobs) deployed on Railway.
- **Frontend** — React single-page app with a strict internal design system.
- **Database** — PostgreSQL (raw SQL, migration-driven via Alembic).
- **Integrations** — Google Ads API, Stripe, HubSpot CRM, Meta Ads Marketing API, Google Calendar and Gmail.
- **Reliability** — schema-lineage guards, cron heartbeat monitoring, Sentry error tracking and a documented business-rule catalog kept in sync with every change.

---

## My role

I designed and built the platform end-to-end: data model, service architecture, the CSM/Sales/PM dashboards, the AI assistant integration, and the operational tooling (observability, migrations, CI guards) that keeps ~250 client accounts running reliably in production.

> Internal production system — repository is private.
