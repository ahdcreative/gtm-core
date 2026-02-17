# AHDCreative GTM Core

A framework-agnostic TypeScript core for Google Tag Manager integration.

## Features

-   🏷️ **Type-safe**: Full TypeScript support.
-   🚀 **Lightweight**: Zero dependencies.
-   🔒 **Secure**: Support for CSP Nonce.
-   ⚡ **Performance**: Defer loading support.
-   🕵️ **NoScript**: Fallback iframe support.

## Installation

```bash
npm install @ahdcreative/gtm-core
```

## Usage

### 1. Initialize GTM

```typescript
import { loadGTM, loadNoScript } from '@ahdcreative/gtm-core'

const options = {
  id: 'GTM-XXXXXX', // Your GTM ID
  defer: true,      // optional
  nonce: 'xyz123'   // optional
}

// In your app entry point
loadGTM(options)
loadNoScript(options) // Optional: for <noscript> support
```

### 2. Push Events

```typescript
import { pushToDataLayer } from '@ahdcreative/gtm-core'

pushToDataLayer({
  event: 'purchase',
  ecommerce: {
    currency: 'EUR',
    value: 29.99
    // ...
  }
})
```

## License

MIT
