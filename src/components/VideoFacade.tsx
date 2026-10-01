"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { HiPlay } from "react-icons/hi2";

interface VideoFacadeProps {
  videoId: string;
  title: string;
  poster: StaticImageData;
  label?: string;
  className?: string;
}

// Mostra a capa e só carrega o player do YouTube quando o paciente clica,
// deixando o carregamento inicial da página mais leve.
const VideoFacade: React.FC<VideoFacadeProps> = ({
  videoId,
  title,
  poster,
  label,
  className,
}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={twMerge(
        "relative aspect-video w-full overflow-hidden rounded-[1.125rem] bg-espresso lg:rounded-3xl",
        className,
      )}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-cream"
        >
          <span className="sr-only">Assistir vídeo: {title}</span>
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover object-[78%_center] lg:object-[70%_center]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-espresso/30 transition-colors duration-200 group-hover:bg-espresso/40"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-espresso shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform duration-200 motion-safe:group-hover:scale-105 lg:h-24 lg:w-24"
          >
            <HiPlay className="ml-1 h-6 w-6 lg:h-8 lg:w-8" />
          </span>
          {label && (
            <span
              aria-hidden="true"
              className="absolute bottom-5 left-6 hidden text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ivory md:block lg:bottom-6 lg:left-7"
            >
              {label}
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default VideoFacade;
