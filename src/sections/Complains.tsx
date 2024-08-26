import React from "react";
import { mainComplains } from "@/constants/index";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "@/components/DropDown";

const Complains = () => {
  return (
    <section
      className="baseSection flex flex-col mx-auto items-center text-center md:px-10 lg:px-20 lg:max-w-[70rem]"
      id="principais-queixas"
    >
      <h1 className="heading1 text-color-6">
        Principais queixas dos meus pacientes
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-7 py-10 2xl:gap-x-12 ">
        {mainComplains.map((item, index) => (
          <DropDown title={item.title} text={item.text} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Complains;
