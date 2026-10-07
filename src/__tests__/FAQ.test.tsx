import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FAQ from "@/sections/FAQ";
import { questionsAndAnswer, whatsappLink } from "@/constants";

const question = (index: number) =>
  screen.getByRole("button", { name: questionsAndAnswer[index].title });

describe("FAQ (Perguntas frequentes)", () => {
  it("tem o título e uma pergunta por item, como cabeçalho", () => {
    render(<FAQ />);

    expect(
      screen.getByRole("heading", { level: 2, name: /perguntas frequentes/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(
      questionsAndAnswer.length,
    );
  });

  it("abre a primeira pergunta e mantém as outras fechadas", () => {
    render(<FAQ />);

    expect(question(0)).toHaveAttribute("aria-expanded", "true");
    questionsAndAnswer.slice(1).forEach((_, i) => {
      expect(question(i + 1)).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("liga cada pergunta à sua resposta e alterna ao clicar", async () => {
    const user = userEvent.setup();
    render(<FAQ />);
    const button = question(1);
    const panel = document.getElementById(
      button.getAttribute("aria-controls")!,
    )!;

    expect(panel).toHaveTextContent(questionsAndAnswer[1].answer);
    expect(panel).toHaveAttribute("aria-hidden", "true");

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(panel).toHaveAttribute("aria-hidden", "false");
    expect(
      screen.getByRole("region", { name: questionsAndAnswer[1].title }),
    ).toBe(panel);

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("funciona pelo teclado", async () => {
    const user = userEvent.setup();
    render(<FAQ />);

    question(2).focus();
    await user.keyboard("{Enter}");
    expect(question(2)).toHaveAttribute("aria-expanded", "true");
    await user.keyboard(" ");
    expect(question(2)).toHaveAttribute("aria-expanded", "false");
  });

  it("oferece o WhatsApp para outras dúvidas", () => {
    render(<FAQ />);

    expect(
      screen.getByRole("link", { name: /enviar uma pergunta/i }),
    ).toHaveAttribute("href", whatsappLink);
  });
});
