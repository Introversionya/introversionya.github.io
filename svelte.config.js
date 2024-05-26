import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter({fallback: "404.html"}),
		version: {
			name: Date.now().toString(),
			pollInterval: 3000,
		},
	},
};

export default config;

/* конфиг для github pages: */

// import adapter from "@sveltejs/adapter-static"; - github pages

// // const config = {
// // 	ssr: true,
// // 	preprocess: preprocess() /* обработка scss отдельных файлов */,
// // 	kit: {
// // 		adapter: htmlMinifier(
// // 			adapter({ pages: "build", assets: "build", fallback: "404.html", precompress: false, strict: true }),
// // 			{ collapseWhitespace: true, removeComments: true }
// // 		),
// // 		/* автопроверка нового контента на сайте: */
// // 		version: {
// // 			name: Date.now().toString(),
// // 			pollInterval: 3000 /* частота опроса */,
// // 		},
// // 	},
// // };










