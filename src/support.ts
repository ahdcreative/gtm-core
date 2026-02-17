/**
 * Checks if the GTM script is already in the document.
 */
export function hasScript(): boolean {
  return !!document.getElementById("gtm-script");
}

/**
 * Checks if the GTM noscript iframe is already in the document.
 */
export function hasNoScript(): boolean {
  return !!document.getElementById("gtm-noscript");
}
