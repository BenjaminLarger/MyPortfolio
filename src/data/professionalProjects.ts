import { Project } from '../types/project';

export const professionalProjects: Project[] = [
  {
    id: 'monbusiness-campaignsync',
    title: 'CampaignSync - Google Ads Agency Operating System',
    description: 'All-in-one internal platform built from the ground up for a Google Ads agency, letting the whole team (CSM, Sales, Performance & Project Managers) run every task from a single interface. Real-time dashboards for retention, churn, delivery, NPS and team scorecards, powered by ~18 Python microservices synchronising Google Ads, Stripe, HubSpot and Meta Ads, with an embedded Claude AI assistant.',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'Python', 'Stripe', 'Google Ads API', 'Meta Ads API', 'HubSpot', 'Claude API', 'Docker', 'Railway'],
    category: 'professional',
    featured: true,
    completionDate: '2026-07-01',
    imageUrl: '/assets/photos/monbusiness-campaignsync.webp',
  },
  {
    id: 'monbusiness-client-dashboard',
    title: 'Client Dashboard - Web & Mobile Reporting Portal',
    description: 'Customer-facing portal (web & mobile) giving agency clients a clear, real-time view of their advertising performance: conversions, calls, leads, spend, revenue generated and campaign tracking across Google Ads and Meta Ads. Passwordless magic-link authentication, JWT sessions and interactive charts, served from a standalone FastAPI + React application.',
    technologies: ['FastAPI', 'React', 'Vite', 'PostgreSQL', 'Recharts', 'Google Ads API', 'Meta Ads API', 'Stripe', 'JWT', 'Sentry'],
    category: 'professional',
    featured: true,
    completionDate: '2026-07-01',
    imageUrl: '/assets/photos/monbusiness-client-dashboard.webp',
  },
  {
    id: 'monbusiness-weavable',
    title: 'Weavable - AI Landing Page Generator',
    description: 'Self-hosted, Lovable-style AI app builder shipped for agency clients: describe a product in plain language and Weavable designs it, generates a working React landing page live, and iterates in conversation. Features streaming Claude generation with a custom file protocol, server-side esbuild live preview, click-to-edit, self-healing build errors, version history and one-click publish/export.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Claude API', 'esbuild', 'CodeMirror', 'shadcn/ui', 'Framer Motion', 'SQLite'],
    category: 'professional',
    featured: true,
    completionDate: '2026-07-01',
    imageUrl: '/assets/photos/monbusiness-weavable.webp',
  },
];
