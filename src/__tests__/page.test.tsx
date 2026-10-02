import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

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
});
