"client component";
import Image from "next/image";

import imgNoBg from "@/assets/drjorge-semfundo.png";
import logo from "@/assets/logo_black.png";

import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { whatsappLink } from "@/constants";
import Link from "next/link";

const Header = () => {
  return (
    <section className="w-full ">
      <div className="py-5 w-full h-full z-20 relative px-5 bg-[radial-gradient(ellipse_200%_150%_at_top_right,#34302B,#F3FBFE)] content-center overflow-clip md:py-2 lg:px-10">
        <div className="flex flex-col absolute -z-50 w-full bottom-[12rem] scale-[1.75] max-[390px]:bottom-[15rem] max-[390px]:scale-[1.97] md:scale-[0.9] md:bottom-[-7%] md:left-[24%] lg:scale-[0.6] lg:bottom-[-50%] min-[1200px]:bottom-[-65%] xl:scale-[0.5] xl:bottom-[-70%] xl:left-[25%]  min-[1400px]:bottom-[-85%] 2xl:bottom-[-95%] min-[1620px]:bottom-[-110%] min-[1720px]:bottom-[-120%] min-[1780px]:scale-[0.4] min-[1800px]:left-[30%]  min-[1950px]:bottom-[-136%] min-[2075px]:bottom-[-147%] min-[2560px]:bottom-[-150%]">
          <Image className="opacity-85" src={imgNoBg} alt="Imagem de fundo" />
        </div>
        <Image
          className="mt-5 w-32 md:ml-10 md:mt-5 md:mb-5 md:relative md:block md:top-0 md:w-32 lg:ml-20 "
          src={logo}
          alt="Logo"
        />
        <div className="z-40 mx-auto mt-20 backdrop-blur-md rounded-2xl px-8 py-8 w-full flex flex-col shadow-xl  md:ml-10 md:max-w-[28rem] md:mt-0 md:mx-0 lg:ml-14 lg:max-w-xl xl:max-w-2xl xl:backdrop-blur-none xl:shadow-none ">
          <h1 className="font-extrabold text-[2.4rem] mb-10 text-left w-full h-auto leading-none md:text-left md:text-[3rem] ">
            Dr. Jorge Medeiros Dermatologia Clínica, Cirúrgica E Estética
          </h1>
          <p className="text-xl mb-10 leading-snug font-medium md:text-xl  text-balance ">
            <span className="font-bold">⁠Sou Dr. Jorge, </span>
            <br className="md:hidden" />
            Médico Dermatologista em Sobral realizando consultas e cirurgias
            dermatológicas.
          </p>

          <button className="group/button btn btn-primary flex items-center justify-center gap-4 w-full shadow-md transition-[200ms] md:w-fit hover:cursor-pointer hover:opacity-90 hover:scale-105">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              AGENDAR CONSULTA
            </a>
            <FaWhatsapp className="group-hover/button:text-green-500 w-6 h-6 self-center" />
          </button>
        </div>
        <a
          className="scroll-smooth group/watch flex flex-col flex-1 mx-auto items-center mt-8 md:mt-10 xl:mt-16 xl:mb-2 hover:cursor-pointer transition-[200ms] hover:scale-105"
          href={"#apresentacao"}
        >
          <p className="font-extrabold text-[1.3rem] mb-1 tracking-tighter">
            CLIQUE E ASSITA O VÍDEO
          </p>
          <IoIosArrowDropdown className="transition-[200ms] group-hover/watch:translate-y-0.5 w-10 h-10 " />
        </a>
      </div>
    </section>
  );
};

export default Header;
