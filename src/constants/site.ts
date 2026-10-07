/**
 * Endereço público do site, usado em links absolutos (prévia de
 * compartilhamento, sitemap, dados estruturados).
 * Para um domínio próprio, defina NEXT_PUBLIC_SITE_URL na Vercel
 * (ex.: https://www.drjorgemedeiros.com.br).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const siteName = "Dr. Jorge Medeiros · Dermatologia";

export const siteTitle = "Dr. Jorge Medeiros | Dermatologista em Sobral-CE";

export const siteDescription =
  "Dermatologista em Sobral-CE: consultas e cirurgias dermatológicas para acne, melasma, psoríase, dermatite atópica e câncer de pele. Atendimento particular e pelo convênio Hapvida.";
