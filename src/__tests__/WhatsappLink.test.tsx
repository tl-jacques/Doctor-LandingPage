import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import WhatsappLink from "@/components/WhatsappLink";
import { whatsappLink } from "@/constants";
import { gtag_report_conversion } from "@/constants/gtm";

describe("WhatsappLink", () => {
  it("abre o WhatsApp em nova aba com segurança", () => {
    render(<WhatsappLink>Agendar</WhatsappLink>);
    const link = screen.getByRole("link", { name: /agendar/i });

    expect(link).toHaveAttribute("href", whatsappLink);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAccessibleName(/abre o whatsapp em uma nova aba/i);
  });

  it("registra a conversão ao clicar", async () => {
    const user = userEvent.setup();
    render(<WhatsappLink>Agendar</WhatsappLink>);

    await user.click(screen.getByRole("link", { name: /agendar/i }));

    expect(vi.mocked(gtag_report_conversion)).toHaveBeenCalledWith(
      whatsappLink,
    );
  });
});
