/**
 * Asserts that the code is running in a browser environment.
 */
export function assertBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

/**
 * Asserts that a GTM ID is provided.
 */
export function assertGtmId(id: string | undefined): boolean {
  if (!id) {
    console.warn("[GTM] No ID provided");
    return false;
  }
  return true;
}
