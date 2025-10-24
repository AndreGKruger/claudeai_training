# Claude CLI Training Dashboard

A Next.js dashboard application designed specifically for training purposes to demonstrate how to use Claude's CLI tool for making code changes, working with agents, and managing repositories.

## Overview

This repository contains a fully functional Next.js dashboard with multiple pages and components. It's intentionally designed to be simple yet comprehensive enough to demonstrate various Claude CLI capabilities.

## Features

- **Dashboard Page**: Overview with statistics, charts, and recent activity
- **Users Page**: User management interface with data tables
- **Products Page**: Product inventory display
- **Settings Page**: Settings and preferences interface
- **Reusable Components**: StatCard, DataTable, ChartPlaceholder, Sidebar, Header

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Dashboard home page
│   ├── users/
│   │   └── page.tsx        # Users management page
│   ├── products/
│   │   └── page.tsx        # Products page
│   └── settings/
│       └── page.tsx        # Settings page
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── Header.tsx          # Page header
│   ├── StatCard.tsx        # Statistics card component
│   ├── DataTable.tsx       # Reusable table component
│   └── ChartPlaceholder.tsx # Chart placeholder component
└── public/                 # Static assets
```

## Training Scenarios

This repository is perfect for demonstrating various Claude CLI capabilities:

### 1. Component Modifications

**Example Tasks:**
- Change the color scheme of the StatCard component
- Add a new column to the DataTable
- Modify the Sidebar navigation items
- Update the Header to include a search bar

**Claude CLI Command Example:**
```bash
claude "Change the primary color from blue to purple throughout the application"
```

### 2. Adding New Features

**Example Tasks:**
- Add a new "Analytics" page
- Create a modal component for user details
- Implement a search functionality
- Add sorting to the DataTable component

**Claude CLI Command Example:**
```bash
claude "Add a new Analytics page with revenue charts and user growth metrics"
```

### 3. Refactoring

**Example Tasks:**
- Extract inline styles to a separate config file
- Convert the DataTable to use TypeScript generics
- Refactor repeated color classes into Tailwind config
- Move mock data to separate data files

**Claude CLI Command Example:**
```bash
claude "Move all mock data from pages to a separate data directory with JSON files"
```

### 4. Bug Fixes

**Example Tasks:**
- Fix TypeScript errors
- Resolve linting issues
- Fix responsive design issues
- Debug component rendering problems

**Claude CLI Command Example:**
```bash
claude "Fix any TypeScript errors and add proper type definitions"
```

### 5. Testing and Documentation

**Example Tasks:**
- Add JSDoc comments to components
- Create a component documentation file
- Write unit tests for components
- Add accessibility improvements

**Claude CLI Command Example:**
```bash
claude "Add JSDoc comments to all components and create a COMPONENTS.md documentation file"
```

## Using Claude CLI with This Repository

### Basic Workflow

1. **Clone the repository** (if not already done)
2. **Open terminal** in the project directory
3. **Use Claude CLI** to make changes

### Example Commands

#### Simple Change
```bash
claude "Update the dashboard title from 'Training Dashboard' to 'My Dashboard'"
```

#### Multi-step Change
```bash
claude "Add a dark mode toggle button to the Header component and implement dark mode styling"
```

#### Using Agents
```bash
claude "Review the codebase and suggest performance improvements"
```

#### Code Exploration
```bash
claude "Explain how the navigation works in this application"
```

### Tips for Training

1. **Start Simple**: Begin with small changes like text updates or color changes
2. **Progress Gradually**: Move to component modifications, then new features
3. **Use Natural Language**: Describe what you want in plain English
4. **Review Changes**: Always review the changes Claude makes
5. **Iterate**: Build on previous changes to demonstrate iterative development

## Common Training Exercises

### Exercise 1: Color Theme Update
"Change all blue colors to green throughout the application"

### Exercise 2: Add New Page
"Create a new 'Reports' page with a table showing monthly revenue data"

### Exercise 3: Component Enhancement
"Add icons to the sidebar navigation items"

### Exercise 4: Data Management
"Move all hardcoded data to a separate data directory with TypeScript types"

### Exercise 5: Responsive Design
"Make the sidebar collapsible on mobile devices with a hamburger menu"

### Exercise 6: Form Functionality
"Make the settings form functional with form validation and state management"

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Claude CLI Documentation](https://docs.claude.com/claude-code)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This project is created for training purposes and is free to use and modify.

## Contributing

This is a training repository. Feel free to fork and modify for your own training purposes.

---

**Happy Training with Claude CLI!**
