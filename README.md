# RLG site prototype

Throwaway prototype for evaluating **Astro + Sveltia CMS** as the stack for the
future Rocky Land Group website.

**This is not the Rocky Land Group website.** Every page, project, acreage,
and email address in this repo is invented placeholder content written to
exercise the CMS. The real site waits on branding delivery.

## What this is for

One question: *can Art edit this site himself, without touching git?*

The answer lives at **`/admin`** — a Sveltia CMS panel that reads and writes the
markdown in `src/content/`. Saving there commits to this repo, which triggers a
rebuild and redeploy.

## Layout

```
public/admin/index.html   Sveltia CMS loader (version pinned)
public/admin/config.yml   The CMS definition — what Art can edit
public/media/             Where CMS image uploads land
src/content/pages/        Home, About, Contact  (editable, not creatable)
src/content/projects/     Repeatable project entries (creatable + deletable)
src/layouts/Base.astro    All the styling, in one file
src/pages/                Routing only — no content lives here
```

## Local development

Astro requires Node >= 22.12.

```bash
npm install
npm run dev      # site at localhost:4321, CMS at localhost:4321/admin
npm run build    # static output into dist/
```

## Editing without git

Go to `/admin`, click **Sign In with Token**, and paste a GitHub personal
access token with `Contents: read and write` on this repo. Sveltia links to the
token-creation page with the right scopes preselected.

## Disposable

This repo is meant to be deleted once the tooling question is answered.
