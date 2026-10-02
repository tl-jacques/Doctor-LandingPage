"use client";

import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface YouTubeThumbnailProps {
  videoId: string;
  className?: string;
}

// Capa oficial do vídeo no YouTube. A versão em alta (maxresdefault) não existe
// para todo vídeo; nesse caso cai para a hqdefault, que sempre existe.
const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({
  videoId,
  className,
}) => {
  const [quality, setQuality] = useState<"maxresdefault" | "hqdefault">(
    "maxresdefault",
  );

  return (
    <Image
      src={`https://i.ytimg.com/vi/${videoId}/${quality}.jpg`}
      alt=""
      fill
      unoptimized
      className={twMerge("object-cover", className)}
      onError={() => setQuality("hqdefault")}
      onLoad={(event) => {
        // Quando a alta resolução não existe, o YouTube responde 200 com uma
        // imagem genérica de 120×90 em vez de erro
        if (
          quality === "maxresdefault" &&
          event.currentTarget.naturalWidth <= 120
        ) {
          setQuality("hqdefault");
        }
      }}
    />
  );
};

export default YouTubeThumbnail;
