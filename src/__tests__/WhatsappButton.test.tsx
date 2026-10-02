import { afterEach, describe, expect, it, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";

import WhatsappButton from "@/components/WhatsappButton";
import { whatsappLink } from "@/constants";

type Callback = (
  entries: Array<{ isIntersecting: boolean; target: Element }>,
) => void;

describe("WhatsappButton (flutuante)", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    document.body.innerHTML = "";
  });

  it("leva ao WhatsApp e tem nome acessível", () => {
    render(<WhatsappButton />);

    expect(
      screen.getByRole("link", { name: /agendar consulta/i }),
    ).toHaveAttribute("href", whatsappLink);
  });

  it("fica oculto enquanto o topo ou o rodapé estão na tela", () => {
    let notify: Callback = () => {};
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        constructor(cb: Callback) {
          notify = cb;
        }
        observe() {}
        disconnect() {}
      },
    );
    const top = document.createElement("header");
    top.id = "topo";
    const footer = document.createElement("footer");
    document.body.append(top, footer);

    render(<WhatsappButton />);
    const link = screen.getByRole("link", {
      name: /agendar consulta/i,
      hidden: true,
    });

    // topo na tela
    act(() => notify([{ isIntersecting: true, target: top }]));
    expect(link).toHaveClass("invisible");

    // meio da página: nem topo nem rodapé
    act(() => notify([{ isIntersecting: false, target: top }]));
    expect(link).toHaveClass("visible");
    expect(link).not.toHaveClass("invisible");

    // chegou ao rodapé
    act(() => notify([{ isIntersecting: true, target: footer }]));
    expect(link).toHaveClass("invisible");
  });
});
