import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Work from "@/sections/Work";
import { services, whatsappLink, works } from "@/constants";

describe("Work", () => {
  it("tem o título e os tipos de atendimento", () => {
    render(<Work />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /veja um pouco mais de como posso lhe ajudar/i,
      }),
    ).toBeInTheDocument();
    const tags = screen
      .getAllByRole("listitem")
      .map((item) => item.textContent);
    expect(tags).toEqual(services);
  });

  it("mostra um card por vídeo, com título, texto e link de agendamento", () => {
    render(<Work />);
    const cards = screen.getAllByRole("article");

    expect(cards).toHaveLength(works.length);
    cards.forEach((card, index) => {
      const work = works[index];
      expect(within(card).getByRole("heading", { level: 3 })).toHaveTextContent(
        work.title,
      );
      expect(card).toHaveTextContent(work.text);
      expect(
        within(card).getByRole("link", { name: /agendar consulta/i }),
      ).toHaveAttribute("href", whatsappLink);
    });
  });

  it("carrega somente o vídeo escolhido", async () => {
    const user = userEvent.setup();
    const { container } = render(<Work />);
    const [, second] = works;

    await user.click(
      screen.getByRole("button", { name: `Assistir vídeo: ${second.title}` }),
    );

    const iframes = container.querySelectorAll("iframe");
    expect(iframes).toHaveLength(1);
    expect(iframes[0]).toHaveAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${second.videoId}?autoplay=1&rel=0`,
    );
  });
});
