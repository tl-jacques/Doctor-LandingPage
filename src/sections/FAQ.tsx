import Accordion from "@/components/Accordion";
import React from "react";
import { questionsAndAnswer } from "@/constants";

const FAQ = () => {
  return (
    <section className="baseSection items-center flex flex-col mx-auto bg-[url('../assets/faqBg.jpg')] bg-fixed bg-cover bg-[center_right] bg-no-repeat md:bg-[center_right_-5rem] lg:bg-[center_right_-3rem] min-[1540px]:bg-[center_right]  ">
      <div className="flex flex-col w-full items-center 2xl:max-w-[1440px] 2xl:items-start 2xl:pl-40">
        <h1 className="heading1 mb-12 text-center ">Perguntas Frequentes</h1>

        <div className=" flex flex-col gap-5 lg:max-w-[47rem] backdrop-blur-[8px] lg:backdrop-blur-[4px] md:max-w-[35rem]">
          {questionsAndAnswer.map((item, index) => (
            <Accordion title={item.title} answer={item.answer} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
