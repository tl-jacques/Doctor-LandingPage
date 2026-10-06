import { afterEach, describe, expect, it, vi } from "vitest";

// O setup global substitui este módulo por um mock; aqui testamos o real.
vi.unmock("@/constants/gtm");

const load = () =>
  vi.importActual<typeof import("@/constants/gtm")>("@/constants/gtm");

describe("Conversão do Google Ads", () => {
  afterEach(() => {
    delete window.gtag;
  });

  it("envia o evento de conversão do WhatsApp para o Google Ads", async () => {
    const { gtag_report_conversion, WHATSAPP_CONVERSION, GOOGLE_ADS_ID } =
      await load();
    const gtag = vi.fn();
    window.gtag = gtag;

    gtag_report_conversion();

    expect(gtag).toHaveBeenCalledWith("event", "conversion", {
      send_to: WHATSAPP_CONVERSION,
      value: 1.0,
      currency: "BRL",
      transport_type: "beacon",
    });
    expect(WHATSAPP_CONVERSION.startsWith(`${GOOGLE_ADS_ID}/`)).toBe(true);
  });

  it("não quebra o clique se o gtag ainda não carregou (ou foi bloqueado)", async () => {
    const { gtag_report_conversion } = await load();
    expect(() => gtag_report_conversion()).not.toThrow();
  });

  it("não redireciona a página atual (o link já abre o WhatsApp em nova aba)", async () => {
    const { gtag_report_conversion } = await load();
    window.gtag = vi.fn();
    const href = window.location.href;

    gtag_report_conversion();

    expect(window.location.href).toBe(href);
    const [, , params] = vi.mocked(window.gtag).mock.calls[0] as [
      string,
      string,
      Record<string, unknown>,
    ];
    expect(params).not.toHaveProperty("event_callback");
  });
});
