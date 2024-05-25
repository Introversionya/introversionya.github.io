import adapter from "@sveltejs/adapter-static";
import htmlMinifier from "sveltekit-html-minifier";
import preprocess from "svelte-preprocess";

const config = {
	preprocess: preprocess() /* обработка scss отдельных файлов */,
	kit: {
		adapter: htmlMinifier(
			adapter({ pages: "build", assets: "build", fallback: "404.html", precompress: false, strict: true }),
			{ collapseWhitespace: true, removeComments: true }
		),
		/* автопроверка нового контента на сайте: */
		version: {
			name: Date.now().toString(),
			pollInterval: 3000 /* частота опроса */,
		},
	},
};

export default config;
