import adapter from 'svelte-adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

// CHANGEME
const REPO_NAME = '/sudoku';
const prod = process.env.ENV === 'prod';
const base = prod ? REPO_NAME : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: false,
            domain: '',
            jekyll: false
        }),
        paths: {
            base
        }
    }
};

export default config;
