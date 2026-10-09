"use client";

import { Fragment, useId, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

import { mainComplains } from "@/constants";
import Eyebrow from "@/components/Eyebrow";
import WhatsappLink from "@/components/WhatsappLink";

const COLUMNS_MOBILE = 2;

// Posição na grade do mobile: cards nas posições pares e o painel aberto logo
// depois da linha do card escolhido (posição ímpar), ocupando as duas colunas.
const cardOrder = (index: number) => index * 2;
const panelOrder = (index: number) => {
  const lastInRow = Math.min(
    index - (index % COLUMNS_MOBILE) + COLUMNS_MOBILE - 1,
    mainComplains.length - 1,
  );
  return lastInRow * 2 + 1;
};

const number = (index: number) => String(index + 1).padStart(2, "0");

const Complains = () => {
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <section
      id="principais-queixas"
      aria-labelledby="queixas-title"
      className="bg-porcelain pb-[4.5rem] pt-20 text-espresso lg:pb-[7.5rem] lg:pt-32"
    >
      <div className="container-page flex flex-col gap-10 lg:gap-16">
        <div className="reveal flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <div className="flex flex-col gap-5">
            <Eyebrow>Tratamentos</Eyebrow>
            <h2
              id="queixas-title"
              className="heading-display max-w-[40rem] text-[2.75rem] leading-none md:text-[3.5rem] xl:text-[4rem]"
            >
              Principais queixas <em className="italic">dos meus pacientes</em>
            </h2>
          </div>
          <p className="max-w-[25rem] text-base leading-relaxed text-taupe lg:text-[1.0625rem]">
            Cada pele tem uma história. Escolha uma condição para saber mais —
            todas têm tratamento e acompanhamento.
          </p>
        </div>

        {/*
          Mobile: cards em 2 colunas; a explicação abre logo abaixo da linha do card.
          Desktop: cards à esquerda e a explicação ao lado, ocupando a altura da grade.
          Todos os textos ficam no HTML (só o escolhido aparece), para leitores e buscadores.
        */}
        <div className="reveal grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-4">
          {mainComplains.map((item, index) => {
            const selected = index === active;
            // cada painel vem logo depois do seu card no HTML: o foco do teclado
            // passa pelo "Agendar consulta" do painel aberto antes do próximo card
            return (
              <Fragment key={item.title}>
                <button
                  type="button"
                  id={`${id}-queixa-${index}`}
                  aria-expanded={selected}
                  aria-controls={`${id}-painel-${index}`}
                  onClick={() => setActive(index)}
                  style={{ order: cardOrder(index) }}
                  className={twMerge(
                    "group flex min-h-[5.5rem] flex-col items-start justify-between gap-3 rounded-2xl border px-4 py-4 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso md:px-5 lg:min-h-[6rem] lg:px-6 lg:py-5",
                    selected
                      ? "border-espresso bg-espresso text-porcelain"
                      : "border-line bg-ivory text-espresso hover:border-espresso",
                  )}
                >
                  <span className="flex w-full items-center justify-between">
                    <span
                      aria-hidden="true"
                      className={twMerge(
                        "text-xs font-semibold tracking-[0.08em]",
                        selected ? "text-bronze-light" : "text-bronze",
                      )}
                    >
                      {number(index)}
                    </span>
                    <HiArrowRight
                      aria-hidden="true"
                      className={twMerge(
                        "h-4 w-4 rotate-90 transition-[opacity,transform] duration-200 lg:rotate-0",
                        selected
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-40",
                      )}
                    />
                  </span>
                  <span className="font-serif text-[1.375rem] leading-[1.05] md:text-[1.5rem] xl:text-[1.75rem]">
                    {item.title}
                  </span>
                </button>
                <div
                  id={`${id}-painel-${index}`}
                  role="region"
                  aria-labelledby={`${id}-queixa-${index}`}
                  hidden={index !== active}
                  style={{ order: panelOrder(index) }}
                  className="panel-in col-span-2 rounded-[1.25rem] border border-line bg-ivory lg:col-span-1 lg:col-start-3 lg:row-span-5 lg:row-start-1"
                >
                  <div className="flex h-full flex-col gap-4 p-6 lg:gap-5 lg:p-10">
                    <span
                      aria-hidden="true"
                      className="hidden font-serif text-[6.5rem] italic leading-none text-espresso/10 lg:block"
                    >
                      {number(index)}
                    </span>
                    <h3 className="font-serif text-[1.875rem] leading-[1.05] lg:mt-auto lg:text-[2.75rem]">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-taupe lg:text-[1.0625rem]">
                      {item.text}
                    </p>
                    <WhatsappLink className="inline-flex items-center gap-2.5 self-start border-b border-espresso py-3 text-[0.9375rem] font-semibold transition-colors hover:border-bronze hover:text-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso">
                      Agendar consulta
                      <HiArrowRight aria-hidden="true" className="h-4 w-4" />
                    </WhatsappLink>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Complains;
