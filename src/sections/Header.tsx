import Image from "next/image";
import img1 from "@/assets/IMG_9800_1.jpg";
// import img1 from "@/assets/IMG_9800_1.jpg";
import imgNoBg from "@/assets/hero-no-bg.png";
import logo from "@/assets/logo_black.png";

import { FaWhatsapp } from "react-icons/fa";
import { IoArrowDownCircleSharp } from "react-icons/io5";

const Header = () => {
  return (
    <section className="w-full ">
      <div className="py-10 w-full h-full z-20 relative px-5 bg-[radial-gradient(ellipse_200%_150%_at_top_right,#34302B,#F3FBFE)] content-center overflow-clip md:py-2 lg:px-10">
        <div className="flex flex-col absolute -z-50 w-full left-32 bottom-[17rem] scale-[1.75] md:scale-100 md:bottom-[-20%] md:left-[38%] lg:scale-75 lg:bottom-[-55%] xl:scale-[0.6] xl:bottom-[-100%]  2xl:bottom-[-150%] min-[1800px]:scale-[0.4] min-[1800px]:left-[30%] min-[1800px]:bottom-[-180%]">
          <Image className="opacity-85" src={imgNoBg} alt="Imagem de fundo" />
        </div>
        <Image
          className="absolute w-32 top-14 md:ml-10 md:mt-5 md:mb-5 md:relative md:block md:top-0 md:w-32 lg:ml-20 "
          src={logo}
          alt="Logo"
        />
        <div className="z-40 mx-auto mt-52 backdrop-blur-md rounded-2xl px-8 py-8 w-full flex flex-col shadow-xl md:ml-10 md:max-w-[28rem] md:mt-0 md:mx-0 lg:ml-14 lg:max-w-xl xl:max-w-2xl xl:backdrop-blur-none xl:shadow-none ">
          <h1 className="font-extrabold text-[2.4rem] mb-10 text-center w-full h-auto leading-none md:text-left md:text-[3rem] ">
            Dr. Jorge Medeiros, dermatologia especializada
          </h1>
          <p className="text-xl mb-10 leading-snug font-medium md:text-xl  ">
            <span className="font-bold ">⁠Sou Dr. Jorge, </span>
            <br className="md:hidden" />
            Médico Dermatologista especialista em soluções eficientes realizando
            consultas e cirurgias dermatológicas em Sobral, será uma grande
            alegria lhe atender.
          </p>
          <button className="group/button btn btn-primary flex items-center justify-center gap-4 w-full shadow-md transition-[200ms] md:w-fit hover:cursor-pointer hover:opacity-90 hover:scale-105">
            AGENDAR CONSULTA
            <FaWhatsapp className="group-hover/button:text-green-500 w-6 h-6 self-center" />
          </button>
        </div>
        <div className="group/watch flex flex-col flex-1 mx-auto items-center mt-8 md:mt-10 xl:mt-20 xl:mb-2 hover:cursor-pointer transition-[200ms] hover:scale-105 ">
          <p className="font-extrabold text-2xl mb-1">
            CLIQUE E ASSITA O VÍDEO
          </p>
          <IoArrowDownCircleSharp className="transition-[200ms] group-hover/watch:translate-y-0.5 w-10 h-10 " />
        </div>
      </div>
    </section>
  );
};

export default Header;
