import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import VideoFacade from "@/components/VideoFacade";

describe("VideoFacade", () => {
  it("aceita uma capa própria e troca pelo player ao clicar", async () => {
    const user = userEvent.setup();
    render(
      <VideoFacade
        videoId="abc123"
        title="Vídeo de teste"
        cover={<span data-testid="capa">Capa</span>}
      />,
    );

    expect(screen.getByTestId("capa")).toBeInTheDocument();
    expect(screen.queryByTitle("Vídeo de teste")).toBeNull();

    await user.click(
      screen.getByRole("button", { name: /assistir vídeo: vídeo de teste/i }),
    );

    expect(screen.queryByTestId("capa")).toBeNull();
    expect(screen.getByTitle("Vídeo de teste")).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/abc123?autoplay=1&rel=0",
    );
  });
});
