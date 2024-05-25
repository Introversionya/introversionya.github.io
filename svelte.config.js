import adapter from '@sveltejs/adapter-static';
import htmlMinifier from 'sveltekit-html-minifier';

const config = {
	kit: {
		adapter: htmlMinifier(adapter({pages: 'build',assets: 'build',fallback: '404.html',precompress: false,strict: true}), {collapseWhitespace: true,removeComments: true})
	}
};

export default config;
