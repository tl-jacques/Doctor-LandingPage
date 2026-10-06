// Google Ads (gtag.js). O <GoogleAnalytics> do layout carrega a biblioteca e
// cria window.gtag; aqui só ficam os IDs e o disparo da conversão.
export const GOOGLE_ADS_ID = "AW-16683907811";
export const WHATSAPP_CONVERSION = "AW-16683907811/yc4WCKebvc4ZEOP1wJM-";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Registra a conversão "clique para agendar no WhatsApp".
 * O link já abre o WhatsApp em nova aba, então a página atual não navega;
 * `beacon` garante o envio mesmo se o navegador trocar de aba em seguida.
 */
export function gtag_report_conversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", "conversion", {
    send_to: WHATSAPP_CONVERSION,
    value: 1.0,
    currency: "BRL",
    transport_type: "beacon",
  });
}
