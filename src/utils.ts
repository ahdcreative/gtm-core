/**
 * Builds the GTM query string.
 */
export function buildQueryString(queryParams?: Record<string, string>): URLSearchParams {
  return new URLSearchParams(queryParams);
}
