export interface GTMEvent {
  event: string;
  [key: string]: any;
}

declare global {
  interface Window {
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
