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

# Project Context

## Repository Management Standards
- Always create feature branches before making changes
- Commit frequently with descriptive messages following conventional commits
- Run tests before committing
- Never commit directly to main/master
- Always pull latest changes before starting work
- Create atomic commits (one logical change per commit)

## Before Making Changes
1. Check current branch status with `git status`
2. Pull latest changes from main
3. Create a new feature branch: `git checkout -b feature/description`
4. Verify tests pass before starting

## Code Quality Standards
- Run linting before every commit
- Ensure all tests pass
- Follow existing code formatting
- Write tests for new functionality
- Document complex logic
- Remove debug/console statements before committing

## Commit Guidelines
- Use conventional commits format: type(scope): description
- Types: feat, fix, docs, style, refactor, test, chore
- Keep commit messages under 72 characters
- Reference issue numbers when applicable

## Before Finalizing
- Run full test suite
- Check for uncommitted changes
- Review diff before committing
- Ensure no sensitive data in commits
- Update documentation if needed