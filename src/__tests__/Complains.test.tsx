import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Complains from "@/sections/Complains";
import { mainComplains, whatsappLink } from "@/constants";

// o número é decorativo (aria-hidden): o nome acessível é só o da doença
const card = (title: string) => screen.getByRole("button", { name: title });

describe("Complains", () => {
  it("tem o título da seção", () => {
    render(<Complains />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /principais queixas dos meus pacientes/i,
      }),
    ).toBeInTheDocument();
  });

  it("mostra um card por queixa, numerado e só com o nome", () => {
    render(<Complains />);
    const cards = screen.getAllByRole("button");

    expect(cards).toHaveLength(mainComplains.length);
    cards.forEach((button, index) => {
      const complaint = mainComplains[index];
      expect(button).toHaveTextContent(
        `${String(index + 1).padStart(2, "0")}${complaint.title}`,
      );
      expect(button).not.toHaveTextContent(complaint.text);
    });
  });

  it("abre a primeira explicação por padrão", () => {
    render(<Complains />);
    const [first] = mainComplains;
    const panel = screen.getByRole("region", { name: first.title });

    expect(card(first.title)).toHaveAttribute("aria-expanded", "true");
    expect(
      within(panel).getByRole("heading", { level: 3, name: first.title }),
    ).toBeInTheDocument();
    expect(panel).toHaveTextContent(first.text);
    expect(
      within(panel).getByRole("link", { name: /agendar consulta/i }),
    ).toHaveAttribute("href", whatsappLink);
  });

  it("ao clicar num card, mostra a explicação dele e fecha a anterior", async () => {
    const user = userEvent.setup();
    render(<Complains />);
    const [first, , third] = mainComplains;

    await user.click(card(third.title));

    expect(card(third.title)).toHaveAttribute("aria-expanded", "true");
    expect(card(first.title)).toHaveAttribute("aria-expanded", "false");
    // só um painel visível por vez
    // (a própria <section> rotulada também conta como região; fica de fora)
    const regions = screen
      .getAllByRole("region")
      .filter((region) => region.tagName !== "SECTION");
    expect(regions).toHaveLength(1);
    expect(regions[0]).toHaveTextContent(third.text);
    expect(regions[0].id).toBe(card(third.title).getAttribute("aria-controls"));
  });

  it("mantém todos os textos no HTML para leitores e buscadores", () => {
    const { container } = render(<Complains />);

    for (const complaint of mainComplains) {
      expect(container.textContent).toContain(complaint.text);
    }
    // os fechados ficam ocultos, não removidos
    expect(container.querySelectorAll("[hidden]")).toHaveLength(
      mainComplains.length - 1,
    );
  });
});
