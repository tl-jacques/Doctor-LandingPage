// Cabeçalhos de segurança aplicados a todas as respostas.
// Ficam de fora de propósito:
// - CSP de scripts: o gtag e o Next usam scripts inline; uma política que
//   os permita protegeria pouco e arriscaria quebrar a medição de conversões.
// - autoplay/fullscreen no Permissions-Policy: o player do YouTube precisa
//   deles para tocar ao clicar e abrir em tela cheia.
export const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
