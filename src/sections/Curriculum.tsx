import React from "react";
import Image from "next/image";
import presentationImage from "@/assets/apresentacao.jpg";
import logoHapVida from "@/assets/logo-hapvida-2048.png";

const Curriculum = () => {
  return (
    <section className="baseSection  w-full px-5 md:px-10 lg:px-5 xl:max-w-[67rem] mx-auto lg:!pb-[4rem]">
      <div className="flex flex-col mx-auto items-center  lg:flex-row-reverse lg:gap-10 ">
        <Image
          src={presentationImage}
          alt="Fotografia Dr. Jorge Medeiros"
          className="w-full mb-8 rounded-md  md:w-[25rem] lg:my-auto"
        />
        <div className=" ">
          <div className="flex flex-col mb-10">
            <span className=" font-bold text-color-secondary mb-1">
              CRM/CE 21881 | RQE 16115
            </span>
            <h1 className="heading1 text-color-dark  text-left">
              Dr. Jorge Medeiros, Médico Dermatologista
            </h1>
          </div>
          <p className="leading-snug">
            <span className="font-bold">Dr. Jorge Medeiros </span>é um
            dermatologista altamente qualificado e dedicado a oferecer o melhor
            cuidado para a sua pele em Sobral, Ceará. Formado em Medicina pela
            Unifacid, ele iniciou sua carreira na área da saúde com uma base
            sólida de conhecimentos, que aprimorou durante sua
            <span className="font-bold">
              residência em Dermatologia na renomada Universidade Federal do{" "}
            </span>
            Ceará.
            <br />
            <br />
            <span className="font-bold">
              Como Membro Titular da Sociedade Brasileira de Dermatologia, uma
              das mais prestigiadas associações médicas do Brasil, que reúne os
              melhores dermatologistas do país, Dr. Jorge{" "}
            </span>
            evidencia seu compromisso com a atualização contínua e a prática de
            uma medicina ética e baseada em evidências. Essa titulação reflete
            sua excelência técnica e dedicação à especialidade. Dr. Jorge
            Medeiros oferece consultas especializadas para condições como acne,
            psoríase, melasma e dermatite atópica, além de realizar cirurgias
            dermatológicas para tratamento de câncer de pele e remoção de
            sinais.
            <br />
            <br />
            Seu currículo robusto e uma abordagem que combina conhecimento
            técnico avançado com um cuidado atento às necessidades de cada
            paciente. Jorge Medeiros é um dermatologista altamente qualificado e
            experiente, comprometido em proporcionar o melhor cuidado para seus
            pacientes em Sobral, Ceará.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Image
          className="w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem] lg"
          src={logoHapVida}
          alt="Logo Hapvida"
        />
        <h3 className="heading3 text-color-dark text-sm text-right">
          Atendimento Particular e
          <br />
          pelo convênio Hapvida
        </h3>
      </div>
    </section>
  );
};

export default Curriculum;
