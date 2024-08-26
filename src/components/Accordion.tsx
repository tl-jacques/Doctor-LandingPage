"use client";
import { useState } from "react";

interface AccordionProps {
  title: string;
  answer: string;
}
const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [questionOpen, setQuestionOpen] = useState(false);

  return (
    <div className="px-4 py-3 block border-b-[1px] border-color-2  ">
      <button
        className="flex w-full items-center gap-5 text-center"
        onClick={() => setQuestionOpen(!questionOpen)}
      >
        <svg
          className="fill-color-6 shrink-0 "
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              questionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              questionOpen && "!rotate-180"
            }`}
          />
        </svg>

        <h3 className="text-lg font-bold text-left">{title}</h3>
      </button>
      <div
        onClick={() => setQuestionOpen(!questionOpen)}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${
          questionOpen
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : " grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="text-left overflow-hidden text-lg leading-snug font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
