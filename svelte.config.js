import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

// Build setup added on top of the 2026-10-04 export so the kb renders as the desk sees it.
export default {
  extensions: ['.svelte', '.svx'],
  preprocess: [mdsvex({ extensions: ['.svx'], layout: { runbook: './src/lib/layouts/runbook.svelte' } })],
  kit: {
    adapter: adapter({ fallback: undefined }),
    alias: { '#lib': 'src/lib' },
    // GitHub Pages serves the site under /<repo>; BASE_PATH comes from the workflow.
    paths: { base: process.env.BASE_PATH ?? '' },
    prerender: { entries: ['*'], handleHttpError: 'warn', handleMissingId: 'warn' },
  },
};
