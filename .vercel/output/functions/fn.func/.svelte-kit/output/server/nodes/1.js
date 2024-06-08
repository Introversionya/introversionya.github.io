

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CiO8wgZA.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DMcBTYY0.js","_app/immutable/chunks/entry.B1sIxLZ4.js"];
export const stylesheets = [];
export const fonts = [];
