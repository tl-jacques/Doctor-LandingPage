import Image from "next/image";
import { HiArrowRight, HiPlay } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

import { credentials } from "@/constants";
import { hero } from "@/constants/hero";
import Eyebrow from "@/components/Eyebrow";
import HapvidaBadge from "@/components/HapvidaBadge";
import WhatsappLink from "@/components/WhatsappLink";

// Topo da página (hero + credenciais). O menu fica no <header> da página.
const Hero = () => {
  const isCutout = hero.kind === "recorte";

  return (
    <div
      id="topo"
      className="bg-porcelain pb-[4.5rem] text-espresso lg:pb-[7.5rem]"
    >
      <section
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden lg:overflow-visible"
      >
        <div className="container-page lg:relative lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12 lg:pt-14 xl:gap-20">
          {/* Mobile: a foto ocupa o fundo do texto. Desktop: vira o arco ao lado do texto. */}
          <div
            data-hero-kind={hero.kind}
            className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-sand md:h-[40rem] lg:relative lg:inset-auto lg:z-auto lg:order-2 lg:h-[35rem] lg:w-[26rem] lg:bg-transparent xl:h-[45.25rem] xl:w-[33.75rem]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 hidden h-[91%] rounded-t-full bg-sand lg:block"
            />
            <div
              className={twMerge(
                "absolute inset-0",
                isCutout
                  ? // Recorte: o médico ultrapassa o topo do arco
                    "lg:inset-auto lg:-left-[2%] lg:bottom-0 lg:h-[98%] lg:w-[104%]"
                  : // Foto: recortada no formato do arco
                    "lg:inset-x-0 lg:top-auto lg:bottom-0 lg:h-[91%] lg:overflow-hidden lg:rounded-t-full",
              )}
            >
              <Image
                src={hero.image}
                alt={hero.alt}
                fill
                priority
                sizes={
                  isCutout
                    ? "(min-width: 1280px) 560px, (min-width: 1024px) 432px, 100vw"
                    : // Foto em paisagem preenchendo uma área em retrato: a largura
                      // desenhada é maior que a área visível
                      "(min-width: 1280px) 1180px, (min-width: 1024px) 910px, (min-width: 768px) 150vw, 235vw"
                }
                className="object-cover"
                style={{ objectPosition: hero.position }}
              />
            </div>
            {/* Véu claro que garante contraste do texto sobre a foto no mobile */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-porcelain/0 from-[28%] via-porcelain/90 via-[50%] to-porcelain to-[68%] lg:hidden"
            />
            <HapvidaBadge className="absolute -left-14 bottom-16 hidden w-[15.625rem] items-center gap-3.5 rounded-[1.125rem] bg-ivory px-5 py-[1.125rem] shadow-[0_18px_40px_rgba(30,25,21,0.12)] lg:flex" />
          </div>

          <div className="relative flex flex-col gap-6 pb-10 pt-[17rem] md:max-w-xl md:pt-[24rem] lg:max-w-none lg:gap-8 lg:self-center lg:pb-24 lg:pt-0">
            <Eyebrow>Dermatologista em Sobral · CE</Eyebrow>

            <h1
              id="hero-title"
              className="heading-display text-[3.125rem] md:text-[4.5rem] lg:text-[4rem] xl:text-[5.5rem]"
            >
              Dermatologia clínica, cirúrgica{" "}
              <em className="italic text-bronze">e estética.</em>
            </h1>

            <p className="text-[1.0625rem] leading-relaxed text-taupe md:text-xl lg:max-w-[32.5rem]">
              <strong className="font-semibold text-espresso">
                Sou Dr. Jorge Medeiros,
              </strong>{" "}
              médico dermatologista em Sobral, realizando consultas e cirurgias
              dermatológicas com cuidado individualizado.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:flex-col lg:items-start lg:pt-2 xl:flex-row">
              <WhatsappLink className="btn-pill btn-pill-dark lg:h-[3.75rem] lg:px-[1.875rem]">
                Agendar pelo WhatsApp
                <HiArrowRight
                  aria-hidden="true"
                  className="h-[1.125rem] w-[1.125rem]"
                />
              </WhatsappLink>
              <a
                href="#apresentacao"
                className="btn-pill btn-pill-outline bg-porcelain/80 pl-2.5 lg:h-[3.75rem] lg:bg-transparent lg:pr-[1.625rem]"
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-bronze text-ivory lg:h-10 lg:w-10"
                >
                  <HiPlay className="ml-0.5 h-3.5 w-3.5" />
                </span>
                Assistir apresentação
              </a>
            </div>

            <HapvidaBadge className="flex items-center gap-3 self-start rounded-2xl bg-ivory px-4 py-3 shadow-[0_12px_30px_rgba(30,25,21,0.10)] lg:hidden" />
          </div>
        </div>
      </section>

      <div className="container-page">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-6 border-y border-line py-6 lg:grid-cols-4 lg:gap-8 lg:py-8">
          {credentials.map((item) => (
            <div key={item.label} className="flex flex-col gap-1 lg:gap-1.5">
              <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-taupe lg:text-xs lg:tracking-[0.16em]">
                {item.label}
              </dt>
              <dd className="font-serif text-[1.3125rem] leading-tight lg:text-[1.625rem]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Hero;
