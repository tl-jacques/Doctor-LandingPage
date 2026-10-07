import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";

// next/font só funciona dentro do Next; para ler o metadata basta um dublê
vi.mock("next/font/google", () => ({
  DM_Sans: () => ({ variable: "font-sans" }),
  Instrument_Serif: () => ({ variable: "font-serif" }),
}));

import { metadata } from "@/app/layout";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import StructuredData, { physicianSchema } from "@/components/StructuredData";
import { contact, instagramLink } from "@/constants";
import { siteUrl } from "@/constants/site";

describe("SEO", () => {
  it("tem título e descrição que dizem quem, o quê e onde", () => {
    expect(metadata.title).toMatch(/dr\. jorge medeiros/i);
    expect(metadata.title).toMatch(/dermatologista/i);
    expect(metadata.title).toMatch(/sobral/i);
    expect(metadata.description).toMatch(/hapvida/i);
    // o Google corta descrições muito longas
    expect(String(metadata.description).length).toBeLessThanOrEqual(200);
  });

  it("configura a prévia de compartilhamento em português", () => {
    expect(metadata.metadataBase?.toString()).toBe(`${siteUrl}/`);
    expect(metadata.openGraph).toMatchObject({
      type: "website",
      locale: "pt_BR",
    });
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image" });
    expect(metadata.alternates?.canonical).toBe("/");
  });

  it("libera a indexação e aponta o sitemap", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: `${siteUrl}/sitemap.xml`,
    });
    expect(sitemap().map((entry) => entry.url)).toEqual([`${siteUrl}/`]);
  });

  it("publica os dados do médico em schema.org (JSON-LD)", () => {
    const { container } = render(<StructuredData />);
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script!.textContent!);

    expect(data).toEqual(physicianSchema);
    expect(data["@type"]).toBe("Physician");
    expect(data.medicalSpecialty).toBe("Dermatology");
    expect(data.address.addressLocality).toBe("Sobral");
    expect(data.address.postalCode).toBe(contact.city.match(/\d{5}-\d{3}/)![0]);
    expect(data.sameAs).toContain(instagramLink);
  });
});
