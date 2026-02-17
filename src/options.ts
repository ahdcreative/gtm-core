export interface GTMOptions {
  /**
   * The Google Tag Manager Container ID (GTM-XXXXXX).
   */
  id: string;

  /**
   * Custom query parameters to append to the GTM script URL.
   */
  queryParams?: Record<string, string>;

  /**
   * Whether to defer the script loading.
   * @default false
   */
  defer?: boolean;

  /**
   * Nonce for Content Security Policy.
   */
  nonce?: string;

  /**
   * Whether to enable the <noscript> fallback.
   * @default true
   */
  enabled?: boolean;
}
