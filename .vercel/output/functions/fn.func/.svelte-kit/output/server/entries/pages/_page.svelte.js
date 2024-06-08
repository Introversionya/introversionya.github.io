import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
let title = "home";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""} <h1 data-svelte-h="svelte-jyborc">home!</h1> <a href="/about" data-svelte-h="svelte-pmt1op">about</a> `;
});
export {
  Page as default
};
