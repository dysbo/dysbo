# Repository Guidelines

## Project Structure & Module Organization

- `app/` contains the React Router Framework-mode application.
  - `app/root.tsx` owns the document shell, providers, global imports, and shared navigation.
  - `app/routes.ts` declares URLs; route modules live in `app/routes/` (for example, `about.tsx`).
  - `app/components/<Component>/` contains reusable components and their colocated `*.module.scss` styles.
  - `app/theme.ts` configures the MUI theme; `app/app.scss` contains global CSS custom properties and app-wide rules.
- `public/` holds directly served static assets, including favicons and images. Reference them from the app with absolute paths such as `/images/profile-photo.jpg`.

## Build, Test, and Development Commands

- `npm run dev` starts the React Router/Vite development server.
- `npm run typecheck` generates route types and runs TypeScript checks. Run it after changing routes, route modules, or component types.
- `npm run build` creates production client and server bundles in `build/`.
- `npm run start` serves an already-built application from `build/server/index.js`.
- `npm run lint` checks TypeScript and React code with ESLint.
- `npm run lint:fix` applies safe automatic ESLint fixes.
- `npm run lint:staged` runs ESLint only on staged JavaScript and TypeScript files.
- `npm test` runs Vitest and enforces the configured coverage thresholds.
- `npm run test:watch` starts Vitest in watch mode without coverage collection.

Validate changes with `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`; add focused tests alongside new behavior.

Write test cases in the form `it("should <expected behavior>", ...)`, such as `it("should render a submitted status message", ...)`.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Name components and directories in PascalCase (`NavLink/NavLink.tsx`); use camelCase for functions and values. Keep route filenames lowercase (`routes/contact.tsx`). ESLint enforces two-space indentation, a 120-character line limit, single quotes, no semicolons, and ordered imports; place CSS and SCSS imports last, separated from code imports by a blank line. Run `npm run lint:fix` to apply supported fixes.

Use SCSS modules for component-local styling (`Component.module.scss`) and import them as `styles`. Keep shared palette values as CSS custom properties in `app/app.scss`; consume them from both SCSS and MUI via `var(--color-...)`.

## Commit & Pull Request Guidelines

Use Git only for read-only inspection when needed, such as `git status`, `git diff`, `git log`, `git show`, `git branch`, or comparisons with another local branch. Never run a Git command that writes to local or remote state.

Strictly prohibited commands include staging, committing, amending, resetting, restoring, checking out or switching branches, merging, rebasing, pulling, fetching, pushing, tagging, stashing, cloning, and opening or modifying pull requests.
