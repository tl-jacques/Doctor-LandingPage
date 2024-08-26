import React from "react";
import Image from "next/image";
import profileImage from "@/assets/instaProfileImg.png";
import { whatsappLink } from "@/constants";

const Footer = () => {
  return (
    <section className=" bg-color-dark flex flex-col items-center ">
      <div className="flex flex-col  items-center back p-[6rem] ">
        <button className="btn bg-[#6abc54] text-[#ffff] font-bold text-2xl backdrop-brightness-110 drop-shadow-[10px_15px_10px_#6bbc548a]">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Tenho Interesse
          </a>
        </button>

        <Image
          className="py-10"
          src={profileImage}
          alt="Instagram Dr Jorge Medeiros"
        />
        <div className=" flex flex-col items-center">
          <p className="font-bold text-xl text-[#ffff]">Sobral - BRASIL</p>
          <p className=" text-lg text-[#ffff]">
            (Clínica Arte de Cuidar) Av. Gerardo Rangel, 436 - Derby Clube,
            Sobral - CE, 62041-380
          </p>
          <p className="text-xl text-[#ffff]">Agendamentos: (88) 99493-5841</p>
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
