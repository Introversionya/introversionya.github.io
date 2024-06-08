import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter({fallback: "404.html"}),
		version: {
			name: Date.now().toString(),
			pollInterval: 30000,
		},
	},
};

export default config;