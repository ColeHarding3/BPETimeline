# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BPETimeline - An interactive web-based timeline and visualization of Byte Pair Encoding (BPE), a data compression technique commonly used in natural language processing and tokenization.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **GitHub Pages** for hosting

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch via GitHub Actions. The workflow builds the project and deploys the `dist` folder to GitHub Pages.

The site is configured to be served from the `/BPETimeline/` base path (configured in `vite.config.ts`).
