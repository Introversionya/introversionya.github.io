

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Cy4WDnNI.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DMcBTYY0.js"];
export const stylesheets = [];
export const fonts = [];
