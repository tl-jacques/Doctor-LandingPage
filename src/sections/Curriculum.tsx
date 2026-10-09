import Image from "next/image";
import {
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice2,
  HiOutlineCheckBadge,
} from "react-icons/hi2";

import portrait from "@/assets/apresentacao.jpg";
import { education } from "@/constants";
import Eyebrow from "@/components/Eyebrow";
import HapvidaBadge from "@/components/HapvidaBadge";

const educationIcons = {
  graduacao: HiOutlineAcademicCap,
  residencia: HiOutlineBuildingOffice2,
  sociedade: HiOutlineCheckBadge,
} as const;

const Curriculum = () => {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="bg-porcelain py-20 text-espresso lg:py-32"
    >
      <div className="container-page flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
        <div className="reveal relative lg:w-[26rem] lg:shrink-0 xl:w-[31.25rem]">
          <Image
            src={portrait}
            alt="Dr. Jorge Medeiros de jaleco, com os braços cruzados"
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 416px, 100vw"
            className="aspect-[25/32] w-full rounded-[1.25rem] object-cover object-[center_20%] md:aspect-[4/5] lg:aspect-[25/34] lg:rounded-3xl"
          />
          {/* Repete a informação da lista de formação; fica oculto para leitores de tela */}
          <div
            aria-hidden="true"
            className="absolute right-4 top-4 flex h-[5.75rem] w-[5.75rem] flex-col items-center justify-center gap-0.5 rounded-full bg-bronze text-center text-ivory lg:-right-9 lg:top-12 lg:h-[7.5rem] lg:w-[7.5rem]"
          >
            <span className="font-serif text-[1.625rem] leading-none lg:text-[2rem]">
              SBD
            </span>
            <span className="max-w-[4.5rem] text-[0.5625rem] font-semibold uppercase leading-tight tracking-[0.12em] lg:text-[0.625rem]">
              Membro titular
            </span>
          </div>
        </div>

        <div className="reveal flex flex-col gap-6 lg:gap-7 lg:pt-6">
          <Eyebrow>CRM/CE 21881 · RQE 16115</Eyebrow>
          <h2
            id="sobre-title"
            className="heading-display text-[2.75rem] leading-none md:text-[3.5rem] xl:text-[4rem]"
          >
            Dr. Jorge Medeiros,{" "}
            <em className="italic">médico dermatologista</em>
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-[1.7] text-taupe lg:text-[1.0625rem]">
              Formado em Medicina pela Unifacid, iniciou sua carreira com uma
              base sólida de conhecimentos, aprimorada durante a{" "}
              <strong className="font-semibold text-espresso">
                residência em Dermatologia na Universidade Federal do Ceará.
              </strong>
            </p>
            <p className="text-base leading-[1.7] text-taupe lg:text-[1.0625rem]">
              Como{" "}
              <strong className="font-semibold text-espresso">
                Membro Titular da Sociedade Brasileira de Dermatologia
              </strong>
              , evidencia seu compromisso com a atualização contínua e com uma
              medicina ética e baseada em evidências — combinando conhecimento
              técnico avançado com atenção às necessidades de cada paciente.
            </p>
          </div>

          <ul className="flex flex-col border-t border-line">
            {education.map((item) => {
              const Icon =
                educationIcons[item.icon as keyof typeof educationIcons];
              return (
                <li
                  key={item.title}
                  className="flex items-center gap-4 border-b border-line py-[1.125rem] lg:gap-5 lg:py-5"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[0.9375rem] font-semibold lg:text-base">
                      {item.title}
                    </span>
                    <span className="text-[0.8125rem] text-taupe lg:text-sm">
                      {item.detail}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>

          <HapvidaBadge className="flex items-center gap-3.5 rounded-2xl bg-ivory px-[1.125rem] py-4 lg:self-start lg:px-6 lg:py-5" />
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
