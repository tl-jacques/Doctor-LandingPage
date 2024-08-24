import Accordion from "@/components/Accordion";
import React from "react";
import { questionsAndAnswer } from "@/constants";
const FAQ = () => {
  return (
    <section className="baseSection lg:max-w-[70rem] items-center flex flex-col mx-auto">
      <h1 className="heading1 mb-10">Perguntas Frequentes</h1>
      <div className=" flex flex-col gap-5 lg:max-w-[60rem]">
        {questionsAndAnswer.map((item, index) => (
          <Accordion
            title={item.title}
            answer={item.answer}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
