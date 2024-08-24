import React from "react";
import Image from "next/image";
import presentationImage from "@/assets/apresentacao.jpg";
const Curriculum = () => {
  return (
    <section className="baseSection w-full ">
      <div className="flex flex-col mx-auto items-center px-1 md:px-10 lg:px-5 lg:flex-row-reverse lg:gap-10 xl:max-w-[67rem] ">
        <Image
          src={presentationImage}
          alt="Fotografia Dr. Jorge Medeiros"
          className="w-full mb-8 rounded-md  md:w-[25rem] lg:my-auto"
        />
        <div className=" ">
          <div className="flex flex-col mb-10">
            <span className=" font-bold text-color-2 mb-1">
              CRM/CE 21881 | RQE 16115
            </span>
            <h1 className="heading1 text-color-6  text-left">
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
            {/* <br />
            <br />
            Ele se formou em Medicina pela Unifacid, onde desenvolveu uma base
            sólida de conhecimentos médicos e iniciou sua jornada na área da
            saúde.
            <br />
            <br />
            Dando continuidade ao seu aprimoramento profissional, Dr. Jorge
            completou sua residência médica em Dermatologia na renomada
            Universidade Federal do Ceará, uma das instituições mais respeitadas
            do país na área da dermatologia. Sua dedicação à especialidade é
            ainda mais evidenciada pelo fato de ser Membro Titular da Sociedade
            Brasileira de Dermatologia, uma das mais prestigiadas associações
            médicas do Brasil, que reúne os melhores dermatologistas do país.
            Essa titulação atesta não apenas sua qualificação técnica, mas
            também seu compromisso contínuo com a atualização profissional e a
            prática de uma medicina dermatológica ética e baseada em evidências.
            <br />
            <br />
            Com um currículo robusto e uma prática focada no cuidado
            individualizado, Dr. Jorge Medeiros oferece consultas especializadas
            em condições como acne, psoríase, melasma e dermatite atópica, além
            de realizar cirurgias dermatológicas para tratamento de câncer de
            pele e remoção de sinais. Sua atuação é marcada por uma abordagem
            que une conhecimento técnico avançado e uma atenção cuidadosa às
            necessidades de seus pacientes. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
