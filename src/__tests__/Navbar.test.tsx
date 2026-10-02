import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navbar from "@/components/Navbar";
import { navLinks } from "@/constants";

const getMenu = () => document.getElementById("menu-mobile")!;

describe("Navbar", () => {
  it("começa com o menu mobile fechado", () => {
    render(<Navbar />);

    expect(getMenu()).not.toBeVisible();
    expect(screen.getByRole("button", { name: "Abrir menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("abre o menu no botão e fecha com Esc", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(getMenu()).toBeVisible();
    expect(screen.getByRole("button", { name: "Fechar menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    await user.keyboard("{Escape}");
    expect(getMenu()).not.toBeVisible();
  });

  it("fecha o menu ao escolher um link", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    const firstLink = getMenu().querySelector("a")!;
    await user.click(firstLink);

    expect(getMenu()).not.toBeVisible();
  });

  it("aponta cada link para a âncora da seção", () => {
    render(<Navbar />);

    const hrefs = Array.from(getMenu().querySelectorAll("ul a")).map((a) =>
      a.getAttribute("href"),
    );
    expect(hrefs).toEqual(navLinks.map((link) => link.href));
  });
});
