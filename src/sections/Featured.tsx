import { FaWhatsapp } from "react-icons/fa";
import { HiPlay } from "react-icons/hi2";

import { featuredVideo } from "@/constants";
import Eyebrow from "@/components/Eyebrow";
import VideoFacade from "@/components/VideoFacade";
import WhatsappLink from "@/components/WhatsappLink";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";

// Ênfase em itálico na última palavra, como nos demais títulos do site
const titleWords = featuredVideo.title.split(" ");
const titleStart = titleWords.slice(0, -1).join(" ");
const titleEnd = titleWords[titleWords.length - 1];

/**
 * Faixa clara (stone) com o mesmo esqueleto da Apresentação:
 * mobile título → vídeo → texto → botão; desktop vídeo à esquerda e texto à direita.
 */
const Featured = () => {
  return (
    <section
      id="em-destaque"
      aria-labelledby="destaque-title"
      className="bg-stone py-[4.5rem] text-espresso lg:py-[7.5rem]"
    >
      <div className="container-page flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-center lg:gap-16 xl:gap-20">
        <VideoFacade
          videoId={featuredVideo.id}
          title={featuredVideo.title}
          className="reveal order-2 lg:order-none"
          coverTone="dark"
          cover={
            <span aria-hidden="true" className="absolute inset-0">
              <YouTubeThumbnail videoId={featuredVideo.id} />
              <span className="absolute inset-0 bg-espresso/30 transition-colors duration-200 group-hover:bg-espresso/40" />
              <span className="absolute left-1/2 top-1/2 flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-espresso shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform duration-200 motion-safe:group-hover:scale-105 lg:h-24 lg:w-24">
                <HiPlay className="ml-1 h-6 w-6 lg:h-8 lg:w-8" />
              </span>
              <span className="absolute bottom-5 left-6 hidden text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ivory md:block lg:bottom-6 lg:left-7">
                Vídeo · YouTube
              </span>
            </span>
          }
        />

        <div className="contents lg:flex lg:flex-col lg:gap-7">
          <div className="reveal order-1 flex flex-col gap-6 lg:order-none">
            <Eyebrow>Em destaque</Eyebrow>
            <h2
              id="destaque-title"
              className="heading-display text-[2.625rem] leading-[1.02] md:text-5xl lg:text-[3rem] xl:text-[3.5rem]"
            >
              {titleStart} <em className="italic">{titleEnd}</em>
            </h2>
          </div>

          <p className="order-3 text-base leading-[1.65] text-taupe lg:order-none lg:text-[1.0625rem]">
            {featuredVideo.text}
          </p>

          <WhatsappLink className="btn-pill btn-pill-dark order-4 lg:order-none lg:self-start">
            <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
            Agendar consulta
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
};

export default Featured;
