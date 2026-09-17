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

There is no automated test or lint script configured yet. Validate changes with `npm run typecheck` and `npm run build`; add focused tests alongside new behavior if test tooling is introduced.

Write test cases in the form `it("should <expected behavior>", ...)`, such as `it("should render a submitted status message", ...)`.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Name components and directories in PascalCase (`NavLink/NavLink.tsx`); use camelCase for functions and values. Keep route filenames lowercase (`routes/contact.tsx`).

Use SCSS modules for component-local styling (`Component.module.scss`) and import them as `styles`. Keep shared palette values as CSS custom properties in `app/app.scss`; consume them from both SCSS and MUI via `var(--color-...)`. Preserve the existing two-space JSX indentation and double-quoted imports in edited files.

## Commit & Pull Request Guidelines

Use Git only for read-only inspection when needed, such as `git status`, `git diff`, `git log`, `git show`, `git branch`, or comparisons with another local branch. Never run a Git command that writes to local or remote state.

Strictly prohibited commands include staging, committing, amending, resetting, restoring, checking out or switching branches, merging, rebasing, pulling, fetching, pushing, tagging, stashing, cloning, and opening or modifying pull requests.
