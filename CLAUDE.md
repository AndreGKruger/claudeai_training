# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 training dashboard application built with TypeScript and Tailwind CSS. It serves as a demonstration environment for learning Claude CLI capabilities through hands-on development tasks.

## Development Commands

```bash
# Development
npm run dev          # Start development server at localhost:3000
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint for code quality

# No test framework is currently configured
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint with Next.js configuration

### Project Structure
```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with sidebar
├── page.tsx           # Dashboard home page
├── users/page.tsx     # User management page
├── products/page.tsx  # Products page
└── settings/page.tsx  # Settings page

components/            # Reusable UI components
├── Sidebar.tsx       # Main navigation (client component)
├── Header.tsx        # Page header component
├── StatCard.tsx      # Statistics display card
├── DataTable.tsx     # Generic data table
└── ChartPlaceholder.tsx # Chart placeholder

public/               # Static assets
```

### Key Patterns

**Client vs Server Components**: The Sidebar uses `"use client"` for interactivity, while other components are server components by default.

**Import Aliases**: Uses `@/*` alias for imports (configured in tsconfig.json).

**Component Design**: Components follow a consistent pattern with TypeScript interfaces for props and Tailwind for styling.

**Mock Data**: All data is currently hardcoded within page components - ideal for training scenarios involving data extraction and state management.

### Navigation Structure
The app uses a sidebar navigation with routes:
- `/` - Dashboard (overview, stats, recent activity)
- `/users` - User management with data table
- `/products` - Product listing
- `/settings` - Configuration form

## Training Focus Areas

This codebase is specifically designed for practicing:
- Component modifications and theming
- Adding new pages and features
- Data management and state refactoring
- Responsive design improvements
- Form functionality implementation
- TypeScript type enhancements

## Configuration Files

- `tsconfig.json` - TypeScript configuration with strict settings
- `eslint.config.mjs` - ESLint configuration using Next.js presets
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind
- `package.json` - Dependencies and scripts

## Important Notes

- No testing framework is configured yet
- All data is currently mock/hardcoded
- Components use consistent Tailwind styling patterns
- The codebase follows Next.js 16 App Router conventions
- TypeScript is configured with strict mode enabled