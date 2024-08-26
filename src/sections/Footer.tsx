import React from "react";
import Image from "next/image";
import profileImage from "@/assets/instaProfileImg.png";
import { whatsappLink, instagramLink } from "@/constants";

const Footer = () => {
  return (
    <section className=" bg-color-dark flex flex-col items-center ">
      <div className="flex flex-col  items-center back px-[2rem] py-[4rem] md:p-[6rem] ">
        <button className="btn bg-[#6abc54] text-[#ffff] font-bold text-2xl backdrop-brightness-110 drop-shadow-[10px_10px_10px_#6bbc548a] !px-20">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Tenho Interesse
          </a>
        </button>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <Image
            className="py-12"
            src={profileImage}
            alt="Instagram Dr Jorge Medeiros"
          />
        </a>
        <div className=" flex flex-col items-center text-center">
          <p className="font-bold text-xl text-[#ffff] mb-2">Sobral - BRASIL</p>
          <a
            href="https://maps.app.goo.gl/8j4S6hiJK7g8fgbW6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className=" text-lg text-[#ffff] mb-4">
              (Clínica Arte de Cuidar) Av. Gerardo Rangel, 436 - Derby Clube,
              Sobral - CE, 62041-380
            </p>
          </a>
          <p className="text-xl text-[#ffff]">
            Agendamentos:
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              {" "}
              (88) 99493-5841
            </a>
          </p>
        </div>
      </div>
      <div className="bg-color-1 text-center w-full py-8">
        <h2 className="text-[#777]">
          <a
            href={"https://pacientestododia.com.br/ "}
            target="_blank"
            rel="noopener noreferrer"
          >
            2024 - Desenvolvido por{" "}
            <span className="font-bold "> Pacientes Todo Dia</span>
          </a>
        </h2>
      </div>
    </section>
  );
};

export default Footer;
