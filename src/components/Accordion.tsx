"use client";

import { useId, useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

interface AccordionProps {
  title: string;
  answer: string;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  answer,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const buttonId = `${id}-pergunta`;
  const panelId = `${id}-resposta`;

  return (
    <div className="border-b border-line-strong">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="group flex w-full items-center justify-between gap-4 py-[1.375rem] text-left text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso lg:gap-6 lg:py-7"
        >
          <span className="text-[1.0625rem] font-medium leading-snug lg:text-xl">
            {title}
          </span>
          <span
            aria-hidden="true"
            className={twMerge(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-espresso transition-colors duration-200 lg:h-10 lg:w-10",
              open ? "bg-espresso text-porcelain" : "group-hover:bg-espresso/5",
            )}
          >
            <HiPlus
              className={twMerge(
                "h-4 w-4 transition-transform duration-200",
                open && "rotate-45",
              )}
            />
          </span>
        </button>
      </h3>
      {/* grid-rows anima a altura; fechado, a resposta sai da árvore de acessibilidade */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        className={twMerge(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-[1.375rem] text-[0.9375rem] leading-[1.7] text-taupe lg:pb-7 lg:pr-16 lg:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
