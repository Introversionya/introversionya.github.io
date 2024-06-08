export const prerender = false; // SSG. Принимает true | false | auto
export const ssr = true; // false переключит в режим SPA
export const csr = true; // Client-Side Rendering - отправляет на клиент js
export const trailingSlash = 'never'; // определяет, как обрабатывать конечные слэши в URL (never по умолчанию)

export function load({ setHeaders }) {
	setHeaders({
		'Cache-Control': `public, max-age=${60 * 60 * 24 * 7}, must-revalidate`,
		'Expires': new Date(Date.now() + 60 * 60 * 24 * 7 * 1000).toUTCString()
	});
}



/* Попробовать реализовать БД: */
/* src/routes/blog/[slug]/+layout.server.js */
// import * as db from '$lib/server/database';

// export async function load() {
//   return { posts: await db.getPostSummaries() };
// }
