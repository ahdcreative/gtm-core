// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from "vitest";
import { loadGTM } from "../src/container";
import { pushToDataLayer } from "../src/datalayer";

describe("GTM Core", () => {
  beforeEach(() => {
    // Reset DOM and Window
    document.head.innerHTML = "";
    window.dataLayer = [];
    vi.restoreAllMocks();
  });

  it("should initialize dataLayer", () => {
    pushToDataLayer({ event: "test" });
    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer[0]).toEqual({ event: "test" });
  });

  it("should inject GTM script", () => {
    loadGTM({ id: "GTM-TEST" });

    const script = document.getElementById("gtm-script") as HTMLScriptElement;
    expect(script).toBeTruthy();
    expect(script.src).toContain("id=GTM-TEST");
    expect(window.dataLayer).toHaveLength(1); // gtm.start event
  });

  it("should not inject duplicate script", () => {
    loadGTM({ id: "GTM-TEST" });
    loadGTM({ id: "GTM-TEST" });

    const scripts = document.querySelectorAll("#gtm-script");
    expect(scripts).toHaveLength(1);
  });

  it("should inject GTM noscript", async () => {
    const { loadNoScript } = await import("../src/container");
    loadNoScript({ id: "GTM-TEST" });

    const noscript = document.getElementById("gtm-noscript");
    expect(noscript).toBeTruthy();

    const iframe = noscript?.querySelector("iframe");
    expect(iframe).toBeTruthy();
    expect(iframe?.src).toContain("id=GTM-TEST");
    expect(iframe?.src).toContain("ns.html");
  });
});
