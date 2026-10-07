import { HiArrowRight } from "react-icons/hi2";

import { questionsAndAnswer } from "@/constants";
import Accordion from "@/components/Accordion";
import Eyebrow from "@/components/Eyebrow";
import WhatsappLink from "@/components/WhatsappLink";

const FAQ = () => {
  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-title"
      className="bg-stone py-20 text-espresso lg:py-[7.5rem]"
    >
      {/* Mobile: título → perguntas → botão. Desktop: título e botão à esquerda, perguntas à direita. */}
      <div className="container-page flex flex-col gap-8 lg:grid lg:grid-cols-[22rem_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-16 xl:grid-cols-[25rem_minmax(0,1fr)] xl:gap-x-24">
        <div className="flex flex-col gap-5 lg:col-start-1 lg:row-start-1 lg:gap-6">
          <Eyebrow>Dúvidas</Eyebrow>
          <h2
            id="duvidas-title"
            className="heading-display text-[2.75rem] leading-none md:text-[3.5rem] xl:text-[4rem]"
          >
            Perguntas <em className="italic">frequentes</em>
          </h2>
          <p className="text-base leading-relaxed text-taupe lg:text-[1.0625rem]">
            Não encontrou o que procurava? Fale diretamente com a equipe pelo
            WhatsApp.
          </p>
        </div>

        <div className="border-t border-line-strong lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {questionsAndAnswer.map((item, index) => (
            <Accordion
              key={item.title}
              title={item.title}
              answer={item.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>

        <WhatsappLink className="btn-pill btn-pill-outline border-espresso lg:col-start-1 lg:row-start-2 lg:h-[3.25rem] lg:self-start lg:justify-self-start lg:px-6 lg:text-[0.9375rem]">
          Enviar uma pergunta
          <HiArrowRight aria-hidden="true" className="h-4 w-4" />
        </WhatsappLink>
      </div>
    </section>
  );
};

export default FAQ;
