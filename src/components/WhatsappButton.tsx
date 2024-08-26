import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/constants";

const WhatsappButton = () => {
  return (
    <div className="bg-[#00BF29] over block w-fit p-3 rounded-xl bottom-[1rem] right-[1rem] m-2 mb-2 fixed float-end hover:cursor-pointer overflow-auto">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-[#ffff] w-12 h-12 self-center" />
      </a>
    </div>
  );
};

export default WhatsappButton;
