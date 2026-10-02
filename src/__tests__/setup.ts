import "@testing-library/jest-dom/vitest";
import { createElement } from "react";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

// next/image depende do servidor do Next; nos testes basta uma <img> comum.
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    fill: _fill,
    priority: _priority,
    ...props
  }: {
    src: string | { src: string };
    alt: string;
    fill?: boolean;
    priority?: boolean;
  }) =>
    createElement("img", {
      src: typeof src === "string" ? src : src.src,
      alt,
      ...props,
    }),
}));

// O rastreamento do Google Ads só existe no navegador real.
vi.mock("@/constants/gtm", () => ({
  gtag_report_conversion: vi.fn(),
}));
