import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1yefrpz_START --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- HEAD_svelte-1yefrpz_END -->`, ""} ${slots.default ? slots.default({}) : ``} `;
});
export {
  Layout as default
};
