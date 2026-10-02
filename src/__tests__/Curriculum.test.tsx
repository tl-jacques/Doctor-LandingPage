import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";

import Curriculum from "@/sections/Curriculum";
import { education } from "@/constants";

describe("Curriculum (Sobre)", () => {
  it("apresenta o médico com registro e título", () => {
    render(<Curriculum />);

    expect(screen.getByText("CRM/CE 21881 · RQE 16115")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /dr\. jorge medeiros, médico dermatologista/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/dr\. jorge medeiros de jaleco/i),
    ).toBeInTheDocument();
  });

  it("lista a formação na ordem", () => {
    render(<Curriculum />);
    const items = within(screen.getByRole("list")).getAllByRole("listitem");

    expect(items).toHaveLength(education.length);
    items.forEach((item, index) => {
      expect(item).toHaveTextContent(education[index].title);
      expect(item).toHaveTextContent(education[index].detail);
    });
  });

  it("informa o atendimento particular e Hapvida", () => {
    render(<Curriculum />);

    expect(screen.getByAltText("Hapvida")).toBeInTheDocument();
    expect(
      screen.getByText(/atendimento particular e pelo convênio/i),
    ).toBeInTheDocument();
  });

  it("não repete o selo SBD para leitores de tela", () => {
    const { container } = render(<Curriculum />);
    const seal = within(container).getByText("Membro titular");

    expect(seal.closest('[aria-hidden="true"]')).not.toBeNull();
  });
});
