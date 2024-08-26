import React from "react";
import { whatsappLink, works } from "@/constants";

const Work = () => {
  return (
    <section className="baseSection flex flex-col items-center text-center bg-white ">
      <div className="mb-4 md:mb-4 lg:px-4">
        <h1 className="heading1 text-color-6 mb-4 lg:mb-8">
          Veja um pouco mais de como posso lhe ajudar
        </h1>
        <ul className="list-disc flex flex-col justify-between items-center font-extrabold text-color-6 text-lg w-full md:flex-row md:max-w-[30rem] mx-auto">
          <li>Cirurgias dermatológica</li>
          <li>Consultas dermatológicas</li>
        </ul>
      </div>
      <div className=" py-5">
        <div className=" flex flex-col gap-4 md:gap-10  2xl:gap-16 w-full">
          {works.map((item, index) => (
            <div
              className="w-full  py-8  rounded-xl mx-auto md:px-4 lg:max-w-[60rem] xl:max-w-[72rem] 2xl:max-w-[77rem] flex flex-col md:flex-row md:gap-5 even:md:flex-row-reverse odd:lg:mr-10 even:lg:ml-10 "
              key={index}
            >
              <div className="w-full py-3 md:rounded-lg md:border-2 md:border-color-2 md:p-1 md:h-fit">
                <iframe
                  src={item.videoUrl}
                  className="w-full h-[20rem] 2xl:h-[24rem] "
                  title="Dermatologia - Câncer de pele"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="md:max-w-[50%] my-auto lg:px-6 ">
                <h3 className="heading3 text-color-dark ">{item.title}</h3>
                <div className="gradientDivider my-2 md:my-4" />
                <p className="leading-snug text-pretty text-sm md:text-base ">
                  {item.text}
                </p>
                <button className="px-4 py-2 font-bold mt-5 text-color-dark bg-transparent border-2 border-color-dark rounded-xl w-fit shadow-md transition-[200ms] xl:mt-5 hover:cursor-pointer hover:opacity-90 hover:scale-105">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AGENDAR CONSULTA
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
