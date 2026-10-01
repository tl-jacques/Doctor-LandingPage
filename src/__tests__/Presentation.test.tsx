import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Presentation from "@/sections/Presentation";
import { presentationVideo } from "@/constants";

describe("Presentation", () => {
  it("só carrega o YouTube depois do clique no play", async () => {
    const user = userEvent.setup();
    const { container } = render(<Presentation />);

    expect(container.querySelector("iframe")).toBeNull();

    await user.click(
      screen.getByRole("button", { name: /assistir vídeo: apresentação/i }),
    );

    const iframe = screen.getByTitle(presentationVideo.title);
    expect(iframe.tagName).toBe("IFRAME");
    expect(iframe).toHaveAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${presentationVideo.id}?autoplay=1&rel=0`,
    );
  });

  it("tem a âncora usada pelo menu e pelo botão do topo", () => {
    const { container } = render(<Presentation />);

    expect(container.querySelector("section#apresentacao")).not.toBeNull();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /referência em dermatologia em sobral/i,
      }),
    ).toBeInTheDocument();
  });
});
