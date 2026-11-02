<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Scope changes to the files involved

For a new feature or an update, work from the files that own the behavior. Use the path, route, or component the user named. If they did not name a file, open the one module that obviously owns it, then follow only the imports required to make the change.

Skip a repository-wide search, a full-tree file listing, and reading unrelated pages, data files, or components. Read another file only when the change cannot be made correctly without it.
