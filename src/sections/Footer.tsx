import React from "react";
import Image from "next/image";
import profileImage from "@/assets/instaProfileImg.png";

const Footer = () => {
  return (
    <section className="pt-8 bg-[#AAADA6] flex flex-col items-center">
      <div className="flex flex-col  items-center back ">
        <button className="btn bg-[#6abc54] text-[#ffff] font-bold text-2xl backdrop-brightness-110 drop-shadow-[10px_15px_10px_#6bbc548a]">
          Tenho Interesse
        </button>

        <Image
          className="py-10"
          src={profileImage}
          alt="Instagram Dr Jorge Medeiros"
        />
        <div className="pb-20 flex flex-col items-center">
          <p className="font-bold text-xl text-[#ffff]">Sobral - BRASIL</p>
          <p className=" text-lg text-[#ffff]"> R. </p>
        </div>
      </div>
      <div className="bg-color-1 text-center w-full py-8">
        <h2 className="text-[#777]">
          2024 - Desenvolvido por{" "}
          <span className="font-bold "> Pacientes Todo Dia</span>
        </h2>
      </div>
    </section>
  );
};

export default Footer;
