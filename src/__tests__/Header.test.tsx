import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";

import Header from "@/sections/Header";
import { credentials, whatsappLink } from "@/constants";
import { hero } from "@/constants/hero";

describe("Header", () => {
  it("mostra o título principal da página", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /dermatologia clínica, cirúrgica e estética/i,
      }),
    ).toBeInTheDocument();
  });

  it("lista todas as credenciais do médico", () => {
    render(<Header />);

    for (const item of credentials) {
      const term = screen.getByText(item.label, { selector: "dt" });
      expect(term.nextElementSibling).toHaveTextContent(item.value);
    }
  });

  it("leva o paciente ao WhatsApp e ao vídeo de apresentação", () => {
    render(<Header />);
    const heroRegion = screen.getByRole("region", {
      name: /dermatologia clínica/i,
    });

    expect(
      within(heroRegion).getByRole("link", { name: /agendar pelo whatsapp/i }),
    ).toHaveAttribute("href", whatsappLink);
    expect(
      within(heroRegion).getByRole("link", { name: /assistir apresentação/i }),
    ).toHaveAttribute("href", "#apresentacao");
  });

  it("descreve a foto do médico para leitores de tela", () => {
    render(<Header />);

    const img = screen.getByAltText(hero.alt);
    expect(img).toBeInTheDocument();
    expect(hero.alt).toMatch(/dr\. jorge medeiros/i);
  });
});
