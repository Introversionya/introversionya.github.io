export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","fonts/Roboto/Roboto-Black.eot","fonts/Roboto/Roboto-Black.svg","fonts/Roboto/Roboto-Black.ttf","fonts/Roboto/Roboto-Black.woff","fonts/Roboto/Roboto-Black.woff2","fonts/Roboto/Roboto-BlackItalic.eot","fonts/Roboto/Roboto-BlackItalic.svg","fonts/Roboto/Roboto-BlackItalic.ttf","fonts/Roboto/Roboto-BlackItalic.woff","fonts/Roboto/Roboto-BlackItalic.woff2","fonts/Roboto/Roboto-Bold.eot","fonts/Roboto/Roboto-Bold.svg","fonts/Roboto/Roboto-Bold.ttf","fonts/Roboto/Roboto-Bold.woff","fonts/Roboto/Roboto-Bold.woff2","fonts/Roboto/Roboto-BoldItalic.eot","fonts/Roboto/Roboto-BoldItalic.svg","fonts/Roboto/Roboto-BoldItalic.ttf","fonts/Roboto/Roboto-BoldItalic.woff","fonts/Roboto/Roboto-BoldItalic.woff2","fonts/Roboto/Roboto-Italic.eot","fonts/Roboto/Roboto-Italic.svg","fonts/Roboto/Roboto-Italic.ttf","fonts/Roboto/Roboto-Italic.woff","fonts/Roboto/Roboto-Italic.woff2","fonts/Roboto/Roboto-Light.eot","fonts/Roboto/Roboto-Light.svg","fonts/Roboto/Roboto-Light.ttf","fonts/Roboto/Roboto-Light.woff","fonts/Roboto/Roboto-Light.woff2","fonts/Roboto/Roboto-LightItalic.eot","fonts/Roboto/Roboto-LightItalic.svg","fonts/Roboto/Roboto-LightItalic.ttf","fonts/Roboto/Roboto-LightItalic.woff","fonts/Roboto/Roboto-LightItalic.woff2","fonts/Roboto/Roboto-Medium.eot","fonts/Roboto/Roboto-Medium.svg","fonts/Roboto/Roboto-Medium.ttf","fonts/Roboto/Roboto-Medium.woff","fonts/Roboto/Roboto-Medium.woff2","fonts/Roboto/Roboto-MediumItalic.eot","fonts/Roboto/Roboto-MediumItalic.svg","fonts/Roboto/Roboto-MediumItalic.ttf","fonts/Roboto/Roboto-MediumItalic.woff","fonts/Roboto/Roboto-MediumItalic.woff2","fonts/Roboto/Roboto-Regular.eot","fonts/Roboto/Roboto-Regular.svg","fonts/Roboto/Roboto-Regular.ttf","fonts/Roboto/Roboto-Regular.woff","fonts/Roboto/Roboto-Regular.woff2","fonts/Roboto/Roboto-Thin.eot","fonts/Roboto/Roboto-Thin.svg","fonts/Roboto/Roboto-Thin.ttf","fonts/Roboto/Roboto-Thin.woff","fonts/Roboto/Roboto-Thin.woff2","fonts/Roboto/Roboto-ThinItalic.eot","fonts/Roboto/Roboto-ThinItalic.svg","fonts/Roboto/Roboto-ThinItalic.ttf","fonts/Roboto/Roboto-ThinItalic.woff","fonts/Roboto/Roboto-ThinItalic.woff2","fonts/Rubik/Rubik-Black.eot","fonts/Rubik/Rubik-Black.svg","fonts/Rubik/Rubik-Black.ttf","fonts/Rubik/Rubik-Black.woff","fonts/Rubik/Rubik-Black.woff2","fonts/Rubik/Rubik-BlackItalic.eot","fonts/Rubik/Rubik-BlackItalic.svg","fonts/Rubik/Rubik-BlackItalic.ttf","fonts/Rubik/Rubik-BlackItalic.woff","fonts/Rubik/Rubik-BlackItalic.woff2","fonts/Rubik/Rubik-Bold.eot","fonts/Rubik/Rubik-Bold.svg","fonts/Rubik/Rubik-Bold.ttf","fonts/Rubik/Rubik-Bold.woff","fonts/Rubik/Rubik-Bold.woff2","fonts/Rubik/Rubik-BoldItalic.eot","fonts/Rubik/Rubik-BoldItalic.svg","fonts/Rubik/Rubik-BoldItalic.ttf","fonts/Rubik/Rubik-BoldItalic.woff","fonts/Rubik/Rubik-BoldItalic.woff2","fonts/Rubik/Rubik-ExtraBold.eot","fonts/Rubik/Rubik-ExtraBold.svg","fonts/Rubik/Rubik-ExtraBold.ttf","fonts/Rubik/Rubik-ExtraBold.woff","fonts/Rubik/Rubik-ExtraBold.woff2","fonts/Rubik/Rubik-ExtraBoldItalic.eot","fonts/Rubik/Rubik-ExtraBoldItalic.svg","fonts/Rubik/Rubik-ExtraBoldItalic.ttf","fonts/Rubik/Rubik-ExtraBoldItalic.woff","fonts/Rubik/Rubik-ExtraBoldItalic.woff2","fonts/Rubik/Rubik-Italic.eot","fonts/Rubik/Rubik-Italic.svg","fonts/Rubik/Rubik-Italic.ttf","fonts/Rubik/Rubik-Italic.woff","fonts/Rubik/Rubik-Italic.woff2","fonts/Rubik/Rubik-Light.eot","fonts/Rubik/Rubik-Light.svg","fonts/Rubik/Rubik-Light.ttf","fonts/Rubik/Rubik-Light.woff","fonts/Rubik/Rubik-Light.woff2","fonts/Rubik/Rubik-LightItalic.eot","fonts/Rubik/Rubik-LightItalic.svg","fonts/Rubik/Rubik-LightItalic.ttf","fonts/Rubik/Rubik-LightItalic.woff","fonts/Rubik/Rubik-LightItalic.woff2","fonts/Rubik/Rubik-Medium.eot","fonts/Rubik/Rubik-Medium.svg","fonts/Rubik/Rubik-Medium.ttf","fonts/Rubik/Rubik-Medium.woff","fonts/Rubik/Rubik-Medium.woff2","fonts/Rubik/Rubik-MediumItalic.eot","fonts/Rubik/Rubik-MediumItalic.svg","fonts/Rubik/Rubik-MediumItalic.ttf","fonts/Rubik/Rubik-MediumItalic.woff","fonts/Rubik/Rubik-MediumItalic.woff2","fonts/Rubik/Rubik-Regular.eot","fonts/Rubik/Rubik-Regular.svg","fonts/Rubik/Rubik-Regular.ttf","fonts/Rubik/Rubik-Regular.woff","fonts/Rubik/Rubik-Regular.woff2","fonts/Rubik/Rubik-SemiBold.eot","fonts/Rubik/Rubik-SemiBold.svg","fonts/Rubik/Rubik-SemiBold.ttf","fonts/Rubik/Rubik-SemiBold.woff","fonts/Rubik/Rubik-SemiBold.woff2","fonts/Rubik/Rubik-SemiBoldItalic.eot","fonts/Rubik/Rubik-SemiBoldItalic.svg","fonts/Rubik/Rubik-SemiBoldItalic.ttf","fonts/Rubik/Rubik-SemiBoldItalic.woff","fonts/Rubik/Rubik-SemiBoldItalic.woff2"]),
	mimeTypes: {".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.0omGfLzc.js","app":"_app/immutable/entry/app.CM7czb2Z.js","imports":["_app/immutable/entry/start.0omGfLzc.js","_app/immutable/chunks/entry.B1sIxLZ4.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CM7czb2Z.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DMcBTYY0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/add",
				pattern: /^\/add\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/_server.js'))
			},
			{
				id: "/api/add",
				pattern: /^\/api\/add\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/add/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
