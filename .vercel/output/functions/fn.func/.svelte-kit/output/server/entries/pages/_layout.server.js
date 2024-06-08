const prerender = false;
const ssr = true;
const csr = true;
function load({ setHeaders }) {
  setHeaders({
    "Cache-Control": "public, must-revalidate",
    "Expires": new Date(Date.now() + 60 * 60 * 24 * 7 * 1e3).toUTCString()
  });
}
export {
  csr,
  load,
  prerender,
  ssr
};
