import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "@/app/page";
import { navLinks } from "@/constants";

describe("Página inicial", () => {
  it("tem uma seção para cada link do menu", () => {
    const { container } = render(<Home />);

    for (const link of navLinks) {
      expect(
        container.querySelector(link.href),
        `seção ${link.href} não encontrada`,
      ).not.toBeNull();
    }
  });

  it("separa cabeçalho, conteúdo e rodapé em landmarks", () => {
    render(<Home />);

    // um de cada, no nível da página (não aninhados dentro de <main>)
    expect(screen.getAllByRole("banner")).toHaveLength(1);
    expect(screen.getAllByRole("main")).toHaveLength(1);
    expect(screen.getAllByRole("contentinfo")).toHaveLength(1);
    expect(
      within(screen.getByRole("banner")).getByRole("navigation", {
        name: "Principal",
      }),
    ).toBeInTheDocument();
  });

  it("tem um único h1, dentro do conteúdo principal", () => {
    render(<Home />);
    const [h1] = screen.getAllByRole("heading", { level: 1 });

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("main")).toContainElement(h1);
  });

  it("começa com um link para pular o menu", async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.tab();
    const skip = document.activeElement as HTMLAnchorElement;

    expect(skip).toHaveTextContent("Pular para o conteúdo");
    expect(skip).toHaveAttribute("href", "#conteudo");
    expect(screen.getByRole("main")).toHaveAttribute("id", "conteudo");
  });
});
