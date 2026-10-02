import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Featured from "@/sections/Featured";
import { featuredVideo, whatsappLink } from "@/constants";

const thumb = () =>
  document.querySelector<HTMLImageElement>('img[src*="i.ytimg.com"]')!;

describe("Featured (Em destaque)", () => {
  it("mostra a etiqueta, o título, o texto e o agendamento", () => {
    render(<Featured />);

    expect(screen.getByText("Em destaque")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: featuredVideo.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(featuredVideo.text)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /agendar consulta/i }),
    ).toHaveAttribute("href", whatsappLink);
  });

  it("segue o design system: Eyebrow, faixa stone e botão escuro padrão", () => {
    const { container } = render(<Featured />);

    expect(container.querySelector("section")).toHaveClass("bg-stone");
    // Eyebrow = rótulo em caixa alta com o traço decorativo
    const tag = screen.getByText("Em destaque");
    expect(tag).toHaveClass("uppercase", "text-bronze");
    expect(tag.querySelector('span[aria-hidden="true"]')).not.toBeNull();
    expect(screen.getByRole("link", { name: /agendar consulta/i })).toHaveClass(
      "btn-pill",
      "btn-pill-dark",
    );
    // tons reservados às faixas escuras não aparecem numa faixa clara
    expect(container.innerHTML).not.toMatch(
      /bronze-light|text-cream|text-mist/,
    );
  });

  it("usa a capa do próprio vídeo e só carrega o player ao clicar", async () => {
    const user = userEvent.setup();
    const { container } = render(<Featured />);

    expect(thumb()).toHaveAttribute(
      "src",
      `https://i.ytimg.com/vi/${featuredVideo.id}/maxresdefault.jpg`,
    );
    expect(container.querySelector("iframe")).toBeNull();

    await user.click(
      screen.getByRole("button", {
        name: `Assistir vídeo: ${featuredVideo.title}`,
      }),
    );

    expect(screen.getByTitle(featuredVideo.title)).toHaveAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${featuredVideo.id}?autoplay=1&rel=0`,
    );
  });

  it("cai para a capa padrão quando a de alta resolução não existe", () => {
    render(<Featured />);

    fireEvent.error(thumb());

    expect(thumb()).toHaveAttribute(
      "src",
      `https://i.ytimg.com/vi/${featuredVideo.id}/hqdefault.jpg`,
    );
  });
});
