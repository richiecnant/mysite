# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a zero-build static HTML portfolio site with two pages:

- **`index.html`** — Personal portfolio for 周星星, built with Tailwind CSS (CDN) and custom CSS. Features a responsive navbar, hero section, skills/stats, project showcase (礼小夯), and contact form.
- **`wechat/index.html`** — Standalone WeChat-style bookkeeping mini-app. Single-file HTML with embedded CSS/JS. Supports expense/income tracking with emoji category icons. Data is in-memory only (no persistence).

## Development

No build step, package manager, or compiler is required. Edit files directly.

- **Serve locally**: `python3 -m http.server 8000` (or any static file server)
- **Open directly**: Files can be opened in a browser via `file://`

## Architecture

- **Styling**: Tailwind CSS v3 loaded from `https://cdn.tailwindcss.com` with an inline config extending `primary: #2563eb`, `secondary: #64748b`, `dark: #1e293b`. Custom animations and component styles live in `style.css`.
- **Interactivity**: Vanilla JS inline in `index.html`. Mobile menu toggle, smooth scroll, navbar scroll effect (`nav.scrolled`), and `IntersectionObserver`-based fade-in animations for `.fade-in` elements.
- **WeChat app**: Uses CSS variables mimicking WeChat's design system (`--weui-PRIMARY: #07c160`, etc.). `records` array holds data in memory; page refresh clears it.

## Notes

- The contact form on the portfolio is presentational only — no `action` or backend handler.
- The portfolio content (name, stats, project description) is hardcoded in HTML.
