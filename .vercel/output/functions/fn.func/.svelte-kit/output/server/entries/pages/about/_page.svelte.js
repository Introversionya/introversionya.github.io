import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ug0b2p_START -->${$$result.title = `<title>about</title>`, ""}<!-- HEAD_svelte-1ug0b2p_END -->`, ""} <h1 data-svelte-h="svelte-t7i5gh">about</h1> <a href="/" data-svelte-h="svelte-1bzf17w">home</a> `;
});
export {
  Page as default
};
