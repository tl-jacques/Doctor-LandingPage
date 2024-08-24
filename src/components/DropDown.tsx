"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface DropDownProps {
  title: string;
  text: string;
}
const DropDown: React.FC<DropDownProps> = ({ title, text }) => {
  const [questionOpen, setQuestionOpen] = useState(false);

  return (
    <div>
      <li className="w-auto" onClick={() => setQuestionOpen(!questionOpen)}>
        <div className="flex flex-col gap-4 w-auto backdrop-blur-lg items-center text-balance p-4 shadow-lg rounded-2xl ">
          <div className="">
            <div className="flex justify-center items-center gap-1 ">
              <span className="font-bold text-lg leading-tight text-center">
                {title}
              </span>
              <IoIosArrowDown
                className={`w-5 h-5 transform origin-center transition duration-200 ease-out ${
                  questionOpen && "!rotate-180"
                }`}
              />
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                questionOpen
                  ? "grid-rows-[1fr] opacity-100 mt-2"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="overflow-hidden w-full h-0.5 bg-gradient-to-r from-[#f3fbfe00] from-0% via-[#34302B] via-50% to-[#f3fbfe00] to-100% my-2" />
                <span className="overflow-hidden text-justify text-pretty text-base">
                  {text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default DropDown;
