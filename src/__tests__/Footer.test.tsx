import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";

import Footer from "@/sections/Footer";
import { contact, instagramLink, whatsappLink } from "@/constants";

describe("Footer", () => {
  it("convida para o agendamento", () => {
    render(<Footer />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /agende sua consulta em sobral/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /tenho interesse/i }),
    ).toHaveAttribute("href", whatsappLink);
  });

  it("mostra endereço, telefone e Instagram com links corretos", () => {
    const { container } = render(<Footer />);
    const address = container.querySelector("address")!;

    const maps = within(address).getByRole("link", { name: /arte de cuidar/i });
    expect(maps).toHaveAttribute("href", contact.mapsLink);
    expect(maps).toHaveTextContent(contact.street);

    expect(
      within(address).getByRole("link", {
        name: new RegExp(contact.phone.replace(/[()]/g, "\\$&")),
      }),
    ).toHaveAttribute("href", whatsappLink);

    expect(
      within(address).getByRole("link", { name: /@drjorgemedeiros/ }),
    ).toHaveAttribute("href", instagramLink);
  });

  it("abre links externos em nova aba com segurança e avisa leitores de tela", () => {
    render(<Footer />);

    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveAccessibleName(/nova aba/i);
    }
  });

  it("mostra o ano atual e o desenvolvedor", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", {
        name: /desenvolvido por pacientes todo dia/i,
      }),
    ).toHaveTextContent(String(new Date().getFullYear()));
  });
});
