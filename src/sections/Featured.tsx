import { FaWhatsapp } from "react-icons/fa";
import { HiPlay } from "react-icons/hi2";

import { featuredVideo } from "@/constants";
import VideoFacade from "@/components/VideoFacade";
import WhatsappLink from "@/components/WhatsappLink";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";

// Destaca a última palavra do título em itálico, como nos demais títulos
const titleWords = featuredVideo.title.split(" ");
const titleStart = titleWords.slice(0, -1).join(" ");
const titleEnd = titleWords[titleWords.length - 1];

const Featured = () => {
  return (
    <section
      id="em-destaque"
      aria-labelledby="destaque-title"
      className="bg-ivory pb-20 lg:pb-[7.5rem]"
    >
      <div className="container-page">
        {/* Mobile: vídeo em cima e texto embaixo. Desktop: vídeo à esquerda, texto à direita. */}
        <article className="grid gap-7 rounded-3xl bg-espresso p-3 pb-8 text-cream lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:items-center lg:gap-14 lg:rounded-[1.75rem] lg:p-5 xl:gap-16">
          <VideoFacade
            videoId={featuredVideo.id}
            title={featuredVideo.title}
            className="rounded-[1.125rem] lg:rounded-[1.25rem]"
            coverTone="dark"
            cover={
              <span aria-hidden="true" className="absolute inset-0">
                <YouTubeThumbnail videoId={featuredVideo.id} />
                <span className="absolute inset-0 bg-espresso/25 transition-colors duration-200 group-hover:bg-espresso/40" />
                <span className="absolute left-1/2 top-1/2 flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-espresso shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform duration-200 motion-safe:group-hover:scale-105 lg:h-20 lg:w-20">
                  <HiPlay className="ml-1 h-6 w-6 lg:h-7 lg:w-7" />
                </span>
                <span className="absolute bottom-5 left-6 hidden text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ivory md:block">
                  Vídeo · YouTube
                </span>
              </span>
            }
          />

          <div className="flex flex-col gap-5 px-3 lg:gap-6 lg:px-0 lg:pr-8 xl:pr-12">
            <p className="self-start rounded-full border border-bronze-light/40 bg-bronze-light/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-bronze-light">
              Em destaque
            </p>
            <h2
              id="destaque-title"
              className="heading-display text-[2.375rem] leading-[1.02] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]"
            >
              {titleStart}{" "}
              <em className="italic text-bronze-light">{titleEnd}</em>
            </h2>
            <p className="text-base leading-[1.65] text-mist lg:text-[1.0625rem]">
              {featuredVideo.text}
            </p>
            <WhatsappLink className="btn-pill bg-bronze-light text-espresso hover:bg-cream focus-visible:outline-bronze-light sm:self-start">
              <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
              Agendar consulta
            </WhatsappLink>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Featured;
