import { HiArrowRight, HiPlay } from "react-icons/hi2";

import { services, works } from "@/constants";
import Eyebrow from "@/components/Eyebrow";
import VideoFacade from "@/components/VideoFacade";
import WhatsappLink from "@/components/WhatsappLink";

// Tons de areia das capas, do mais claro ao mais escuro (um por card)
const coverTones = ["bg-sand", "bg-[#D9CDBE]", "bg-[#CEC3B6]"];

const Work = () => {
  return (
    <section
      id="videos"
      aria-labelledby="videos-title"
      className="bg-ivory py-20 text-espresso lg:py-[7.5rem]"
    >
      <div className="container-page flex flex-col gap-10 lg:gap-16">
        <div className="flex flex-col gap-[1.125rem] lg:items-center lg:gap-5 lg:text-center">
          <Eyebrow centerOnDesktop>Como posso ajudar</Eyebrow>
          <h2
            id="videos-title"
            className="heading-display max-w-[51.25rem] text-[2.75rem] leading-none md:text-[3.5rem] xl:text-[4rem]"
          >
            Veja um pouco mais de{" "}
            <em className="italic">como posso lhe ajudar</em>
          </h2>
          <ul className="flex flex-wrap gap-2 lg:justify-center lg:gap-3 lg:pt-2">
            {services.map((service) => (
              <li
                key={service}
                className="flex h-9 items-center rounded-full border border-line-strong px-3.5 text-[0.8125rem] font-semibold lg:h-10 lg:px-[1.125rem] lg:text-sm"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-8">
          {works.map((item, index) => (
            <article
              key={item.videoId}
              className="flex flex-col gap-[1.125rem] md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 lg:flex lg:gap-6"
            >
              <VideoFacade
                videoId={item.videoId}
                title={item.title}
                className="rounded-[1.125rem] bg-transparent md:row-span-2 md:self-center lg:rounded-[1.25rem]"
                cover={
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 ${coverTones[index % coverTones.length]}`}
                  >
                    <span className="absolute left-[1.375rem] top-2.5 font-serif text-8xl italic leading-none text-espresso/15 lg:left-7 lg:top-3 lg:text-6xl xl:top-4 xl:text-[6.5rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute bottom-5 left-[1.375rem] flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-porcelain transition-transform duration-200 motion-safe:group-hover:scale-105 lg:left-7 xl:bottom-[1.625rem] xl:h-16 xl:w-16">
                      <HiPlay className="ml-0.5 h-5 w-5" />
                    </span>
                    <span className="absolute bottom-[2.375rem] right-[1.375rem] text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#3E3731] lg:bottom-11 lg:right-7 lg:text-xs lg:tracking-[0.16em]">
                      Vídeo · YouTube
                    </span>
                  </span>
                }
              />
              <div className="flex flex-col gap-2.5 md:self-end lg:self-auto lg:gap-3.5">
                <h3 className="font-serif text-[1.875rem] leading-[1.05] lg:text-[2.125rem]">
                  {item.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-taupe lg:leading-[1.65]">
                  {item.text}
                </p>
              </div>
              <WhatsappLink className="mt-auto inline-flex items-center gap-2.5 self-start md:mt-0 lg:mt-auto border-b border-espresso py-3 text-[0.9375rem] font-semibold transition-colors hover:border-bronze hover:text-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso">
                Agendar consulta
                <HiArrowRight aria-hidden="true" className="h-4 w-4" />
              </WhatsappLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
