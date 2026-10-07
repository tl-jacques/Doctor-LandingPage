import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";

import Complains from "@/sections/Complains";
import { mainComplains } from "@/constants";

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

  it("lista todas as queixas, numeradas e em ordem", () => {
    render(<Complains />);
    const items = within(screen.getByRole("list")).getAllByRole("listitem");

    expect(items).toHaveLength(mainComplains.length);
    items.forEach((item, index) => {
      const complaint = mainComplains[index];
      expect(within(item).getByRole("heading", { level: 3 })).toHaveTextContent(
        complaint.title,
      );
      expect(item).toHaveTextContent(complaint.text);
      expect(item).toHaveTextContent(String(index + 1).padStart(2, "0"));
    });
  });
});
