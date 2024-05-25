import adapter from '@sveltejs/adapter-static';
import htmlMinifier from 'sveltekit-html-minifier';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: htmlMinifier(adapter({pages: 'build',assets: 'build',fallback: '404.html',precompress: false,strict: true}), {collapseWhitespace: true,removeComments: true}),

		version: {
			// ideally, this should be something deterministic
			// like the output of `git rev-parse HEAD`
			name: Date.now().toString(),

			// if undefined, no polling will occur
			pollInterval: 5000
		}
	}
};

export default config;
