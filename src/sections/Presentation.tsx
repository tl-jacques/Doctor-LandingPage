import { HiArrowRight } from "react-icons/hi2";

import posterImage from "@/assets/faqBg.jpg";
import { presentationVideo } from "@/constants";
import Eyebrow from "@/components/Eyebrow";
import VideoFacade from "@/components/VideoFacade";
import WhatsappLink from "@/components/WhatsappLink";

const Presentation = () => {
  return (
    <section
      id="apresentacao"
      aria-labelledby="apresentacao-title"
      className="bg-espresso py-[4.5rem] text-cream lg:py-[7.5rem]"
    >
      {/* Mobile: título → vídeo → texto. Desktop: vídeo à esquerda, texto à direita. */}
      <div className="container-page flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-center lg:gap-16 xl:gap-20">
        <VideoFacade
          videoId={presentationVideo.id}
          title={presentationVideo.title}
          poster={posterImage}
          label="Apresentação"
          className="reveal order-2 lg:order-none"
        />

        <div className="contents lg:flex lg:flex-col lg:gap-7">
          <div className="reveal order-1 flex flex-col gap-6 lg:order-none">
            <Eyebrow tone="dark">Apresentação</Eyebrow>
            <h2
              id="apresentacao-title"
              className="heading-display text-[2.625rem] leading-[1.02] md:text-5xl lg:text-[3rem] xl:text-[3.5rem]"
            >
              Referência em dermatologia{" "}
              <em className="italic text-bronze-light">em Sobral.</em>
            </h2>
          </div>

          <p className="order-3 text-base leading-[1.65] text-mist lg:order-none lg:text-[1.0625rem]">
            Especializado no tratamento de{" "}
            <span className="text-cream">
              acne, psoríase, melasma e dermatite atópica
            </span>
            , o Dr. Jorge oferece cuidados personalizados para a saúde da pele —
            e realiza{" "}
            <span className="text-cream">
              cirurgias dermatológicas para câncer de pele e remoção de sinais
            </span>
            , sempre com foco na segurança do paciente.
          </p>

          <WhatsappLink className="btn-pill btn-pill-light order-4 lg:order-none lg:self-start">
            Agendar consulta
            <HiArrowRight
              aria-hidden="true"
              className="h-[1.125rem] w-[1.125rem]"
            />
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
