import { c as create_ssr_component, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let a = 0;
  let b = 0;
  let total = 0;
  return `<input type="number"${add_attribute("value", a)}> +
<input type="number"${add_attribute("value", b)}> =
${escape(total)} <button data-svelte-h="svelte-lb7mh7">Calculate</button>`;
});
export {
  Page as default
};
