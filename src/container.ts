import { assertBrowser, assertGtmId } from "./assert";
import { pushToDataLayer } from "./datalayer";
import type { GTMOptions } from "./options";
import { hasNoScript, hasScript } from "./support";
import { buildQueryString } from "./utils";

/**
 * Injects the Google Tag Manager script into the document head.
 */
export function loadGTM(options: GTMOptions): void {
  if (!assertBrowser()) return;
  const { id, queryParams, defer = false, nonce } = options;

  if (!assertGtmId(id)) return;
  if (hasScript()) return;

  // Initialize dataLayer
  pushToDataLayer({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  // Build URL
  const params = buildQueryString(queryParams);
  params.append("id", id);

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = !defer;
  script.defer = defer;
  if (nonce) script.nonce = nonce;
  script.src = `https://www.googletagmanager.com/gtm.js?${params.toString()}`;

  document.head.appendChild(script);
}

/**
 * Injects the Google Tag Manager <noscript> iframe into the document body.
 */
export function loadNoScript(options: GTMOptions): void {
  if (!assertBrowser()) return;
  const { id, queryParams } = options;

  if (!assertGtmId(id)) return;
  if (hasNoScript()) return;

  // Build URL
  const params = buildQueryString(queryParams);
  params.append("id", id);
  const src = `https://www.googletagmanager.com/ns.html?${params.toString()}`;

  const noscript = document.createElement("noscript");
  noscript.id = "gtm-noscript";

  const iframe = document.createElement("iframe");
  iframe.src = src;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";

  noscript.appendChild(iframe);
  document.body.prepend(noscript);
}
