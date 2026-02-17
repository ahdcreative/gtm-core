export interface GTMEvent {
  event: string;
  // biome-ignore lint/suspicious/noExplicitAny: GTM events can have any structure
  [key: string]: any;
}

declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: DataLayer is an array of anything
    dataLayer: any[];
  }
}

/**
 * Pushes an event to the GTM DataLayer.
 * Initializes dataLayer if it doesn't exist.
 */
export function pushToDataLayer(event: GTMEvent | object): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
