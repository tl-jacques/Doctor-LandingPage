import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <div className="bg-[#00BF29] over block w-fit p-3 rounded-xl bottom-[1rem] right-[1rem] m-2 mb-2 fixed float-end hover:cursor-pointer overfl">
      <FaWhatsapp className="text-[#ffff] w-12 h-12 self-center" />
    </div>
  );
};

export default WhatsappButton;
