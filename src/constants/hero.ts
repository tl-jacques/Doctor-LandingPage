import type { StaticImageData } from "next/image";

import heroImage from "@/assets/drjorge-semfundo.png";

/**
 * Imagem do topo da página — único lugar para trocá-la.
 *
 * - "recorte": PNG com fundo transparente. No desktop o médico "sai" do arco.
 * - "foto": foto com fundo. No desktop a foto é recortada no formato do arco.
 *
 * No mobile, nos dois casos, a imagem fica atrás do texto com um véu claro
 * que mantém o contraste de leitura.
 */
export type HeroImageKind = "recorte" | "foto";

export const hero: {
  image: StaticImageData;
  kind: HeroImageKind;
  alt: string;
  /** Enquadramento (CSS object-position), ex.: "center top", "60% 20%". */
  position: string;
} = {
  image: heroImage,
  kind: "recorte",
  alt: "Dr. Jorge Medeiros, médico dermatologista",
  position: "center top",
};
