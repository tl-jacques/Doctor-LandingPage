import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const fakeImage = { src: "/hero-teste.jpg", width: 800, height: 1000 };

async function renderHeaderWith(kind: "recorte" | "foto") {
  vi.resetModules();
  vi.doMock("@/constants/hero", () => ({
    hero: {
      image: fakeImage,
      kind,
      alt: "Foto de teste do médico",
      position: "40% 20%",
    },
  }));
  const { default: Header } = await import("@/sections/Header");
  return render(<Header />);
}

describe("Imagem do hero", () => {
  afterEach(() => {
    vi.doUnmock("@/constants/hero");
  });

  it("usa a imagem, o texto alternativo e o enquadramento da configuração", async () => {
    await renderHeaderWith("foto");
    const img = screen.getByAltText("Foto de teste do médico");

    expect(img).toHaveAttribute("src", fakeImage.src);
    expect(img).toHaveStyle({ objectPosition: "40% 20%" });
  });

  it.each(["recorte", "foto"] as const)(
    "monta o layout do tipo %s",
    async (kind) => {
      const { container } = await renderHeaderWith(kind);
      const figure = container.querySelector("[data-hero-kind]");

      expect(figure).toHaveAttribute("data-hero-kind", kind);
      // o recorte "sai" do arco; a foto fica presa dentro dele
      const clippedToArch = figure!.querySelector(
        ".lg\\:rounded-t-full.lg\\:overflow-hidden",
      );
      if (kind === "foto") {
        expect(clippedToArch).not.toBeNull();
      } else {
        expect(clippedToArch).toBeNull();
      }
    },
  );
});
