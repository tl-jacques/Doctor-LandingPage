import { describe, expect, it } from "vitest";

import nextConfig, { securityHeaders } from "../../next.config.mjs";

const header = (key: string) =>
  securityHeaders.find((h) => h.key === key)?.value;

describe("Cabeçalhos de segurança", () => {
  it("valem para todas as rotas e escondem o X-Powered-By", async () => {
    const rules = await nextConfig.headers!();

    expect(rules).toEqual([{ source: "/:path*", headers: securityHeaders }]);
    expect(nextConfig.poweredByHeader).toBe(false);
  });

  it("impedem que o site seja embutido em outra página", () => {
    expect(header("X-Frame-Options")).toBe("DENY");
    expect(header("Content-Security-Policy")).toContain(
      "frame-ancestors 'none'",
    );
  });

  it("não bloqueiam o que o player do YouTube precisa", () => {
    const permissions = header("Permissions-Policy")!;

    for (const feature of [
      "autoplay",
      "fullscreen",
      "encrypted-media",
      "picture-in-picture",
    ]) {
      expect(permissions).not.toContain(feature);
    }
    // a CSP não restringe scripts nem iframes de terceiros (gtag, YouTube)
    expect(header("Content-Security-Policy")).not.toMatch(
      /script-src|default-src|frame-src/,
    );
  });
});
