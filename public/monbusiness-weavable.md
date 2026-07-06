# Weavable — AI Landing Page Generator

## Overview

Weavable is a self-hosted, **Lovable-style AI app builder** I shipped for Monbusiness clients. Describe a product in plain language and Weavable designs it, builds it as a working React landing page in front of you, and iterates with you in conversation.

The goal: let clients go from an idea to a real, publishable landing page in minutes — without touching code.

---

## Features

- **Prompt → app** — a landing-page prompt creates a project, auto-names it with AI, and streams the first generation live (commentary + per-file progress chips).
- **Media in prompts** — attach images and videos; images are passed to the model as vision input and imported into the generated site as real assets.
- **Templates** — start from professional site templates (TypeScript + shadcn/ui + Tailwind theme) instead of a blank canvas, then iterate with AI.
- **Chat iteration** — every follow-up message edits the app; the model always sees the full current source.
- **Live preview** — server-side esbuild bundling of the project's virtual files, rendered in a sandboxed iframe, with desktop / tablet / phone toggles.
- **Visual edits** — "Select to edit" lets you click any element in the preview and attach it as context to your next message.
- **Self-healing** — runtime and build errors surface with "Fix with AI", and the server bundle-checks after every generation and auto-repairs failures.
- **Version history, publish & export** — a snapshot per edit, one-click publish to a public URL, and full runnable Vite-app export.

---

## Architecture

- **App** — Next.js 15 + React 19 + Tailwind CSS 4 (the builder UI), TypeScript throughout.
- **AI** — streaming generation via the Claude API, parsed incrementally with a custom `<weav-write path>` file protocol and automatic continuation across token limits.
- **Bundler** — an esbuild virtual-filesystem bundler that compiles project files from the database, with an error-reporting and element-inspector runtime.
- **Storage** — SQLite (`better-sqlite3`) for projects, files, messages, snapshots and binary assets.
- **Editor** — CodeMirror with a file tree, live save and hot reload.
- **Design doctrine** — the generation system prompt encodes studio-grade design rules so generated sites don't look AI-templated.

---

## My role

I built Weavable end-to-end: the streaming generation pipeline and file protocol, the live esbuild preview, the self-healing build loop, the editor and versioning, and the publish/export flow — turning a conversational prompt into a production-ready landing page.

> Internal / client product — repository is private.
