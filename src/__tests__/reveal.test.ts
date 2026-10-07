import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync("src/app/globals.css", "utf8");

describe("Animação de entrada (.reveal)", () => {
  it("só existe para quem não pediu menos movimento e em navegadores com suporte", () => {
    const motionBlock = css.slice(
      css.indexOf("@media (prefers-reduced-motion: no-preference)"),
    );

    expect(motionBlock).toContain("@supports (animation-timeline: view())");
    expect(motionBlock).toContain(".reveal");
    // fora desse bloco a classe não aplica nenhum estilo (conteúdo sempre visível)
    expect(
      css
        .slice(0, css.indexOf("@media (prefers-reduced-motion: no-preference)"))
        .includes(".reveal"),
    ).toBe(false);
  });
});
