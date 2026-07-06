# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on http://localhost:5173)
- **Production build**: `npm run build` (TypeScript compilation + Vite build)
- **Linting**: `npm run lint` (ESLint with TypeScript rules)
- **Type checking**: `npx tsc --noEmit` (TypeScript type checking without output)
- **Preview production build**: `npm run preview`

## Architecture Overview

This is a React TypeScript portfolio application built with Vite and styled with Tailwind CSS. The architecture follows a component-based structure showcasing two distinct project categories.

### Core Architecture

**Main Application Flow**: `App.tsx` renders a single-page layout with fixed header navigation, hero section, two project sections (42 Malaga and AI Agents), and footer.

**Project Data System**: Projects are defined by the `Project` interface in `src/types/project.ts` with two categories: `'42-malaga'` and `'ai-agents'`. Project data is stored in separate files (`src/data/projects42.ts` and `src/data/aiProjects.ts`) and consumed by `ProjectSection` components.

**Component Hierarchy**:
- `App` → `Header`, `Hero`, `ProjectSection` (×2), `Footer`
- `ProjectSection` → `ProjectCard` (multiple instances)
- Navigation uses smooth scrolling to section IDs

### Key Design Patterns

**Data-Driven Rendering**: The `ProjectSection` component is reusable and renders different project categories based on props. Each section handles empty states with "Coming Soon" placeholders.

**Type Safety**: Strict TypeScript interfaces enforce project data structure. The `Project` interface includes optional fields for `imageUrl`, `githubUrl`, and `liveUrl`.

**Responsive Design**: All components use Tailwind CSS with mobile-first responsive classes. The header adapts between desktop navigation and mobile hamburger menu.

### Project Data Structure

Projects require: `id`, `title`, `description`, `technologies[]`, `category`, `featured`, `completionDate`. Optional fields enable GitHub links, live demos, and images.

To add new projects, modify the relevant data file in `src/data/` following the existing Project interface.