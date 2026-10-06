import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import NotFound, { metadata } from "@/app/not-found";
import { whatsappLink } from "@/constants";

describe("Página 404", () => {
  it("explica o erro em português, com um único h1", () => {
    render(<NotFound />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole("heading", { level: 1, name: /página não encontrada/i }),
    ).toBeInTheDocument();
  });

  it("leva de volta ao início ou ao WhatsApp", () => {
    render(<NotFound />);

    expect(
      screen.getByRole("link", { name: /voltar para o início/i }),
    ).toHaveAttribute("href", "/");
    expect(
      screen.getByRole("link", { name: /agendar pelo whatsapp/i }),
    ).toHaveAttribute("href", whatsappLink);
  });

  it("tem título próprio na aba do navegador", () => {
    expect(metadata.title).toMatch(/página não encontrada/i);
  });
});
