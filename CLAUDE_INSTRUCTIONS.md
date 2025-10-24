# Claude CLI Instructions for Training Dashboard

This guide will walk you through getting started with Claude CLI and using it effectively with this training dashboard repository.

## Table of Contents

1. [Getting Started with Claude CLI](#getting-started-with-claude-cli)
2. [Understanding Agents](#understanding-agents)
3. [Creating Custom Agents](#creating-custom-agents)
4. [Using Agents with This Repository](#using-agents-with-this-repository)
5. [Example Workflows](#example-workflows)
6. [Best Practices](#best-practices)
7. [Common Use Cases](#common-use-cases)

---

## Getting Started with Claude CLI

### Installation

1. **Install Claude CLI** (if not already installed):
   ```bash
   npm install -g @anthropic-ai/claude-cli
   ```

2. **Authenticate**:
   ```bash
   claude auth
   ```
   Follow the prompts to connect your Anthropic account.

3. **Verify Installation**:
   ```bash
   claude --version
   ```

### Basic Usage

Navigate to this repository and start using Claude:

```bash
cd /path/to/claudeai_training
claude "Show me the current project structure"
```

Claude will read your codebase and respond with information about the project.

---

## Understanding Agents

### What Are Agents?

Agents in Claude CLI are specialized AI assistants that can:
- Perform multi-step tasks autonomously
- Search and analyze code
- Make changes across multiple files
- Run commands and verify results
- Provide detailed reports

### Types of Agents

Claude CLI includes several built-in agent types:

1. **general-purpose** - For complex tasks requiring multiple steps
2. **Explore** - Fast codebase exploration and searching
3. **code-reviewer** - Review code changes and suggest improvements
4. **test-runner** - Run tests and analyze results

---

## Creating Custom Agents

While Claude CLI has built-in agents, you can guide Claude to act as specialized agents through effective prompting.

### Agent Prompting Patterns

#### 1. Code Exploration Agent

**Prompt:**
```bash
claude "Act as a code explorer. Analyze the entire codebase structure, identify all components, pages, and their relationships. Provide a detailed map of how the application works."
```

**What it does:**
- Searches through all files
- Identifies patterns and relationships
- Creates a comprehensive overview

#### 2. Feature Development Agent

**Prompt:**
```bash
claude "Act as a feature development agent. I want to add a new 'Reports' page with charts showing user growth and revenue. Plan the implementation, create all necessary components, and integrate it into the navigation."
```

**What it does:**
- Plans multi-step implementation
- Creates new files
- Updates existing files
- Ensures consistency

#### 3. Refactoring Agent

**Prompt:**
```bash
claude "Act as a refactoring specialist. Review all components in the /components directory and suggest improvements for code reusability, type safety, and performance. Then implement the improvements."
```

**What it does:**
- Analyzes existing code
- Identifies improvement opportunities
- Implements changes systematically

#### 4. Bug Fix Agent

**Prompt:**
```bash
claude "Act as a debugging agent. Run the build, identify any TypeScript errors, linting issues, or runtime warnings. Then fix each issue one by one."
```

**What it does:**
- Runs diagnostic commands
- Identifies issues
- Fixes problems systematically

#### 5. Documentation Agent

**Prompt:**
```bash
claude "Act as a documentation specialist. Add comprehensive JSDoc comments to all components, create a COMPONENTS.md file documenting each component's props and usage, and add inline code comments where needed."
```

**What it does:**
- Reviews code structure
- Adds documentation
- Creates reference files

---

## Using Agents with This Repository

### Training Scenario 1: Component Modifications

**Goal:** Change the color scheme from blue to green

**Agent Prompt:**
```bash
claude "I need you to act as a UI theming agent. Find all instances of blue colors (bg-blue, text-blue, border-blue, hover:bg-blue) throughout the application and change them to green equivalents. Make sure to check all components and pages. Provide a summary of all changes made."
```

**Expected Workflow:**
1. Agent searches for all blue color classes
2. Identifies files to modify
3. Makes systematic replacements
4. Verifies consistency
5. Reports changes

### Training Scenario 2: Adding New Features

**Goal:** Create a new Analytics page

**Agent Prompt:**
```bash
claude "Act as a full-stack feature developer. Create a new Analytics page at /analytics with:
- Revenue chart placeholder
- User growth statistics (daily, weekly, monthly active users)
- Top products table
- Key metrics cards
Add it to the sidebar navigation and ensure the styling matches the existing pages."
```

**Expected Workflow:**
1. Creates `/app/analytics/page.tsx`
2. Builds page with required components
3. Updates `components/Sidebar.tsx` navigation
4. Ensures consistent styling
5. Tests the implementation

### Training Scenario 3: Data Management Refactoring

**Goal:** Move hardcoded data to separate files

**Agent Prompt:**
```bash
claude "Act as a data architecture agent. Create a new /data directory. Extract all mock data from pages (users, products, recent activity) into separate TypeScript files with proper type definitions. Then update all pages to import data from these files instead of using inline data."
```

**Expected Workflow:**
1. Creates `/data` directory
2. Creates type definition files
3. Extracts data to separate files
4. Updates all imports
5. Verifies functionality

### Training Scenario 4: Responsive Design Enhancement

**Goal:** Make sidebar collapsible on mobile

**Agent Prompt:**
```bash
claude "Act as a responsive design specialist. Make the sidebar collapsible on mobile devices:
- Add a hamburger menu button in the header for mobile screens
- Sidebar should be hidden by default on mobile (< 768px)
- Add smooth slide-in/slide-out animation
- Include an overlay when sidebar is open on mobile
- Ensure the layout works perfectly on all screen sizes"
```

**Expected Workflow:**
1. Adds mobile menu state management
2. Creates hamburger button component
3. Adds responsive CSS classes
4. Implements animations
5. Tests responsive behavior

### Training Scenario 5: Form Functionality

**Goal:** Make settings form functional

**Agent Prompt:**
```bash
claude "Act as a form development specialist. Make the Settings page fully functional:
- Add React state management for all form fields
- Implement form validation
- Add a save button that shows a success message
- Add error handling
- Store settings in localStorage
- Load saved settings on page mount
Make it production-ready with proper TypeScript types."
```

**Expected Workflow:**
1. Adds state management (useState)
2. Implements form handlers
3. Adds validation logic
4. Creates localStorage integration
5. Adds UI feedback

---

## Example Workflows

### Workflow 1: Quick Exploration

```bash
# Start with exploration
claude "Explore the codebase and explain how the navigation system works"

# Deep dive into specific component
claude "Show me how the DataTable component works and suggest improvements"

# Get recommendations
claude "What could be improved in this codebase for better performance?"
```

### Workflow 2: Feature Development Cycle

```bash
# Step 1: Plan
claude "I want to add user authentication. Analyze the current structure and create a detailed implementation plan."

# Step 2: Implement
claude "Based on the plan, implement user authentication with login/logout functionality and protected routes."

# Step 3: Test
claude "Run the build and check for any errors. Fix any issues that arise."

# Step 4: Document
claude "Add documentation for the new authentication system to the README."
```

### Workflow 3: Code Quality Improvement

```bash
# Run diagnostics
claude "Run npm run lint and npm run build, then create a list of all issues found."

# Fix issues systematically
claude "Fix all linting errors one by one, starting with the most critical."

# Add tests
claude "Add unit tests for the StatCard and DataTable components."

# Improve types
claude "Review all TypeScript types and make them more strict and accurate."
```

### Workflow 4: Iterative Development

```bash
# Start simple
claude "Add a dark mode toggle button to the header"

# Expand
claude "Now implement the dark mode functionality with a context provider"

# Refine
claude "Make dark mode persist in localStorage and apply appropriate dark styles to all components"

# Polish
claude "Add smooth transitions when switching between light and dark mode"
```

---

## Best Practices

### 1. Be Specific and Clear

**Good:**
```bash
claude "Add a new column called 'Last Login' to the users table in /app/users/page.tsx. The column should display a date format like 'Jan 15, 2024'."
```

**Less Effective:**
```bash
claude "Update the users page"
```

### 2. Break Complex Tasks into Steps

**Good Approach:**
```bash
# Step 1
claude "Create a new Modal component in /components/Modal.tsx with TypeScript props for title, content, and onClose"

# Step 2
claude "Add the Modal to the Users page to show user details when clicking a row"
```

**Less Effective:**
```bash
claude "Add modals everywhere"
```

### 3. Provide Context

**Good:**
```bash
claude "The users page is loading slowly. Analyze the component, identify performance bottlenecks, and implement optimizations like memoization or virtualization if needed."
```

**Less Effective:**
```bash
claude "Make it faster"
```

### 4. Use Agent Roles

Prefix your requests with agent roles to set clear expectations:

- "Act as a security auditor..."
- "Act as a performance optimization specialist..."
- "Act as a UI/UX designer..."
- "Act as a code reviewer..."

### 5. Request Explanations

```bash
claude "Add a search feature to the products page, and explain each change you make"
```

This helps you understand the implementation and learn from the process.

### 6. Verify and Iterate

```bash
# First request
claude "Add sorting to the DataTable component"

# Verify
npm run dev  # Check the result

# Iterate if needed
claude "The sorting works, but add visual indicators (arrows) to show which column is sorted and in which direction"
```

---

## Common Use Cases

### Use Case 1: Learning Next.js Patterns

**Prompt:**
```bash
claude "Explain the current routing structure in this Next.js app. Then show me how to add dynamic routes by creating a /users/[id] page that displays individual user details."
```

### Use Case 2: Styling Consistency

**Prompt:**
```bash
claude "Audit all components for consistent spacing, colors, and typography. Create a design system document and refactor components to use consistent Tailwind classes."
```

### Use Case 3: Accessibility Improvements

**Prompt:**
```bash
claude "Act as an accessibility specialist. Review the entire application for WCAG 2.1 compliance. Add proper ARIA labels, keyboard navigation, and semantic HTML. Provide a report of changes made."
```

### Use Case 4: State Management Setup

**Prompt:**
```bash
claude "The app is growing complex. Set up React Context for global state management. Create contexts for user data, theme preferences, and notifications. Integrate them into the app."
```

### Use Case 5: API Integration

**Prompt:**
```bash
claude "Replace all mock data with API calls. Create a /lib/api.ts file with fetch functions for users, products, and analytics. Update all pages to use these API functions with loading states and error handling."
```

### Use Case 6: Testing Setup

**Prompt:**
```bash
claude "Set up Jest and React Testing Library for this project. Create example tests for StatCard, DataTable, and the Dashboard page. Include instructions in the README for running tests."
```

### Use Case 7: Performance Optimization

**Prompt:**
```bash
claude "Analyze bundle size and performance. Implement code splitting, lazy loading for pages, and image optimization. Add a performance monitoring setup and document the improvements."
```

### Use Case 8: Error Handling

**Prompt:**
```bash
claude "Add comprehensive error handling throughout the app. Create an ErrorBoundary component, add error states to all pages, and implement a toast notification system for user feedback."
```

---

## Advanced Agent Techniques

### Multi-Agent Workflow

You can chain multiple specialized agents for complex tasks:

```bash
# Agent 1: Explorer
claude "Explore the codebase and identify all areas where user data is displayed"

# Agent 2: Planner
claude "Based on where user data is displayed, create a plan to add user profile pictures throughout the app"

# Agent 3: Implementer
claude "Implement the user profile picture feature according to the plan"

# Agent 4: Reviewer
claude "Review the profile picture implementation for consistency, performance, and accessibility issues"
```

### Conditional Agent Prompts

```bash
claude "Check if tests exist in this project. If yes, run them and fix any failures. If no, set up a testing framework and create initial tests for all components."
```

### Agent with Constraints

```bash
claude "Add a data export feature to the Products page, but:
- Do not install any new dependencies
- Keep bundle size minimal
- Use native browser APIs only
- Ensure it works in all modern browsers"
```

---

## Tips for Effective Training

### For Instructors

1. **Start with observation:**
   ```bash
   claude "Explain what this component does" components/StatCard.tsx
   ```

2. **Progress to modification:**
   ```bash
   claude "Add a loading state to the StatCard component"
   ```

3. **Advance to creation:**
   ```bash
   claude "Create a new NotificationCard component similar to StatCard"
   ```

### For Learners

1. **Ask questions:**
   ```bash
   claude "Why is the Sidebar component using 'use client'? Explain the difference between client and server components in Next.js."
   ```

2. **Request alternatives:**
   ```bash
   claude "Show me three different ways to implement the dark mode feature, with pros and cons of each approach"
   ```

3. **Debug together:**
   ```bash
   claude "I'm getting a hydration error. Help me understand what's causing it and how to fix it."
   ```

---

## Troubleshooting

### Claude isn't finding files

**Solution:**
```bash
claude "List all files in the components directory"
# Then be more specific
claude "Read the file at components/Sidebar.tsx and explain its functionality"
```

### Changes aren't being applied correctly

**Solution:**
```bash
# Be explicit about file paths
claude "In the file app/page.tsx, change line 45 to use 'grid-cols-3' instead of 'grid-cols-4'"
```

### Need to undo changes

**Solution:**
```bash
# Use git
git status
git diff
git checkout -- <file>  # Undo specific file
git reset --hard HEAD    # Undo all changes (careful!)
```

---

## Quick Reference

### Exploration Commands

```bash
claude "What does this project do?"
claude "Show me the project structure"
claude "How does routing work here?"
claude "Where is the main dashboard logic?"
```

### Modification Commands

```bash
claude "Change X to Y in component Z"
claude "Add feature X to page Y"
claude "Refactor component X to use pattern Y"
claude "Fix the TypeScript error in file X"
```

### Creation Commands

```bash
claude "Create a new component X"
claude "Add a new page at route X"
claude "Generate a utility function for X"
claude "Set up X integration"
```

### Analysis Commands

```bash
claude "Review component X for improvements"
claude "Find all instances of pattern X"
claude "Analyze performance of page X"
claude "Check accessibility of component X"
```

---

## Next Steps

After mastering the basics:

1. **Experiment with complex workflows** combining multiple agent types
2. **Create custom training scenarios** specific to your learning goals
3. **Practice iterative development** with Claude
4. **Explore advanced Next.js features** like server actions, middleware, etc.
5. **Build real features** beyond the training examples

---

## Resources

- [Claude CLI Documentation](https://docs.claude.com/claude-code)
- [Next.js Documentation](https://nextjs.org/docs)
- [Repository README](./README.md) - Training scenarios and exercises
- [Anthropic Claude](https://claude.ai) - Web interface for Claude

---

**Happy Learning with Claude CLI!**

Remember: The best way to learn is by doing. Start with simple tasks and gradually increase complexity as you become more comfortable with Claude's capabilities.
